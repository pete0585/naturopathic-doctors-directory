import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a Naturopathic Doctor in Minneapolis, MN | Naturopathic Doctor Finder',
  description:
    'Find licensed naturopathic doctors in Minneapolis, MN. Browse LNDs across the Twin Cities metro — Minneapolis, St. Paul, Bloomington, Eden Prairie, and surrounding suburbs.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-minneapolis-mn' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are naturopathic doctors licensed in Minnesota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Minnesota passed naturopathic licensure legislation in 2023, creating the Licensed Naturopathic Doctor (LND) credential. Minnesota LNDs complete four-year accredited graduate medical training, pass national NPLEX board exams, and practice within a defined scope that includes diagnosis and treatment of chronic conditions, nutritional counseling, botanical medicine, and lifestyle medicine. The Minnesota Board of Medical Practice oversees ND licensure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can a naturopathic doctor treat in Minnesota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Minnesota LNDs can diagnose and treat chronic health conditions including hormone imbalances, digestive disorders, autoimmune conditions, metabolic health, anxiety, fatigue, and wellness optimization. The LND scope in Minnesota has defined limits — LNDs do not perform surgery or prescribe pharmaceuticals — but they can order laboratory tests and provide comprehensive natural health care. Always discuss your specific needs with your ND to confirm what falls within their scope.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover naturopathic care in Minneapolis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Insurance coverage for naturopathic visits in Minnesota is expanding following licensure. Some commercial insurance plans now cover ND visits; coverage depends on your specific plan and insurer. Many Minneapolis-area NDs work out-of-network and provide superbills for reimbursement. HSA and FSA accounts can typically be used for ND appointments. Contact your insurer directly to verify in-network ND coverage in your plan.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a naturopathic doctor in the Minneapolis metro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Use this directory to search for naturopathic doctors in Minneapolis, St. Paul, Bloomington, Eden Prairie, Minnetonka, Edina, and Plymouth. Filter listings by specialty to find an ND who focuses on your health concern. Many Twin Cities NDs also offer telehealth for Minnesota patients who cannot travel to a clinic, which is useful for patients in suburban or rural parts of the metro.",
      },
    },
  ],
}

export default async function BestNDsMinneapolisPage() {
  const cities = ['Minneapolis', 'St. Paul', 'Bloomington', 'Eden Prairie', 'Minnetonka', 'Edina', 'Plymouth']
  const allListings = await Promise.all(cities.map((city) => getListingsByCity(city, 'MN')))
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
          <Link href="/states/mn" className="hover:text-brand-primary">Minnesota</Link>
          <span>/</span>
          <span className="text-gray-700">Best Naturopathic Doctors in Minneapolis</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Find a Naturopathic Doctor in Minneapolis, MN
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Minnesota joined the growing list of licensed naturopathic medicine states in 2023, creating the Licensed Naturopathic Doctor (LND) credential. The Twin Cities integrative health community is well-established — the University of Minnesota Medical Center has robust integrative medicine programs, and the metro has a health-conscious population with strong demand for root-cause care. Minnesota LNDs can diagnose and treat within their scope and function as primary care providers for patients seeking alternatives or complements to conventional medicine.
          </p>
        </div>

        <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-5 mb-8">
          <p className="text-sm font-semibold text-gray-800 mb-1">Minnesota ND Licensure — LND</p>
          <p className="text-sm text-gray-600">
            Minnesota NDs hold the <strong>Licensed Naturopathic Doctor (LND)</strong> credential, established by legislation enacted in 2023. LNDs complete four-year accredited naturopathic medical training and pass national NPLEX board exams. They may diagnose conditions, order labs, and treat using natural medicine modalities within their defined scope. Overseen by the Minnesota Board of Medical Practice.
          </p>
        </div>

        {top.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in the Minneapolis–St. Paul metro — verified and featured listings shown first
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {top.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-gray-500 mb-4">Browse all Minnesota naturopathic doctors while we add more Twin Cities listings.</p>
            <Link
              href="/listings?state=MN"
              className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors inline-block"
            >
              Browse Minnesota NDs
            </Link>
          </div>
        )}

        <div className="text-center mb-12">
          <Link
            href="/listings?state=MN"
            className="text-brand-primary font-medium hover:underline"
          >
            See all naturopathic doctors in Minnesota →
          </Link>
        </div>

        <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Naturopathic Medicine in the Twin Cities</h2>
          <p className="text-gray-600 mb-4">
            The Minneapolis–St. Paul metro has one of the more active integrative health communities in the upper Midwest. NDs here commonly specialize in thyroid and hormone health, digestive conditions, autoimmune support, mental health, and metabolic optimization. The University of Minnesota&apos;s integrative medicine programs have helped build a culture of evidence-based natural medicine among Twin Cities providers.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Where to Find Twin Cities NDs</h3>
          <p className="text-gray-600 mb-4">
            Minneapolis NDs are concentrated in neighborhoods like Uptown, Northeast, and Linden Hills, as well as in suburban clinics in Eden Prairie, Minnetonka, Edina, and Plymouth. St. Paul has a smaller but active ND community. Many Twin Cities naturopathic practices offer telehealth for Minnesota patients who prefer remote appointments or live outside the immediate metro.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">What Minneapolis NDs Commonly Treat</h3>
          <p className="text-gray-600">
            Thyroid conditions (hypothyroidism and Hashimoto&apos;s), hormonal imbalances, digestive disorders (IBS, SIBO, Crohn&apos;s), autoimmune conditions, fatigue, metabolic health, and mental health support are among the most common reasons patients seek ND care in the Twin Cities. Minnesota&apos;s long winters and high rates of vitamin D deficiency also make NDs here particularly well-versed in seasonal health optimization.
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

        <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND in the Twin Cities?</h2>
          <p className="text-gray-600 mb-4">
            Claim your free listing or upgrade to a Verified profile to reach patients searching for a naturopathic doctor in Minneapolis and St. Paul.
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

        <div className="pt-8 border-t border-gray-200 mt-10">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/nd-vs-md-vs-do" className="text-brand-primary font-medium hover:underline">ND vs. MD vs. DO →</Link>
            <Link href="/guides/what-is-a-naturopathic-doctor" className="text-brand-primary font-medium hover:underline">What Is a Naturopathic Doctor? →</Link>
            <Link href="/guides/naturopathic-medicine-insurance" className="text-brand-primary font-medium hover:underline">Does Insurance Cover Naturopathic Care? →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
