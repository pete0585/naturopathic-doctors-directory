import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Raleigh, NC | Top-Rated NDs',
  description: 'Find the best naturopathic doctors in Raleigh, NC. Browse licensed NDs accepting new patients.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-raleigh-nc' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [    {
      '@type': 'Question',
      name: 'Are NDs licensed in North Carolina?',
      acceptedAnswer: { '@type': 'Answer', text: "North Carolina does not license naturopathic doctors as of 2026. NC ND licensure legislation has been proposed but not enacted. Raleigh naturopathic practitioners may hold licenses in other states and provide wellness consultation services within NC\'s scope limitations. Verify credentials carefully — ask whether your practitioner holds an ND from an accredited school (NUNM, Bastyr, SCNM, Boucher, CCNM) even if not licensed in NC." },
    },
    {
      '@type': 'Question',
      name: 'What makes the Research Triangle good for naturopathic medicine?',
      acceptedAnswer: { '@type': 'Answer', text: "The Research Triangle\'s academic and biotech workforce creates unusually sophisticated patients who want evidence-based integrative approaches. Raleigh naturopathic practitioners often have more detailed conversations about mechanisms of action, research literature, and functional lab interpretation than practitioners in markets with less scientifically literate populations. Duke Integrative Medicine in Durham (a pioneer in academic integrative medicine) has helped normalize evidence-based complementary approaches in the region." },
    },
    {
      '@type': 'Question',
      name: 'What conditions do Raleigh NDs commonly treat?',
      acceptedAnswer: { '@type': 'Answer', text: "Raleigh-area NDs commonly treat gut health (IBS, SIBO, dysbiosis common in the Southeast), thyroid issues (Hashimoto\'s is underdiagnosed), hormonal imbalances, chronic fatigue, anxiety and burnout in the research/tech workforce, and food sensitivities. The region\'s heavy pine pollen and allergen burden also creates demand for naturopathic allergy support." },
    },
    {
      '@type': 'Question',
      name: 'How much does a naturopathic visit cost in Raleigh?',
      acceptedAnswer: { '@type': 'Answer', text: "Raleigh naturopathic consultations typically run $150-$350 for initial visits and $100-$200 for follow-ups. Functional testing adds $150-$500 depending on the panel. Since NC does not license NDs, most visits are out of pocket — very few Raleigh naturopaths bill insurance. Triangle-area HSA accounts can typically be used for naturopathic consultation." },
    }],
}

export default async function BestNDsRaleigh() {
  const listings = await getListingsByCity('Raleigh', 'NC')
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
          <span className="text-gray-700">Best Naturopathic Doctors in Raleigh, NC</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Best Naturopathic Doctors in Raleigh, North Carolina, NC
          </h1>
          <p className="text-gray-600 max-w-3xl">Raleigh and the Research Triangle (Durham, Chapel Hill) have an unusually educated, health-literate population connected to Duke University, UNC-Chapel Hill, and North Carolina State University — plus Research Triangle Park's biotech workforce. This environment drives strong demand for evidence-based integrative and naturopathic approaches.</p>
        </div>

        {top.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in Raleigh, NC
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
