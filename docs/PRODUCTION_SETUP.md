# Duches Production Wiring

The application is intentionally usable in demo mode without external credentials. Production mode activates as services are connected.

## 1. Database
Provision a Postgres database (recommended: Neon through Vercel Marketplace), set `DATABASE_URL`, then run `db/schema.sql` once.

## 2. Admin protection
Set a strong `DUCHES_ADMIN_ACCESS_CODE` and a random `DUCHES_SESSION_SECRET` (32+ characters). When both exist, `/admin/*` is protected by the Next.js 16 `proxy.ts` boundary and APIs also perform server-side authorization checks.

## 3. Media
Provision Vercel Blob or an equivalent object store and set its credentials. The CMS already accepts image/video/audio concepts; the storage adapter is designed to be swapped without changing the owner UI.

## 4. Payments
Connect verified Duches Paystack and/or Stripe accounts. Payment creation remains approval-gated until a provider is connected.

## 5. Social channels
Connect official Meta business credentials for WhatsApp/Instagram/Facebook and a Telegram bot token. Provider adapters remain isolated from the unified inbox and publishing workflow.

## 6. AI
Connect a production AI provider/gateway only after business policies, escalation rules and approved content sources are finalized.

## Safety defaults
- No invented inventory availability.
- No autonomous price changes.
- No autonomous refunds.
- No unapproved payment requests.
- No unapproved social publishing.
- Audit-sensitive actions should write to `audit_events` once the database is active.
