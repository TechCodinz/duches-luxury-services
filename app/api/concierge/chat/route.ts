import { NextRequest, NextResponse } from "next/server";
import { analyzeConciergeMessage } from "../../../../lib/ai-concierge";
import { db, isDatabaseConfigured } from "../../../../lib/db";

export async function POST(request:NextRequest){const body=await request.json().catch(()=>null);const message=String(body?.message||"").trim();if(!message)return NextResponse.json({ok:false,error:"message is required"},{status:400});const result=await analyzeConciergeMessage(message);if(isDatabaseConfigured()){const sql=db();await sql`insert into conversations(channel,external_thread_id,contact_name,contact_handle,status,intent,ai_summary,priority) values('web',${`web-${Date.now()}`},'Website guest',null,${result.requiresHuman?'needs_human':'ai_active'},${result.intent},${result.summary},${result.priority})`;}
const reply=result.requiresHuman?"I can help capture the details, but a Duches team member needs to confirm availability, price, payment or another sensitive decision before anything is promised. Please share your preferred dates, location and contact details.":result.reply;return NextResponse.json({ok:true,reply,analysis:result});}
