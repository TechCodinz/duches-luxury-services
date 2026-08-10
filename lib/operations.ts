export type LeadStage = "new" | "qualified" | "proposal" | "payment" | "confirmed";

export const leads = [
  { id: "DL-1048", name: "Adaeze N.", source: "Instagram", request: "3-night Lekki villa + chauffeur", value: "$4,800", score: 94, stage: "qualified" as LeadStage },
  { id: "DL-1047", name: "Michael R.", source: "WhatsApp", request: "Private viewing — Crown Penthouse", value: "$2.5M", score: 98, stage: "proposal" as LeadStage },
  { id: "DL-1046", name: "Zainab A.", source: "Telegram", request: "Royal Indulgence weekend", value: "$7,200", score: 88, stage: "payment" as LeadStage },
  { id: "DL-1045", name: "Chinedu E.", source: "Website", request: "Abuja executive stay", value: "$3,100", score: 81, stage: "new" as LeadStage },
];

export const bookings = [
  { ref: "DR-8821", guest: "Amaka O.", experience: "Oceanview Residence", dates: "Aug 14 — 18", amount: "$6,400", status: "Confirmed" },
  { ref: "DR-8820", guest: "Khalid M.", experience: "Grand Duchess Experience", dates: "Aug 19 — 22", amount: "$12,800", status: "Deposit paid" },
  { ref: "DR-8819", guest: "Sarah W.", experience: "Crown Penthouse viewing", dates: "Aug 21", amount: "Private sale", status: "Scheduled" },
];

export const contentQueue = [
  { title: "Weekend at The Crown Penthouse", channels: ["Instagram", "Facebook", "WhatsApp"], time: "Today · 7:30 PM", status: "Ready" },
  { title: "Grand Duchess yacht escape", channels: ["Instagram", "Telegram"], time: "Wed · 12:00 PM", status: "Draft" },
  { title: "Five reasons to invest in Victoria Island", channels: ["Facebook", "Instagram"], time: "Fri · 9:00 AM", status: "Scheduled" },
];

export const automations = [
  { name: "New social inquiry", action: "Qualify intent, budget, dates and guest count", state: "Active" },
  { name: "High-value lead", action: "Alert relationship manager and prepare concierge brief", state: "Active" },
  { name: "Payment pending", action: "Send approved reminder after 2 hours", state: "Approval gated" },
  { name: "Pre-arrival", action: "Send itinerary, host contact and concierge upsells", state: "Active" },
  { name: "Post-stay", action: "Request review and offer returning-client benefits", state: "Active" },
];
