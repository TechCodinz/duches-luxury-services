import type { Metadata } from "next";
import "./vanta.css";

export const metadata: Metadata = {
  title: { absolute: "VANTA Athletic Club — Performance Engineered" },
  description: "A premium digital fitness club demo: intelligent training, coaching, memberships and performance tracking.",
  applicationName: "VANTA Athletic Club",
  robots: { index: false, follow: false },
  openGraph: {
    title: "VANTA Athletic Club — Performance Engineered",
    description: "Performance training, intelligent coaching and a connected member operating system.",
    type: "website",
    siteName: "VANTA Athletic Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "VANTA Athletic Club — Performance Engineered",
    description: "Performance training, intelligent coaching and a connected member operating system.",
  },
  appleWebApp: {
    capable: true,
    title: "VANTA",
    statusBarStyle: "black-translucent",
  },
};

export default function VantaLayout({ children }: { children: React.ReactNode }) {
  return <div className="vanta-shell">{children}</div>;
}
