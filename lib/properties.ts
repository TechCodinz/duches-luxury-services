export type Property = {
  slug: string;
  name: string;
  location: string;
  city: string;
  country: string;
  price: string;
  status: "For Sale" | "For Rent";
  type: string;
  bedrooms: number;
  bathrooms: number;
  guests?: number;
  size: string;
  hero: string;
  gallery: string[];
  summary: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    slug: "the-crown-penthouse",
    name: "The Crown Penthouse",
    location: "Victoria Island, Lagos",
    city: "Lagos",
    country: "Nigeria",
    price: "$2,500,000",
    status: "For Sale",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 5,
    size: "610 sqm",
    hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "A skyline residence with panoramic views, private lift access and hotel-level service.",
    description: "The Crown Penthouse is designed for private, elevated city living. Generous entertaining spaces, calm material finishes and a seamless indoor-outdoor plan frame uninterrupted views across Victoria Island.",
    features: ["Private elevator", "Infinity terrace", "Chef's kitchen", "Smart-home controls", "24-hour concierge", "Secure parking"]
  },
  {
    slug: "oceanview-residence",
    name: "Oceanview Residence",
    location: "Lekki, Lagos",
    city: "Lagos",
    country: "Nigeria",
    price: "$15,000 /month",
    status: "For Rent",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    guests: 10,
    size: "780 sqm",
    hero: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "A private waterfront villa created for extended stays, entertaining and total privacy.",
    description: "Oceanview Residence combines resort calm with city access. The home includes a private pool, expansive lounge areas and optional staffing through Duches concierge.",
    features: ["Private pool", "Waterfront views", "Housekeeping", "Optional private chef", "Driver on request", "24-hour security"]
  },
  {
    slug: "skyline-towers",
    name: "Skyline Towers",
    location: "Downtown, Dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    price: "$1,750,000",
    status: "For Sale",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 4,
    size: "295 sqm",
    hero: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "A refined downtown address with iconic skyline access and residents-only amenities.",
    description: "Skyline Towers offers a highly serviced urban lifestyle with direct access to Dubai's hospitality, retail and business districts. The residence is positioned for both private use and investment.",
    features: ["Residents lounge", "Valet service", "Fitness club", "Pool deck", "Concierge desk", "Prime downtown address"]
  },
  {
    slug: "hillside-mansion",
    name: "Hillside Mansion",
    location: "Maitama, Abuja",
    city: "Abuja",
    country: "Nigeria",
    price: "$20,000 /month",
    status: "For Rent",
    type: "Mansion",
    bedrooms: 6,
    bathrooms: 7,
    guests: 12,
    size: "1,120 sqm",
    hero: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "A grand private compound in Maitama with expansive grounds and full-service staffing options.",
    description: "Hillside Mansion balances scale with discretion. Designed for executive stays, family visits and private hosting, the residence can be supported by a dedicated Duches service team.",
    features: ["Private compound", "Cinema room", "Pool", "Staff quarters", "Event-ready garden", "Security team option"]
  }
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
