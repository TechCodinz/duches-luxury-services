"use client";

import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Building2,
  Check,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  ConciergeBell,
  Crown,
  Diamond,
  Globe2,
  Heart,
  House,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Private residences • curated globally",
    title: "Experience Elevated Living",
    copy: "Exceptional homes, seamless hospitality and discreet concierge service for clients who expect more.",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Duches Signature Collection",
    title: "Homes Beyond Expectation",
    copy: "Discover rare residences in Lagos, Abuja, Dubai, London and the world's most sought-after destinations.",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "Hospitality • concierge • lifestyle",
    title: "Luxury, Personally Delivered",
    copy: "From airport pickup to a private chef, every detail can be arranged around your stay and your lifestyle.",
  },
];

const properties = [
  { name: "The Crown Penthouse", location: "Victoria Island, Lagos", price: "$2,500,000", status: "For Sale", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85" },
  { name: "Oceanview Residence", location: "Lekki, Lagos", price: "$15,000 /month", status: "For Rent", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85" },
  { name: "Skyline Towers", location: "Downtown, Dubai", price: "$1,750,000", status: "For Sale", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=900&q=85" },
  { name: "Hillside Mansion", location: "Maitama, Abuja", price: "$20,000 /month", status: "For Rent", image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=900&q=85" },
];

const packages = [
  { n: "01", icon: House, name: "The Essential Stay", subtitle: "Accommodation Only", items: ["Luxury shortlet or hotel stay", "Daily housekeeping", "High-speed Wi-Fi", "24/7 power supply", "On-site security"], perfect: "For guests who value ease, privacy and simplicity." },
  { n: "02", icon: Sparkles, name: "The Lifestyle Stay", subtitle: "Accommodation + Lifestyle", items: ["Premium accommodation", "Spa session", "Sightseeing excursion", "Fine dining experience", "Curated city tour"], perfect: "For solo travellers and lifestyle explorers." },
  { n: "03", icon: ConciergeBell, name: "The Elite Experience", subtitle: "Stay + Logistics + Lifestyle", items: ["Premium accommodation", "Personal chauffeur", "Airport transfer", "Spa treatment", "Curated activities"], perfect: "For effortless movement and elevated city living." },
  { n: "04", icon: Crown, name: "The Royal Indulgence", subtitle: "Stay + Lifestyle + Private Chef", items: ["Private in-house chef", "Luxury car service", "Spa treatment", "VIP nightlife access", "Dedicated concierge"], perfect: "For couples and guests who want complete luxury.", featured: true },
  { n: "05", icon: Diamond, name: "The Grand Duchess", subtitle: "Full VIP Luxury", items: ["Presidential villa", "Private yacht cruise", "Personal chef & butler", "Spa & glam team", "Private photoshoot"], perfect: "The complete Duches signature experience." },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const current = heroSlides[slide];
  const changeSlide = (dir: number) => setSlide((s) => (s + dir + heroSlides.length) % heroSlides.length);

  return (
    <main>
      <header className="site-nav">
        <a className="brand" href="#home" aria-label="Duches Luxury Services home">
          <span className="brand-mark"><Crown size={20} strokeWidth={1.4} /></span>
          <span><strong>DUCHES</strong><small>LUXURY SERVICES</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#properties">Properties</a><a href="#hospitality">Hospitality</a><a href="#services">Concierge</a><a href="#packages">Packages</a><a href="#about">About</a><a href="#journal">Journal</a>
        </nav>
        <div className="nav-actions">
          <button className="lang"><Globe2 size={14} /> EN <ChevronDown size={13} /></button>
          <a className="outline-gold compact" href="#contact">Book consultation</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="mobile-menu"><a href="#properties" onClick={() => setMenuOpen(false)}>Properties</a><a href="#hospitality" onClick={() => setMenuOpen(false)}>Hospitality</a><a href="#services" onClick={() => setMenuOpen(false)}>Concierge</a><a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div>}
      </header>

      <section id="home" className="hero" style={{ backgroundImage: `url(${current.image})` }}>
        <div className="hero-shade" />
        <button className="hero-arrow left" onClick={() => changeSlide(-1)} aria-label="Previous slide"><ArrowLeft /></button>
        <button className="hero-arrow right" onClick={() => changeSlide(1)} aria-label="Next slide"><ArrowRight /></button>
        <div className="hero-inner">
          <p className="eyebrow">{current.eyebrow}</p>
          <h1>{current.title.split(" ").slice(0, -1).join(" ")} <em>{current.title.split(" ").at(-1)}</em></h1>
          <p className="hero-copy">{current.copy}</p>
          <div className="hero-actions"><a className="gold-button" href="#properties">Explore properties <ArrowRight size={15} /></a><button className="ghost-button"><span className="play"><Play size={11} fill="currentColor" /></span> Watch film</button></div>
        </div>
        <div className="slide-count"><span>0{slide + 1}</span><div className="slide-line"><i style={{ width: `${((slide + 1) / heroSlides.length) * 100}%` }} /></div><span>0{heroSlides.length}</span></div>
      </section>

      <section className="property-search" aria-label="Property search">
        <div className="search-shell">
          <SearchField icon={<MapPin size={17} />} label="Location" options={["Any Location", "Lagos", "Abuja", "Dubai", "London"]} />
          <SearchField icon={<Building2 size={17} />} label="Property Type" options={["All Types", "Penthouse", "Villa", "Mansion", "Apartment"]} />
          <SearchField icon={<CircleDollarSign size={17} />} label="Price Range" options={["Any Budget", "Under $500K", "$500K – $1M", "$1M – $5M", "$5M+"]} />
          <SearchField icon={<BedDouble size={17} />} label="Bedrooms" options={["Any", "1+", "2+", "3+", "4+", "5+"]} />
          <button className="search-button"><Search size={16} /> Search</button>
        </div>
      </section>

      <section className="service-strip" id="services">
        <Service icon={<Building2 />} title="Property Sourcing" copy="Private listings and prime-market opportunities." />
        <Service icon={<ConciergeBell />} title="Hospitality Experiences" copy="Luxury stays made seamless from arrival to departure." />
        <Service icon={<Diamond />} title="Lifestyle Concierge" copy="Bespoke access arranged around your preferences." />
        <Service icon={<ShieldCheck />} title="Property Management" copy="Discreet management with complete peace of mind." />
      </section>

      <section className="section light" id="properties">
        <div className="section-head"><div><p className="eyebrow dark-eye">Handpicked Selection</p><h2>Featured Properties</h2></div><a href="#properties" className="text-link">View all properties <ArrowRight size={14} /></a></div>
        <div className="property-grid">
          {properties.map((p, i) => (
            <article className="property-card" key={p.name}>
              <div className="property-image"><img src={p.image} alt={p.name} /><span className={`status ${p.status === "For Rent" ? "dark-status" : ""}`}>{p.status}</span><button className={`heart ${favorites.includes(i) ? "active" : ""}`} onClick={() => setFavorites((f) => f.includes(i) ? f.filter(x => x !== i) : [...f, i])} aria-label="Save property"><Heart size={17} fill={favorites.includes(i) ? "currentColor" : "none"} /></button></div>
              <div className="property-meta"><div><h3>{p.name}</h3><p><MapPin size={12} /> {p.location}</p></div><strong>{p.price}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="stats">
        <Stat icon={<House />} value="500+" label="Properties" /><Stat icon={<Users />} value="2,000+" label="Clients Served" /><Stat icon={<Globe2 />} value="15+" label="Global Cities" /><Stat icon={<Star />} value="5.0" label="Client Rating" />
      </section>

      <section className="section packages" id="packages">
        <div className="center-head"><p className="eyebrow">Duches Rentals</p><h2>Experience Packages</h2><p>Luxury living, effortlessly delivered.</p></div>
        <div className="package-grid">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return <article key={pkg.n} className={`package-card ${pkg.featured ? "featured" : ""}`}>{pkg.featured && <span className="popular">Most popular</span>}<span className="pkg-no">{pkg.n}</span><Icon className="pkg-icon" /><h3>{pkg.name}</h3><p className="pkg-sub">{pkg.subtitle}</p><div className="short-line" /><ul>{pkg.items.map(item => <li key={item}><Check size={13} />{item}</li>)}</ul><p className="perfect">{pkg.perfect}</p><a href="#contact" className="package-button">Select package</a></article>;
          })}
        </div>
      </section>

      <section className="section promise" id="about">
        <div className="center-head dark-copy"><p className="eyebrow dark-eye">Our Promise</p><h2>Why Choose Duches</h2><p>Considered service, rare access and the confidence that every detail is handled.</p></div>
        <div className="promise-grid"><Promise icon={<Diamond />} title="Exclusive Access" copy="Hand-selected homes and experiences shaped around your standards." /><Promise icon={<ShieldCheck />} title="Trust & Privacy" copy="Discretion and secure handling are embedded into every interaction." /><Promise icon={<Star />} title="Exceptional Service" copy="A dedicated team stays close to every request, from inquiry to completion." /><Promise icon={<Globe2 />} title="Global Reach" copy="International connections with local insight across priority luxury markets." /></div>
      </section>

      <section className="section hospitality" id="hospitality">
        <div className="section-head inverse"><div><p className="eyebrow">Curated Experiences</p><h2>Hospitality & Concierge</h2></div><p className="side-copy">Your stay can be more than accommodation. Duches coordinates the people, places and moments around it.</p></div>
        <div className="hospitality-grid"><Experience image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1100&q=85" title="Luxury Stays" copy="Exceptional villas, suites and private residences." /><Experience image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1100&q=85" title="Lifestyle Concierge" copy="Dining, wellness, events and personal arrangements." /><Experience image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1100&q=85" title="VIP Experiences" copy="Rare access, private moments and unforgettable celebrations." /></div>
        <div className="hosp-actions"><a className="outline-gold" href="#properties">Explore properties</a><a className="ghost-button boxed" href="#contact">Request concierge</a></div>
      </section>

      <section className="section journal" id="journal">
        <div className="section-head"><div><p className="eyebrow dark-eye">The Duches Journal</p><h2>Living Well, Globally</h2></div><a href="#journal" className="text-link">Explore journal <ArrowRight size={14} /></a></div>
        <div className="journal-grid"><Journal image="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85" tag="Travel" title="A private guide to a refined Lagos weekend" /><Journal image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85" tag="Property" title="What defines a truly exceptional residence?" /><Journal image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85" tag="Lifestyle" title="The art of effortless private dining" /></div>
      </section>

      <section className="section testimonial">
        <p className="eyebrow dark-eye">Client Voices</p><h2>Service remembered long after the stay.</h2><blockquote>“Duches made every part of the experience feel effortless. The property was exceptional, but the attention to detail is what made us return.”</blockquote><div className="client"><div className="avatar">AO</div><div><strong>Amaka O.</strong><span>Lagos, Nigeria</span></div></div>
      </section>

      <section className="contact-cta" id="contact"><div><p className="eyebrow">Private Client Services</p><h2>Tell us what exceptional looks like to you.</h2></div><div className="cta-actions"><a className="gold-button" href="mailto:hello@duchesluxury.com">Start a conversation <ArrowRight size={15} /></a><a className="ghost-button boxed" href="#home"><Phone size={15} /> Book a call</a></div></section>

      <footer><div className="footer-grid"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><Crown size={20} /></span><span><strong>DUCHES</strong><small>LUXURY SERVICES</small></span></a><p>Luxury is not a price point. It is a level of service.</p><span className="script">Duches</span></div><div><h4>Explore</h4><a href="#properties">Properties</a><a href="#hospitality">Hospitality</a><a href="#services">Concierge</a><a href="#packages">Packages</a></div><div><h4>Company</h4><a href="#about">About</a><a href="#journal">Journal</a><a href="#contact">Contact</a><a href="#">Privacy</a></div><div><h4>Private updates</h4><p>Receive selected properties, destination notes and private offers.</p><div className="subscribe"><input aria-label="Email address" placeholder="Email address" type="email"/><button aria-label="Subscribe"><ArrowRight size={17}/></button></div></div></div><div className="footer-bottom"><span>© 2026 Duches Luxury Services.</span><span>Real estate • Hospitality • Concierge</span></div></footer>

      <div className="floating"><a href="#contact"><MessageCircle size={18} /><span>WhatsApp</span></a><a href="#contact"><Phone size={18} /><span>Book a call</span></a></div>
      <button className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ChevronUp size={18} /></button>
    </main>
  );
}

function SearchField({ icon, label, options }: { icon: React.ReactNode; label: string; options: string[] }) { return <label className="search-field"><span>{icon}{label}</span><select>{options.map(x => <option key={x}>{x}</option>)}</select></label>; }
function Service({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) { return <div className="service-item"><span>{icon}</span><div><strong>{title}</strong><p>{copy}</p></div></div>; }
function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) { return <div className="stat"><span>{icon}</span><strong>{value}</strong><small>{label}</small></div>; }
function Promise({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) { return <article className="promise-card"><span>{icon}</span><h3>{title}</h3><p>{copy}</p></article>; }
function Experience({ image, title, copy }: { image: string; title: string; copy: string }) { return <article className="experience"><img src={image} alt={title}/><div><h3>{title}</h3><p>{copy}</p><ArrowRight size={18}/></div></article>; }
function Journal({ image, tag, title }: { image: string; tag: string; title: string }) { return <article className="journal-card"><img src={image} alt=""/><p>{tag}</p><h3>{title}</h3><a href="#journal">Read story <ArrowRight size={13}/></a></article>; }
