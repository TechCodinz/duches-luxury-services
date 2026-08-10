"use client";

import { ArrowRight, Crown, Globe2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Properties", "/properties"],
  ["Hospitality", "/#hospitality"],
  ["Concierge", "/concierge"],
  ["Packages", "/#packages"],
  ["About", "/#about"],
  ["Journal", "/#journal"]
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="lux-nav">
      <Link className="brand" href="/" aria-label="Duches Luxury Services home">
        <span className="brand-mark"><Crown size={20} strokeWidth={1.4} /></span>
        <span><strong>DUCHES</strong><small>LUXURY SERVICES</small></span>
      </Link>
      <nav className="lux-links" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
      </nav>
      <div className="lux-actions">
        <button className="lang"><Globe2 size={14}/> EN</button>
        <Link className="outline-gold compact" href="/book">Book consultation</Link>
        <button className="lux-menu" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="lux-mobile">{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/book" onClick={() => setOpen(false)}>Book consultation</Link></div>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="lux-footer">
      <div className="lux-footer-grid">
        <div>
          <Link className="brand" href="/"><span className="brand-mark"><Crown size={20}/></span><span><strong>DUCHES</strong><small>LUXURY SERVICES</small></span></Link>
          <p>Private property, hospitality and concierge service shaped around the way you want to live, stay and move.</p>
          <span className="lux-script">Duches</span>
        </div>
        <div><h4>Discover</h4><Link href="/properties">Properties</Link><Link href="/concierge">Concierge</Link><Link href="/#packages">Experiences</Link><Link href="/#journal">Journal</Link></div>
        <div><h4>Private client</h4><Link href="/book">Book consultation</Link><Link href="/client">Client portal</Link><Link href="/admin">Duches admin</Link><a href="mailto:hello@duchesluxury.com">Email us</a></div>
        <div><p className="eyebrow">Begin privately</p><h3>Tell us what you need. We’ll curate the rest.</h3><Link className="gold-button" href="/book">Start a request <ArrowRight size={14}/></Link></div>
      </div>
      <div className="lux-footer-bottom"><span>© 2026 Duches Luxury Services</span><span>Privacy · Terms · Discretion</span></div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image?: string }) {
  return <section className="inner-hero" style={image ? { backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.88),rgba(0,0,0,.35)),url(${image})` } : undefined}><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}
