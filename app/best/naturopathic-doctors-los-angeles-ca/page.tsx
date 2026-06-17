import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Los Angeles, CA | Top-Rated NDs',
  description:
    'Find licensed naturopathic doctors in Los Angeles, California. Browse top-rated NDs in LA, Santa Monica, Culver City, Pasadena, and the greater Los Angeles area.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-los-angeles-ca' },
}

export const revalidate = 3600

export default async function BestNDsLosAngeles() {
  const listings = await getListingsByCity('Los Angeles', 'CA')
  const featured = listings.filter((l) => l.listing_tier === 'featured')
  const verified = listings.filter((l) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...listings.filter((l) => l.listing_tier === 'free')].slice(0, 10)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/cities/los-angeles-ca" className="hover:text-brand-primary">Los Angeles, CA</Link>
        <span>/</span>
        <span className="text-gray-700">Best Naturopathic Doctors</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Los Angeles, California
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Los Angeles has one of the largest and most diverse naturopathic medicine communities in the country. California is a licensed ND state, meaning NDs here complete four-year graduate medical training, pass national board exams (NPLEX), and hold state licensure. LA patients have access to NDs across every neighborhood — from functional medicine practices in Santa Monica and Brentwood to integrative clinics in Pasadena, Silver Lake, and the South Bay.
        </p>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in Los Angeles, CA — verified and featured listings shown first
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
          href="/cities/los-angeles-ca"
          className="text-brand-primary font-medium hover:underline"
        >
          See all naturopathic doctors in Los Angeles →
        </Link>
      </div>

      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
        <h2>Naturopathic Medicine in Los Angeles</h2>
        <p>
          California&apos;s ND licensing law gives Los Angeles naturopathic doctors broad scope — they can order labs, perform physical exams, and prescribe from a formulary that includes botanical medicines, nutritional IVs, and certain medications. For LA patients, this means working with an ND can closely parallel a primary care relationship without sacrificing the depth of the functional medicine approach.
        </p>

        <h3>What LA NDs Specialize In</h3>
        <p>
          Los Angeles&apos; wellness-conscious patient population drives a distinctive specialty mix. Hormone optimization, skin health (acne, rosacea, eczema), gut health, autoimmune conditions, and weight management are among the highest-demand areas. A notable concentration of NDs also specialize in environmental medicine — mold illness, heavy metal detox, and chemical sensitivity — reflecting LA&apos;s air quality challenges. Anti-aging and longevity medicine is particularly well-represented in the Beverly Hills and Malibu corridor.
        </p>

        <h3>Telehealth for California Patients</h3>
        <p>
          Many LA naturopathic doctors offer telehealth for California patients, expanding access beyond the immediate metro area. If you&apos;re in San Diego, San Francisco, Sacramento, or a smaller California city and struggling to find an ND locally, filtering for telehealth availability opens the entire state&apos;s practitioner pool.
        </p>
      </div>

      <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND in Los Angeles?</h2>
        <p className="text-gray-600 mb-4">
          Claim your free listing or upgrade to a Verified profile to reach patients searching for a naturopathic doctor in LA.
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
