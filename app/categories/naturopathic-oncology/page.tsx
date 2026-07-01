import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Naturopathic Oncology: Integrative Cancer Support | Naturopathic Doctor Finder',
  description:
    'Find naturopathic oncologists and integrative cancer support NDs. Learn what naturopathic oncology is, what FABNO means, and how NDs support cancer patients during and after treatment.',
  alternates: {
    canonical: 'https://naturopathicdoctorfinder.com/categories/naturopathic-oncology',
  },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a naturopathic oncologist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A naturopathic oncologist is a licensed ND who specializes in supporting cancer patients before, during, and after conventional treatment. The highest credential in the field is FABNO — Fellow of the American Board of Naturopathic Oncology — which requires additional training, clinical hours in oncology settings, and a board examination beyond the ND degree. Some NDs work extensively with cancer patients without holding the FABNO designation but have developed significant clinical oncology experience.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is naturopathic oncology safe during chemotherapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "When properly coordinated with your oncologist, naturopathic oncology care is designed to be safe during conventional cancer treatment. The critical point is coordination: some supplements, herbs, and high-dose antioxidants can interact with chemotherapy or radiation and must be timed or avoided during active treatment. A qualified naturopathic oncologist knows these interactions and will communicate with your oncology team. Never start a supplement protocol during cancer treatment without disclosing it to both your oncologist and your ND.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does naturopathic oncology replace conventional cancer treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No — naturopathic oncology is integrative, not alternative. It works alongside surgery, chemotherapy, radiation, immunotherapy, and targeted therapies — never instead of them. The naturopathic oncologist's role is to optimize the patient's health status to support treatment tolerance and recovery, manage side effects, reduce inflammation, support immune function, and address quality of life. Rejecting conventional cancer treatment in favor of naturopathic-only care is not something a FABNO-credentialed or responsible ND will recommend.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a naturopathic oncologist near me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Browse this directory and look for NDs who list oncology or integrative cancer support as a specialty area. The FABNO credential (Fellow of the American Board of Naturopathic Oncology) indicates the highest level of specialization in this field. The OncANP (Oncology Association of Naturopathic Physicians) also maintains a directory of member NDs with oncology focus. Telehealth with a naturopathic oncologist is often available for patients who don't have a local specialist.",
      },
    },
  ],
}

export default async function NaturopathicOncologyPage() {
  const { listings } = await getListings({ specialty: 'oncology' })
  const fallback = listings.length === 0
  const { listings: allActive } = fallback ? await getListings() : { listings: [] }
  const displayListings = fallback ? allActive.slice(0, 12) : listings.slice(0, 12)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-primary">Find an ND</Link>
          <span>/</span>
          <span className="text-gray-700">Naturopathic Oncology</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Naturopathic Oncology: Integrative Cancer Support
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Naturopathic oncology is one of the most specialized areas within naturopathic medicine — focused on supporting cancer patients through the full treatment journey, from diagnosis through survivorship. The goal is never to replace conventional oncology but to optimize a patient&apos;s health, manage treatment side effects, reduce recurrence risk, and improve quality of life throughout cancer care.
          </p>
        </div>

        {displayListings.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              {fallback
                ? 'Showing all active NDs — search for oncology-focused NDs using the specialty filter'
                : `Showing ${displayListings.length} NDs with oncology specialization`}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {displayListings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-gray-500 mb-4">Browse all naturopathic doctors and look for oncology-focused listings.</p>
            <Link href="/listings" className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors">
              Browse All NDs
            </Link>
          </div>
        )}

        <div className="mb-10 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">What is naturopathic oncology?</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed">
              Naturopathic oncology is a specialization within naturopathic medicine focused on supporting cancer patients before, during, and after conventional treatment. The field has its own board certification — the FABNO (Fellow of the American Board of Naturopathic Oncology) — which is the highest credential available in naturopathic oncology and requires additional clinical training in oncology settings plus a board examination beyond the standard ND degree.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What naturopathic oncologists do (and do not do)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <p className="font-semibold text-emerald-900 mb-3">What NDs DO in oncology support</p>
                <ul className="text-sm text-emerald-800 space-y-2">
                  {[
                    'Manage treatment side effects: fatigue, nausea, neuropathy, mucositis',
                    'Optimize nutrition to support treatment tolerance and immune function',
                    'Reduce inflammation through evidence-based natural interventions',
                    'Support sleep, mood, and quality of life during treatment',
                    'Provide survivorship planning and recurrence reduction strategies',
                    'Coordinate with the oncology team and communicate about all supplements',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-3">What naturopathic oncology does NOT replace</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  {[
                    'Surgery — tumor removal and staging procedures',
                    'Chemotherapy or targeted therapy',
                    'Radiation treatment',
                    'Immunotherapy',
                    'Oncologist-led treatment planning and monitoring',
                    'Standard-of-care cancer protocols',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5 flex-shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who benefits from naturopathic oncology support?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { group: 'During active treatment', who: 'Cancer patients experiencing significant treatment side effects who want evidence-based integrative support alongside conventional care.' },
                { group: 'Integrative approach seekers', who: 'Patients interested in natural, evidence-based approaches that complement conventional treatment rather than replace it — reducing inflammation, supporting immunity, optimizing nutrition.' },
                { group: 'Cancer survivors', who: 'Post-treatment survivors focused on long-term health optimization, reducing recurrence risk, and managing the long-term effects of chemotherapy and radiation.' },
              ].map(({ group, who }) => (
                <div key={group} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{group}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{who}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Finding a naturopathic oncologist</h2>
            <p className="text-gray-600 max-w-3xl leading-relaxed mb-3">
              Look for the <strong>FABNO</strong> (Fellow of the American Board of Naturopathic Oncology) credential when searching for a naturopathic oncologist. Some licensed NDs develop significant oncology clinical experience without holding FABNO — ask about their oncology training and experience directly. Always ensure your ND will coordinate directly with your oncology team before starting any integrative protocol.
            </p>
            <p className="text-gray-600 max-w-3xl leading-relaxed text-sm">
              Telehealth with a naturopathic oncologist is widely available for patients who do not have a local specialist — this is a practical option for patients receiving cancer treatment in communities without naturopathic oncology coverage.
            </p>
          </div>
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

        <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Are You an ND with Oncology Specialization?</h2>
          <p className="text-gray-600 mb-4 text-sm">
            FABNO-credentialed NDs and those with significant oncology experience can reach cancer patients searching for integrative support. Claim or submit your listing.
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

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/guides/nd-vs-md-vs-do" className="text-brand-primary font-medium hover:underline">ND vs. MD vs. DO →</Link>
            <Link href="/guides/what-is-a-naturopathic-doctor" className="text-brand-primary font-medium hover:underline">What Is a Naturopathic Doctor? →</Link>
            <Link href="/categories/hormone-optimization-nd" className="text-brand-primary font-medium hover:underline">Hormone Optimization NDs →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
