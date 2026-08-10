import { PageHero, SiteFooter, SiteHeader } from "../../components/SiteShell";
import { PropertyCatalogue } from "../../components/PropertyCatalogue";
import { properties } from "../../lib/properties";

export default function PropertiesPage(){return <main><SiteHeader/><PageHero eyebrow="The Duches Collection" title="Rare homes. Carefully selected." copy="Explore residences chosen for location, architecture, privacy and the quality of life they make possible." image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90"/><PropertyCatalogue properties={properties}/><SiteFooter/></main>}
