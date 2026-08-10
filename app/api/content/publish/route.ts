import { NextRequest, NextResponse } from "next/server";
import { socialChannels } from "../../../../lib/social-commerce";

export async function POST(request: NextRequest){
  const body=await request.json().catch(()=>null);
  const allowed=new Set(socialChannels.filter(channel=>channel.supportsPublishing).map(channel=>channel.id));
  const channels=Array.isArray(body?.channels)?body.channels.filter((channel:string)=>allowed.has(channel as never)):[];
  if(!body?.campaignId || channels.length===0){return NextResponse.json({ok:false,error:"campaignId and at least one supported publishing channel are required"},{status:400});}
  if(body.approved!==true){return NextResponse.json({ok:false,error:"Staff approval is required before publishing."},{status:403});}
  return NextResponse.json({ok:true,status:"queued",campaignId:body.campaignId,channels,note:"Channel credentials must be connected before external delivery."});
}
