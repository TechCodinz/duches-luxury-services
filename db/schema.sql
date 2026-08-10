create extension if not exists pgcrypto;

create table if not exists staff_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  display_name text not null,
  role text not null check (role in ('owner','manager','concierge','finance','editor','viewer')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists listings (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  content_type text not null check (content_type in ('shortlet','property','hotel','experience')),
  status text not null default 'draft' check (status in ('draft','published','archived')),
  location text not null,
  currency text not null default 'NGN',
  price_amount numeric(14,2),
  price_label text,
  bedrooms int,
  bathrooms int,
  guest_capacity int,
  description text,
  amenities jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid references listings(id) on delete set null,
  kind text not null check (kind in ('image','video','audio','document')),
  storage_key text not null,
  url text not null,
  mime_type text,
  size_bytes bigint,
  alt_text text,
  duration_seconds numeric(10,2),
  position int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text,
  phone text,
  preferred_channel text,
  tier text not null default 'standard',
  notes text,
  tags jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete set null,
  source text not null,
  intent text not null,
  status text not null default 'new',
  score int,
  request_summary text,
  estimated_value numeric(14,2),
  currency text,
  assigned_to uuid references staff_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete restrict,
  listing_id uuid references listings(id) on delete restrict,
  status text not null default 'pending_availability',
  start_date date not null,
  end_date date,
  guests int,
  currency text,
  approved_amount numeric(14,2),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists availability_blocks (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references listings(id) on delete cascade,
  start_date date not null,
  end_date date not null,
  state text not null check (state in ('available','hold','booked','blocked')),
  nightly_rate numeric(14,2),
  currency text,
  note text
);

create table if not exists invoices (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete set null,
  client_id uuid references clients(id) on delete restrict,
  reference text unique not null,
  status text not null default 'draft',
  currency text not null,
  amount numeric(14,2) not null,
  due_at timestamptz,
  paid_at timestamptz,
  provider_reference text,
  created_at timestamptz not null default now()
);

create table if not exists content_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text,
  status text not null default 'draft',
  channels jsonb not null default '[]'::jsonb,
  scheduled_at timestamptz,
  published_at timestamptz,
  created_by uuid references staff_users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references clients(id) on delete set null,
  listing_id uuid references listings(id) on delete set null,
  rating int check (rating between 1 and 5),
  body text not null,
  status text not null default 'pending',
  source text,
  created_at timestamptz not null default now()
);

create table if not exists audit_events (
  id bigserial primary key,
  actor_type text not null,
  actor_id text,
  action text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists listings_status_idx on listings(status);
create index if not exists bookings_dates_idx on bookings(start_date,end_date);
create index if not exists leads_status_idx on leads(status);
create index if not exists audit_created_idx on audit_events(created_at desc);
