import { Bath, BedDouble, Check, MapPin, Ruler, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../components/SiteShell";
import BookingExperience from "../../../components/BookingExperience";
import { getProperty, properties } from "../../../lib/properties";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default async function PropertyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="detail-hero" style={{ backgroundImage: `url(${property.hero})` }}>
        <div className="detail-overlay" />
        <div className="detail-head">
          <div>
            <p className="eyebrow">Duches Signature Residence</p>
            <h1>{property.name}</h1>
            <p><MapPin size={13} /> {property.location} · {property.type}</p>
          </div>
          <div className="detail-price">{property.price}</div>
        </div>
      </section>

      <section className="detail-body">
        <div className="detail-copy">
          <p className="eyebrow dark-eye">The residence</p>
          <h2>{property.summary}</h2>
          <p>{property.description}</p>
          <div className="catalogue-specs">
            <span><BedDouble size={14} /> {property.bedrooms} bedrooms</span>
            <span><Bath size={14} /> {property.bathrooms} bathrooms</span>
            <span><Ruler size={14} /> {property.size}</span>
          </div>
          <div className="feature-list">
            {property.features.map((feature) => <span key={feature}><Check size={13} /> {feature}</span>)}
          </div>
          <div className="detail-confirmation" role="note">
            <ShieldCheck size={17} />
            <span>{property.availabilityNote ?? "Availability, pricing and service inclusions require Duches confirmation."}</span>
          </div>
        </div>

        <aside className="inquiry-card">
          <p className="eyebrow">Private viewing</p>
          <h3>Experience this residence personally.</h3>
          <p>Request a private viewing, video tour or discreet consultation with the Duches property team.</p>
          <Link className="gold-button" href={`/book?property=${property.slug}`}>Request viewing</Link>
          <Link className="outline-gold" href="/concierge">Ask concierge</Link>
        </aside>
      </section>

      <section className="gallery-strip">
        {property.gallery.map((image, index) => <Image key={image} src={image} alt={`${property.name} gallery ${index + 1}`} width={1400} height={900} sizes="(max-width: 700px) 100vw, 33vw" />)}
      </section>

      {property.status === "For Rent" && (
        <BookingExperience slug={property.slug} name={property.name} maxGuests={property.guests || property.bedrooms * 2} />
      )}
      <SiteFooter />
    </main>
  );
}
