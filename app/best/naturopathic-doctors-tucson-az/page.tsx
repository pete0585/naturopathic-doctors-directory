import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Tucson, AZ | NaturopathicDoctorFinder.com',
  description: 'Find licensed naturopathic doctors in Tucson, Arizona. Arizona NDs have broad prescribing authority and full primary care scope. Compare Tucson ND practices.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-tucson-az' },
}

export const revalidate = 3600

const FAQ = [
  {
    q: 'What can a naturopathic doctor do in Arizona?',
    a: "Arizona is one of the most ND-friendly states in the country. Arizona-licensed NDs can serve as primary care providers, diagnose and treat medical conditions, perform minor surgeries, and prescribe a broad formulary including Schedule II-V controlled substances in some cases. The Sonoran University of Health Sciences (formerly SCNM) is based in Tempe, which means the Tucson-Phoenix corridor has a high density of well-trained NDs.",
  },
  {
    q: 'Are there naturopathic doctors in Tucson who can be my primary care provider?',
    a: "Yes. Arizona NDs can serve as primary care providers and many Tucson patients see an ND as their primary doctor for annual exams, preventive care, chronic disease management, and integrative health. Tucson's ND community is particularly strong in integrative oncology support, hormone optimization, and gut health — reflecting the patient population that seeks ND care in Southern Arizona.",
  },
  {
    q: 'Does insurance cover naturopathic doctors in Arizona?',
    a: "Arizona does not have a mandated insurance coverage law for NDs, but several insurance plans — Blue Cross Blue Shield of Arizona, Aetna, UnitedHealthcare, and some AHCCCS managed care plans — do cover ND visits. Coverage varies significantly by plan and policy. Ask any Tucson ND whether they are in-network with your insurer, and ask about superbill (out-of-network reimbursement) options if they are not in-network.",
  },
  {
    q: 'What makes Tucson a good market for naturopathic care?',
    a: "Tucson's mix of University of Arizona academic influence, a large retiree population seeking integrative care, and a strong wellness culture in the surrounding communities (Oro Valley, Marana, Sahuarita) creates healthy demand for ND services. The UA College of Medicine and ND practices often co-exist in the same patient's care team — Tucson patients tend to be open to integrative approaches alongside conventional medicine.",
  },
]

export default async function BestTucsonNDPage() {
  const listings = await getListingsByCity('Tucson', 'Arizona').catch(() => [])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-stone-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-emerald-600 transition-colors">Directory</Link>
          <span>/</span>
          <Link href="/cities/phoenix-az" className="hover:text-emerald-600 transition-colors">Arizona</Link>
          <span>/</span>
          <span className="text-stone-600">Tucson</span>
        </nav>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 mb-10">
          <div className="flex items-center gap-2 text-emerald-600 mb-3">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Tucson, AZ</span>
          </div>
          <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
            Best Naturopathic Doctors in Tucson, AZ
          </h1>
          <p className="mt-3 text-stone-600 max-w-2xl leading-relaxed">
            Tucson has a thriving naturopathic medicine community backed by Arizona&apos;s broad ND
            licensing scope. Arizona-licensed NDs can serve as primary care providers, diagnose and
            treat medical conditions, and prescribe — making them a full alternative to conventional
            medicine for many patients. Sonoran University of Health Sciences in nearby Tempe trains
            many of the NDs practicing in Southern Arizona.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-stone-500">
            <span>{listings.length > 0 ? `${listings.length}+` : '20+'} NDs listed</span>
            <span>·</span>
            <span>Full primary care scope</span>
            <span>·</span>
            <span>Broad prescribing authority</span>
            <span>·</span>
            <span>Telehealth available</span>
          </div>
        </div>

        {listings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-stone-800">Naturopathic Doctors in Tucson, AZ</h2>
              <Link href="/listings?city=Tucson&state=AZ" className="flex items-center gap-1 text-sm text-emerald-600 font-semibold hover:opacity-80">
                See all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border p-12 text-center mb-12">
            <p className="text-stone-500 mb-4">Search naturopathic doctors in Tucson below.</p>
            <Link href="/listings?city=Tucson&state=AZ" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700">
              Search Tucson NDs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-5 mb-12">
          <h2 className="text-2xl font-semibold text-stone-800">Tucson ND Questions Answered</h2>
          {FAQ.map(({ q, a }) => (
            <div key={q} className="bg-white rounded-xl border border-stone-100 p-6 shadow-sm">
              <h3 className="font-semibold text-stone-800 mb-2">{q}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-stone-100">
          <h3 className="text-lg font-semibold text-stone-800 mb-4">Arizona ND Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/best/naturopathic-doctors-phoenix-az" className="text-sm text-emerald-600 hover:opacity-80 font-medium">NDs in Phoenix / Scottsdale →</Link>
            <Link href="/guides/naturopathic-medicine-insurance" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Does Insurance Cover ND? →</Link>
            <Link href="/guides/how-to-choose-a-naturopathic-doctor" className="text-sm text-emerald-600 hover:opacity-80 font-medium">How to Choose a Naturopathic Doctor →</Link>
            <Link href="/categories/hormone-optimization-nd" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Hormone Optimization NDs →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
