import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Naturopathic Medicine for Thyroid: Hypothyroidism & Hashimoto\'s | NaturopathicDoctorFinder.com',
  description: 'Naturopathic doctors take a root-cause approach to hypothyroidism and Hashimoto\'s thyroiditis. Learn what an ND evaluates, what treatments they use, and how to find one.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/guides/naturopathic-medicine-for-thyroid' },
}

export const revalidate = 86400

const FAQ = [
  {
    q: "Why do people with thyroid conditions seek naturopathic care?",
    a: "Most people who seek ND care for thyroid conditions have already seen a conventional endocrinologist or internist and feel their symptoms are not fully addressed. The most common scenarios: (1) TSH is 'normal' by lab range but the patient still has fatigue, cold intolerance, and weight gain; (2) Hashimoto's has been diagnosed but the provider's only recommendation is 'monitor your TSH and we'll start medication when it gets higher'; (3) The patient is on levothyroxine (T4-only) but continues to have symptoms that improve when T3 is added. NDs tend to investigate the full picture — gut health, nutrient status, adrenal function, and immune triggers — rather than treating a single lab value.",
  },
  {
    q: 'What tests will a naturopathic doctor run for thyroid conditions?',
    a: "A comprehensive ND thyroid workup typically includes: full thyroid panel (TSH, Free T4, Free T3, Reverse T3, TPO antibodies, thyroglobulin antibodies), nutrient levels (selenium, iodine/spot urine, ferritin/iron, vitamin D, zinc, magnesium), cortisol (salivary or serum — adrenal dysfunction affects thyroid function), sex hormones (estrogen-thyroid interaction is significant), and gut health markers if autoimmune (Hashimoto's) is present. The standard conventional workup often only includes TSH — this misses Free T3 conversion issues, Reverse T3 elevation, and subclinical nutrient deficiencies that directly affect thyroid function.",
  },
  {
    q: 'Can a naturopathic doctor prescribe thyroid medication?',
    a: "In states that license NDs with prescribing authority (Arizona, Oregon, Washington, Colorado, and others), NDs can prescribe thyroid medications including levothyroxine (T4), liothyronine (T3), and desiccated thyroid extract (Armour Thyroid, NP Thyroid) — which contains both T4 and T3. This is significant because some patients convert T4 to T3 poorly and feel better on desiccated thyroid or T3-containing protocols that many conventional physicians are reluctant to prescribe. In states without ND prescribing authority, the ND can provide nutritional and botanical support and co-manage with a prescribing physician.",
  },
  {
    q: "What is the naturopathic approach to Hashimoto's thyroiditis?",
    a: "Hashimoto's is an autoimmune condition — the immune system attacks thyroid tissue. NDs approach it by investigating what is triggering the immune dysregulation rather than only managing the thyroid hormone deficit. Common triggers investigated include: intestinal permeability ('leaky gut') and the gut-immune connection, food sensitivities (gluten sensitivity is well-documented in Hashimoto's literature; some patients have significant TPO antibody reduction on a gluten-free diet), nutrient deficiencies (selenium directly reduces TPO antibodies in clinical trials), environmental toxin exposure (halides, heavy metals, endocrine disruptors), and underlying viral or bacterial triggers. This root-cause approach aims to reduce the autoimmune attack, not just replace the thyroid hormone being lost.",
  },
  {
    q: "How long does it take to see results with naturopathic thyroid treatment?",
    a: "Most patients begin to notice some improvement — better energy, improved morning temperature, reduced hair loss — within 3-6 months of comprehensive naturopathic thyroid management. TPO antibody reduction (in Hashimoto's) typically requires 6-12 months of consistent intervention. The pace depends on how many factors are contributing: a patient with selenium deficiency and nothing else may see rapid improvement; a patient with multiple gut issues, multiple nutrient deficiencies, and high stress loads will require longer. Thyroid conditions require ongoing management, not a one-time fix — expect an ongoing relationship with your ND similar to how you would manage any chronic condition.",
  },
]

export default function NaturopathicMedicineForThyroidPage() {
  const faqLd = {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="flex items-center gap-1.5 text-sm text-stone-400 mb-6">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-emerald-600 transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-stone-600">Naturopathic Medicine for Thyroid</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl leading-tight">
            Naturopathic Medicine for Thyroid: Hypothyroidism and Hashimoto&apos;s
          </h1>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Thyroid conditions — particularly Hashimoto&apos;s thyroiditis — are among the most common
            reasons patients seek naturopathic care. The conventional approach of monitoring TSH and
            prescribing T4-only medication leaves many patients symptomatic despite &ldquo;normal&rdquo;
            labs. NDs approach thyroid health through the lens of root causes: nutrient status, gut
            health, immune triggers, and hormone conversion — not just the number on a thyroid panel.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              How naturopathic doctors approach thyroid conditions
            </h2>
            <div className="space-y-3">
              {[
                { title: 'Full thyroid panel, not just TSH', detail: 'Free T3, Free T4, Reverse T3, TPO antibodies, and thyroglobulin antibodies reveal the complete picture. TSH alone misses T4-to-T3 conversion problems and active autoimmune attack.' },
                { title: 'Nutrient assessment', detail: 'Selenium, iodine, ferritin, zinc, vitamin D, and magnesium all directly affect thyroid hormone production and conversion. Deficiencies are correctable.' },
                { title: 'Gut-immune connection', detail: "Hashimoto's is an autoimmune condition. Intestinal permeability and gut dysbiosis are documented triggers of autoimmune activation. NDs often address gut health as a primary Hashimoto's intervention." },
                { title: 'Adrenal and sex hormone evaluation', detail: 'Adrenal dysfunction (chronic stress → high cortisol → elevated Reverse T3) suppresses active thyroid hormone. Estrogen dominance affects thyroid binding globulin. These interactions require a full hormone picture.' },
                { title: 'Food sensitivity testing', detail: "Gluten sensitivity and Hashimoto's co-occur at significantly higher rates than in the general population. Many patients see meaningful TPO antibody reduction on a gluten-free diet — this intervention is evidence-based." },
                { title: 'Desiccated thyroid prescribing', detail: 'NDs with prescribing authority can prescribe Armour Thyroid, NP Thyroid, and compounded T3/T4 combinations — options that many conventional physicians avoid but that clinical data supports for some patients.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-stone-100 p-5 shadow-sm">
                  <p className="font-semibold text-stone-800">{item.title}</p>
                  <p className="text-sm text-stone-600 mt-1 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Symptoms that suggest incomplete thyroid management
            </h2>
            <p className="text-stone-600 mb-4">
              If you have a thyroid diagnosis but still experience these symptoms, an ND evaluation may
              uncover what is being missed:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Persistent fatigue despite "normal" TSH',
                'Cold hands and feet / low morning temperature',
                'Hair thinning or loss',
                'Weight gain that does not respond to diet',
                'Brain fog and memory issues',
                'Constipation',
                'Low mood or depression',
                'Puffy face or swollen eyelids',
                'Dry skin and brittle nails',
                'Elevated cholesterol with no other explanation',
              ].map((symptom) => (
                <div key={symptom} className="flex items-start gap-2 bg-white rounded-xl border border-stone-100 p-3 text-sm shadow-sm">
                  <span className="text-emerald-600 mt-0.5 font-bold">→</span>
                  <span className="text-stone-700">{symptom}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-stone-800">Frequently Asked Questions</h2>
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl border border-stone-100 p-6 shadow-sm">
                <h3 className="font-semibold text-stone-800 mb-2">{q}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </section>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
            <h2 className="font-semibold text-stone-800 mb-2">Find a naturopathic doctor for thyroid care</h2>
            <p className="text-sm text-stone-600 mb-4">
              Search for NDs who specialize in thyroid conditions and Hashimoto&apos;s thyroiditis.
            </p>
            <Link href="/listings" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700">
              Browse the Directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-stone-100">
            <h3 className="text-lg font-semibold text-stone-800 mb-4">Related Guides</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides/naturopathic-doctor-for-hormones" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Naturopathic Doctor for Hormones →</Link>
              <Link href="/guides/nd-for-autoimmune-disease" className="text-sm text-emerald-600 hover:opacity-80 font-medium">ND for Autoimmune Disease →</Link>
              <Link href="/guides/what-is-a-naturopathic-doctor" className="text-sm text-emerald-600 hover:opacity-80 font-medium">What is a Naturopathic Doctor? →</Link>
              <Link href="/guides/naturopathic-medicine-for-gut-health" className="text-sm text-emerald-600 hover:opacity-80 font-medium">ND for Gut Health →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
