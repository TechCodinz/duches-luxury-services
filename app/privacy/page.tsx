import { SiteFooter, SiteHeader } from "../../components/SiteShell";

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="legal-page">
        <article>
          <p className="legal-date">Effective 15 August 2026</p>
          <h1>Privacy at Duches</h1>
          <p>Duches Luxury Services uses the information you submit to answer enquiries, prepare property or hospitality requests, coordinate services and support approved transactions.</p>
          <h2>Information we collect</h2>
          <p>This may include your name, contact details, requested dates, guest requirements, property preferences, invoice details and documents you intentionally submit. Payment-card details are handled by the selected payment provider and are not stored by Duches through this website.</p>
          <h2>How information is used</h2>
          <p>Information is used only to provide requested services, verify bookings and payments, communicate important updates, prevent misuse and meet legal or accounting obligations.</p>
          <h2>Sharing and retention</h2>
          <p>Details may be shared with approved property, hospitality, logistics or payment partners only where required to fulfil your request. Records are retained only for as long as reasonably necessary for service, security and regulatory purposes.</p>
          <h2>Your choices</h2>
          <p>You may request access, correction or deletion of eligible personal information by emailing hello@duchesluxury.com. The owner should replace this address with the final business privacy contact before launch.</p>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
