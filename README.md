# NaturopathicDoctorFinder.com

Directory of licensed Naturopathic Doctors (NDs) in states where naturopathic medicine is licensed and regulated.

## Stack

- Next.js 15 (App Router, TypeScript)
- Tailwind CSS (forest green + warm cream palette)
- Supabase (Postgres + Auth + RLS)
- Stripe (subscriptions — Verified $99/yr, Featured $199/yr)
- Resend (transactional email from mail.naturopathicdoctorfinder.com)
- Deployed on Vercel

## Local Setup

```bash
# Install dependencies
npm install

# Copy env vars
cp .env.example .env.local
# Fill in your Supabase, Stripe, and Resend credentials

# Run dev server
npm run dev
```

## Supabase Setup

1. Apply the initial migration:
   ```bash
   # Via Supabase dashboard → SQL Editor, paste:
   cat supabase/migrations/001_initial_schema.sql
   ```

2. Or via Supabase CLI:
   ```bash
   supabase db push
   ```

The migration creates `nd_listings`, `nd_claims`, `nd_payments`, `nd_leads` tables with RLS policies, triggers, and GIN indexes.

## Seed Data

```bash
# Set env vars first, then:
npx tsx scripts/seed.ts
```

Seeds ~50 sample ND listings across licensed states.

## Stripe Setup

1. Create two products in Stripe:
   - **Verified ND** — $99/year recurring
   - **Featured ND** — $199/year recurring

2. Copy price IDs to `.env.local` as `STRIPE_VERIFIED_PRICE_ID` and `STRIPE_FEATURED_PRICE_ID`.

3. Set up webhook endpoint at `https://www.naturopathicdoctorfinder.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`

4. Copy webhook signing secret to `STRIPE_WEBHOOK_SECRET`.

## Vercel Deployment

All env vars are already set in the Vercel project via bootstrap. Deploy via:

```bash
git push origin main
```

Vercel auto-deploys on push to main.

## Admin Panel

Visit `/admin` — protected by Supabase Auth. Only users whose IDs are listed in `ADMIN_USER_IDS` env var can access it.

## Licensed States

This directory only lists NDs licensed in the 25 US jurisdictions where naturopathic medicine is regulated:
AK, AZ, CA, CO, CT, DC, HI, ID, KS, ME, MD, MA, MN, MT, NJ, NH, NM, ND, OR, RI, UT, VT, WA, WY, PR

## Revenue Model

- **Free listing** — auto-approved, basic profile
- **Verified ND ($99/yr)** — license badge, priority placement, contact form
- **Featured ND ($199/yr)** — everything in Verified + hero placement + AANP badge highlight

Outreach sequence emails unclaimed NDs automatically.
