import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "../../components/SiteShell";

const services = [
  ["Private Chauffeur", "Airport transfers, executive movement and dedicated drivers.", "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=88"],
  ["Private Chef", "In-residence dining, celebration menus and tailored dietary service.", "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=88"],
  ["Yacht & Leisure", "Private cruises, waterfront occasions and curated day experiences.", "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1200&q=88"],
  ["Wellness & Glam", "Spa, beauty, styling and personal wellness arranged around your schedule.", "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=88"],
  ["Dining & Nightlife", "Priority reservations, private rooms and curated nightlife access.", "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=88"],
  ["Celebrations", "Birthdays, proposals, intimate events and unforgettable private moments.", "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=1200&q=88"]
];

export default function ConciergePage(){return <main><SiteHeader/><PageHero eyebrow="Duches Private Client" title="One request. Every detail handled." copy="From the practical to the extraordinary, Duches coordinates the people, access and timing behind a seamless luxury experience." image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=90"/><section className="concierge-grid">{services.map(([title,copy,image])=><article className="concierge-card" key={title} style={{backgroundImage:`url(${image})`}}><div><p className="eyebrow">Private service</p><h3>{title}</h3><p>{copy}</p></div></article>)}</section><section className="contact-cta"><div><p className="eyebrow">Tailored, not templated</p><h2>Have something specific in mind?</h2></div><div className="cta-actions"><Link href="/book" className="gold-button">Request concierge <ArrowRight size={14}/></Link></div></section><SiteFooter/></main>}
