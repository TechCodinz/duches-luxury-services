# Duches Production Wiring

The application is intentionally usable in owner-review mode without external credentials. Production mode activates as services are connected.

## Launch order
1. Deploy the current build for the owner presentation.
2. Confirm the final domain, business email, phone/WhatsApp number, legal business name and social handles.
3. Replace or approve every showcase residence, image, price and service inclusion in `lib/properties.ts`.
4. Connect the database and run `db/schema.sql`.
5. Configure admin protection before sharing `/admin`.
6. Connect media, payments and messaging only after the owner supplies verified business accounts.
7. Re-run `npm run check`, test a complete enquiry, booking and payment-review flow, then enable the public domain.

## 1. Database
Provision a Postgres database (recommended: Neon through Vercel Marketplace), set `DATABASE_URL`, then run `db/schema.sql` once.

## 2. Admin protection
Set a strong `DUCHES_ADMIN_ACCESS_CODE` and a random `DUCHES_SESSION_SECRET` (32+ characters). When both exist, `/admin/*` is protected by the Next.js 16 `proxy.ts` boundary and APIs also perform server-side authorization checks.

Do not launch a public admin route without both values. Owner-review mode intentionally leaves the dashboard accessible so the client can inspect it.

## 3. Media
Provision Vercel Blob or an equivalent object store and set its credentials. The CMS already accepts image/video/audio concepts; the storage adapter is designed to be swapped without changing the owner UI.

## 4. Payments
Connect verified Duches Paystack and/or Stripe accounts. Payment creation remains approval-gated until a provider is connected.

## 5. Social channels
Connect official Meta business credentials for WhatsApp/Instagram/Facebook and a Telegram bot token. Provider adapters remain isolated from the unified inbox and publishing workflow.

## 6. AI
Connect a production AI provider/gateway only after business policies, escalation rules and approved content sources are finalized.

## Safety defaults
- Showcase inventory is visibly marked as owner-review content.
- No residence is treated as available until Duches confirms it.
- No autonomous price changes.
- No autonomous refunds.
- No unapproved payment requests.
- No unapproved social publishing.
- Audit-sensitive actions should write to `audit_events` once the database is active.
