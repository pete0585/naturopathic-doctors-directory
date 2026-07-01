import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Atlanta, GA | Naturopathic Doctor Finder',
  description:
    'Find naturopathic doctors in Atlanta, Georgia. Georgia does not license NDs — learn your options including telehealth NDs from licensed states and functional medicine MDs in Atlanta.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-atlanta-ga' },
}

export const revalidate = 3600

export default async function BestNDsAtlanta() {
  const listings = await getListingsByCity('Atlanta', 'GA')
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
        <span className="text-gray-700">Atlanta, GA</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Atlanta, Georgia
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Atlanta is the Southeast&apos;s largest metropolitan area and one of the South&apos;s most
          health-conscious cities. However, Georgia does not license naturopathic doctors — NDs
          practicing in Georgia are not regulated as healthcare providers and cannot prescribe
          medications. Patients seeking naturopathic care in Atlanta should understand this
          licensing context before engaging a provider.
        </p>
      </div>

      {/* Important licensing notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-amber-900 mb-2">Georgia ND Licensing: Important Information</h2>
        <p className="text-sm text-amber-800 leading-relaxed mb-3">
          Georgia does not license naturopathic doctors. NDs in Georgia are not licensed medical
          providers. They cannot legally prescribe medications, operate under a medical license, or
          hold the ND title as a protected professional designation in the state.
        </p>
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Best alternatives for Atlanta patients:</strong> Telehealth with a licensed ND
          from Washington, Oregon, Connecticut, Vermont, or Maine — these states allow licensed NDs
          to prescribe medications and provide comprehensive care via telehealth. Atlanta also has a
          strong functional medicine MD and DO community through Emory Integrative Medicine and private
          practices that offer root-cause, naturopathic-style workups within a conventional medical license.
        </p>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> naturopathic practitioners near Atlanta — verify credentials and scope before booking
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {top.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </>
      ) : (
        <div className="text-center py-12 mb-10">
          <p className="text-gray-500 mb-4">Browse all practitioners or use telehealth to work with a licensed ND from a licensed state.</p>
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
        <h2>Naturopathic and Integrative Medicine in Atlanta</h2>
        <p>
          Atlanta&apos;s healthcare ecosystem is anchored by Emory University and Grady Health System,
          and a growing number of functional medicine and integrative health practices have emerged
          in neighborhoods like Buckhead, Midtown, Virginia-Highland, and Decatur. While licensed
          NDs cannot prescribe in Georgia, Atlanta patients have access to well-trained functional
          medicine MDs and DOs who often provide services comparable to what a licensed ND offers
          in a licensed state.
        </p>

        <h3>Emory Integrative Medicine</h3>
        <p>
          Emory Integrative Medicine, part of Emory Healthcare, offers acupuncture, mind-body medicine,
          and integrative consultations alongside conventional Emory medical care. While not naturopathic,
          this program represents Atlanta&apos;s most established institutional integrative medicine offering.
          Emory also has a research focus on integrative oncology and mind-body interventions.
        </p>

        <h3>Using Telehealth NDs from Atlanta</h3>
        <p>
          Many Atlanta patients work with licensed NDs in Washington state, Oregon, or Vermont via
          telehealth. These states allow NDs to prescribe thyroid medications, bioidentical hormones,
          and other common medications — meaning Atlanta patients can get comprehensive naturopathic
          primary care through a telehealth relationship with a licensed ND in a licensed state.
          This is increasingly the preferred model for Atlanta patients who want the full scope of
          naturopathic medicine.
        </p>

        <h3>What Atlanta Patients Most Often Seek ND Care For</h3>
        <p>
          Atlanta patients who seek naturopathic-style care most often present with thyroid dysfunction
          (Hashimoto&apos;s, subclinical hypothyroidism), PCOS, perimenopause and hormone balance, gut
          health and IBS, chronic fatigue, anxiety, and autoimmune conditions. These are well-suited
          to the root-cause naturopathic approach — whether delivered by a licensed ND via telehealth
          or by a functional medicine MD locally.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND Serving Atlanta Patients?</h2>
        <p className="text-gray-600 mb-4">
          Telehealth NDs from licensed states can reach Atlanta patients through this directory. Claim your listing.
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
