import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  const body=await request.json().catch(()=>null);
  if(!body?.bookingId || !body?.approvedAmount || !body?.currency){return NextResponse.json({ok:false,error:"bookingId, approvedAmount and currency are required"},{status:400});}
  if(body.staffApproved!==true){return NextResponse.json({ok:false,error:"Staff approval is required before checkout creation."},{status:403});}
  // Provider adapter goes here after Duches supplies its verified Stripe/Paystack account credentials.
  return NextResponse.json({ok:true,status:"provider_not_connected",bookingId:body.bookingId,amount:body.approvedAmount,currency:body.currency});
}
