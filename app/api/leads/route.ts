import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  const body = await request.json().catch(()=>null);
  if(!body?.name || !body?.contact || !body?.intent){return NextResponse.json({ok:false,error:"name, contact and intent are required"},{status:400});}
  const lead={id:`DL-${Date.now().toString().slice(-6)}`,createdAt:new Date().toISOString(),source:body.source??"website",status:"new",...body};
  // Production: persist to the database, attribute campaign/source and enqueue notifications.
  return NextResponse.json({ok:true,lead},{status:201});
}
