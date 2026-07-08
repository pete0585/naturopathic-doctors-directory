import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Miami, FL | Top-Rated NDs',
  description: 'Find the best naturopathic doctors in Miami, FL. Browse licensed NDs accepting new patients.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-miami-fl' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [    {
      '@type': 'Question',
      name: 'Are NDs licensed in Florida?',
      acceptedAnswer: { '@type': 'Answer', text: "Florida does not have a full naturopathic physician licensing law (HB 645 / SB 820 has been introduced but not passed as of 2026). Practitioners in Florida using the ND credential may be licensed in another state but practicing within legal scope limitations in Florida. This means Miami naturopathic practitioners typically focus on nutrition, lifestyle counseling, and wellness — not prescribing or diagnostics. Verify credentials carefully and ask whether your ND is licensed in a naturopathic-licensure state." },
    },
    {
      '@type': 'Question',
      name: 'What do Miami naturopathic practitioners commonly treat?',
      acceptedAnswer: { '@type': 'Answer', text: "Miami naturopathic practitioners commonly see patients for digestive health (IBS, SIBO, parasitic infections common in tropical climates), hormonal imbalances, chronic fatigue, autoimmune support, and prevention-focused wellness. Miami\'s active lifestyle culture and large fitness community also drive demand for performance optimization and longevity medicine approaches." },
    },
    {
      '@type': 'Question',
      name: 'Does Florida insurance cover naturopathic care?',
      acceptedAnswer: { '@type': 'Answer', text: "Most Florida insurance plans do not cover naturopathic doctor visits because Florida does not license NDs as primary care physicians. Florida Blue, UnitedHealthcare, Aetna, and Cigna plans in Florida rarely have ND benefits. Some naturopathic practitioners operate as health coaches or nutrition counselors with different billing codes. Confirm out-of-pocket costs before your first visit." },
    },
    {
      '@type': 'Question',
      name: 'Are there naturopathic medicine schools near Miami?',
      acceptedAnswer: { '@type': 'Answer', text: "There are no accredited naturopathic medical schools in Florida. The nearest accredited schools are Sonoran University of Health Sciences (Tempe, AZ) and National University of Natural Medicine (Portland, OR). Miami NDs practicing with full naturopathic physician training have traveled to states with licensure programs. Florida\'s proximity to Latin America has created demand for NDs with experience in tropical medicine and traditional botanical medicine from South American traditions." },
    }],
}

export default async function BestNDsMiami() {
  const listings = await getListingsByCity('Miami', 'FL')
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
          <span className="text-gray-700">Best Naturopathic Doctors in Miami, FL</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Best Naturopathic Doctors in Miami, Florida, FL
          </h1>
          <p className="text-gray-600 max-w-3xl">Miami's diverse patient population — with strong Latin American, Caribbean, and Haitian communities — drives demand for culturally competent integrative and naturopathic medicine. Florida licenses NDs (Doctors of Naturopathy) under a limited scope compared to western states, but the Miami metro has a growing community of licensed naturopaths and integrative practitioners trained at accredited naturopathic medical schools.</p>
        </div>

        {top.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in Miami, FL
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
