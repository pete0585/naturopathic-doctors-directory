import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Naturopathic Medicine for PCOS: Root-Cause Treatment Guide | NaturopathicDoctorFinder',
  description:
    'Naturopathic doctors address PCOS at the root — insulin resistance, hormone imbalance, inflammation, and adrenal dysfunction. Learn how NDs approach PCOS and what evidence-based tools they use.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/guides/naturopathic-medicine-for-pcos' },
}

export const revalidate = 86400

const FAQ = [
  {
    q: 'Can a naturopath help with PCOS?',
    a: "Yes — polycystic ovary syndrome is one of the most common hormonal conditions that brings patients to naturopathic care. NDs are well-suited to PCOS because the condition involves multiple interconnected systems: insulin metabolism, sex hormone balance, adrenal function, and inflammation. Naturopathic medicine's root-cause approach addresses these drivers rather than only managing symptoms. Many women with PCOS seek ND care after finding that birth control suppresses symptoms temporarily without improving the underlying metabolic and hormonal picture.",
  },
  {
    q: 'What supplements do naturopaths use for PCOS?',
    a: "The most evidence-supported supplements NDs use for PCOS include: myo-inositol and D-chiro-inositol in a 40:1 ratio (multiple RCTs show improvements in insulin sensitivity, cycle regularity, and androgen levels), berberine (shown in studies to be comparable to metformin for insulin resistance with fewer GI side effects), spearmint tea or extract (demonstrated anti-androgenic effects in clinical trials — reduces free testosterone and hirsutism), N-acetylcysteine (NAC), omega-3 fatty acids, and magnesium glycinate. Supplement protocols should be individualized and supervised by a qualified ND.",
  },
  {
    q: 'Is naturopathic medicine effective for PCOS?',
    a: "Research supports several naturopathic approaches to PCOS, particularly those targeting insulin resistance. Myo-inositol has multiple randomized controlled trials supporting its use; berberine has been shown to perform comparably to metformin in some studies; dietary interventions consistently demonstrate improvements in PCOS markers. The most effective approach combines multiple evidence-based interventions — nutrition, targeted supplementation, and stress management — as part of a comprehensive care plan, ideally coordinated with a conventional OB/GYN for monitoring.",
  },
  {
    q: 'How long does naturopathic PCOS treatment take to show results?',
    a: "Timeline varies by severity and which interventions are used. Insulin resistance markers (fasting insulin, HOMA-IR) often begin improving within 6-12 weeks of dietary intervention and appropriate supplementation. Androgen-related symptoms like acne and hirsutism typically take 3-6 months to show meaningful change. Cycle regularity improvements often take 6-12 months of consistent intervention because the HPO axis recalibrates slowly. Patients who have been on birth control for years may experience an initial adjustment period. Expect ongoing management rather than a quick fix.",
  },
]

export default function NaturopathicMedicineForPCOSPage() {
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
          <span className="text-stone-600">Naturopathic Medicine for PCOS</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl leading-tight">
            Naturopathic Medicine for PCOS: Root-Cause Treatment Approaches
          </h1>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Polycystic ovary syndrome affects an estimated 8–13% of reproductive-age women, making it one of the most common hormonal disorders — and one of the most frequently undertreated. Birth control suppresses symptoms without addressing what drives PCOS: insulin resistance, androgen excess, inflammation, and HPA axis dysregulation. Naturopathic medicine addresses these root causes directly.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              What PCOS is at the root level
            </h2>
            <p className="text-stone-600 mb-4">
              PCOS is not primarily a problem with the ovaries — it&apos;s primarily a metabolic and hormonal disorder with ovarian consequences. Understanding this reframes everything about treatment:
            </p>
            <div className="space-y-3">
              {[
                { title: 'Insulin resistance (in 70–80% of cases)', detail: 'Elevated insulin drives androgen production in the ovaries. High androgens disrupt follicle maturation and ovulation. Addressing insulin resistance is often the single most impactful intervention for PCOS.' },
                { title: 'Androgen excess', detail: 'High testosterone and DHEA-S drive the most visible PCOS symptoms — acne, hirsutism, and male-pattern hair thinning. These are symptoms of the underlying metabolic dysfunction, not the root cause itself.' },
                { title: 'Inflammation', detail: 'Low-grade chronic inflammation is consistently elevated in PCOS and appears to independently stimulate androgen production. Anti-inflammatory dietary and lifestyle interventions address this driver directly.' },
                { title: 'HPA axis dysregulation (often overlooked)', detail: "Chronic stress elevates cortisol, which in turn elevates adrenal androgens (DHEA-S) and worsens insulin resistance. Some PCOS patients have primarily adrenal-driven androgen excess rather than ovarian — an important distinction in treatment planning that many conventional workups miss." },
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
              Why conventional treatment often falls short for PCOS
            </h2>
            <p className="text-stone-600 mb-4">
              Standard conventional PCOS management centers on two interventions: oral contraceptives to suppress androgens and regulate cycles, and Metformin for insulin resistance in patients who meet criteria. Both have genuine utility — but both also have significant limitations:
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <ul className="text-sm text-stone-700 space-y-3">
                <li><strong>Birth control:</strong> Suppresses the HPO axis entirely, which does regulate cycles and reduce androgens — but masks rather than treats the underlying metabolic dysfunction. When patients discontinue birth control to conceive, PCOS symptoms return, often worse than before. It also doesn&apos;t address insulin resistance, which continues to progress.</li>
                <li><strong>Metformin alone:</strong> Addresses insulin resistance directly, which is valuable. But Metformin doesn&apos;t address adrenal androgens, inflammation, gut health, nutrient status, or the dietary patterns that drive insulin resistance in the first place.</li>
                <li><strong>The fertility focus:</strong> PCOS management in conventional medicine is heavily skewed toward patients trying to conceive. Women who are not currently trying to get pregnant — but who are dealing with acne, hair loss, weight gain, and fatigue — often receive less comprehensive care.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              How naturopathic doctors approach PCOS
            </h2>
            <div className="space-y-3">
              {[
                { title: 'Insulin resistance first', detail: 'Low-glycemic nutrition protocols (reducing refined carbohydrates, prioritizing protein and fiber at each meal) combined with inositol, berberine, and blood sugar regulation strategies form the foundation of naturopathic PCOS treatment for most patients.' },
                { title: 'Cycle regulation without suppression', detail: 'Vitex (chaste tree), DIM (diindolylmethane from cruciferous vegetables), and seed cycling are tools some NDs use to support hormonal regulation without suppressing the HPO axis. Evidence is variable — these are adjunct tools, not replacements for addressing insulin resistance.' },
                { title: 'Adrenal support', detail: "When cortisol and DHEA-S elevation are driving androgen excess, NDs address HPA axis regulation through adaptogenic herbs (ashwagandha, rhodiola), sleep optimization, and stress management — lowering adrenal androgens by addressing their upstream driver." },
                { title: 'Inflammation reduction', detail: 'Anti-inflammatory nutrition (Mediterranean-style eating, omega-3 prioritization, elimination of common inflammatory triggers), targeted supplementation (omega-3s, curcumin, NAC), and gut health optimization address the inflammatory component of PCOS.' },
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
              Evidence-based supplements NDs use for PCOS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Myo-inositol + D-chiro-inositol (40:1)', evidence: 'Multiple RCTs; improves insulin sensitivity, reduces androgen levels, supports ovulation and cycle regularity. The 40:1 ratio reflects the natural serum ratio and has the strongest evidence base.' },
                { name: 'Berberine', evidence: 'Comparable to metformin in some trials for insulin resistance; also has mild anti-androgenic and anti-inflammatory effects. GI side effects generally lower than metformin.' },
                { name: 'Spearmint tea or extract', evidence: 'Two small RCTs show reduced free testosterone and improved hirsutism scores. Low risk, easy adjunct for androgen-driven symptoms.' },
                { name: 'N-Acetylcysteine (NAC)', evidence: 'Supports glutathione production and insulin signaling; several studies show improvements in PCOS markers and ovulation rates.' },
                { name: 'Omega-3 fatty acids', evidence: 'Reduces inflammation, lowers triglycerides (often elevated in PCOS), and has mild insulin-sensitizing effects. High-quality fish oil at therapeutic doses.' },
                { name: 'Magnesium glycinate', evidence: 'Commonly deficient in PCOS; supports insulin sensitivity and reduces anxiety and sleep disruption that worsen cortisol patterns.' },
              ].map(({ name, evidence }) => (
                <div key={name} className="border border-stone-100 rounded-xl p-4 bg-white shadow-sm">
                  <p className="font-semibold text-stone-800 text-sm mb-1">{name}</p>
                  <p className="text-xs text-stone-600 leading-relaxed">{evidence}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-3">
              * Supplement protocols should be individualized and supervised by a qualified provider. Dosing and interactions matter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Integrating naturopathic care with conventional OB/GYN
            </h2>
            <p className="text-stone-600 mb-3">
              Most naturopathic doctors recommend that patients with PCOS maintain their relationship with an OB/GYN or reproductive endocrinologist, particularly for:
            </p>
            <ul className="text-sm text-stone-600 space-y-2 ml-4">
              <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">→</span> Pelvic ultrasound and ovarian imaging monitoring</li>
              <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">→</span> Fertility treatment if conception is a goal</li>
              <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">→</span> Endometrial health monitoring in anovulatory patients</li>
              <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">→</span> Long-term cardiometabolic risk assessment (PCOS is associated with elevated T2D and cardiovascular risk)</li>
            </ul>
            <p className="text-stone-600 mt-3 text-sm">
              The naturopathic approach works best as a complement to — not a replacement for — gynecological care. A good ND will coordinate with your OB/GYN and share lab results and treatment protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              What to expect at your first ND appointment for PCOS
            </h2>
            <p className="text-stone-600 mb-4">
              An ND&apos;s initial PCOS evaluation is typically much more comprehensive than a conventional PCOS workup. Expect:
            </p>
            <div className="bg-brand-cream rounded-xl border border-stone-100 p-5">
              <ul className="text-sm text-stone-700 space-y-2">
                <li><strong>Full hormone panel:</strong> fasting insulin, glucose, HbA1c, DHEA-S, total and free testosterone, SHBG, LH, FSH (LH/FSH ratio), prolactin, thyroid panel (TSH, Free T3, Free T4, antibodies)</li>
                <li><strong>Nutrition and dietary history:</strong> detailed assessment of carbohydrate intake, meal timing, and dietary patterns</li>
                <li><strong>Symptom timeline:</strong> when symptoms started, relationship to stress, diet, medication changes, and life events</li>
                <li><strong>Adrenal assessment:</strong> DHEA-S, cortisol (salivary or serum), stress history</li>
                <li><strong>Gut health screening:</strong> digestive function, dysbiosis risk factors, history of antibiotic use</li>
              </ul>
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
            <h2 className="font-semibold text-stone-800 mb-2">Find a naturopathic doctor for PCOS</h2>
            <p className="text-sm text-stone-600 mb-4">
              Search for NDs who specialize in hormonal conditions, women&apos;s health, and PCOS. Filter by state to find licensed NDs near you.
            </p>
            <Link href="/listings" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700">
              Browse the Directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-stone-100">
            <h3 className="text-lg font-semibold text-stone-800 mb-4">Related Guides</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides/naturopathic-doctor-for-hormones" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Naturopathic Doctor for Hormones →</Link>
              <Link href="/categories/hormone-optimization-nd" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Hormone Optimization NDs →</Link>
              <Link href="/guides/nd-vs-md-vs-do" className="text-sm text-emerald-600 hover:opacity-80 font-medium">ND vs. MD vs. DO →</Link>
              <Link href="/categories/womens-health-naturopath" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Women&apos;s Health Naturopaths →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
