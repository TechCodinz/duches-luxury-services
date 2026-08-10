import { NextRequest, NextResponse } from "next/server";
import { db, isDatabaseConfigured } from "../../../../../lib/db";
import { createFlutterwaveCheckout, getBankAccounts, type PaymentProvider } from "../../../../../lib/payments";

async function findInvoice(reference:string,email:string){
  const sql=db();
  const rows=await sql`select i.id,i.reference,i.amount,i.currency,i.status,i.booking_id,c.full_name,c.email,c.phone from invoices i join clients c on c.id=i.client_id where i.reference=${reference} and lower(c.email)=lower(${email}) limit 1`;
  return rows[0];
}

export async function GET(request:NextRequest,{params}:{params:Promise<{reference:string}>}){
  if(!isDatabaseConfigured())return NextResponse.json({ok:true,mode:"demo",invoice:null,accounts:[]});
  const {reference}=await params;const email=request.nextUrl.searchParams.get("email")||"";
  if(!email)return NextResponse.json({ok:false,error:"Email is required"},{status:400});
  const invoice=await findInvoice(reference,email);if(!invoice)return NextResponse.json({ok:false,error:"Invoice not found"},{status:404});
  const accounts=(await getBankAccounts()).filter(a=>a.enabled&&a.currency===invoice.currency);
  return NextResponse.json({ok:true,mode:"live",invoice:{reference:invoice.reference,amount:invoice.amount,currency:invoice.currency,status:invoice.status,clientName:invoice.full_name},accounts});
}

export async function POST(request:NextRequest,{params}:{params:Promise<{reference:string}>}){
  if(!isDatabaseConfigured())return NextResponse.json({ok:false,error:"Payments database is not connected."},{status:503});
  const {reference}=await params;const body=await request.json().catch(()=>null);const email=String(body?.email||"");const provider=String(body?.provider||"flutterwave") as PaymentProvider;
  if(!email)return NextResponse.json({ok:false,error:"Email is required"},{status:400});
  const invoice=await findInvoice(reference,email);if(!invoice)return NextResponse.json({ok:false,error:"Invoice not found"},{status:404});
  if(invoice.status==='paid')return NextResponse.json({ok:true,status:"already_paid"});
  if(provider==='bank_transfer'){
    const accounts=(await getBankAccounts()).filter(a=>a.enabled&&a.currency===invoice.currency);
    return NextResponse.json({ok:true,provider,status:accounts.length?"awaiting_transfer":"bank_details_not_configured",accounts,invoice:{reference:invoice.reference,amount:invoice.amount,currency:invoice.currency}});
  }
  if(provider==='flutterwave'){
    const origin=process.env.NEXT_PUBLIC_SITE_URL||request.nextUrl.origin;const txRef=`DCH-FLW-${invoice.reference}-${Date.now()}`;
    const checkout=await createFlutterwaveCheckout({reference:txRef,amount:Number(invoice.amount),currency:invoice.currency,email:invoice.email,name:invoice.full_name||"Duches Client",phone:invoice.phone||undefined,redirectUrl:`${origin}/client/payments/${encodeURIComponent(invoice.reference)}?status=return`});
    if(!checkout.configured)return NextResponse.json({ok:true,provider,status:"provider_not_connected"});
    const sql=db();await sql`insert into payment_attempts(invoice_id,provider,provider_reference,status,amount,currency,checkout_url,metadata) values(${invoice.id},'flutterwave',${txRef},'pending',${invoice.amount},${invoice.currency},${checkout.url},${JSON.stringify({invoiceReference:invoice.reference,clientEmail:email})}::jsonb)`;
    return NextResponse.json({ok:true,provider,status:"checkout_ready",checkoutUrl:checkout.url});
  }
  return NextResponse.json({ok:true,provider,status:"provider_adapter_ready_but_not_connected"});
}
