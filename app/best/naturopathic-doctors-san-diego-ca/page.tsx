import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a Naturopathic Doctor in San Diego, CA | Naturopathic Doctor Finder',
  description:
    'Find licensed naturopathic doctors in San Diego, CA. Browse NDs in San Diego, La Jolla, Chula Vista, Escondido, Carlsbad, and surrounding communities.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-san-diego-ca' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are naturopathic doctors licensed in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. California licenses naturopathic doctors under the Naturopathic Doctors Act. California NDs hold the ND credential and are regulated by the California Naturopathic Medicine Committee within the Department of Consumer Affairs. California NDs complete four-year accredited naturopathic medical training and can order labs, provide nutritional counseling, perform physical exams, use botanical medicine, and prescribe a formulary of natural and some pharmaceutical substances. Note: California ND prescribing scope is more limited than some other states like Oregon.",
      },
    },
    {
      '@type': 'Question',
      name: 'What do San Diego naturopathic doctors specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "San Diego NDs commonly specialize in hormone health, integrative oncology support, sports medicine and performance optimization, digestive health, autoimmune conditions, weight management, and anti-aging medicine. The city's active military and veteran population also drives demand for NDs experienced with stress-related conditions, TBI recovery support, and PTSD adjunct care. San Diego's proximity to the US-Mexico border also means some NDs have experience with patients who combine conventional and traditional medicine approaches.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover naturopathic doctor visits in San Diego?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Insurance coverage for NDs in California varies significantly by plan. Some commercial plans cover ND visits; many San Diego NDs operate as out-of-network providers and provide superbills for potential reimbursement. Covered California plans may include ND coverage depending on the specific policy. HSA and FSA funds can be used for ND appointments. Contact your insurer directly and ask specifically about naturopathic doctor coverage.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is a San Diego naturopathic doctor different from a functional medicine doctor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Naturopathic doctors complete a four-year accredited medical school program focused on natural medicine — they hold the ND degree and are licensed by the state. Functional medicine is not a separate licensure; it's an approach practiced by MDs, DOs, NDs, and others who complete additional training (commonly through the Institute for Functional Medicine). Many NDs also practice functional medicine. The key distinction is that an ND's training was naturopathic from the ground up, while a functional medicine MD or DO received that training as a postgraduate specialization.",
      },
    },
  ],
}

export default async function BestNDsSanDiegoPage() {
  const cities = ['San Diego', 'La Jolla', 'Chula Vista', 'Escondido', 'Carlsbad', 'El Cajon', 'Oceanside']
  const allListings = await Promise.all(cities.map((city) => getListingsByCity(city, 'CA')))
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
          <Link href="/states/ca" className="hover:text-brand-primary">California</Link>
          <span>/</span>
          <span className="text-gray-700">Best Naturopathic Doctors in San Diego</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Find a Naturopathic Doctor in San Diego, CA
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            San Diego has one of the most active integrative health communities in California, driven by the city&apos;s health-conscious culture, large active-duty military and veteran population at bases like Camp Pendleton and Naval Base San Diego, and proximity to Bastyr University California (San Diego campus). California licenses naturopathic doctors under the Naturopathic Doctors Act, giving San Diego NDs the authority to order labs, diagnose, and treat within their defined scope.
          </p>
        </div>

        {top.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing <strong className="text-gray-900">{top.length}</strong> naturopathic doctors in San Diego, CA — verified and featured listings shown first
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {top.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-gray-500 mb-4">Browse all California naturopathic doctors while we add more San Diego listings.</p>
            <Link
              href="/listings?state=CA"
              className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors inline-block"
            >
              Browse California NDs
            </Link>
          </div>
        )}

        <div className="text-center mb-12">
          <Link
            href="/listings?state=CA"
            className="text-brand-primary font-medium hover:underline"
          >
            See all naturopathic doctors in California →
          </Link>
        </div>

        <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Naturopathic Medicine in San Diego</h2>
          <p className="text-gray-600 mb-4">
            San Diego NDs cluster in neighborhoods like La Jolla, Hillcrest, North Park, Encinitas, and Carlsbad — areas known for health-forward lifestyles and high demand for integrative care. The city&apos;s large military and veteran community has driven growth in NDs with experience in trauma-informed care, TBI recovery support, sleep disorders, and metabolic health for active and retired service members.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">What San Diego NDs Specialize In</h3>
          <p className="text-gray-600 mb-4">
            Hormone optimization, integrative oncology support, sports performance medicine, digestive health, autoimmune conditions, and anti-aging medicine are well-represented in San Diego&apos;s ND community. San Diego&apos;s year-round outdoor culture means sports medicine and injury recovery naturopathic care is particularly developed here. NDs at Bastyr California have also helped anchor a research-oriented approach to naturopathic practice in the region.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">California ND Scope of Practice</h3>
          <p className="text-gray-600">
            California NDs are licensed to perform physical exams, order and interpret laboratory tests, diagnose conditions, and treat using naturopathic modalities including botanical medicine, clinical nutrition, homeopathy, physical medicine, and lifestyle counseling. California&apos;s ND formulary allows prescription of certain hormones, thyroid medications, and other substances. Scope is more defined than in Oregon but broader than many other licensed states.
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
          <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND in San Diego?</h2>
          <p className="text-gray-600 mb-4">
            Claim your free listing or upgrade to a Verified profile to reach patients searching for naturopathic care in San Diego and North County.
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
            <Link href="/guides/naturopathic-medicine-for-gut-health" className="text-brand-primary font-medium hover:underline">Naturopathic Medicine for Gut Health →</Link>
            <Link href="/categories/hormone-optimization-nd" className="text-brand-primary font-medium hover:underline">Hormone Optimization NDs →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
