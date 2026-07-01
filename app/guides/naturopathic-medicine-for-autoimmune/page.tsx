import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Naturopathic Medicine for Autoimmune Disease: What to Expect | Naturopathic Doctor Finder',
  description:
    "Naturopathic doctors address autoimmune disease through root-cause testing, gut repair, anti-inflammatory protocols, and nutrient repletion. Here's what that looks like in practice.",
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/guides/naturopathic-medicine-for-autoimmune' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does naturopathic medicine work for autoimmune disease?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Naturopathic medicine can be highly effective for reducing the burden of autoimmune disease, especially in mild-to-moderate presentations. NDs address the underlying triggers — gut barrier dysfunction, nutrient deficiencies, chronic infections, hormonal imbalances, and environmental toxin exposure — that drive immune dysregulation. Many patients see measurable improvements in inflammatory markers, energy, pain, and quality of life. For severe autoimmune disease (high-dose immunosuppressants, organ involvement), ND care works best as adjunctive support alongside rheumatology or specialty care — not as a replacement.",
      },
    },
    {
      '@type': 'Question',
      name: 'What autoimmune conditions do NDs most commonly treat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common autoimmune conditions in naturopathic practice are Hashimoto's thyroiditis, rheumatoid arthritis, lupus (SLE), psoriasis and psoriatic arthritis, Sjögren's syndrome, celiac disease, Crohn's disease and ulcerative colitis, and multiple sclerosis support. Hashimoto's is by far the most common presentation — it is frequently underdiagnosed in conventional medicine, and NDs are often the first practitioners to run a full thyroid antibody panel and recognize the autoimmune pattern.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should I still see a rheumatologist if I work with an ND for autoimmune disease?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — and a good ND will tell you the same thing. Rheumatologists are essential for diagnosis, disease monitoring, and managing medications (DMARDs, biologics, steroids) when they are medically necessary. Naturopathic care in autoimmune disease works best as an additive layer — addressing lifestyle, gut, nutrition, and inflammatory load — on top of appropriate specialist oversight. An ND who discourages you from seeing a rheumatologist for a diagnosed inflammatory autoimmune condition is not operating responsibly.",
      },
    },
    {
      '@type': 'Question',
      name: 'What labs does a naturopathic doctor run for autoimmune disease?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A comprehensive ND autoimmune workup typically includes: full thyroid panel with antibodies (TSH, free T3, free T4, reverse T3, TPO antibodies, thyroglobulin antibodies); ANA screen with reflex autoantibody panel; inflammatory markers (high-sensitivity CRP, ESR, homocysteine); micronutrient panel (vitamin D, B12, zinc, magnesium, folate, ferritin); gut health markers (secretory IgA, calprotectin, zonulin or comprehensive stool analysis); hormonal assessment; and sometimes infectious disease screening for chronic viral reactivation or tick-borne co-infections, depending on presentation.",
      },
    },
  ],
}

const autoimmune_conditions = [
  { name: "Hashimoto's thyroiditis", detail: "The most common autoimmune condition in naturopathic practice. TSH alone doesn't detect it — full thyroid antibody testing is required. NDs frequently identify Hashimoto's in patients who've been told their thyroid labs are 'normal'." },
  { name: 'Rheumatoid arthritis', detail: 'Inflammatory joint disease driven by immune dysregulation. ND adjunctive care focuses on anti-inflammatory diet, omega-3 supplementation, gut health, and reducing modifiable inflammatory triggers alongside DMARD therapy.' },
  { name: 'Lupus (SLE)', detail: 'Complex multi-organ autoimmune disease. ND care supports patients with lupus through anti-inflammatory nutrition, vitamin D optimization, stress reduction, and gut health protocols — always as adjunctive care alongside rheumatology management.' },
  { name: "Sjögren's syndrome", detail: 'Autoimmune exocrine gland dysfunction (dry eyes, dry mouth, fatigue). ND care addresses the systemic inflammatory burden and supports mucosal health through omega-3s, anti-inflammatory botanicals, and nutritional support.' },
  { name: 'Psoriasis and psoriatic arthritis', detail: 'Strong gut-skin and gut-joint connections exist in psoriasis. Naturopathic protocols address gut microbiome, dietary triggers (often gluten and nightshades), and systemic inflammation alongside dermatology or rheumatology care.' },
  { name: 'Celiac disease', detail: 'Autoimmune reaction to gluten with systemic effects — thyroid, neurological, and reproductive. ND care helps patients maintain strict gluten avoidance, address gut repair, and correct the nutritional deficiencies celiac reliably causes.' },
]

export default function NaturopathicMedicineForAutoimmuneGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-primary">Guides</Link>
          <span>/</span>
          <span className="text-gray-700">Naturopathic Medicine for Autoimmune Disease</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            Naturopathic Medicine for Autoimmune Disease: What to Expect
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Autoimmune disease is one of the areas where naturopathic medicine has the most to offer
            patients who feel their conventional care isn&apos;t addressing the full picture. Here&apos;s
            how naturopathic doctors approach autoimmunity — and what patients can realistically expect.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Functional Medicine Lens on Autoimmunity</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Conventional medicine approaches autoimmune disease by suppressing the overactive immune
              response — with corticosteroids, DMARDs, biologics, and immunosuppressants. These
              medications can be lifesaving, and in moderate-to-severe disease they are often necessary.
              But they don&apos;t ask why the immune system started attacking the body in the first place.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Naturopathic medicine asks that question. And the research increasingly supports it:
              gut barrier dysfunction (intestinal permeability), chronic infections, nutritional
              deficiencies, toxin exposure, and hormonal imbalances all appear to play roles in
              triggering and sustaining autoimmune activity. Addressing these upstream factors can
              reduce symptom burden, lower inflammatory markers, and in some cases reduce medication
              requirements — always in coordination with your specialist, not in place of them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Autoimmune Conditions Treated Naturopathically</h2>
            <div className="space-y-3">
              {autoimmune_conditions.map(({ name, detail }) => (
                <div key={name} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{name}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Testing in Naturopathic Autoimmune Care</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              One of the most tangible differences in naturopathic autoimmune care is the depth of
              diagnostic testing. A comprehensive ND workup for autoimmune disease typically includes
              panels most conventional practitioners do not routinely run:
            </p>
            <div className="space-y-3">
              {[
                { test: 'Comprehensive stool analysis (GI-MAP or GI Effects)', role: 'Maps the gut microbiome — pathogens, beneficial bacteria, digestive markers, intestinal permeability (calprotectin, secretory IgA). Gut dysbiosis is a known driver of autoimmune activity.' },
                { test: 'Full thyroid panel with antibodies', role: 'TSH, free T3, free T4, reverse T3, TPO antibodies, thyroglobulin antibodies. The antibody components identify Hashimoto\'s — which standard TSH alone misses.' },
                { test: 'ANA and autoantibody panel', role: 'Antinuclear antibody screen with reflex testing to identify specific autoimmune patterns (anti-dsDNA for lupus, anti-CCP for RA, anti-Ro/SSA and anti-La/SSB for Sjögren\'s).' },
                { test: 'Micronutrient panel', role: 'Vitamin D, B12, zinc, magnesium, ferritin, folate — deficiencies in all of these are common in autoimmune patients and directly worsen immune dysregulation. Correcting them is often a significant part of treatment.' },
                { test: 'Food sensitivity testing (IgG)', role: 'Identifies delayed food reactions that contribute to intestinal permeability and systemic inflammation. Controversial in conventional medicine but commonly used in ND practice as part of an elimination-reintroduction protocol.' },
              ].map(({ test, role }) => (
                <div key={test} className="bg-brand-cream rounded-xl border border-brand-sage/20 p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{test}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{role}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Naturopathic Autoimmune Treatment Looks Like</h2>
            <div className="space-y-3">
              {[
                { approach: 'Elimination diet protocols', detail: 'The autoimmune protocol (AIP), gluten-free diet, dairy-free diet, or low-lectin approaches reduce the dietary inflammatory triggers most common in autoimmune disease. NDs use elimination and structured reintroduction — not blanket restrictions — to identify your specific triggers.' },
                { approach: 'Gut repair protocol', detail: 'L-glutamine, zinc carnosine, colostrum, deglycyrrhizinated licorice (DGL), and slippery elm are used to support intestinal mucosal barrier repair. This phase typically runs 8-12 weeks and is central to long-term autoimmune management.' },
                { approach: 'Anti-inflammatory botanical supplementation', detail: 'Curcumin, boswellia, resveratrol, and fish oil have peer-reviewed evidence supporting anti-inflammatory effects in autoimmune conditions. NDs use therapeutic doses based on published clinical evidence, not general wellness dosing.' },
                { approach: 'Targeted micronutrient repletion', detail: 'Correcting deficiencies in vitamin D (often dosed to achieve 50-80 ng/mL in autoimmune patients), B12, zinc, magnesium, and omega-3s is often a significant part of reducing autoimmune activity.' },
                { approach: 'Stress and HPA axis support', detail: 'Chronic cortisol dysregulation directly impacts immune regulation. Adaptogens (ashwagandha, rhodiola), mind-body interventions, and sleep optimization are routinely integrated — not optional additions.' },
              ].map(({ approach, detail }) => (
                <div key={approach} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{approach}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How ND Care Complements Rheumatology</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The right relationship between ND and rheumatology is additive, not competitive. A
              rheumatologist diagnoses, monitors disease activity (CRP, anti-dsDNA titers, synovitis,
              organ involvement), and manages immunosuppressive medications when necessary. A
              naturopathic doctor addresses the lifestyle, nutritional, gut, and stress dimensions
              that drive inflammatory burden — and can help patients achieve better disease control
              on lower medication doses in some cases.
            </p>
            <p className="text-gray-600 leading-relaxed">
              NDs should not advise patients to discontinue immunosuppressant medications for serious
              autoimmune disease. An ND who suggests stopping methotrexate or a biologic without
              rheumatology guidance is operating outside responsible practice. The best ND for
              autoimmune disease is one who actively coordinates with your specialist team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Find a Naturopathic Doctor for Autoimmune Disease</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/listings"
              className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors"
            >
              Browse the Directory
            </Link>
            <Link href="/guides/naturopathic-medicine-for-thyroid" className="text-brand-primary font-medium hover:underline">Naturopathic Medicine for Thyroid →</Link>
            <Link href="/guides/naturopathic-medicine-for-gut-health" className="text-brand-primary font-medium hover:underline">Naturopathic Medicine for Gut Health →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
