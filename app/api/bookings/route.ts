import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  const body=await request.json().catch(()=>null);
  if(!body?.contact || !body?.experience || !body?.startDate){return NextResponse.json({ok:false,error:"contact, experience and startDate are required"},{status:400});}
  const booking={id:`DR-${Date.now().toString().slice(-6)}`,status:"pending_availability",createdAt:new Date().toISOString(),...body};
  // Intentionally pending: inventory and price must be verified before payment is requested.
  return NextResponse.json({ok:true,booking,nextAction:"staff_availability_review"},{status:201});
}
