import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { Leaf, CheckCircle, Shield, Wifi, ArrowRight, Users, Search } from 'lucide-react'
import SearchBar from '@/components/SearchBar'
import ListingCard from '@/components/ListingCard'
import { getFeaturedListings, getTotalCount } from '@/lib/data'
import { SPECIALTIES, TOP_ND_STATES, STATE_NAMES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Find Licensed Naturopathic Doctors Near You | NaturopathicDoctorFinder.com',
  description: 'Find a naturopathic doctor who treats the root cause. The only neutral directory covering all licensed NDs across 25 US jurisdictions. Free to search.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com' },
}

export const revalidate = 3600

async function HeroStats() {
  const total = await getTotalCount()
  return (
    <span className="text-4xl sm:text-5xl font-bold text-brand-cream">
      {total.toLocaleString()}+
    </span>
  )
}

async function FeaturedSection() {
  const featured = await getFeaturedListings()
  if (featured.length === 0) return null
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Featured Naturopathic Doctors</h2>
        <Link href="/listings?tier=featured" className="text-sm text-brand-primary hover:underline font-medium flex items-center gap-1">
          View all <ArrowRight className="w-4 h-4" aria-label="Arrow" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {featured.map((l) => <ListingCard key={l.id} listing={l} />)}
      </div>
    </section>
  )
}

const specialtyHighlights = [
  { key: 'autoimmune', icon: '🛡️', desc: 'Autoimmune disease, Hashimoto\'s, lupus, RA' },
  { key: 'thyroid', icon: '🦋', desc: 'Hypothyroid, Hashimoto\'s, T3/T4 optimization' },
  { key: 'lyme', icon: '🌿', desc: 'Chronic Lyme, co-infections, post-Lyme syndrome' },
  { key: 'fertility', icon: '🌱', desc: 'PCOS, endometriosis, hormonal fertility support' },
  { key: 'gut_health', icon: '🌀', desc: 'IBS, IBD, SIBO, leaky gut, dysbiosis' },
  { key: 'hormones', icon: '⚖️', desc: 'Menopause, testosterone, adrenal, thyroid' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/30 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-brand-cream text-sm font-semibold uppercase tracking-wider">Licensed NDs Only</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Find a doctor who treats<br />
              <span className="text-brand-cream">the root cause.</span>
            </h1>
            <p className="text-green-100 text-lg mb-8 leading-relaxed">
              The only neutral directory covering all ~7,000 licensed Naturopathic Doctors across
              25 US jurisdictions — not just AANP members. Free to search, always.
            </p>

            <Suspense fallback={null}>
              <SearchBar large className="max-w-2xl" />
            </Suspense>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-green-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-cream" aria-label="Check" />
                All licensed NDs — not just AANP members
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-cream" aria-label="Check" />
                Filter by specialty &amp; city
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-cream" aria-label="Check" />
                Free to search, always
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center">
              <Suspense fallback={<span className="text-4xl font-bold text-brand-cream">7,000+</span>}>
                <HeroStats />
              </Suspense>
              <p className="text-green-200 text-sm mt-1">Licensed Naturopathic Doctors</p>
            </div>
            <div className="text-center">
              <span className="text-4xl sm:text-5xl font-bold text-brand-cream">25</span>
              <p className="text-green-200 text-sm mt-1">Licensed US Jurisdictions</p>
            </div>
            <div className="text-center">
              <span className="text-4xl sm:text-5xl font-bold text-brand-cream">$99</span>
              <p className="text-green-200 text-sm mt-1">vs. $480/yr AANP listing</p>
            </div>
          </div>
        </div>
      </section>

      {/* What makes NDs different */}
      <section className="bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why see a Naturopathic Doctor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Licensed NDs complete 4-year graduate programs at CNME-accredited medical schools. They spend more time with patients, run deeper labs, and look for root causes — not just symptoms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4 p-5 rounded-xl bg-surface border border-surface-border">
              <div className="shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-brand-primary" aria-label="Root cause" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Root Cause Medicine</h3>
                <p className="text-sm text-gray-600">NDs spend 60-90 minutes with new patients to understand the full picture — history, labs, lifestyle, and environment.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-surface border border-surface-border">
              <div className="shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-brand-primary" aria-label="Natural" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Whole-Person Approach</h3>
                <p className="text-sm text-gray-600">Botanical medicine, clinical nutrition, IV therapy, acupuncture, homeopathy — tools beyond the pharmaceutical model.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-xl bg-surface border border-surface-border">
              <div className="shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand-primary" aria-label="Licensed" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Fully Licensed</h3>
                <p className="text-sm text-gray-600">Only listing NDs with graduate degrees and state licenses — not unregulated &quot;naturopaths&quot; without formal medical training.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by specialty */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Browse by Specialty</h2>
          <Link href="/listings" className="text-sm text-brand-primary hover:underline font-medium flex items-center gap-1">
            All NDs <ArrowRight className="w-4 h-4" aria-label="Arrow" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialtyHighlights.map((s) => (
            <Link
              key={s.key}
              href={`/listings?specialty=${s.key}`}
              className="flex items-start gap-4 p-4 bg-white rounded-xl border border-surface-border hover:border-brand-primary/40 hover:shadow-sm transition-all group"
            >
              <div className="shrink-0 w-10 h-10 bg-brand-primary/5 group-hover:bg-brand-primary/10 rounded-lg flex items-center justify-center text-lg transition-colors">
                {s.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-brand-primary text-sm transition-colors">
                  {SPECIALTIES[s.key]}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured listings */}
      <Suspense fallback={null}>
        <FeaturedSection />
      </Suspense>

      {/* Telemedicine callout */}
      <section className="bg-brand-cream border-y border-brand-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Wifi className="w-5 h-5 text-brand-primary" aria-label="Telemedicine" />
              <span className="text-brand-primary text-sm font-semibold uppercase tracking-wider">Telemedicine Available</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">See an ND from anywhere in your licensed state</h2>
            <p className="text-gray-600 max-w-xl text-sm">
              Many licensed NDs offer virtual consultations. If your state has ND licensing, you can often see an ND across the state line via telemedicine.
            </p>
          </div>
          <Link
            href="/listings?telemedicine=true"
            className="bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Find Telemedicine NDs
          </Link>
        </div>
      </section>

      {/* Browse by state */}
      <section className="bg-white border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Browse by Licensed State</h2>
          <p className="text-sm text-gray-500 mb-6">Naturopathic medicine is licensed in 25 US jurisdictions. Only NDs in these states appear in our directory.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {TOP_ND_STATES.map((abbr) => (
              <Link
                key={abbr}
                href={`/listings?state=${abbr}`}
                className="flex items-center justify-between px-4 py-3 bg-surface border border-surface-border rounded-lg hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-all text-sm font-medium text-gray-700 hover:text-brand-primary group"
              >
                <span>{STATE_NAMES[abbr]}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-primary transition-colors" aria-label="Arrow" />
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/listings" className="text-sm text-brand-primary hover:underline font-medium">
              View all 25 licensed states →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA for NDs */}
      <section className="bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-brand-cream" aria-label="NDs" />
              <span className="text-brand-cream text-sm font-semibold uppercase tracking-wider">For Naturopathic Doctors</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Your profile may already be here.</h2>
            <p className="text-green-100 max-w-xl">
              We seed from state licensing board rosters. Claim your profile for free — or upgrade to Verified ($99/yr) for photos, bio, specialty tags, and priority placement. That&apos;s 80% less than AANP&apos;s $480/yr bundle.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/listings"
              className="bg-brand-cream hover:bg-white text-brand-primary font-semibold px-6 py-3 rounded-lg text-center transition-colors whitespace-nowrap"
            >
              Find My Profile
            </Link>
            <Link
              href="/submit"
              className="border border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg text-center transition-colors whitespace-nowrap"
            >
              Add My Listing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
