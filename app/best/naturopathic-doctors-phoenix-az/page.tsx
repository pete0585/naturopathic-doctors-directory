import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Phoenix, AZ | Top-Rated NDs',
  description:
    'Arizona has one of the broadest scopes of practice for naturopathic doctors in the US. Browse top-rated NDs in Phoenix and Scottsdale, AZ — filter by specialty and availability.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-phoenix-az' },
}

export const revalidate = 3600

export default async function BestNDsPhoenix() {
  const phoenixListings = await getListingsByCity('Phoenix', 'AZ')
  const scottsdaleListings = await getListingsByCity('Scottsdale', 'AZ')
  const allListings = [...phoenixListings, ...scottsdaleListings]
  const featured = allListings.filter((l) => l.listing_tier === 'featured')
  const verified = allListings.filter((l) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...allListings.filter((l) => l.listing_tier === 'free')].slice(0, 10)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/cities/phoenix-az" className="hover:text-brand-primary">Phoenix, AZ</Link>
        <span>/</span>
        <span className="text-gray-700">Best Naturopathic Doctors</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Phoenix &amp; Scottsdale, Arizona
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Arizona has one of the broadest scopes of practice for naturopathic doctors in the United States, and Phoenix and Scottsdale have developed a thriving integrative medicine ecosystem because of it. Arizona NDs can prescribe pharmaceuticals, perform minor procedures, administer IV therapy, and serve as primary care physicians — making the Valley of the Sun an attractive region for patients who want a comprehensive naturopathic approach to their care.
        </p>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in Phoenix &amp; Scottsdale, AZ — verified and featured listings shown first
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
          href="/categories/az"
          className="text-brand-primary font-medium hover:underline"
        >
          See all naturopathic doctors in Arizona →
        </Link>
      </div>

      {/* Local guide content */}
      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
        <h2>Naturopathic Medicine in the Phoenix–Scottsdale Area</h2>
        <p>
          Arizona is home to two CNME-accredited ND schools: Southwest College of Naturopathic Medicine (SCNM) and Sonoran University of Health Sciences (both in the East Valley). The presence of two accredited ND schools within the metropolitan area means Phoenix and Scottsdale have an unusually high concentration of licensed, well-trained NDs — and a patient population that has been exposed to naturopathic medicine for decades.
        </p>

        <h3>Arizona&apos;s Broad ND Scope of Practice</h3>
        <p>
          Arizona NDs have a practice scope that rivals any state in the country. They can prescribe Schedule II through V controlled substances (with DEA registration), order all diagnostic tests available to MDs, perform minor surgery including trigger point injections and prolotherapy, administer IV therapies, and serve as primary care physicians. For patients who want the full capabilities of a licensed healthcare professional with naturopathic training, Arizona is one of the best states to find it.
        </p>

        <h3>What Phoenix &amp; Scottsdale NDs Specialize In</h3>
        <p>
          Phoenix&apos;s patient population has driven strong demand for NDs specializing in hormonal health and optimization — testosterone, thyroid, bioidentical hormones, and metabolic medicine. Scottsdale&apos;s wellness market has created a thriving ecosystem of NDs working on IV therapy, peptide protocols, anti-aging medicine, and performance optimization. The broader Phoenix area also has a significant chronic illness population — particularly autoimmune conditions and Lyme disease — where naturopathic medicine offers meaningful treatment options.
        </p>

        <h3>Finding an ND in Surrounding Cities</h3>
        <p>
          The Phoenix metro area extends well beyond the two major cities. Licensed NDs practice throughout Tempe, Mesa, Chandler, Gilbert, Peoria, Surprise, and Queen Creek. Tucson, about 90 minutes south, has its own strong ND community — particularly around the University of Arizona integrative medicine program&apos;s influence. Browse by state to find NDs throughout Arizona.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND in Phoenix or Scottsdale?</h2>
        <p className="text-gray-600 mb-4">
          Claim your free listing or upgrade to a Verified profile to reach patients searching for a naturopathic doctor in the Phoenix area.
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
