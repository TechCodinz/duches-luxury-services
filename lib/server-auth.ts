import type { NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "./session";

export function adminSessionFromRequest(request:NextRequest){
  if(!process.env.DUCHES_ADMIN_ACCESS_CODE||!process.env.DUCHES_SESSION_SECRET)return {email:"demo@duches.local",role:"owner",expiresAt:Number.MAX_SAFE_INTEGER};
  return verifySession(request.cookies.get(SESSION_COOKIE)?.value);
}

export function requireAdmin(request:NextRequest){return Boolean(adminSessionFromRequest(request))}
