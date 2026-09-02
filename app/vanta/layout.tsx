import type { Metadata } from "next";
import "./vanta.css";

export const metadata: Metadata = {
  title: "VANTA Athletic Club — Performance Engineered",
  description: "A premium digital fitness club demo: intelligent training, coaching, memberships and performance tracking.",
};

export default function VantaLayout({ children }: { children: React.ReactNode }) {
  return <div className="vanta-shell">{children}</div>;
}
