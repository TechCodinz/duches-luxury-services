"use client";

import { usePathname } from "next/navigation";
import { LiveConcierge } from "./LiveConcierge";
import { OrganizationJsonLd } from "./StructuredData";

export function GlobalExperienceChrome(){
  const pathname=usePathname();
  if(pathname?.startsWith("/vanta")) return null;
  return <><OrganizationJsonLd/><LiveConcierge/></>;
}
