import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duches Luxury Services",
  description:
    "Premium real estate, hospitality and bespoke concierge experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
