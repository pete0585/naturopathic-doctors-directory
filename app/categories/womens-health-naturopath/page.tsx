import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: "Naturopathic Doctors for Women's Health | NaturopathicDoctorFinder",
  description:
    "Find naturopathic doctors specializing in women's health — PCOS, perimenopause, endometriosis, fertility, postpartum recovery, and thyroid. Browse licensed NDs across all 25 licensed states.",
  alternates: {
    canonical: "https://naturopathicdoctorfinder.com/categories/womens-health-naturopath",
  },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Do naturopathic doctors treat PCOS?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — PCOS is one of the most common reasons women seek naturopathic care. NDs address PCOS through insulin regulation (diet, berberine, inositol), androgen reduction (botanical support), gut health, and adrenal support. The naturopathic approach works well as primary care for mild-moderate PCOS and as complementary support for more complex cases.",
      },
    },
    {
      '@type': 'Question',
      name: "Can an ND help with menopause?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Naturopathic doctors are well-trained in managing perimenopause and menopause — hot flashes, sleep disruption, mood changes, vaginal dryness, and cognitive symptoms. NDs use phytoestrogens, adaptogens, lifestyle protocols, and in states with prescribing authority, bioidentical hormone therapy. Many women seek ND care specifically because they want a more individualized approach than standard HRT prescribing.",
      },
    },
    {
      '@type': 'Question',
      name: "What does a women's health ND do differently?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Women's health NDs tend to spend significantly more time in the intake process — asking about cycle history, symptoms across the menstrual cycle, gut health, stress, sleep, and diet — than a conventional 15-minute appointment allows. They run more comprehensive hormonal labs (full thyroid panels, DUTCH hormone testing, sex hormone panels) and use a broader toolkit of interventions: dietary modification, targeted supplementation, botanical medicine, and in some states, bioidentical hormones. The emphasis is on identifying and treating root causes, not just managing symptoms.",
      },
    },
  ],
}

export default async function WomensHealthNaturopathPage() {
  const { listings } = await getListings({ specialty: 'womens-health' })
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
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-primary">Find an ND</Link>
          <span>/</span>
          <span className="text-gray-700">Women&apos;s Health</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Naturopathic Doctors for Women&apos;s Health
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Women&apos;s health naturopaths specialize in the hormonal, reproductive, and metabolic conditions that conventional medicine often addresses incompletely — or not at all. PCOS, perimenopause, endometriosis, fertility challenges, postpartum recovery, thyroid disease, and chronic fatigue are among the most common reasons women seek naturopathic care. Many come after years of being told their labs are &quot;normal&quot; while they still feel unwell.
          </p>
          <p className="text-gray-600 max-w-3xl mt-3 leading-relaxed">
            Licensed women&apos;s health NDs bring a combination of comprehensive diagnostic testing, botanical and nutritional protocols, and (in prescribing states) bioidentical hormones to address the root causes of these conditions — not just their symptoms.
          </p>
        </div>

        {/* Listings */}
        {displayListings.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              {fallback
                ? 'Showing active naturopathic doctors — use specialty filters to narrow by women\'s health'
                : <>Showing <strong className="text-gray-900">{listings.length}</strong> naturopathic doctor{listings.length !== 1 ? 's' : ''} specializing in women&apos;s health</>
              }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {displayListings.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
            <div className="text-center mb-10">
              <Link
                href="/listings?specialty=womens-health"
                className="text-brand-primary font-medium hover:underline"
              >
                View all women&apos;s health NDs with filters &rarr;
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16 mb-10">
            <p className="text-gray-500 mb-4">Women&apos;s health ND listings are being added. Check back shortly.</p>
            <Link href="/listings" className="text-brand-primary hover:underline font-medium">
              Browse all NDs
            </Link>
          </div>
        )}

        {/* What women's health NDs specialize in */}
        <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 mb-8 prose-guide">
          <h2>What Women&apos;s Health Naturopaths Specialize In</h2>
          <p>
            The conditions women&apos;s health NDs see most frequently share a common thread: conventional medicine has limited tools for them, or the conventional tools (birth control, antidepressants, standard thyroid dosing) manage symptoms without addressing why they are happening.
          </p>
          <ul>
            <li><strong>PCOS</strong> — Insulin regulation, cycle restoration, androgen reduction, long-term fertility preservation</li>
            <li><strong>Perimenopause and menopause</strong> — Hot flashes, mood and sleep disruption, cognitive symptoms, bone health, heart health, bioidentical hormone therapy where indicated</li>
            <li><strong>Endometriosis</strong> — Inflammation reduction, estrogen detoxification, pain management, surgical recovery support</li>
            <li><strong>Fertility</strong> — Egg quality, cycle regulation, luteal phase defects, preconception optimization, unexplained infertility</li>
            <li><strong>Postpartum</strong> — Recovery, thyroiditis, mood, sleep, lactation support, nutritional repletion</li>
            <li><strong>Thyroid disorders</strong> — Hashimoto&apos;s, hypothyroidism, postpartum thyroiditis, subclinical dysfunction</li>
            <li><strong>Chronic fatigue and fibromyalgia</strong> — Mitochondrial support, sleep, gut, adrenal, and inflammation protocols</li>
          </ul>
          <p>
            The approach varies by condition and patient, but the consistent feature of naturopathic women&apos;s health care is a thorough initial workup — extended intake, comprehensive labs, and a treatment plan that addresses the person, not just the diagnosis.
          </p>
        </div>

        {/* Related categories */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <Link href="/guides/naturopathic-doctor-for-hormones" className="flex items-start gap-2 p-3 rounded-lg border border-gray-100 hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-colors">
              <span className="text-brand-primary font-bold mt-0.5">&#8594;</span>
              <div>
                <p className="font-medium text-gray-900">Can an ND Help with Hormones?</p>
                <p className="text-gray-500 text-xs mt-0.5">Thyroid, adrenal, PCOS, perimenopause, testosterone</p>
              </div>
            </Link>
            <Link href="/guides/nd-for-autoimmune-disease" className="flex items-start gap-2 p-3 rounded-lg border border-gray-100 hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-colors">
              <span className="text-brand-primary font-bold mt-0.5">&#8594;</span>
              <div>
                <p className="font-medium text-gray-900">NDs for Autoimmune Disease</p>
                <p className="text-gray-500 text-xs mt-0.5">Hashimoto&apos;s, lupus, RA, Crohn&apos;s, and more</p>
              </div>
            </Link>
            <Link href="/guides/how-to-choose-a-naturopathic-doctor" className="flex items-start gap-2 p-3 rounded-lg border border-gray-100 hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-colors">
              <span className="text-brand-primary font-bold mt-0.5">&#8594;</span>
              <div>
                <p className="font-medium text-gray-900">How to Choose a Naturopathic Doctor</p>
                <p className="text-gray-500 text-xs mt-0.5">What to look for, what questions to ask</p>
              </div>
            </Link>
            <Link href="/guides/questions-to-ask-your-naturopathic-doctor" className="flex items-start gap-2 p-3 rounded-lg border border-gray-100 hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-colors">
              <span className="text-brand-primary font-bold mt-0.5">&#8594;</span>
              <div>
                <p className="font-medium text-gray-900">Questions to Ask Before Scheduling</p>
                <p className="text-gray-500 text-xs mt-0.5">15+ questions to vet credentials and approach</p>
              </div>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-4">Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800">Do naturopathic doctors treat PCOS?</h3>
              <p className="text-gray-600 mt-1">Yes. PCOS is one of the most common conditions in ND practice. The naturopathic approach — addressing insulin resistance, inflammation, androgen excess, and cycle regulation — produces meaningful results for many women, especially those who have found birth control or metformin alone unsatisfying.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Can an ND help with menopause?</h3>
              <p className="text-gray-600 mt-1">Yes. Hot flashes, sleep disruption, mood changes, and cognitive symptoms are all within the scope of naturopathic care. NDs use phytoestrogens, adaptogens, and lifestyle protocols — and in prescribing states, bioidentical hormone therapy. The individualized approach is often better suited to perimenopausal variability than standardized HRT protocols.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">How is a women&apos;s health ND appointment different?</h3>
              <p className="text-gray-600 mt-1">Longer intake, more comprehensive labs, and a treatment plan built around root cause rather than symptom management. Initial appointments typically run 60-90 minutes. The clinical model is designed for the complexity of women&apos;s hormonal health in a way that a 15-minute primary care visit cannot be.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Find a Women&apos;s Health Naturopath Near You</h2>
          <p className="text-gray-600 mb-4">
            Browse licensed NDs specializing in women&apos;s health across all 25 licensed ND states.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/listings?specialty=womens-health"
              className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors"
            >
              Find a Women&apos;s Health ND
            </Link>
            <Link
              href="/submit"
              className="bg-white border border-brand-primary text-brand-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary/5 transition-colors"
            >
              Submit Your Practice
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
