import type { MetadataRoute } from "next";
import { properties } from "../lib/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://duchesluxury.com";
  const staticRoutes = ["", "/properties", "/concierge", "/book", "/client", "/privacy", "/terms"];
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const listings: MetadataRoute.Sitemap = properties.map((property) => ({
    url: `${base}/properties/${property.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...pages, ...listings];
}
