import { del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { db, isDatabaseConfigured } from "../../../../../lib/db";
import { requirePermission } from "../../../../../lib/rbac";
export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:string}>}){if(!requirePermission(request,"media:write"))return NextResponse.json({ok:false,error:"Forbidden"},{status:403});if(!isDatabaseConfigured())return NextResponse.json({ok:true,status:"demo_only"});const {id}=await params;const sql=db();const [asset]=await sql`select id,url from media_assets where id=${id}`;if(!asset)return NextResponse.json({ok:false,error:"Media not found"},{status:404});if(process.env.BLOB_READ_WRITE_TOKEN)await del(String(asset.url)).catch(()=>{});await sql`delete from media_assets where id=${id}`;return NextResponse.json({ok:true})}
