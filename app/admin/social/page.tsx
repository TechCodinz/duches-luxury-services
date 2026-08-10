import "./social.css";
import {
  Bot,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  Facebook,
  Instagram,
  MessageCircle,
  PhoneCall,
  Send,
  Sparkles,
} from "lucide-react";
import { demoConversations, socialChannels } from "../../../lib/social-commerce";

const channelIcon: Record<string, React.ReactNode> = {
  whatsapp: <MessageCircle size={18} />,
  instagram: <Instagram size={18} />,
  facebook: <Facebook size={18} />,
  telegram: <Send size={18} />,
  phone: <PhoneCall size={18} />,
};

export default function SocialCommercePage() {
  return (
    <main className="ops-page">
      <section className="ops-hero">
        <div>
          <p className="eyebrow">Duches Social Commerce</p>
          <h1>One command centre for conversations, orders and content.</h1>
          <p>
            Connect official business channels, qualify inquiries with AI, route high-value clients to staff,
            generate payment links and publish luxury content from one workspace.
          </p>
        </div>
        <div className="ops-hero-badge"><Sparkles size={18} /> AI assisted</div>
      </section>

      <section className="ops-kpis">
        <article><strong>5</strong><span>Channels prepared</span></article>
        <article><strong>3</strong><span>Live demo conversations</span></article>
        <article><strong>&lt; 1 min</strong><span>Target first response</span></article>
        <article><strong>24/7</strong><span>Automated lead capture</span></article>
      </section>

      <section className="ops-grid two">
        <div className="ops-panel">
          <div className="ops-panel-head"><div><p className="eyebrow dark-eye">Integrations</p><h2>Channel connections</h2></div><Bot size={22} /></div>
          <div className="channel-list">
            {socialChannels.map((channel) => (
              <article className="channel-row" key={channel.id}>
                <span className="channel-icon">{channelIcon[channel.id]}</span>
                <div><strong>{channel.name}</strong><p>{channel.purpose}</p></div>
                <span className="status-pill pending">Ready to connect</span>
              </article>
            ))}
          </div>
        </div>

        <div className="ops-panel">
          <div className="ops-panel-head"><div><p className="eyebrow dark-eye">Automation</p><h2>AI concierge rules</h2></div><Sparkles size={22} /></div>
          <div className="automation-list">
            <Automation icon={<MessageCircle />} title="Instant qualification" copy="Identify property, dates, budget, guest count and intent from every inbound message." />
            <Automation icon={<CreditCard />} title="Payment handoff" copy="Create a secure checkout or deposit request only after price and availability are confirmed." />
            <Automation icon={<CalendarClock />} title="Booking coordination" copy="Offer consultation or viewing slots and hand confirmed requests to the Duches team." />
            <Automation icon={<PhoneCall />} title="AI call assistant" copy="Answer common questions, collect requirements, summarize calls and escalate VIP or sensitive conversations." />
          </div>
        </div>
      </section>

      <section className="ops-grid two">
        <div className="ops-panel">
          <div className="ops-panel-head"><div><p className="eyebrow dark-eye">Unified Inbox</p><h2>Priority conversations</h2></div><MessageCircle size={22} /></div>
          <div className="conversation-list">
            {demoConversations.map((conversation) => (
              <article className="conversation-row" key={conversation.id}>
                <div className="conversation-top"><strong>{conversation.contactName}</strong><span>{conversation.updatedAt}</span></div>
                <p>{conversation.lastMessage}</p>
                <div className="conversation-meta"><span>{conversation.channel}</span><span>{conversation.intent.replace("_", " ")}</span><span>{conversation.status.replace("_", " ")}</span></div>
              </article>
            ))}
          </div>
        </div>

        <div className="ops-panel composer-panel">
          <div className="ops-panel-head"><div><p className="eyebrow dark-eye">Content Studio</p><h2>Post once, distribute well</h2></div><Send size={22} /></div>
          <div className="composer-preview">
            <span className="mini-label">Draft campaign</span>
            <h3>Weekend at The Crown Penthouse</h3>
            <p>Editorial property story with gallery, availability CTA and trackable booking link.</p>
            <div className="channel-chips"><span>Instagram</span><span>Facebook</span><span>Telegram</span><span>WhatsApp</span></div>
          </div>
          <div className="publish-steps">
            <div><CheckCircle2 size={16} /><span>AI adapts captions per channel</span></div>
            <div><CheckCircle2 size={16} /><span>Schedule by audience timezone</span></div>
            <div><CheckCircle2 size={16} /><span>Attach property or package checkout link</span></div>
            <div><CheckCircle2 size={16} /><span>Track inquiries back to the source post</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Automation({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return <article className="automation-row"><span>{icon}</span><div><strong>{title}</strong><p>{copy}</p></div></article>;
}
