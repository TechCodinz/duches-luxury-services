"use client";

import { CalendarDays, Car, ChefHat, Plane, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useMemo, useState } from "react";

type Props = { slug: string; name: string; maxGuests: number; currency?: string };
type QuoteState = {
  ok?: boolean;
  error?: string;
  status?: string;
  message?: string;
  bookingReference?: string;
  quote?: { total?: number; currency?: string };
};

const extras = [
  { id: "airport", label: "Airport transfer", icon: Plane },
  { id: "chauffeur", label: "Private chauffeur", icon: Car },
  { id: "chef", label: "Private chef", icon: ChefHat },
  { id: "security", label: "Executive security", icon: ShieldCheck },
];

export default function BookingExperience({ slug, name, maxGuests, currency = "USD" }: Props) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [guests, setGuests] = useState(2);
  const [selected, setSelected] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [state, setState] = useState<QuoteState | null>(null);
  const [busy, setBusy] = useState(false);

  const nights = useMemo(
    () => start && end ? Math.max(0, Math.ceil((new Date(end).getTime() - new Date(start).getTime()) / 86400000)) : 0,
    [start, end],
  );

  function toggle(id: string) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  async function request() {
    setBusy(true);
    setState(null);
    try {
      const response = await fetch("/api/booking/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          slug,
          startDate: start,
          endDate: end,
          guests,
          extras: selected,
          client: { name: nameValue, email, phone },
        }),
      });
      setState(await response.json());
    } catch {
      setState({ error: "We could not prepare your request. Please try again or contact the private concierge." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="booking-experience">
      <div className="booking-exp-head">
        <div>
          <p className="eyebrow dark-eye">Reserve your stay</p>
          <h2>Build your Duches experience.</h2>
          <p>Select dates, guests and private services. Final availability and any non-published pricing remain subject to Duches confirmation.</p>
        </div>
        <Sparkles size={26} />
      </div>
      <div className="booking-exp-grid">
        <div className="booking-exp-form">
          <div className="date-grid">
            <label>Arrival<input type="date" value={start} onChange={(event) => setStart(event.target.value)} /></label>
            <label>Departure<input type="date" value={end} min={start} onChange={(event) => setEnd(event.target.value)} /></label>
            <label>Guests<select value={guests} onChange={(event) => setGuests(Number(event.target.value))}>{Array.from({ length: Math.max(1, maxGuests) }, (_, index) => <option key={index + 1}>{index + 1}</option>)}</select></label>
          </div>
          <h3>Enhance your stay</h3>
          <div className="extras-grid">
            {extras.map((extra) => {
              const Icon = extra.icon;
              return <button type="button" className={selected.includes(extra.id) ? "extra-card active" : "extra-card"} onClick={() => toggle(extra.id)} key={extra.id}><Icon size={19} /><span>{extra.label}</span></button>;
            })}
          </div>
          <div className="guest-grid">
            <label>Full name<input value={nameValue} onChange={(event) => setNameValue(event.target.value)} placeholder="Your name" autoComplete="name" /></label>
            <label>Email<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="you@example.com" autoComplete="email" /></label>
            <label>Phone / WhatsApp<input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+234 ..." autoComplete="tel" /></label>
          </div>
          <button className="gold-button" disabled={busy || !start || !end || !email || !nameValue} onClick={request}>{busy ? "Preparing request…" : "Request availability & quote"}</button>
          {state?.error && <p className="booking-error">{state.error}</p>}
        </div>

        <aside className="booking-summary">
          <p className="eyebrow">Private stay summary</p>
          <h3>{name}</h3>
          <div>
            <span><CalendarDays size={15} /> {nights || 0} night{nights === 1 ? "" : "s"}</span>
            <span><Users size={15} /> {guests} guest{guests === 1 ? "" : "s"}</span>
          </div>
          <p>{selected.length ? `${selected.length} concierge enhancement${selected.length === 1 ? "" : "s"} selected` : "Add chauffeur, chef, transfers or security as needed."}</p>
          {state?.ok && (
            <div className="quote-result">
              <strong>{state.status === "available" ? "Dates currently available" : "Request received"}</strong>
              {state.quote?.total && <b>{state.quote.currency ?? currency} {Number(state.quote.total).toLocaleString()}</b>}
              <p>{state.message}</p>
              {state.bookingReference && <a className="outline-gold" href={`/client/itinerary/${state.bookingReference}`}>View request itinerary</a>}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
