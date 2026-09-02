import type { Metadata } from "next";
import "./vanta.css";

export const metadata: Metadata = {
  title: { absolute: "Fitness Option — Performance Engineered" },
  description: "Fitness Option digital fitness club experience: intelligent training, coaching, memberships and performance tracking.",
  applicationName: "Fitness Option",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Fitness Option — Performance Engineered",
    description: "Fitness Option performance training, intelligent coaching and a connected member operating system.",
    type: "website",
    siteName: "Fitness Option",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness Option — Performance Engineered",
    description: "Fitness Option performance training, intelligent coaching and a connected member operating system.",
  },
  appleWebApp: {
    capable: true,
    title: "Fitness Option",
    statusBarStyle: "black-translucent",
  },
};

export default function VantaLayout({ children }: { children: React.ReactNode }) {
  return <div className="vanta-shell">{children}</div>;
}
