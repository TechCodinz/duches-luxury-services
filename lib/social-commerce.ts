export type SocialChannel = "whatsapp" | "instagram" | "facebook" | "telegram" | "web" | "phone";

export type ChannelStatus = "connected" | "pending" | "disconnected";

export type ConversationIntent =
  | "property_inquiry"
  | "booking"
  | "concierge"
  | "payment"
  | "support"
  | "general";

export type SocialConversation = {
  id: string;
  channel: SocialChannel;
  contactName: string;
  contactHandle: string;
  intent: ConversationIntent;
  lastMessage: string;
  unread: number;
  value?: string;
  status: "new" | "qualified" | "awaiting_payment" | "booked" | "closed";
  updatedAt: string;
};

export type SocialPost = {
  id: string;
  title: string;
  caption: string;
  mediaUrl?: string;
  channels: SocialChannel[];
  scheduledFor?: string;
  status: "draft" | "scheduled" | "published";
};

export const socialChannels = [
  { id: "whatsapp", name: "WhatsApp Business", purpose: "Leads, bookings, payment links and concierge support", status: "pending" as ChannelStatus },
  { id: "instagram", name: "Instagram", purpose: "DM inquiries, property discovery and social publishing", status: "pending" as ChannelStatus },
  { id: "facebook", name: "Facebook", purpose: "Messenger inquiries, page publishing and campaigns", status: "pending" as ChannelStatus },
  { id: "telegram", name: "Telegram", purpose: "Bot storefront, Mini App, invoices and support", status: "pending" as ChannelStatus },
  { id: "phone", name: "AI Call Assistant", purpose: "Inbound qualification, booking and human handoff", status: "pending" as ChannelStatus },
];

export const demoConversations: SocialConversation[] = [
  {
    id: "conv-1",
    channel: "whatsapp",
    contactName: "Adaeze N.",
    contactHandle: "+234 ••• ••• 4192",
    intent: "property_inquiry",
    lastMessage: "Is the Oceanview Residence available for the last weekend in August?",
    unread: 2,
    value: "$15,000 / month",
    status: "qualified",
    updatedAt: "4 min ago",
  },
  {
    id: "conv-2",
    channel: "instagram",
    contactName: "@luxetraveller",
    contactHandle: "Instagram DM",
    intent: "concierge",
    lastMessage: "Can you arrange a yacht and private chef for six guests?",
    unread: 1,
    status: "new",
    updatedAt: "12 min ago",
  },
  {
    id: "conv-3",
    channel: "telegram",
    contactName: "Daniel K.",
    contactHandle: "Telegram",
    intent: "payment",
    lastMessage: "I am ready to pay the deposit for the Royal Indulgence package.",
    unread: 0,
    status: "awaiting_payment",
    updatedAt: "28 min ago",
  },
];
