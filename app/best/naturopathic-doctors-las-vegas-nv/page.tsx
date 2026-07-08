import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Las Vegas, NV | Top-Rated NDs',
  description: 'Find the best naturopathic doctors in Las Vegas, NV. Browse licensed NDs accepting new patients.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-las-vegas-nv' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [    {
      '@type': 'Question',
      name: 'Are NDs licensed in Nevada?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Nevada licenses Naturopathic Physicians (NDs) with broad prescribing authority, including pharmaceutical medications and controlled substances (Schedule III-V). Nevada NDs can function as primary care providers, order labs, perform minor procedures, and prescribe bioidentical hormones. This makes Las Vegas NDs significantly more capable than NDs in unlicensed states." },
    },
    {
      '@type': 'Question',
      name: 'What do Las Vegas NDs commonly treat?',
      acceptedAnswer: { '@type': 'Answer', text: "Las Vegas NDs see a distinctive patient mix reflecting the city\'s lifestyle: sleep disruption and circadian rhythm disorders from shift work and late-night culture, adrenal fatigue, dehydration-related health issues, hormone imbalances in the aging hospitality workforce, and stress-related chronic conditions. There is also demand for IV nutritional therapy, weight management, and longevity medicine from the city\'s health-optimizing population." },
    },
    {
      '@type': 'Question',
      name: 'Does Nevada insurance cover naturopathic doctors?',
      acceptedAnswer: { '@type': 'Answer', text: "Nevada-regulated insurance plans must cover naturopathic physician services as required by NRS 687B.195. Many Nevada insurance plans — Nevada Health Link (Medicaid expansion), Health Plan of Nevada, and employer plans regulated in Nevada — include ND coverage. Confirm with your plan whether your specific ND is in-network. Federal self-insured ERISA plans are not subject to Nevada\'s state mandate." },
    },
    {
      '@type': 'Question',
      name: 'Are there NDs near the Las Vegas Strip or Henderson?',
      acceptedAnswer: { '@type': 'Answer', text: "Yes. Las Vegas has NDs in several areas accessible to tourists and residents — near the Strip (Medical District), Summerlin, Henderson, and North Las Vegas. The Henderson corridor has grown significantly as a healthcare hub. Several Las Vegas NDs offer concierge-style services catering to the city\'s high-income permanent residents." },
    }],
}

export default async function BestNDsLasVegas() {
  const listings = await getListingsByCity('Las Vegas', 'NV')
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
          <span className="text-gray-700">Best Naturopathic Doctors in Las Vegas, NV</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Best Naturopathic Doctors in Las Vegas, Nevada, NV
          </h1>
          <p className="text-gray-600 max-w-3xl">Nevada licenses naturopathic doctors (NDs) as primary care physicians with full prescribing authority, making Las Vegas one of the better-served markets in the Southwest for naturopathic medicine. The city's large hospitality workforce, tourist health needs, and active retirement community all drive demand for integrative and preventive care.</p>
        </div>

        {top.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in Las Vegas, NV
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
