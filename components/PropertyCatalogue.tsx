"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bath,
  BedDouble,
  MapPin,
  Ruler,
  Search,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import type { Property } from "../lib/properties";

export function PropertyCatalogue({ properties }: { properties: Property[] }) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("all");
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");

  const cities = useMemo(
    () => Array.from(new Set(properties.map((property) => property.city))).sort(),
    [properties],
  );
  const types = useMemo(
    () => Array.from(new Set(properties.map((property) => property.type))).sort(),
    [properties],
  );

  const filtered = properties.filter((property) => {
    const text = `${property.name} ${property.location} ${property.country} ${property.type}`.toLowerCase();
    return (
      (!query || text.includes(query.toLowerCase())) &&
      (city === "all" || property.city === city) &&
      (status === "all" || property.status === status) &&
      (type === "all" || property.type === type)
    );
  });

  function reset() {
    setQuery("");
    setCity("all");
    setStatus("all");
    setType("all");
  }

  return (
    <section className="catalogue">
      <div className="catalogue-toolbar polished">
        <div>
          <p className="eyebrow dark-eye">Private catalogue</p>
          <h2>Signature residences</h2>
          <p>{filtered.length} curated residence{filtered.length === 1 ? "" : "s"} matching your preferences.</p>
        </div>
        <SlidersHorizontal size={21} />
      </div>

      <div className="collection-disclaimer" role="note">
        <ShieldCheck size={18} />
        <p><strong>Owner-review collection.</strong> Every residence, rate and date remains subject to Duches verification before an offer or payment request is issued.</p>
      </div>

      <div className="catalogue-filters" aria-label="Property filters">
        <label className="search-field-pro">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search residence or location" aria-label="Search residences" />
        </label>
        <select value={city} onChange={(event) => setCity(event.target.value)} aria-label="Filter by city">
          <option value="all">All destinations</option>
          {cities.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={type} onChange={(event) => setType(event.target.value)} aria-label="Filter by property type">
          <option value="all">All residence types</option>
          {types.map((item) => <option key={item}>{item}</option>)}
        </select>
        <select value={status} onChange={(event) => setStatus(event.target.value)} aria-label="Filter by listing status">
          <option value="all">Sale &amp; rental</option>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>
      </div>

      {filtered.length ? (
        <div className="catalogue-grid">
          {filtered.map((property) => (
            <article className="catalogue-card" key={property.slug}>
              <div className="catalogue-image-wrap">
                <Image src={property.hero} alt={property.name} width={1400} height={900} sizes="(max-width: 850px) 100vw, 50vw" />
                <span>{property.status}</span>
              </div>
              <div className="catalogue-info">
                <div className="catalogue-top">
                  <div>
                    <h3>{property.name}</h3>
                    <p className="catalogue-loc"><MapPin size={13} />{property.location}</p>
                  </div>
                  <strong className="catalogue-price">{property.price}</strong>
                </div>
                <div className="catalogue-specs">
                  <span><BedDouble size={13} /> {property.bedrooms} beds</span>
                  <span><Bath size={13} /> {property.bathrooms} baths</span>
                  <span><Ruler size={13} /> {property.size}</span>
                </div>
                <p>{property.summary}</p>
                <small className="availability-note">By private confirmation</small>
                <Link className="text-link" href={`/properties/${property.slug}`}>View residence <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-luxury">
          <h3>No residence matches those filters yet.</h3>
          <p>Adjust your preferences or ask the Duches Private Concierge to curate an off-market option.</p>
          <button onClick={reset}>Reset collection</button>
        </div>
      )}
    </section>
  );
}
