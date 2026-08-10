import { NextResponse } from "next/server";
import { databaseHealth } from "../../../../lib/db";
export async function GET(){const database=await databaseHealth();return NextResponse.json({ok:true,service:"duches-luxury-services",database,storage:{configured:Boolean(process.env.BLOB_READ_WRITE_TOKEN)},payments:{paystack:Boolean(process.env.PAYSTACK_SECRET_KEY),stripe:Boolean(process.env.STRIPE_SECRET_KEY)},social:{meta:Boolean(process.env.META_ACCESS_TOKEN),telegram:Boolean(process.env.TELEGRAM_BOT_TOKEN)},ai:{configured:Boolean(process.env.AI_GATEWAY_API_KEY)}})}
