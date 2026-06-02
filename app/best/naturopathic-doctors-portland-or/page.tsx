import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Portland, OR | Top-Rated NDs',
  description:
    'Portland, Oregon has one of the highest concentrations of licensed naturopathic doctors in the country. Browse top-rated NDs in Portland and find one accepting new patients.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-portland-or' },
}

export const revalidate = 3600

export default async function BestNDsPortland() {
  const listings = await getListingsByCity('Portland', 'OR')
  const featured = listings.filter((l) => l.listing_tier === 'featured')
  const verified = listings.filter((l) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...listings.filter((l) => l.listing_tier === 'free')].slice(0, 10)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/cities/portland-or" className="hover:text-brand-primary">Portland, OR</Link>
        <span>/</span>
        <span className="text-gray-700">Best Naturopathic Doctors</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Portland, Oregon
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Portland is the naturopathic medicine capital of the United States. Oregon was among the first states to license NDs, the National University of Natural Medicine (NUNM) is headquartered here, and Portland patients have been working with licensed NDs as primary care providers for decades. The result: a deep, experienced practitioner community with genuine specialization across virtually every aspect of naturopathic medicine.
        </p>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in Portland, OR — verified and featured listings shown first
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {top.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </>
      ) : (
        <div className="text-center py-12 mb-10">
          <p className="text-gray-500 mb-4">Listings are loading — check back shortly.</p>
        </div>
      )}

      <div className="text-center mb-12">
        <Link
          href="/cities/portland-or"
          className="text-brand-primary font-medium hover:underline"
        >
          See all naturopathic doctors in Portland →
        </Link>
      </div>

      {/* Local guide content */}
      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
        <h2>Naturopathic Medicine in Portland, Oregon</h2>
        <p>
          Portland&apos;s naturopathic medicine community isn&apos;t just large — it&apos;s institutionally deep. NUNM (National University of Natural Medicine), one of North America&apos;s eight CNME-accredited ND schools, trains hundreds of NDs here annually. Portland practitioners have been working with patients seeking alternatives to conventional medicine for over a century, and the community reflects that history: NDs here are comfortable functioning as primary care providers, not just specialty consultants.
        </p>

        <h3>What Portland NDs Specialize In</h3>
        <p>
          Portland&apos;s patient population drives interesting specialty concentrations. Tech and creative professionals dealing with burnout, anxiety, and sleep dysfunction are a large referral base. Chronic illness patients — particularly those with autoimmune conditions, Lyme disease, mold illness, and gut disorders — often relocate to Portland specifically to access skilled integrative practitioners. You&apos;ll also find a strong pediatric ND community, driven by Portland parents who prefer a gentler, less-intervention-heavy approach to childhood health.
        </p>

        <h3>How to Find the Right Portland ND</h3>
        <p>
          With this many options, the filtering matters. Use the specialty filters to narrow to NDs who specifically list your condition as a focus area. Most Portland NDs offer a free 15-minute phone consultation — take it. Portland practitioners tend to be direct about their approach, who they&apos;re best suited to help, and when they&apos;d refer you elsewhere. That clarity is a feature.
        </p>

        <h3>Telemedicine in Oregon</h3>
        <p>
          Many Portland NDs offer telemedicine for Oregon patients, and some can see patients from other licensed ND states. If you&apos;re outside Portland but in Oregon, telemedicine dramatically expands your access to the state&apos;s practitioner pool. Filter for telemedicine availability on the listings page.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND in Portland?</h2>
        <p className="text-gray-600 mb-4">
          Claim your free listing or upgrade to a Verified profile to reach patients searching for a naturopathic doctor in Portland.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/listings"
            className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors"
          >
            Find Your Listing
          </Link>
          <Link
            href="/submit"
            className="bg-white border border-brand-primary text-brand-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary/5 transition-colors"
          >
            Submit Your Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
