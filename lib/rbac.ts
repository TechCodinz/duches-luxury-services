import type { NextRequest } from "next/server";
import { adminSessionFromRequest } from "./server-auth";

export type StaffRole="owner"|"manager"|"concierge"|"finance"|"editor"|"viewer";
export type Permission="listings:write"|"media:write"|"bookings:write"|"clients:write"|"finance:write"|"content:write"|"team:write"|"analytics:read";
const grants:Record<StaffRole,Permission[]>={owner:["listings:write","media:write","bookings:write","clients:write","finance:write","content:write","team:write","analytics:read"],manager:["listings:write","media:write","bookings:write","clients:write","content:write","analytics:read"],concierge:["bookings:write","clients:write","analytics:read"],finance:["finance:write","analytics:read"],editor:["media:write","content:write","analytics:read"],viewer:["analytics:read"]};
export function hasPermission(role:string|undefined,permission:Permission){return Boolean(role&&grants[(role as StaffRole)]?.includes(permission));}
export function requirePermission(request:NextRequest,permission:Permission){const session=adminSessionFromRequest(request);return session&&hasPermission(session.role,permission)?session:null;}
