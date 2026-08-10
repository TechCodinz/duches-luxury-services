import type { ConversationIntent, SocialChannel } from "./social-commerce";

export type CommerceEvent = {
  id: string;
  channel: SocialChannel;
  externalConversationId?: string;
  externalUserId?: string;
  text?: string;
  receivedAt: string;
  raw: unknown;
};

export type LeadProfile = {
  intent: ConversationIntent;
  propertySlug?: string;
  packageId?: string;
  location?: string;
  budget?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  contactName?: string;
  phone?: string;
  email?: string;
  confidence: number;
};

export type AutomationDecision =
  | { action: "reply"; reason: string }
  | { action: "request_details"; fields: string[]; reason: string }
  | { action: "create_payment_link"; reason: string; requiresHumanApproval: true }
  | { action: "offer_booking_slots"; reason: string }
  | { action: "handoff"; reason: string; priority: "normal" | "high" | "vip" };

export const HUMAN_APPROVAL_ACTIONS = new Set([
  "create_payment_link",
  "refund_payment",
  "confirm_property_availability",
  "change_price",
  "cancel_booking",
]);

export function normalizeInboundEvent(channel: SocialChannel, raw: unknown): CommerceEvent {
  return {
    id: crypto.randomUUID(),
    channel,
    receivedAt: new Date().toISOString(),
    raw,
  };
}

export function shouldEscalate(profile: LeadProfile): boolean {
  return profile.confidence < 0.65 || profile.intent === "payment";
}

export function defaultDecision(profile: LeadProfile): AutomationDecision {
  if (shouldEscalate(profile)) {
    return {
      action: "handoff",
      reason: "Payment, VIP or low-confidence conversations require a Duches team member.",
      priority: profile.intent === "payment" ? "high" : "normal",
    };
  }

  if (profile.intent === "booking" && (!profile.checkIn || !profile.checkOut)) {
    return {
      action: "request_details",
      fields: ["checkIn", "checkOut", "guests"],
      reason: "Dates and guest count are required before availability can be checked.",
    };
  }

  return {
    action: "reply",
    reason: "The request can be answered safely from approved Duches inventory and policy data.",
  };
}
