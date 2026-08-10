import { NextRequest, NextResponse } from "next/server";
import { managedListings } from "../../../../lib/cms";
import { db, isDatabaseConfigured } from "../../../../lib/db";
import { requireAdmin } from "../../../../lib/server-auth";

export async function GET(){
  if(!isDatabaseConfigured()) return NextResponse.json({ok:true,items:managedListings,mode:"demo"});
  const sql=db();
  const items=await sql`select id,slug,title,content_type as type,status,location,currency,price_amount,price_label,bedrooms,bathrooms,guest_capacity,description,amenities,metadata,created_at,updated_at from listings order by updated_at desc`;
  return NextResponse.json({ok:true,items,mode:"persistent"});
}

export async function POST(request:NextRequest){
  if(!requireAdmin(request)) return NextResponse.json({ok:false,error:"Unauthorized"},{status:401});
  const body=await request.json().catch(()=>null);
  if(!body?.title||!body?.type||!body?.location)return NextResponse.json({ok:false,error:"title, type and location are required"},{status:400});
  if(!isDatabaseConfigured())return NextResponse.json({ok:true,status:"demo_only",draft:{id:`cms_${Date.now()}`,status:"draft",...body},nextAction:"connect_database"},{status:201});
  const slug=String(body.slug||body.title).toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
  const sql=db();
  const [item]=await sql`insert into listings (slug,title,content_type,status,location,currency,price_amount,price_label,bedrooms,bathrooms,guest_capacity,description,amenities,metadata) values (${slug},${body.title},${body.type},${body.status||"draft"},${body.location},${body.currency||"NGN"},${body.priceAmount||null},${body.priceLabel||null},${body.bedrooms||null},${body.bathrooms||null},${body.guestCapacity||null},${body.description||null},${JSON.stringify(body.amenities||[])},${JSON.stringify(body.metadata||{})}) returning *`;
  return NextResponse.json({ok:true,item,mode:"persistent"},{status:201});
}
