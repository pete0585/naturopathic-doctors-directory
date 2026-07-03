import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in San Francisco, CA | NaturopathicDoctorFinder.com',
  description: 'Find licensed naturopathic doctors in San Francisco and the Bay Area. California NDs have a broad scope including minor surgery and limited prescribing. Compare SF ND practices.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-san-francisco-ca' },
}

export const revalidate = 3600

const FAQ = [
  {
    q: 'Are naturopathic doctors licensed in California?',
    a: "Yes. California licenses naturopathic doctors under the Naturopathic Doctors Practice Act. California NDs (CNDs) are licensed healthcare providers who can diagnose and treat medical conditions, perform minor surgery, and prescribe from a limited formulary of natural medicines and select pharmaceuticals. California's scope is broader than some states but narrower than Arizona or Oregon. The California Department of Consumer Affairs regulates ND licensure.",
  },
  {
    q: 'What do San Francisco NDs specialize in?',
    a: "San Francisco NDs reflect the Bay Area's priorities: environmental medicine, integrative oncology support, LGBTQ+ healthcare, hormone optimization, gut health and digestive disorders, autoimmune disease, and functional approaches to mental health. The Bay Area's highly educated, wellness-conscious patient population drives demand for evidence-based integrative care, and many SF NDs maintain collaborative relationships with UCSF and other conventional providers.",
  },
  {
    q: 'Does California insurance cover naturopathic doctors?',
    a: "California requires that health insurance plans covering physical therapy must also cover naturopathic medicine when an ND provides the same services. In practice, coverage varies — Covered California plans, Blue Shield of California, Anthem BCBS California, and Kaiser Permanente (limited) have varying ND coverage. Kaiser rarely covers outside-network NDs. Non-Kaiser Bay Area plans are more likely to cover ND visits. Ask about in-network status and superbill options when booking.",
  },
  {
    q: 'What should I look for in an SF naturopathic doctor?',
    a: "Ask about California ND licensure (CNDs must pass NPLEX and hold a CA license), their practice focus, whether they co-manage with conventional physicians (common in the Bay Area), and whether they accept your insurance. Look for NDs with additional training in your area of concern — an ND with functional oncology training for cancer support, or specific hormone health training for perimenopause or testosterone optimization. The Bay Area ND community is generally well-trained and evidence-informed.",
  },
]

export default async function BestSanFranciscoNDPage() {
  const listings = await getListingsByCity('San Francisco', 'California').catch(() => [])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-stone-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-emerald-600 transition-colors">Directory</Link>
          <span>/</span>
          <span className="text-stone-600">San Francisco, CA</span>
        </nav>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 mb-10">
          <div className="flex items-center gap-2 text-emerald-600 mb-3">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">San Francisco, CA</span>
          </div>
          <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
            Best Naturopathic Doctors in San Francisco, CA
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl leading-relaxed">
            San Francisco and the Bay Area have one of the highest concentrations of licensed
            naturopathic doctors on the West Coast. California NDs practice under a broad scope of
            practice, and Bay Area NDs tend to be deeply evidence-informed — reflecting the
            scientifically literate patient population they serve. From integrative oncology to
            environmental medicine and hormone health, SF&apos;s ND community covers the full range
            of naturopathic specialties.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-stone-500">
            <span>{listings.length > 0 ? `${listings.length}+` : '30+'} NDs listed</span>
            <span>·</span>
            <span>California licensed (CND)</span>
            <span>·</span>
            <span>Evidence-based approach</span>
            <span>·</span>
            <span>Telehealth available</span>
          </div>
        </div>

        {listings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-stone-800">Naturopathic Doctors in San Francisco</h2>
              <Link href="/listings?city=San Francisco&state=CA" className="flex items-center gap-1 text-sm text-emerald-600 font-semibold hover:opacity-80">
                See all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border p-12 text-center mb-12">
            <p className="text-stone-500 mb-4">Search naturopathic doctors in San Francisco below.</p>
            <Link href="/listings?city=San Francisco&state=CA" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700">
              Search SF NDs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-5 mb-12">
          <h2 className="text-2xl font-semibold text-stone-800">San Francisco ND Questions Answered</h2>
          {FAQ.map(({ q, a }) => (
            <div key={q} className="bg-white rounded-xl border border-stone-100 p-6 shadow-sm">
              <h3 className="font-semibold text-stone-800 mb-2">{q}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-stone-100">
          <h3 className="text-lg font-semibold text-stone-800 mb-4">Bay Area ND Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/best/naturopathic-doctors-los-angeles-ca" className="text-sm text-emerald-600 hover:opacity-80 font-medium">NDs in Los Angeles →</Link>
            <Link href="/guides/naturopathic-medicine-insurance" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Does Insurance Cover ND? →</Link>
            <Link href="/guides/naturopathic-doctor-for-hormones" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Naturopathic Doctor for Hormones →</Link>
            <Link href="/categories/womens-health-naturopath" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Women's Health NDs →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
