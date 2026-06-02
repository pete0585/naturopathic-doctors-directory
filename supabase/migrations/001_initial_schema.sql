-- Naturopathic Doctor Finder Schema
-- Supabase project: fbuqrnzofktepkzyfmhy
-- Tables use nd_ prefix (spec-aligned; bootstrap created tables before builder ran)

-- ─── nd_listings ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS nd_listings (
  id                      UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug                    TEXT        UNIQUE NOT NULL,
  full_name               TEXT        NOT NULL,
  practice_name           TEXT,
  bio                     TEXT,
  photo_url               TEXT,
  phone                   TEXT,
  email                   TEXT,
  website                 TEXT,
  address_line1           TEXT,
  city                    TEXT        NOT NULL,
  state                   TEXT        NOT NULL,
  zip                     TEXT,
  latitude                DOUBLE PRECISION,
  longitude               DOUBLE PRECISION,
  license_number          TEXT,
  license_state           TEXT,
  specialties             TEXT[]      DEFAULT '{}',
  treatment_modalities    TEXT[]      DEFAULT '{}',
  is_aanp_member          BOOLEAN     DEFAULT false,
  accepts_insurance       BOOLEAN     DEFAULT false,
  offers_telemedicine     BOOLEAN     DEFAULT false,
  accepting_new_patients  BOOLEAN     DEFAULT true,
  listing_tier            TEXT        DEFAULT 'free'  CHECK (listing_tier IN ('free','verified','featured')),
  is_active               BOOLEAN     DEFAULT true,
  is_approved             BOOLEAN     DEFAULT true,
  stripe_customer_id      TEXT,
  stripe_subscription_id  TEXT,
  subscription_expires_at TIMESTAMPTZ,
  claimed_at              TIMESTAMPTZ,
  claimed_by              TEXT,
  source                  TEXT,
  do_not_email            BOOLEAN     DEFAULT false,
  email_source            TEXT,
  upgrade_nudge_step      INTEGER     DEFAULT 0,
  upgrade_nudge_sent_at   TIMESTAMPTZ,
  search_vector           TSVECTOR,
  created_at              TIMESTAMPTZ DEFAULT now(),
  updated_at              TIMESTAMPTZ DEFAULT now()
);

-- Full-text search trigger
CREATE OR REPLACE FUNCTION nd_listings_search_vector_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', coalesce(NEW.full_name, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.practice_name, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW.city, '')), 'C') ||
    setweight(to_tsvector('english', coalesce(NEW.state, '')), 'C') ||
    setweight(to_tsvector('english', array_to_string(NEW.specialties, ' ')), 'D') ||
    setweight(to_tsvector('english', array_to_string(NEW.treatment_modalities, ' ')), 'D');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS nd_listings_tsvector_update ON nd_listings;
CREATE TRIGGER nd_listings_tsvector_update
  BEFORE INSERT OR UPDATE ON nd_listings
  FOR EACH ROW EXECUTE FUNCTION nd_listings_search_vector_update();

-- Indexes
CREATE INDEX IF NOT EXISTS nd_listings_state_idx           ON nd_listings(state);
CREATE INDEX IF NOT EXISTS nd_listings_tier_idx            ON nd_listings(listing_tier);
CREATE INDEX IF NOT EXISTS nd_listings_active_approved_idx ON nd_listings(is_active, is_approved);
CREATE INDEX IF NOT EXISTS nd_listings_search_vector_idx   ON nd_listings USING GIN(search_vector);
CREATE INDEX IF NOT EXISTS nd_listings_slug_idx            ON nd_listings(slug);
CREATE INDEX IF NOT EXISTS nd_listings_specialties_idx     ON nd_listings USING GIN(specialties);
CREATE INDEX IF NOT EXISTS nd_listings_modalities_idx      ON nd_listings USING GIN(treatment_modalities);


-- ─── nd_claims ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS nd_claims (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id    UUID        REFERENCES nd_listings(id),
  email         TEXT        NOT NULL,
  token         TEXT        NOT NULL UNIQUE,
  verified      BOOLEAN     DEFAULT false,
  verified_at   TIMESTAMPTZ,
  expires_at    TIMESTAMPTZ NOT NULL,
  status        TEXT        DEFAULT 'pending',
  nudge_sent_at TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS nd_claims_listing_id_idx ON nd_claims(listing_id);
CREATE INDEX IF NOT EXISTS nd_claims_token_idx      ON nd_claims(token);


-- ─── nd_payments ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS nd_payments (
  id                       UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id               UUID        REFERENCES nd_listings(id),
  stripe_session_id        TEXT,
  stripe_payment_intent_id TEXT,
  amount                   INTEGER,
  tier                     TEXT,
  status                   TEXT,
  created_at               TIMESTAMPTZ DEFAULT now()
);


-- ─── nd_leads ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS nd_leads (
  id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name     TEXT,
  patient_email    TEXT,
  patient_phone    TEXT,
  condition_notes  TEXT,
  state            TEXT,
  specialty_sought TEXT,
  preferred_nd_id  UUID        REFERENCES nd_listings(id),
  status           TEXT        DEFAULT 'new',
  created_at       TIMESTAMPTZ DEFAULT now()
);


-- ─── admin_users ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS admin_users (
  id         UUID  PRIMARY KEY REFERENCES auth.users(id),
  role       TEXT  NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT now()
);


-- ─── Row-Level Security ───────────────────────────────────────────────────────
ALTER TABLE nd_listings  ENABLE ROW LEVEL SECURITY;
ALTER TABLE nd_claims    ENABLE ROW LEVEL SECURITY;
ALTER TABLE nd_payments  ENABLE ROW LEVEL SECURITY;
ALTER TABLE nd_leads     ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users  ENABLE ROW LEVEL SECURITY;

-- Public can read active, approved listings
CREATE POLICY IF NOT EXISTS "Public read active nd listings"
  ON nd_listings FOR SELECT
  USING (is_active = true AND is_approved = true);

CREATE POLICY IF NOT EXISTS "Service role full access nd listings"
  ON nd_listings FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY IF NOT EXISTS "Service role full access nd claims"
  ON nd_claims FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY IF NOT EXISTS "Service role full access nd payments"
  ON nd_payments FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY IF NOT EXISTS "Service role full access nd leads"
  ON nd_leads FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY IF NOT EXISTS "Service role full access admin_users_nd"
  ON admin_users FOR ALL
  USING (auth.role() = 'service_role');
