import { createHash } from "node:crypto";
import { db, isDatabaseConfigured } from "./db";

export type PaymentProvider="paystack"|"flutterwave"|"stripe"|"bank_transfer";
export type BankAccount={id:string;bankName:string;accountName:string;accountNumber:string;currency:string;instructions?:string;enabled:boolean};

export async function getBankAccounts():Promise<BankAccount[]>{
  if(!isDatabaseConfigured()) return [];
  const sql=db();const rows=await sql`select value from business_settings where key='payment_bank_accounts' limit 1`;
  return Array.isArray(rows[0]?.value)?rows[0].value as BankAccount[]:[];
}
export async function saveBankAccounts(accounts:BankAccount[],updatedBy:string){const sql=db();await sql`insert into business_settings(key,value,updated_by,updated_at) values('payment_bank_accounts',${JSON.stringify(accounts)}::jsonb,${updatedBy},now()) on conflict(key) do update set value=excluded.value,updated_by=excluded.updated_by,updated_at=now()`;}

export async function createFlutterwaveCheckout(input:{reference:string;amount:number;currency:string;email:string;name:string;phone?:string;redirectUrl:string}){
  const key=process.env.FLW_SECRET_KEY;if(!key)return {configured:false as const};
  const secretHash=createHash("sha256").update(key).digest("hex");
  const payloadHash=createHash("sha256").update(`${input.amount}${input.currency}${input.email}${input.reference}${secretHash}`).digest("hex");
  const response=await fetch("https://api.flutterwave.com/v3/payments",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({tx_ref:input.reference,amount:input.amount,currency:input.currency,redirect_url:input.redirectUrl,customer:{email:input.email,name:input.name,phonenumber:input.phone},customizations:{title:"Duches Luxury Services",description:`Payment ${input.reference}`},payment_options:"card, banktransfer, ussd, account, opay",payload_hash:payloadHash})});
  const data=await response.json();if(!response.ok||data?.status!=="success"||!data?.data?.link)throw new Error(data?.message||"Flutterwave checkout creation failed");return {configured:true as const,url:data.data.link as string};
}
export async function verifyFlutterwaveTransaction(transactionId:string|number){const key=process.env.FLW_SECRET_KEY;if(!key)throw new Error("Flutterwave not configured");const response=await fetch(`https://api.flutterwave.com/v3/transactions/${transactionId}/verify`,{headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"}});const data=await response.json();if(!response.ok)throw new Error(data?.message||"Flutterwave verification failed");return data?.data;}

export async function markInvoicePaidByReference(reference:string,providerReference:string){if(!isDatabaseConfigured())return;const sql=db();const rows=await sql`update invoices set status='paid',paid_at=now(),provider_reference=${providerReference} where reference=${reference} and status<>'paid' returning id,booking_id`;if(rows[0]?.booking_id)await sql`update bookings set status='confirmed',updated_at=now() where id=${rows[0].booking_id}`;}
