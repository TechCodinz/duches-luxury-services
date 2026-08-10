import type { SocialChannel, SocialPost } from "./social-commerce";

export type PublishResult = {
  channel: SocialChannel;
  ok: boolean;
  externalId?: string;
  externalUrl?: string;
  error?: string;
};

export interface SocialPublisher {
  channel: SocialChannel;
  publish(post: SocialPost): Promise<PublishResult>;
}

export type PublishPlan = {
  original: SocialPost;
  variants: Partial<Record<SocialChannel, {
    caption: string;
    callToAction?: string;
    destinationUrl?: string;
  }>>;
};

export function createPublishPlan(post: SocialPost): PublishPlan {
  const variants: PublishPlan["variants"] = {};

  for (const channel of post.channels) {
    variants[channel] = {
      caption: post.caption,
      callToAction: "Enquire with Duches",
      destinationUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    };
  }

  return { original: post, variants };
}

// Provider-specific adapters are intentionally kept outside the UI layer.
// When the client's accounts are supplied, we implement official adapters for
// Meta business channels, Telegram and any approved future network without
// changing the rest of the Duches content workflow.
