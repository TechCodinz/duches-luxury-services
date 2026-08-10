import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextRequest, NextResponse } from "next/server";
import { db, isDatabaseConfigured } from "../../../../../lib/db";

export async function POST(request:NextRequest){
  if(!process.env.BLOB_READ_WRITE_TOKEN)return NextResponse.json({ok:false,error:"Receipt upload storage is not configured."},{status:503});
  const body=(await request.json()) as HandleUploadBody;
  try{
    const response=await handleUpload({body,request,onBeforeGenerateToken:async(pathname,clientPayload)=>{
      const payload=JSON.parse(clientPayload||"{}");if(!payload.invoiceReference||!payload.email)throw new Error("Invoice reference and email are required.");
      if(isDatabaseConfigured()){const sql=db();const rows=await sql`select i.id from invoices i join clients c on c.id=i.client_id where i.reference=${payload.invoiceReference} and lower(c.email)=lower(${payload.email}) limit 1`;if(!rows[0])throw new Error("Invoice could not be verified.");}
      return{allowedContentTypes:["image/jpeg","image/png","image/webp","application/pdf"],maximumSizeInBytes:8*1024*1024,addRandomSuffix:true,tokenPayload:JSON.stringify({invoiceReference:payload.invoiceReference})};
    }});
    return NextResponse.json(response);
  }catch(error){return NextResponse.json({ok:false,error:error instanceof Error?error.message:"Upload failed"},{status:400});}
}
