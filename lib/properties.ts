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
  availabilityNote?: string;
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
    features: ["Private elevator", "Infinity terrace", "Chef's kitchen", "Smart-home controls", "24-hour concierge", "Secure parking"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
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
    features: ["Private pool", "Waterfront views", "Housekeeping", "Optional private chef", "Driver on request", "24-hour security"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
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
    features: ["Residents lounge", "Valet service", "Fitness club", "Pool deck", "Concierge desk", "Prime downtown address"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
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
    features: ["Private compound", "Cinema room", "Pool", "Staff quarters", "Event-ready garden", "Security team option"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
  },
  {
    slug: "pearl-coast-duplex",
    name: "Pearl Coast Duplex",
    location: "Banana Island, Lagos",
    city: "Lagos",
    country: "Nigeria",
    price: "$3,850,000",
    status: "For Sale",
    type: "Duplex",
    bedrooms: 5,
    bathrooms: 6,
    size: "860 sqm",
    hero: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "A composed waterfront home with generous family spaces and discreet private access.",
    description: "Pearl Coast Duplex brings together calm interiors, flexible entertaining areas and a secure waterfront setting. It is suited to a family seeking a refined Lagos base with thoughtful service available on request.",
    features: ["Waterfront terrace", "Family lounge", "Private study", "Service kitchen", "Four-car parking", "Estate security"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
  },
  {
    slug: "eko-atlantic-sky-villa",
    name: "Eko Atlantic Sky Villa",
    location: "Eko Atlantic, Lagos",
    city: "Lagos",
    country: "Nigeria",
    price: "$1,980,000",
    status: "For Sale",
    type: "Sky Villa",
    bedrooms: 4,
    bathrooms: 5,
    size: "420 sqm",
    hero: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "A high-floor residence with ocean horizons, private entertaining space and city access.",
    description: "Eko Atlantic Sky Villa is conceived for contemporary coastal living. Floor-to-ceiling glass, quiet bedroom suites and flexible hosting areas create a city residence that feels both connected and private.",
    features: ["Ocean panorama", "Private lobby", "Residents pool", "Wellness suite", "Backup power", "Concierge reception"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
  },
  {
    slug: "maitama-diplomatic-residence",
    name: "Maitama Diplomatic Residence",
    location: "Maitama, Abuja",
    city: "Abuja",
    country: "Nigeria",
    price: "$4,200,000",
    status: "For Sale",
    type: "Mansion",
    bedrooms: 7,
    bathrooms: 9,
    size: "1,480 sqm",
    hero: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "An embassy-district compound designed for formal hosting, family privacy and secure living.",
    description: "Maitama Diplomatic Residence offers an assured setting for executive and multigenerational living. Reception rooms, private family zones and landscaped grounds are supported by staff and security infrastructure.",
    features: ["Formal reception hall", "Private cinema", "Landscaped grounds", "Staff residence", "Security post", "Wellness room"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
  },
  {
    slug: "palm-jumeirah-retreat",
    name: "Palm Jumeirah Retreat",
    location: "Palm Jumeirah, Dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    price: "AED 95,000 /month",
    status: "For Rent",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    guests: 10,
    size: "930 sqm",
    hero: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "A beachfront villa for private stays, family escapes and effortless waterfront entertaining.",
    description: "Palm Jumeirah Retreat pairs direct beach access with warm contemporary interiors. Duches can coordinate arrival, housekeeping, chef service, transport and tailored Dubai experiences around the stay.",
    features: ["Private beach", "Infinity pool", "Daily housekeeping", "Chef on request", "Airport transfer", "Guest concierge"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
  },
  {
    slug: "kensington-garden-residence",
    name: "Kensington Garden Residence",
    location: "Kensington, London",
    city: "London",
    country: "United Kingdom",
    price: "£18,500 /month",
    status: "For Rent",
    type: "Townhouse",
    bedrooms: 4,
    bathrooms: 4,
    guests: 8,
    size: "365 sqm",
    hero: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "A quiet garden-square townhouse positioned for discreet central London living.",
    description: "Kensington Garden Residence balances period character with modern comfort. It is ideal for extended stays requiring privacy, access to central London and a dedicated service team.",
    features: ["Private garden", "Resident housekeeper", "Home office", "Formal dining", "Climate control", "Chauffeur on request"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
  },
  {
    slug: "canary-wharf-panorama",
    name: "Canary Wharf Panorama",
    location: "Canary Wharf, London",
    city: "London",
    country: "United Kingdom",
    price: "£2,150,000",
    status: "For Sale",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    size: "210 sqm",
    hero: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1800&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=88"
    ],
    summary: "A polished river-facing apartment with a private residents club and global-city connectivity.",
    description: "Canary Wharf Panorama offers a low-maintenance London base with panoramic views and a full suite of resident services. It is positioned for an international buyer balancing private use and long-term value.",
    features: ["River views", "Residents club", "Private dining room", "Fitness studio", "24-hour concierge", "Secure storage"],
    availabilityNote: "Showcase residence · availability and pricing require owner confirmation"
  }
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
