import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Naturopathic Doctors for Hormone Optimization | NaturopathicDoctorFinder',
  description:
    'Find naturopathic doctors specializing in hormone optimization — thyroid, adrenal, testosterone, estrogen, progesterone, and DHEA. Browse licensed NDs across all 25 licensed states.',
  alternates: {
    canonical: 'https://naturopathicdoctorfinder.com/categories/hormone-optimization-nd',
  },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is hormone optimization in naturopathic medicine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hormone optimization is naturopathic medicine's approach to ensuring hormones — thyroid, adrenal cortisol, sex hormones, insulin — are functioning at levels that support health and vitality, not just within the broad 'normal' lab ranges. NDs run more comprehensive hormone panels than most conventional PCPs, interpret results in clinical context, and use dietary modification, targeted nutrients, botanical medicine, and bioidentical hormones (in prescribing states) to bring levels into optimal range.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can an ND prescribe bioidentical hormones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In the 25 US states where naturopathic medicine is licensed, NDs have prescribing authority that includes bioidentical hormones — estradiol, progesterone, testosterone, DHEA, and thyroid hormone. This varies by state: some states give NDs full primary care prescribing authority; others have a limited formulary. Check your state's naturopathic licensing scope to understand what your ND can prescribe independently.",
      },
    },
    {
      '@type': 'Question',
      name: 'What hormone tests do NDs run?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Naturopathic hormone evaluations typically include: full thyroid panel (TSH, Free T3, Free T4, Reverse T3, thyroid antibodies), comprehensive sex hormone panel (estradiol, progesterone, testosterone total and free, SHBG, DHEA-S, LH, FSH), adrenal/cortisol assessment (4-point salivary or DUTCH urine cortisol curve), fasting insulin and glucose, and in some cases DUTCH complete hormone metabolite testing. This is considerably more comprehensive than the TSH-only or basic panel most PCPs order.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is naturopathic hormone care different from an endocrinologist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Endocrinologists specialize in pathological hormone disease — Addison's, Cushing's, type 1 diabetes, pituitary tumors. They are the right specialist for diagnosing and managing these conditions. Naturopathic hormone care addresses the functional middle ground: the patient whose TSH is 3.5 and feels terrible but isn't hypothyroid by conventional criteria; the perimenopausal woman whose labs are 'normal' but who has severe symptoms; the man with testosterone in the low-normal range who doesn't qualify for TRT by insurance criteria. NDs optimize within normal ranges, not just treat disease.",
      },
    },
  ],
}

export default async function HormoneOptimizationNDPage() {
  const { listings } = await getListings({ specialty: 'hormone-optimization' })
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
          <span className="text-gray-700">Hormone Optimization</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Naturopathic Doctors for Hormone Optimization
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Hormone optimization naturopaths work with patients whose hormones are technically within normal range but not within the optimal range — and who feel the difference. Fatigue, brain fog, weight gain, low libido, poor sleep, and mood instability often have a hormonal driver that standard lab panels miss because conventional ranges are set for pathology detection, not health optimization.
          </p>
          <p className="text-gray-600 max-w-3xl mt-3 leading-relaxed">
            Licensed NDs in prescribing states have the authority to order comprehensive hormone testing and prescribe bioidentical hormones — making them a practical option for patients who want more than a statin and a referral when their labs come back &quot;normal.&quot;
          </p>
        </div>

        {displayListings.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              {fallback
                ? 'Showing all active NDs — filter by specialty for hormone optimization specialists'
                : `Showing ${displayListings.length} NDs specializing in hormone optimization`}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {displayListings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-gray-500 mb-4">Browse all naturopathic doctors and filter by specialty.</p>
            <Link href="/listings" className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors">
              Browse All NDs
            </Link>
          </div>
        )}

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-5">Hormones NDs Optimize</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { hormone: 'Thyroid (T3, T4)', what: 'Full thyroid panels beyond TSH alone — Free T3, Reverse T3, antibodies. NDs treat subclinical and clinical hypothyroidism with T4/T3 combination and address thyroid autoimmunity drivers.' },
              { hormone: 'Cortisol and adrenal function', what: '4-point salivary or urine cortisol testing maps the daily cortisol curve. Adrenal fatigue and HPA axis dysregulation are treated with adaptogens, sleep protocols, and lifestyle medicine.' },
              { hormone: 'Estrogen and progesterone', what: 'Perimenopause and menopause management using bioidentical estradiol and progesterone. Also addresses estrogen dominance in younger women via gut health, liver support, and dietary intervention.' },
              { hormone: 'Testosterone (men and women)', what: "Low testosterone in men and women affects energy, libido, muscle mass, and mood. NDs evaluate free testosterone, SHBG, and LH/FSH to understand the driver — then treat with bioidentical testosterone or address upstream causes." },
              { hormone: 'Insulin and blood sugar', what: 'Fasting insulin, HOMA-IR, and glucose curve assessment — not just fasting glucose. Naturopathic insulin optimization uses dietary intervention, berberine, inositol, and chromium before pharmaceutical options.' },
              { hormone: 'DHEA and pregnenolone', what: 'These upstream hormonal precursors decline with age and are often underevaluated. NDs use DHEA-S testing and titrate supplementation to support downstream hormone production.' },
            ].map(({ hormone, what }) => (
              <div key={hormone} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{hormone}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{what}</p>
              </div>
            ))}
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

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/categories/womens-health-naturopath" className="text-brand-primary font-medium hover:underline">Women&apos;s Health NDs →</Link>
            <Link href="/guides/naturopathic-doctor-for-hormones" className="text-brand-primary font-medium hover:underline">Naturopathic Doctor for Hormones →</Link>
            <Link href="/guides/what-is-a-naturopathic-doctor" className="text-brand-primary font-medium hover:underline">What Is a Naturopathic Doctor? →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
