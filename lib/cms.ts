import { properties } from "./properties";

export type MediaKind = "image" | "video" | "audio";
export type ListingStatus = "draft" | "published" | "archived";
export type ListingType = "shortlet" | "property" | "hotel" | "experience";

export type MediaAsset = {
  id: string;
  name: string;
  kind: MediaKind;
  url: string;
  alt?: string;
  duration?: string;
  size?: string;
  createdAt: string;
};

export type ManagedListing = {
  id: string;
  slug: string;
  title: string;
  type: ListingType;
  status: ListingStatus;
  location: string;
  priceLabel: string;
  bedrooms?: number;
  bathrooms?: number;
  guests?: number;
  featured: boolean;
  summary: string;
  amenities: string[];
  media: MediaAsset[];
  updatedAt: string;
};

export const demoAssets: MediaAsset[] = [
  { id:"m1", name:"crown-penthouse-hero.jpg", kind:"image", url:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", alt:"Crown Penthouse living room", size:"4.8 MB", createdAt:"Today" },
  { id:"m2", name:"oceanview-tour.mp4", kind:"video", url:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85", duration:"00:46", size:"82 MB", createdAt:"Today" },
  { id:"m3", name:"duches-arrival-theme.mp3", kind:"audio", url:"#", duration:"01:24", size:"3.2 MB", createdAt:"Yesterday" },
  { id:"m4", name:"grand-duchess-yacht.jpg", kind:"image", url:"https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1200&q=85", alt:"Luxury yacht", size:"5.1 MB", createdAt:"Yesterday" },
];

export const managedListings: ManagedListing[] = [
  ...properties.map((property, index): ManagedListing => ({
    id: `showcase-${index + 1}`,
    slug: property.slug,
    title: property.name,
    type: property.status === "For Rent" ? "shortlet" : "property",
    status: "published",
    location: property.location,
    priceLabel: property.price,
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    guests: property.guests ?? property.bedrooms * 2,
    featured: index < 4,
    summary: property.summary,
    amenities: property.features,
    media: [{
      id: `showcase-media-${index + 1}`,
      name: `${property.slug}-hero.jpg`,
      kind: "image",
      url: property.hero,
      alt: property.name,
      createdAt: "Showcase collection",
    }],
    updatedAt: "Owner review",
  })),
  { id:"e1", slug:"grand-duchess-experience", title:"Grand Duchess Experience", type:"experience", status:"draft", location:"Lagos", priceLabel:"Price on request", guests:10, featured:false, summary:"Villa, yacht, chef, glam team and private content production in one signature experience.", amenities:["Private yacht","Chef & butler","Glam team","Private photoshoot"], media:[demoAssets[3]], updatedAt:"Owner review" },
];
