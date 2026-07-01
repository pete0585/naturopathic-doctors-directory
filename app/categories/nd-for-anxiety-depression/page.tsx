import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Naturopathic Medicine for Anxiety and Depression | Naturopathic Doctor Finder',
  description:
    'Find NDs who treat anxiety and depression through nutritional, hormonal, gut, and lifestyle approaches. A root-cause alternative to medication-first psychiatry.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/categories/nd-for-anxiety-depression' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a naturopathic doctor treat anxiety and depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Licensed naturopathic doctors can effectively treat mild-to-moderate anxiety and depression through root-cause approaches — identifying nutritional deficiencies, thyroid dysfunction, gut microbiome imbalances, hormonal issues, and lifestyle factors that drive mood disorders. For severe depression, suicidal ideation, or conditions requiring psychiatric medication titration, NDs work best as part of a team with a psychiatrist or prescribing clinician. NDs in licensed states with prescribing authority may also be able to prescribe select medications in the mood disorder space.",
      },
    },
    {
      '@type': 'Question',
      name: 'What nutritional deficiencies are linked to depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Multiple nutritional deficiencies have strong research associations with depression and anxiety: vitamin D (deficiency strongly associated with depression — target levels above 50 ng/mL), omega-3 fatty acids (EPA in particular has antidepressant evidence), magnesium (deficiency common, associated with anxiety and poor sleep), zinc (depletion associated with depression — especially in patients on antidepressants), B12 and folate (required for methylation and neurotransmitter synthesis), and iron (low ferritin drives fatigue and mood dysfunction even without anemia). NDs routinely test for all of these.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the gut-brain connection in anxiety and depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The gut-brain axis is a bidirectional communication highway between the gut microbiome and the brain. Over 90% of serotonin is produced in the gut, not the brain. Gut dysbiosis (imbalanced microbiome), intestinal permeability, and inflammatory gut conditions all directly affect neurotransmitter production, vagal nerve tone, and systemic inflammation — each of which influences mood. NDs address the gut-brain axis through comprehensive stool testing, dietary intervention, probiotic and prebiotic protocols, and gut barrier repair as part of mood disorder treatment.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is naturopathic care for anxiety and depression appropriate instead of medication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For mild-to-moderate anxiety and depression, naturopathic approaches can be highly effective as primary treatment — particularly when root causes like nutritional deficiencies, subclinical hypothyroidism, or gut dysbiosis are identified and corrected. For moderate-to-severe depression or anxiety that significantly impairs functioning, naturopathic care works best alongside rather than instead of psychiatric medication. Never discontinue psychiatric medications without working with your prescribing clinician.",
      },
    },
  ],
}

export default async function NDForAnxietyDepressionPage() {
  const { listings } = await getListings({ specialty: 'mental-health' })
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
          <span className="text-gray-700">Anxiety and Depression</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Naturopathic Medicine for Anxiety and Depression
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Naturopathic doctors approach anxiety and depression as multi-system conditions with
            biochemical, hormonal, gut, and lifestyle components — rather than treating symptoms
            alone with medication. This root-cause approach is most appropriate for mild-to-moderate
            presentations or as adjunctive care alongside psychiatric treatment.
          </p>
        </div>

        {displayListings.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              {fallback
                ? 'Browse all NDs and filter by mental health or mood specialty'
                : `Showing ${displayListings.length} NDs with mental health / mood specialization`}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {displayListings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-12 mb-10">
            <p className="text-gray-500 mb-4">Browse all NDs and look for mood or mental health specialization.</p>
            <Link href="/listings" className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors">
              Browse All NDs
            </Link>
          </div>
        )}

        <div className="mb-10 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common ND Interventions for Anxiety and Depression</h2>
            <div className="space-y-3">
              {[
                {
                  intervention: 'Nutritional deficiency correction',
                  detail: 'Vitamin D, magnesium, zinc, omega-3s, B12, and folate are all associated with depression and anxiety when deficient. Correcting these through targeted supplementation often produces measurable mood improvement — and these deficiencies are frequently missed in standard psychiatric evaluations.',
                },
                {
                  intervention: 'Thyroid dysfunction assessment',
                  detail: "Subclinical hypothyroidism — TSH elevated but within 'normal' range, or with normal TSH but positive thyroid antibodies (Hashimoto's) — is a common and frequently missed driver of depression, fatigue, brain fog, and anxiety. A full thyroid panel including antibodies is standard in ND mood disorder workups.",
                },
                {
                  intervention: 'Gut microbiome assessment and treatment',
                  detail: 'Comprehensive stool analysis identifies dysbiosis, pathogens, and inflammatory markers that contribute to poor mood via the gut-brain axis. Treatment includes dietary modification, prebiotics, targeted probiotics, and gut barrier repair protocols.',
                },
                {
                  intervention: 'Adaptogenic herbs for cortisol regulation',
                  detail: "Ashwagandha, rhodiola rosea, and holy basil (tulsi) have peer-reviewed evidence for reducing cortisol, anxiety scores, and subjective stress. NDs prescribe these at therapeutic doses based on individual presentations — they are not one-size-fits-all supplements.",
                },
                {
                  intervention: 'Targeted mood-support supplementation',
                  detail: '5-HTP (serotonin precursor), L-theanine (calming amino acid, synergistic with reduced caffeine), inositol (evidence for anxiety and OCD spectrum), and GABA support compounds are used in naturopathic mood protocols based on clinical presentation and symptom pattern.',
                },
                {
                  intervention: 'Hormonal assessment',
                  detail: "Sex hormone imbalances — low testosterone in men, low progesterone or estrogen in perimenopausal women, PCOS-related androgen excess — are common and frequently overlooked drivers of mood disorders. NDs include hormonal assessment as part of comprehensive mood workups.",
                },
              ].map(({ intervention, detail }) => (
                <div key={intervention} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{intervention}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="font-semibold text-amber-900 mb-2">Important: When to See a Psychiatrist</h2>
            <p className="text-sm text-amber-800 leading-relaxed">
              Naturopathic medicine is most appropriate for mild-to-moderate anxiety and depression, or
              as adjunctive care. For severe depression, active suicidal ideation, bipolar disorder,
              psychosis, or conditions requiring medication titration, a psychiatrist or prescribing
              clinician should be your primary care provider. Do not discontinue psychiatric medications
              without working with your prescribing clinician — abrupt discontinuation can be dangerous.
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
          <h2 className="text-xl font-bold text-gray-900 mb-2">Are You an ND Specializing in Mood and Mental Health?</h2>
          <p className="text-gray-600 mb-4 text-sm">
            Patients seeking naturopathic approaches to anxiety and depression are actively searching this directory. Claim or submit your listing.
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
            <Link href="/guides/naturopathic-medicine-for-thyroid" className="text-brand-primary font-medium hover:underline">Naturopathic Medicine for Thyroid →</Link>
            <Link href="/guides/naturopathic-medicine-for-autoimmune" className="text-brand-primary font-medium hover:underline">Naturopathic Medicine for Autoimmune →</Link>
            <Link href="/categories/hormone-optimization-nd" className="text-brand-primary font-medium hover:underline">Hormone Optimization NDs →</Link>
            <Link href="/guides/what-is-a-naturopathic-doctor" className="text-brand-primary font-medium hover:underline">What Is a Naturopathic Doctor? →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
