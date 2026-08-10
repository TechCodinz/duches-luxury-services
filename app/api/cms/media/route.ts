import { NextResponse } from "next/server";
import { demoAssets } from "../../../../lib/cms";
import { db, isDatabaseConfigured } from "../../../../lib/db";

export async function GET(){if(!isDatabaseConfigured())return NextResponse.json({ok:true,items:demoAssets,mode:"demo"});const sql=db();const items=await sql`select id,kind,url,mime_type,size_bytes,alt_text,duration_seconds,created_at,storage_key as name from media_assets order by created_at desc limit 200`;return NextResponse.json({ok:true,items,mode:"database"})}
