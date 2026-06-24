import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Houston, TX | NaturopathicDoctorFinder.com',
  description: 'Find naturopathic doctors in Houston, Texas. Important: Texas does not license NDs. This page helps Houston patients find telehealth NDs and licensed NDs in nearby states.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-houston-tx' },
}

export const revalidate = 3600

const FAQ = [
  {
    q: 'Are naturopathic doctors licensed in Texas?',
    a: "No. Texas does not have a naturopathic doctor licensing law. NDs cannot legally practice medicine or provide medical diagnoses in Texas. This means Houston patients cannot see a licensed ND in-person for primary care naturopathic services. However, many Houston patients work with telehealth NDs licensed in states like Arizona, Colorado, Oregon, or Washington, who can consult on wellness, lifestyle, supplements, and functional approaches via video — while your Texas-licensed primary care provider manages medical diagnoses and prescriptions.",
  },
  {
    q: 'What can a naturopathic doctor do for Houston patients via telehealth?',
    a: "Via telehealth, a licensed ND in another state can: review your labs and discuss functional medicine interpretations, provide guidance on nutrition, botanical medicine, and supplement protocols, help you understand your conventional diagnosis and explore complementary approaches, and support chronic disease management alongside your Texas physicians. They cannot diagnose conditions in Texas or prescribe pharmaceutical medications under Texas law.",
  },
  {
    q: 'Are there functional medicine doctors in Houston who offer similar services?',
    a: "Yes. Houston has a strong functional and integrative medicine community, including MD, DO, and NP practitioners who practice functional medicine. These providers are licensed in Texas and can diagnose and prescribe. Houston institutions like the UTHealth Memorial Hermann Medical Center and dedicated functional medicine practices in the Medical Center and Galleria areas serve patients looking for root-cause, systems-based care. The search terms to use in Houston: 'functional medicine doctor Houston' or 'integrative medicine Houston' will yield licensed Texas providers.",
  },
  {
    q: 'Can I find a naturopathic doctor near Houston in a neighboring licensed state?',
    a: "New Mexico and Colorado are the closest states to Texas that license NDs. NDs in Albuquerque, Santa Fe, or Denver are accessible via a drive or flight for in-person consultations, and most offer telehealth that can serve Texas residents for wellness-focused consultations. Some Arizona NDs also see Texas patients via telehealth.",
  },
]

export default async function BestHoustonNDPage() {
  const listings = await getListingsByCity('Houston', 'Texas', 6).catch(() => [])

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
          <span className="text-stone-600">Houston, TX</span>
        </nav>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 mb-10">
          <div className="flex items-center gap-2 text-emerald-600 mb-3">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Houston, TX</span>
          </div>
          <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
            Naturopathic Doctors Near Houston, TX
          </h1>
          <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm font-semibold text-amber-800 mb-1">Licensing Note</p>
            <p className="text-sm text-amber-700">
              Texas does not license naturopathic doctors. Houston patients seeking ND care
              typically use telehealth NDs licensed in Arizona, Colorado, Oregon, or Washington,
              or see licensed functional medicine MDs/DOs in the Houston area.
            </p>
          </div>
          <p className="mt-4 text-stone-600 max-w-2xl leading-relaxed">
            Houston has one of the largest and most sophisticated medical ecosystems in the US —
            anchored by the Texas Medical Center — but naturopathic licensing is not part of the
            state&apos;s regulatory framework. Here&apos;s how to access naturopathic-style care
            from Houston.
          </p>
        </div>

        {listings.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-stone-800">Telehealth NDs Serving Texas</h2>
              <Link href="/listings?telehealth=true" className="flex items-center gap-1 text-sm text-emerald-600 font-semibold hover:opacity-80">
                See all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {listings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-5 mb-12">
          <h2 className="text-2xl font-semibold text-stone-800">Houston ND Questions Answered</h2>
          {FAQ.map(({ q, a }) => (
            <div key={q} className="bg-white rounded-xl border border-stone-100 p-6 shadow-sm">
              <h3 className="font-semibold text-stone-800 mb-2">{q}</h3>
              <p className="text-sm text-stone-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-stone-100">
          <h3 className="text-lg font-semibold text-stone-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/naturopathic-doctor-vs-functional-medicine" className="text-sm text-emerald-600 hover:opacity-80 font-medium">ND vs. Functional Medicine →</Link>
            <Link href="/guides/what-is-a-naturopathic-doctor" className="text-sm text-emerald-600 hover:opacity-80 font-medium">What is a Naturopathic Doctor? →</Link>
            <Link href="/best/naturopathic-doctors-austin-tx" className="text-sm text-emerald-600 hover:opacity-80 font-medium">NDs Near Austin →</Link>
            <Link href="/listings?telehealth=true" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Telehealth NDs →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
