import { NextRequest, NextResponse } from "next/server";
import { db, isDatabaseConfigured } from "../../../../../lib/db";
import { requireAdmin } from "../../../../../lib/server-auth";

export async function PATCH(request:NextRequest,{params}:{params:Promise<{id:string}>}){
  if(!requireAdmin(request))return NextResponse.json({ok:false,error:"Unauthorized"},{status:401});
  if(!isDatabaseConfigured())return NextResponse.json({ok:true,status:"demo_only"});
  const {id}=await params;const body=await request.json().catch(()=>null);if(!body)return NextResponse.json({ok:false,error:"Invalid payload"},{status:400});
  const sql=db();
  const [item]=await sql`update listings set title=coalesce(${body.title||null},title), status=coalesce(${body.status||null},status), location=coalesce(${body.location||null},location), price_amount=coalesce(${body.priceAmount??null},price_amount), price_label=coalesce(${body.priceLabel||null},price_label), bedrooms=coalesce(${body.bedrooms??null},bedrooms), bathrooms=coalesce(${body.bathrooms??null},bathrooms), guest_capacity=coalesce(${body.guestCapacity??null},guest_capacity), description=coalesce(${body.description||null},description), updated_at=now() where id=${id} returning *`;
  if(!item)return NextResponse.json({ok:false,error:"Listing not found"},{status:404});return NextResponse.json({ok:true,item});
}

export async function DELETE(request:NextRequest,{params}:{params:Promise<{id:string}>}){
  if(!requireAdmin(request))return NextResponse.json({ok:false,error:"Unauthorized"},{status:401});
  if(!isDatabaseConfigured())return NextResponse.json({ok:true,status:"demo_only"});
  const {id}=await params;const sql=db();const [item]=await sql`update listings set status='archived',updated_at=now() where id=${id} returning id,status`;
  if(!item)return NextResponse.json({ok:false,error:"Listing not found"},{status:404});return NextResponse.json({ok:true,item});
}
