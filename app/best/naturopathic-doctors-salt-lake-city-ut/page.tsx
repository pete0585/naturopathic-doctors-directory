import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Salt Lake City, UT | Top-Rated NDs',
  description:
    'Find licensed naturopathic doctors in Salt Lake City, Utah. Browse top-rated NDs in Salt Lake City, Sandy, Draper, and the greater Wasatch Front.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-salt-lake-city-ut' },
}

export const revalidate = 3600

export default async function BestNDsSaltLakeCity() {
  const listings = await getListingsByCity('Salt Lake City', 'UT')
  const featured = listings.filter((l) => l.listing_tier === 'featured')
  const verified = listings.filter((l) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...listings.filter((l) => l.listing_tier === 'free')].slice(0, 10)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/cities/salt-lake-city-ut" className="hover:text-brand-primary">Salt Lake City, UT</Link>
        <span>/</span>
        <span className="text-gray-700">Best Naturopathic Doctors</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Salt Lake City, Utah
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Utah is a licensed naturopathic medicine state, giving Salt Lake City patients access to NDs with full graduate medical training, NPLEX board certification, and state licensure. Utah NDs can order labs, perform physical exams, and prescribe from a naturopathic formulary. The Salt Lake City area — including Sandy, Draper, Murray, and West Jordan along the Wasatch Front — has a growing naturopathic community across the full spectrum of natural medicine specialties.
        </p>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in Salt Lake City, UT — verified and featured listings shown first
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
          href="/cities/salt-lake-city-ut"
          className="text-brand-primary font-medium hover:underline"
        >
          See all naturopathic doctors in Salt Lake City →
        </Link>
      </div>

      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
        <h2>Naturopathic Medicine in Salt Lake City</h2>
        <p>
          Utah&apos;s ND licensing law allows Salt Lake City naturopathic doctors to function as primary care providers — an important distinction for patients who want natural medicine as their main healthcare, not a supplement to conventional care. Utah NDs complete the same four-year graduate curriculum as NDs in Oregon and Washington, and the licensing framework reflects that depth of training.
        </p>

        <h3>What Salt Lake City NDs Specialize In</h3>
        <p>
          Salt Lake City&apos;s active outdoor lifestyle and health-conscious culture drives demand for NDs who specialize in sports medicine, musculoskeletal conditions, thyroid and hormone health, and fertility. The LDS community&apos;s strong family focus also supports a notable pediatric and preconception naturopathic practice community. Altitude-related health concerns — sleep quality, cardiovascular conditioning, iron status — are unique to the region and well understood by local practitioners.
        </p>

        <h3>Telehealth for Utah Patients</h3>
        <p>
          Utah NDs can provide telehealth for Utah patients, which matters given how spread out the state is. If you&apos;re in Provo, Ogden, St. George, or a rural community far from the Wasatch Front, telehealth with a licensed SLC-based ND is a practical option. Filter for telehealth availability on the listings page.
        </p>
      </div>

      <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND in Salt Lake City?</h2>
        <p className="text-gray-600 mb-4">
          Claim your free listing or upgrade to a Verified profile to reach patients searching for a naturopathic doctor in Utah.
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
