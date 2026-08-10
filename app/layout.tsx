import type { Metadata } from "next";
import "./globals.css";
import "./experience.css";
import "./platform.css";
import "./business.css";
import "./cms.css";
import "./payment.css";
import { StructuredData } from "../components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://duches.example.com"),
  title: { default: "Duches Luxury Services", template: "%s | Duches Luxury Services" },
  description: "Luxury real estate, private stays, hospitality and bespoke concierge experiences across exceptional destinations.",
  openGraph: { title: "Duches Luxury Services", description: "Experience elevated living through exceptional residences and private hospitality.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StructuredData />{children}</body></html>;
}
