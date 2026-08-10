import { NextRequest, NextResponse } from "next/server";
import { createSession, SESSION_COOKIE } from "../../../../lib/session";

export async function POST(request:NextRequest){
  const body=await request.json().catch(()=>null);
  const expected=process.env.DUCHES_ADMIN_ACCESS_CODE;
  if(!expected||!process.env.DUCHES_SESSION_SECRET)return NextResponse.json({ok:false,error:"Admin authentication is not configured yet."},{status:503});
  if(!body?.email||body?.accessCode!==expected)return NextResponse.json({ok:false,error:"Invalid credentials"},{status:401});
  const token=createSession(String(body.email).toLowerCase(),"owner");
  const response=NextResponse.json({ok:true});
  response.cookies.set(SESSION_COOKIE,token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:60*60*12});
  return response;
}
