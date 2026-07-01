import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a Naturopathic Doctor in Boston, MA | Naturopathic Doctor Finder',
  description:
    'Find naturopathic doctors in Boston, MA. Massachusetts does not license NDs — learn what that means for your care, what alternatives exist, and which nearby states have licensed NDs.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-boston-ma' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are naturopathic doctors licensed in Massachusetts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Massachusetts does not license naturopathic doctors. Practitioners with ND degrees in MA cannot use the title 'Licensed Naturopathic Doctor' and do not hold state-granted prescribing authority or diagnostic scope. They may practice as health coaches, wellness consultants, or under other credentials. This is an important distinction from the 25+ states where NDs are fully licensed healthcare providers.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I see a naturopathic doctor in Boston even though MA does not license them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, with important caveats. Some practitioners with ND degrees operate in Massachusetts as health coaches, nutritionists, or wellness consultants. They can provide lifestyle guidance, nutritional support, and health coaching — but they cannot diagnose medical conditions, order labs as NDs, or prescribe within a licensed ND scope. If you need licensed ND care, telehealth with a licensed ND in Connecticut, Maine, Vermont, or New Hampshire is a practical option for Massachusetts residents.",
      },
    },
    {
      '@type': 'Question',
      name: 'What states near Boston license naturopathic doctors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "All four states bordering Massachusetts license NDs: Connecticut, Maine, Vermont, and New Hampshire all have naturopathic licensing. New Hampshire is particularly accessible from the greater Boston area. Connecticut has a large licensed ND community. A Massachusetts resident can legally see a licensed ND via telehealth from any of these neighboring states.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the best alternative to a naturopathic doctor in Massachusetts?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Boston has a strong integrative medicine community even without ND licensure. Options include: integrative medicine MDs/DOs at Massachusetts General Hospital, Brigham and Women's, and Beth Israel Deaconess who practice functional and lifestyle medicine; certified functional medicine practitioners (IFM-trained); licensed nutritionists (Massachusetts licenses registered dietitians); and telehealth with a licensed ND in a neighboring state. For patients wanting the full scope of licensed ND care, telehealth with a CT, ME, VT, or NH ND is often the most practical path.",
      },
    },
  ],
}

export default async function BestNDsBostonPage() {
  const cities = ['Boston', 'Cambridge', 'Somerville', 'Newton', 'Brookline', 'Quincy', 'Medford']
  const allListings = await Promise.all(cities.map((city) => getListingsByCity(city, 'MA')))
  const listings = allListings
    .flat()
    .filter((l, i, arr) => arr.findIndex((x) => x.id === l.id) === i)
  const featured = listings.filter((l) => l.listing_tier === 'featured')
  const verified = listings.filter((l) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...listings.filter((l) => l.listing_tier === 'free')].slice(0, 20)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <Link href="/states/ma" className="hover:text-brand-primary">Massachusetts</Link>
          <span>/</span>
          <span className="text-gray-700">Naturopathic Doctors in Boston</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Find a Naturopathic Doctor in Boston, MA
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Boston is one of the world&apos;s great medical cities — home to Harvard Medical School, Massachusetts General Hospital, and dozens of teaching hospitals. But when it comes to naturopathic medicine, Massachusetts is an important exception: the state does not license naturopathic doctors, which affects what ND-trained practitioners can offer here.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-amber-600 text-lg mt-0.5" aria-hidden="true">⚠</span>
            <div>
              <p className="font-semibold text-amber-900 mb-1">Massachusetts Does Not License Naturopathic Doctors</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                Practitioners listed here may hold ND degrees from accredited naturopathic medical schools, but Massachusetts does not grant them the Licensed Naturopathic Doctor (LND or ND) credential. In MA, practitioners with ND degrees typically operate as health coaches, wellness consultants, or nutritional advisors — not as licensed healthcare providers. They cannot diagnose medical conditions or prescribe within a licensed ND scope. Always verify credentials and ask clearly about their scope of practice before engaging.
              </p>
            </div>
          </div>
        </div>

        {top.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing <strong className="text-gray-900">{top.length}</strong> practitioners in the Boston area — verify scope of practice with each provider
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {top.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-gray-500 mb-4">No listings found in the Boston area yet. Consider telehealth with a licensed ND in a neighboring state.</p>
          </div>
        )}

        <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Alternatives to a Licensed ND in Boston</h2>

          <h3 className="font-semibold text-gray-800 mb-2">Telehealth With a Licensed ND in a Neighboring State</h3>
          <p className="text-gray-600 text-sm mb-4">
            Connecticut, Maine, Vermont, and New Hampshire all license naturopathic doctors. Massachusetts residents can legally access telehealth appointments with licensed NDs in these states — receiving the full scope of ND care including lab ordering and treatment within the ND&apos;s licensed scope. This is the most direct path to licensed naturopathic care for Boston-area residents.
          </p>

          <h3 className="font-semibold text-gray-800 mb-2">Integrative and Functional Medicine in Boston</h3>
          <p className="text-gray-600 text-sm mb-4">
            Boston&apos;s major hospital systems — Massachusetts General, Brigham and Women&apos;s, Beth Israel Deaconess — all have integrative medicine programs staffed by MDs and DOs with training in lifestyle and functional medicine. These providers can offer many of the services patients seek from NDs while practicing within full medical licensure.
          </p>

          <h3 className="font-semibold text-gray-800 mb-2">Certified Functional Medicine Practitioners</h3>
          <p className="text-gray-600 text-sm">
            Institute for Functional Medicine (IFM)-trained practitioners in the Boston area include MDs, DOs, RDs, and other licensed providers who take a root-cause, systems-based approach similar to naturopathic medicine. Search the IFM provider finder for Boston-area certified practitioners.
          </p>
        </div>

        <div className="space-y-5 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/nd-vs-md-vs-do" className="text-brand-primary font-medium hover:underline">ND vs. MD vs. DO — What&apos;s the Difference? →</Link>
            <Link href="/guides/what-is-a-naturopathic-doctor" className="text-brand-primary font-medium hover:underline">What Is a Naturopathic Doctor? →</Link>
            <Link href="/listings" className="text-brand-primary font-medium hover:underline">Browse All NDs by State →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
