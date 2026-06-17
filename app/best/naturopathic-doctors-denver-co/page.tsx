import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Denver, CO | Top-Rated NDs',
  description:
    'Find licensed naturopathic doctors in Denver, Colorado. Browse top-rated NDs in Denver, Boulder, Fort Collins, and the greater Front Range.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-denver-co' },
}

export const revalidate = 3600

export default async function BestNDsDenver() {
  const listings = await getListingsByCity('Denver', 'CO')
  const featured = listings.filter((l) => l.listing_tier === 'featured')
  const verified = listings.filter((l) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...listings.filter((l) => l.listing_tier === 'free')].slice(0, 10)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/cities/denver-co" className="hover:text-brand-primary">Denver, CO</Link>
        <span>/</span>
        <span className="text-gray-700">Best Naturopathic Doctors</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Denver, Colorado
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Colorado is a licensed naturopathic medicine state with a large and well-established ND community along the Front Range. Denver and Boulder together represent one of the most active integrative medicine markets in the country — driven by an educated, health-focused population with strong interest in functional and preventive care. Colorado NDs complete four-year graduate medical training, pass national board exams, and hold state licensure with prescribing authority.
        </p>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in Denver, CO — verified and featured listings shown first
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
          href="/cities/denver-co"
          className="text-brand-primary font-medium hover:underline"
        >
          See all naturopathic doctors in Denver →
        </Link>
      </div>

      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
        <h2>Naturopathic Medicine in Denver</h2>
        <p>
          Denver&apos;s naturopathic community is concentrated in Capitol Hill, Cherry Creek, Highland, and the southern suburbs — with a strong Boulder pipeline that feeds well-trained NDs to the metro. The integration between Denver&apos;s outdoor sports culture and its healthcare community means NDs here are particularly well-versed in performance optimization, sports injury recovery, and altitude adaptation alongside conventional ND specialties.
        </p>

        <h3>What Denver NDs Specialize In</h3>
        <p>
          Thyroid and hormone health, Lyme disease and tick-borne illness (Colorado has a significant tick-borne disease burden), gut health, mental health support, and sports medicine are the specialties most well-represented in the Denver ND community. Denver&apos;s tech and outdoor professional population also drives strong demand for longevity, metabolic health, and performance-focused naturopathic care. Boulder-area NDs tend toward a more research-oriented, evidence-based integrative approach.
        </p>

        <h3>Telehealth for Colorado Patients</h3>
        <p>
          Many Denver and Boulder NDs provide telehealth for Colorado patients, which is practical given the state&apos;s geographic spread. Patients in Colorado Springs, Fort Collins, Grand Junction, or mountain communities can access Front Range NDs via telehealth without the drive. Filter for telehealth availability on the listings page.
        </p>
      </div>

      <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND in Denver or Boulder?</h2>
        <p className="text-gray-600 mb-4">
          Claim your free listing or upgrade to a Verified profile to reach patients searching for a naturopathic doctor in Colorado.
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
