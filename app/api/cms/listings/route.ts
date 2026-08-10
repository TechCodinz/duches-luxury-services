import { NextRequest, NextResponse } from "next/server";
import { managedListings } from "../../../../lib/cms";

export async function GET(){return NextResponse.json({ok:true,items:managedListings,mode:"demo"});}

export async function POST(request:NextRequest){const body=await request.json().catch(()=>null);if(!body?.title||!body?.type||!body?.location){return NextResponse.json({ok:false,error:"title, type and location are required"},{status:400});}return NextResponse.json({ok:true,status:"persistence_not_connected",draft:{id:`cms_${Date.now()}`,status:"draft",...body},nextAction:"connect_database"},{status:201});}
