import { SiteFooter, SiteHeader } from "../../components/SiteShell";

export default function TermsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="legal-page">
        <article>
          <p className="legal-date">Effective 15 August 2026</p>
          <h1>Service terms</h1>
          <p>This website presents Duches Luxury Services&apos; property, hospitality and concierge capabilities. Published showcase content does not itself create a reservation, tenancy, sale agreement or guarantee of availability.</p>
          <h2>Availability and pricing</h2>
          <p>All residences, dates, rates, inclusions and partner services require written Duches confirmation. A request becomes binding only after the parties receive and accept the relevant approved offer, agreement or invoice.</p>
          <h2>Payments</h2>
          <p>Use only payment instructions issued through an approved Duches channel. A submitted transfer receipt is evidence for review and does not confirm settlement. Duches confirms a booking only after payment is independently verified.</p>
          <h2>Partner services</h2>
          <p>Some stays, transport, dining, wellness and other experiences are fulfilled by vetted independent partners. Their applicable rules may form part of the final booking terms.</p>
          <h2>Owner approval</h2>
          <p>These launch terms are a practical website foundation, not jurisdiction-specific legal advice. The business owner should approve them with qualified counsel before accepting live transactions.</p>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
