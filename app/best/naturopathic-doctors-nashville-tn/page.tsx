import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Nashville, TN | Naturopathic Doctor Finder',
  description:
    'Find licensed naturopathic doctors in Nashville, Tennessee. Tennessee does not license NDs as physicians — understand your options and find qualified integrative practitioners.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-nashville-tn' },
}

export const revalidate = 3600

export default async function BestNDsNashville() {
  const listings = await getListingsByCity('Nashville', 'TN')
  const featured = listings.filter((l) => l.listing_tier === 'featured')
  const verified = listings.filter((l) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...listings.filter((l) => l.listing_tier === 'free')].slice(0, 10)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/listings" className="hover:text-brand-primary">Find an ND</Link>
        <span>/</span>
        <span className="text-gray-700">Nashville, TN</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Nashville, Tennessee
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Nashville has become one of the fastest-growing health and wellness markets in the South,
          with a booming integrative medicine scene driven by its large young professional and music
          industry population. Tennessee does not license naturopathic doctors as physicians — NDs
          practicing in Tennessee cannot prescribe medications or hold the protected ND title as a
          licensed healthcare provider. Understanding this distinction is important before you book.
        </p>
      </div>

      {/* Important licensing notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-amber-900 mb-2">Tennessee ND Licensing: Important Information</h2>
        <p className="text-sm text-amber-800 leading-relaxed mb-3">
          Tennessee does not license naturopathic doctors. NDs in Tennessee are not licensed physicians
          and cannot prescribe medications, order labs under a medical license, or represent themselves
          as a licensed medical provider. They can practice as unlicensed wellness consultants or
          health coaches.
        </p>
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Alternatives for Nashville patients:</strong> Telehealth with a licensed ND from
          a licensed state (Washington, Oregon, Vermont, Connecticut, or Maine offer strong ND licensing
          and prescribing authority); functional medicine MDs and DOs in Nashville through practices
          like Vanderbilt Integrative Medicine; or Certified Nutrition Specialists and Registered
          Dietitians who practice functional nutrition.
        </p>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> naturopathic practitioners in Nashville, TN — verify credentials and scope before booking
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {top.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </>
      ) : (
        <div className="text-center py-12 mb-10">
          <p className="text-gray-500 mb-4">Browse all practitioners or search by state.</p>
          <Link href="/listings" className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors">
            Browse All NDs
          </Link>
        </div>
      )}

      <div className="text-center mb-12">
        <Link href="/listings" className="text-brand-primary font-medium hover:underline">
          See all naturopathic practitioners →
        </Link>
      </div>

      {/* Local guide content */}
      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
        <h2>Naturopathic Medicine in Nashville, Tennessee</h2>
        <p>
          Nashville&apos;s wellness industry has exploded alongside the city&apos;s population boom. The city
          is home to a growing number of functional medicine clinics, IV therapy bars, and integrative
          health practices — many of which market naturopathic-style care without necessarily employing
          licensed NDs. Patients in Nashville looking for root-cause healthcare have options, but need
          to look more carefully at credentials.
        </p>

        <h3>Vanderbilt and Local Integrative Medicine Resources</h3>
        <p>
          Vanderbilt University Medical Center has an integrative medicine program that blends
          conventional and complementary approaches within a licensed medical context. For patients
          who want evidence-based integrative care with the security of licensed medical oversight,
          Vanderbilt&apos;s integrative medicine services are a strong Nashville-based option. Several
          functional medicine MDs and DOs in Nashville also offer comprehensive root-cause workups
          comparable to what a licensed ND would provide in a licensed state.
        </p>

        <h3>Why Nashville Patients Often Use Telehealth NDs</h3>
        <p>
          Nashville patients who want to work with a licensed naturopathic doctor — including one
          who can prescribe thyroid hormones, bioidentical HRT, or other naturopathic-scope medications
          — often work with NDs in Washington, Oregon, or Vermont via telehealth. These states have
          robust ND licensing frameworks that allow comprehensive naturopathic primary care to be
          delivered remotely. Several Washington and Oregon NDs specialize in telehealth patients from
          unlicensed states like Tennessee.
        </p>

        <h3>Common Concerns Nashville Patients Seek ND Care For</h3>
        <p>
          Regardless of the licensing landscape, Nashville patients frequently seek naturopathic-style
          care for thyroid dysfunction (particularly Hashimoto&apos;s), hormonal imbalances, gut health,
          chronic fatigue, PCOS, and anxiety. These are areas where a licensed ND — whether local
          or via telehealth — can provide significant value alongside or instead of conventional care.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND Serving Nashville Patients?</h2>
        <p className="text-gray-600 mb-4">
          Telehealth NDs from licensed states serving Tennessee patients — claim your free listing or upgrade to reach more patients.
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
