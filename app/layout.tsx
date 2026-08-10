import type { Metadata } from "next";
import "./globals.css";
import "./experience.css";
import "./cms.css";
import "./business.css";
import "./platform.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://duchesluxury.com"),
  title: {
    default: "Duches Luxury Services | Property, Hospitality & Concierge",
    template: "%s | Duches Luxury Services",
  },
  description: "Premium real estate, private hospitality and bespoke concierge experiences in Lagos, Abuja, Dubai and beyond.",
  keywords: ["luxury real estate", "luxury shortlets", "Lagos property", "Abuja property", "Dubai property", "private concierge", "luxury hospitality"],
  openGraph: {
    title: "Duches Luxury Services",
    description: "Exceptional residences, seamless hospitality and discreet private-client concierge.",
    type: "website",
    locale: "en_US",
    siteName: "Duches Luxury Services",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
