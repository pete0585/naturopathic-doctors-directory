import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in New York City, NY | Top-Rated NDs',
  description: 'Find the best naturopathic doctors in New York City, NY. Browse licensed NDs accepting new patients.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-new-york-ny' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [    {
      '@type': 'Question',
      name: 'Are NDs licensed in New York State?',
      acceptedAnswer: { '@type': 'Answer', text: "New York does not license naturopathic doctors (as of 2026). NYS Assembly/Senate bills for ND licensure have been introduced but not passed. NYC naturopathic practitioners may hold licenses in neighboring Connecticut, Vermont, or other licensed states and see clients in a wellness/consultative role within New York\'s scope. The NY Association of Naturopathic Physicians tracks legislative progress." },
    },
    {
      '@type': 'Question',
      name: 'What do New York City NDs commonly treat?',
      acceptedAnswer: { '@type': 'Answer', text: "NYC NDs commonly see patients for chronic fatigue, stress-related illness, hormonal imbalances, thyroid issues, digestive disorders (IBS, SIBO), autoimmune support, cardiovascular risk reduction, and longevity optimization. The city\'s high-stress professional population drives demand for adrenal and cortisol support. Many NYC NDs also specialize in environmental medicine — relevant given the city\'s pollution exposure." },
    },
    {
      '@type': 'Question',
      name: 'How much does an ND visit cost in New York City?',
      acceptedAnswer: { '@type': 'Answer', text: "NYC naturopathic visits typically run $200-$500 for initial consultations and $150-$300 for follow-ups. Advanced functional testing (comprehensive metabolic panels, DUTCH hormone tests, stool analysis) is additional, typically $200-$600 out of pocket. Most NYC NDs do not accept insurance. Health savings accounts (HSAs) can often be used for naturopathic services." },
    },
    {
      '@type': 'Question',
      name: 'Is telehealth available from NYC naturopathic practitioners?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Many NYC-area NDs offer telehealth, which is practical for patients across the metro and tri-state area. Telehealth consultations allow for health history review, nutrition and supplement planning, and labs interpretation without an office visit. Some NYC NDs work in Connecticut or New Jersey (licensed states) and see in-person New York clients through telehealth follow-up." },
    }],
}

export default async function BestNDsNewYork() {
  const listings = await getListingsByCity('New York', 'NY')
  const featured = listings.filter((l: any) => l.listing_tier === 'featured')
  const verified = listings.filter((l: any) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...listings.filter((l: any) => l.listing_tier === 'free')].slice(0, 10)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-primary">Find an ND</Link>
          <span>/</span>
          <span className="text-gray-700">Best Naturopathic Doctors in New York City, NY</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Best Naturopathic Doctors in New York City, NY
          </h1>
          <p className="text-gray-600 max-w-3xl">New York City has a well-developed naturopathic medicine community despite New York's limited licensing framework. Many New York NDs hold licenses in Connecticut or Vermont (neighboring licensed states) and serve NYC clients in a consultative role. The city's health-conscious, well-resourced professional population drives strong demand for root-cause, preventive approaches beyond conventional medicine.</p>
        </div>

        {top.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in New York City, NY
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {top.map((l: any) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-gray-500 mb-4">Listings loading — check back shortly.</p>
            <Link href="/listings" className="text-brand-primary font-medium hover:underline">Browse all NDs →</Link>
          </div>
        )}

        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq: any) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-100">
          <Link href="/listings" className="text-brand-primary font-medium hover:underline">Browse All Naturopathic Doctors →</Link>
        </div>
      </div>
    </>
  )
}
