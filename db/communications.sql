create table if not exists conversations (
  id uuid primary key default gen_random_uuid(), client_id uuid references clients(id) on delete set null,
  lead_id uuid references leads(id) on delete set null, booking_id uuid references bookings(id) on delete set null,
  channel text not null check (channel in ('whatsapp','instagram','facebook','telegram','web','phone','email')),
  external_thread_id text, contact_name text, contact_address text, status text not null default 'open',
  intent text, ai_summary text, ai_score int, assigned_to uuid references staff_users(id) on delete set null,
  last_message_at timestamptz not null default now(), created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists conversation_messages (
  id uuid primary key default gen_random_uuid(), conversation_id uuid not null references conversations(id) on delete cascade,
  direction text not null check (direction in ('inbound','outbound','internal')),
  sender_type text not null check (sender_type in ('client','staff','ai','system')),
  body text, media_url text, external_message_id text, metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create table if not exists call_sessions (
  id uuid primary key default gen_random_uuid(), conversation_id uuid references conversations(id) on delete set null,
  provider text, provider_call_id text unique, phone_number text, status text not null default 'initiated',
  transcript text, summary text, recording_url text, duration_seconds int, disposition text,
  started_at timestamptz, ended_at timestamptz, created_at timestamptz not null default now()
);
create table if not exists communication_settings (
  key text primary key, value jsonb not null default '{}'::jsonb, updated_by text, updated_at timestamptz not null default now()
);
create index if not exists conversations_status_idx on conversations(status,last_message_at desc);
create index if not exists conversations_channel_idx on conversations(channel,last_message_at desc);
create index if not exists messages_conversation_idx on conversation_messages(conversation_id,created_at);
