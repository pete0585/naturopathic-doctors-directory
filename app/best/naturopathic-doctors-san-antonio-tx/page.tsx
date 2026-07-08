import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in San Antonio, TX | Top-Rated NDs',
  description: 'Find the best naturopathic doctors in San Antonio, TX. Browse licensed NDs accepting new patients.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-san-antonio-tx' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [    {
      '@type': 'Question',
      name: 'Are NDs licensed in Texas?',
      acceptedAnswer: { '@type': 'Answer', text: "Texas does not license naturopathic doctors as physicians. The Texas Department of Licensing and Regulation does not have an ND category. Practitioners in San Antonio using the ND credential may hold licenses in other states but practice within Texas scope limitations (wellness counseling, nutrition, lifestyle coaching). The Texas Association of Naturopathic Physicians advocates for licensure. Verify credentials carefully." },
    },
    {
      '@type': 'Question',
      name: 'What integrative options does San Antonio have?',
      acceptedAnswer: { '@type': 'Answer', text: "San Antonio has a well-developed integrative medicine community even without ND licensure. University Health System and UT Health San Antonio both have integrative medicine programs. The Alamo City\'s large Latino population drives demand for providers fluent in traditional healing approaches alongside evidence-based medicine. Several functional medicine MDs and DOs in San Antonio practice root-cause medicine with approaches similar to naturopathic medicine." },
    },
    {
      '@type': 'Question',
      name: 'What do San Antonio naturopathic practitioners commonly treat?',
      acceptedAnswer: { '@type': 'Answer', text: "San Antonio NDs and integrative practitioners commonly see patients for metabolic health (Type 2 diabetes prevention is a major issue given the city\'s demographics), gut health, thyroid conditions, hormonal imbalances, chronic pain management, and mental health support through nutritional and lifestyle approaches. The military community creates demand for PTSD-supportive integrative care and performance optimization." },
    },
    {
      '@type': 'Question',
      name: 'Is telehealth available for naturopathic care in San Antonio?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Several naturopathically-trained practitioners in Texas offer telehealth across the state. Texas practitioners with ND training who are licensed in Arizona, New Mexico, or other southwestern licensed states may see Texas clients via telehealth for wellness consultations within scope. This is especially practical for San Antonio\'s large sprawling suburban population who prefer to minimize commutes." },
    }],
}

export default async function BestNDsSanAntonio() {
  const listings = await getListingsByCity('San Antonio', 'TX')
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
          <span className="text-gray-700">Best Naturopathic Doctors in San Antonio, TX</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Best Naturopathic Doctors in San Antonio, Texas, TX
          </h1>
          <p className="text-gray-600 max-w-3xl">San Antonio's large military community (Fort Sam Houston, Lackland AFB, JBSA-Randolph) and diverse civilian population create demand for integrative medicine that bridges conventional and naturopathic approaches. Texas does not license NDs, but the city has a growing integrative medicine community through functional MDs, DOs, and naturopathically-trained practitioners.</p>
        </div>

        {top.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in San Antonio, TX
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
