import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Seattle, WA | Top-Rated NDs',
  description:
    'Washington state has licensed naturopathic medicine since 1919. Browse top-rated naturopathic doctors in Seattle, WA — filter by specialty, telemedicine, and availability.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-seattle-wa' },
}

export const revalidate = 3600

export default async function BestNDsSeattle() {
  const listings = await getListingsByCity('Seattle', 'WA')
  const featured = listings.filter((l) => l.listing_tier === 'featured')
  const verified = listings.filter((l) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...listings.filter((l) => l.listing_tier === 'free')].slice(0, 10)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/cities/seattle-wa" className="hover:text-brand-primary">Seattle, WA</Link>
        <span>/</span>
        <span className="text-gray-700">Best Naturopathic Doctors</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Seattle, Washington
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Washington has licensed naturopathic medicine since 1919 — making it one of the oldest ND licensing jurisdictions in North America. Seattle NDs hold a broad scope of practice, including prescribing authority for pharmaceuticals, ordering labs, and performing minor procedures. In Washington, an ND can genuinely function as your primary care physician if that&apos;s what you&apos;re looking for.
        </p>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in Seattle, WA — verified and featured listings shown first
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
          href="/cities/seattle-wa"
          className="text-brand-primary font-medium hover:underline"
        >
          See all naturopathic doctors in Seattle →
        </Link>
      </div>

      {/* Local guide content */}
      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
        <h2>Naturopathic Medicine in Seattle, Washington</h2>
        <p>
          Seattle&apos;s ND community reflects Washington&apos;s century-long commitment to naturopathic medicine. Bastyr University — one of North America&apos;s most respected CNME-accredited ND programs — is headquartered in nearby Kenmore, and its clinical training facilities have served Seattle patients for decades. Many Seattle NDs are Bastyr graduates who stayed in the region after graduation, creating a practitioner pool with strong academic foundations and deep clinical roots.
        </p>

        <h3>Washington&apos;s Broad ND Scope of Practice</h3>
        <p>
          Washington is one of the most permissive states in the country for ND practice. Washington NDs can prescribe a wide range of pharmaceuticals, including thyroid medications, bioidentical hormones, and certain controlled substances. They can order any diagnostic test available to MDs, perform minor surgical procedures, and serve as primary care providers for state Medicaid patients. If you want an ND who can function as your complete primary care physician, Washington is one of the best states to find one.
        </p>

        <h3>What Seattle NDs Commonly Treat</h3>
        <p>
          Seattle&apos;s tech industry and high-stress professional culture have made burnout, anxiety, sleep dysfunction, and gut health common presenting concerns. The Pacific Northwest&apos;s outdoor culture drives demand for sports medicine NDs and practitioners who can help with altitude and environmental adaptation. Seattle also has a significant chronic illness patient community seeking naturopathic approaches to autoimmune conditions, Lyme disease, mold illness, and hormonal imbalances.
        </p>

        <h3>Insurance Coverage in Washington State</h3>
        <p>
          Washington has one of the strongest ND insurance mandate laws in the country. Most state-regulated insurance plans in Washington are required to cover naturopathic medicine on the same basis as conventional primary care. If your employer uses a self-insured plan (common at large companies, especially in tech), check with your HR department — self-insured plans are governed by federal ERISA law and may not be subject to Washington&apos;s state mandate.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND in Seattle?</h2>
        <p className="text-gray-600 mb-4">
          Claim your free listing or upgrade to a Verified profile to reach patients searching for a naturopathic doctor in Seattle.
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
