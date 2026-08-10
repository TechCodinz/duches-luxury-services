import { NextRequest, NextResponse } from "next/server";
import { normalizeInboundEvent } from "../../../../../lib/commerce-automation";
import type { SocialChannel } from "../../../../../lib/social-commerce";

const supportedChannels = new Set<SocialChannel>([
  "whatsapp",
  "instagram",
  "facebook",
  "telegram",
  "web",
  "phone",
]);

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ channel: string }> },
) {
  const { channel } = await context.params;
  if (!supportedChannels.has(channel as SocialChannel)) {
    return NextResponse.json({ error: "Unsupported channel" }, { status: 404 });
  }

  const mode = request.nextUrl.searchParams.get("hub.mode");
  const token = request.nextUrl.searchParams.get("hub.verify_token");
  const challenge = request.nextUrl.searchParams.get("hub.challenge");
  const verifyToken = process.env.SOCIAL_WEBHOOK_VERIFY_TOKEN;

  if (mode === "subscribe" && verifyToken && token === verifyToken && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ ok: true, channel });
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ channel: string }> },
) {
  const { channel } = await context.params;
  if (!supportedChannels.has(channel as SocialChannel)) {
    return NextResponse.json({ error: "Unsupported channel" }, { status: 404 });
  }

  if (channel === "telegram") {
    const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
    const supplied = request.headers.get("x-telegram-bot-api-secret-token");
    if (expected && supplied !== expected) {
      return NextResponse.json({ error: "Invalid webhook secret" }, { status: 401 });
    }
  }

  const payload: unknown = await request.json();
  const event = normalizeInboundEvent(channel as SocialChannel, payload);

  // Production pipeline:
  // 1. Persist the raw event + idempotency key.
  // 2. Normalize provider-specific message/order fields.
  // 3. Run AI intent extraction against approved Duches data only.
  // 4. Apply human-approval policy for availability, price and payments.
  // 5. Queue the outbound reply/action through the channel adapter.
  // 6. Record attribution, conversion and staff handoff history.

  return NextResponse.json({ accepted: true, eventId: event.id }, { status: 202 });
}
