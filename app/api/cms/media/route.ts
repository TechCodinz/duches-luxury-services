import { NextRequest, NextResponse } from "next/server";
import { demoAssets } from "../../../../lib/cms";

export async function GET(){return NextResponse.json({ok:true,items:demoAssets,mode:"demo"});}

export async function POST(request:NextRequest){const contentType=request.headers.get("content-type")??"";if(!contentType.includes("multipart/form-data")&&!contentType.includes("application/json")){return NextResponse.json({ok:false,error:"multipart/form-data or JSON metadata expected"},{status:415});}return NextResponse.json({ok:true,status:"storage_not_connected",message:"Media endpoint is ready for a Blob/S3-compatible storage adapter. No file was persisted."},{status:202});}
