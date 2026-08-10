import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE="duches_admin_session";
function verify(token:string|undefined){
  const secret=process.env.DUCHES_SESSION_SECRET;
  if(!secret||!token)return false;
  const [encoded,signature]=token.split(".");if(!encoded||!signature)return false;
  const expected=createHmac("sha256",secret).update(encoded).digest("base64url");
  const a=Buffer.from(signature),b=Buffer.from(expected);if(a.length!==b.length||!timingSafeEqual(a,b))return false;
  try{const payload=JSON.parse(Buffer.from(encoded,"base64url").toString("utf8"));return Number(payload.expiresAt)>Date.now()}catch{return false}
}

export function proxy(request:NextRequest){
  if(!process.env.DUCHES_ADMIN_ACCESS_CODE||!process.env.DUCHES_SESSION_SECRET)return NextResponse.next();
  if(request.nextUrl.pathname==="/admin/login")return NextResponse.next();
  if(!verify(request.cookies.get(COOKIE)?.value))return NextResponse.redirect(new URL("/admin/login",request.url));
  return NextResponse.next();
}
export const config={matcher:["/admin/:path*"]};
