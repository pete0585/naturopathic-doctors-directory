import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ND vs. MD vs. DO vs. NP: What Is a Naturopathic Doctor? | NaturopathicDoctorFinder.com',
  description: 'Naturopathic doctors are not the same as MDs, DOs, or nurse practitioners. This guide breaks down the training, scope of practice, and licensing differences — so you can choose the right provider.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/guides/nd-vs-md-vs-do' },
}

export const revalidate = 86400

const COMPARISON = [
  {
    credential: 'MD (Medical Doctor)',
    training: '4 years medical school + 3–7 year residency',
    philosophy: 'Disease-centered; diagnose and treat pathology',
    licensing: 'Licensed in all 50 states',
    prescribing: 'Full prescribing authority',
    notes: 'Standard conventional medicine. May have no integrative training.',
  },
  {
    credential: 'DO (Doctor of Osteopathy)',
    training: '4 years osteopathic medical school + 3–7 year residency',
    philosophy: 'Whole-person focus; structural/musculoskeletal emphasis',
    licensing: 'Licensed in all 50 states',
    prescribing: 'Full prescribing authority',
    notes: 'Equivalent to MD for most clinical purposes. Some integrate osteopathic manipulation.',
  },
  {
    credential: 'ND (Naturopathic Doctor)',
    training: '4 years accredited naturopathic medical school (CNME)',
    philosophy: 'Root-cause; support the body\'s healing capacity',
    licensing: '24 states + DC license NDs (2025)',
    prescribing: 'Varies by state — full formulary in AZ/OR, limited in CA, none in unlicensed states',
    notes: 'Trained in nutrition, botanical medicine, homeopathy, physical medicine. Not equivalent to MD/DO in unlicensed states.',
  },
  {
    credential: 'NP (Nurse Practitioner)',
    training: 'BSN + 2–3 years graduate nursing + clinical hours',
    philosophy: 'Primary care focused; can specialize',
    licensing: 'All 50 states',
    prescribing: 'Full prescribing in most states (varies)',
    notes: 'Not primarily trained in integrative or naturopathic approaches, but some NPs pursue functional medicine training.',
  },
  {
    credential: 'FNP / Functional MD',
    training: 'MD/DO/NP base + functional medicine continuing education (IFM, A4M)',
    philosophy: 'Systems biology; root-cause; lab-based',
    licensing: 'Same as underlying license',
    prescribing: 'Same as underlying license',
    notes: 'Functional medicine is a training add-on, not a separate credential. Practitioners vary widely in depth of training.',
  },
]

const FAQ = [
  {
    q: 'Is a naturopathic doctor a real doctor?',
    a: "In licensed states, yes — naturopathic doctors hold doctoral degrees from accredited 4-year naturopathic medical schools, pass national board exams (NPLEX), and are licensed by their state medical board. In the 24 states (plus DC) that license NDs, they are legally recognized as healthcare providers. In unlicensed states, NDs cannot use the title 'doctor' in a clinical context or practice medicine. The distinction matters: an ND from an accredited school (Bastyr, NUNM, SCNM, etc.) has completed medical training comparable in hours to a conventional MD — but with a different curriculum emphasis.",
  },
  {
    q: 'When should I see an ND instead of an MD?',
    a: "NDs are well-suited for: chronic conditions with unclear root causes, patients who have not found answers in conventional medicine, health optimization and preventive care, complex cases involving multiple systems (thyroid + gut + hormones), and patients who want to minimize pharmaceutical intervention where appropriate. NDs are typically not the right choice for: emergencies and acute trauma, complex surgical needs, conditions requiring specialist-level subspecialty care (cardiothoracic surgery, advanced oncology), and mental health crises requiring psychiatric medication management.",
  },
  {
    q: 'Can a naturopathic doctor prescribe medications?',
    a: "In states that license NDs, prescribing authority varies significantly. Arizona and Oregon NDs have the broadest authority — they can prescribe from a formulary that includes many pharmaceuticals, including controlled substances in some cases. California NDs (CNDs) have a narrower formulary — they can prescribe from a list of natural medicines and some pharmaceuticals but have more restrictions. Washington, Colorado, and most other licensing states have their own formulary rules. In unlicensed states, NDs cannot prescribe at all. Always ask an ND directly what their prescribing authority is in your state.",
  },
  {
    q: 'What is the difference between an ND and a naturopath?',
    a: "This is an important distinction. An 'ND' or 'naturopathic doctor' who graduated from a CNME-accredited 4-year naturopathic medical school completed rigorous clinical training. A 'naturopath' or 'traditional naturopath' may have completed an online or correspondence program without any clinical training or board exams. The titles are not interchangeable. In licensed states, only graduates of accredited ND programs can use the title 'ND' or 'naturopathic doctor.' In unlicensed states, anyone can use the title 'naturopath' or 'natural health practitioner' without any formal training.",
  },
  {
    q: 'Do NDs and MDs work together?',
    a: "Increasingly, yes — especially in states with strong ND communities like Oregon, Washington, Arizona, and California. Many patients maintain both a conventional MD/DO primary care physician and an ND for integrative care. NDs in these states frequently co-manage patients with conventional specialists, and some hospital systems (most notably in Portland and Seattle) have NDs on staff in integrative medicine programs. The best outcomes often come from a collaborative model where both providers communicate.",
  },
]

export default function NDvsMDvsDOPage() {
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
          <span className="text-stone-600">ND vs. MD vs. DO vs. NP</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl leading-tight">
            What Is a Naturopathic Doctor? ND vs. MD vs. DO vs. NP
          </h1>
          <p className="mt-4 text-stone-600 leading-relaxed">
            The healthcare credential landscape is confusing — and the naturopathic doctor credential is
            one of the most misunderstood. Some patients think NDs are the same as MDs. Others dismiss
            them as unqualified. The truth is more nuanced: in licensed states, NDs complete rigorous
            four-year doctoral training and are regulated healthcare providers. In unlicensed states, the
            picture is very different. Here is how to understand who you are actually seeing.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Provider comparison at a glance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-stone-200 rounded-xl overflow-hidden">
                <thead className="bg-emerald-700 text-white">
                  <tr>
                    <th className="text-left p-3 font-semibold">Credential</th>
                    <th className="text-left p-3 font-semibold">Training</th>
                    <th className="text-left p-3 font-semibold">Licensing</th>
                    <th className="text-left p-3 font-semibold">Prescribing</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.credential} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                      <td className="p-3 font-semibold text-stone-900">{row.credential}</td>
                      <td className="p-3 text-stone-600">{row.training}</td>
                      <td className="p-3 text-stone-600">{row.licensing}</td>
                      <td className="p-3 text-stone-600">{row.prescribing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              What makes ND training different
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              CNME-accredited naturopathic medical schools cover the same basic sciences as conventional
              medical schools — anatomy, physiology, pathology, pharmacology, biochemistry, physical
              diagnosis. The curriculum diverges in the clinical years:
            </p>
            <div className="space-y-3">
              {[
                { title: 'Botanical medicine', detail: 'Herbal pharmacology — mechanisms, herb-drug interactions, clinical applications across organ systems.' },
                { title: 'Clinical nutrition', detail: 'Therapeutic nutrition as a primary intervention. Far more depth than conventional medical nutrition curricula.' },
                { title: 'Homeopathy', detail: 'A legally required curriculum topic in most ND programs, though clinical use among evidence-based NDs varies.' },
                { title: 'Physical medicine', detail: 'Soft tissue manipulation, hydrotherapy, therapeutic exercise — techniques that overlap with chiropractic and physical therapy.' },
                { title: 'Mind-body medicine', detail: 'Psychological and lifestyle components of chronic disease — significant curriculum weight vs. conventional programs.' },
                { title: 'Minor surgery (select states)', detail: 'In states like AZ and OR, NDs can perform minor procedures including injections, biopsies, and minor surgical procedures.' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-stone-100 p-4 shadow-sm">
                  <p className="font-semibold text-stone-800">{item.title}</p>
                  <p className="text-sm text-stone-600 mt-1 leading-relaxed">{item.detail}</p>
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
            <h2 className="font-semibold text-stone-800 mb-2">Find a licensed naturopathic doctor near you</h2>
            <p className="text-sm text-stone-600 mb-4">
              Browse our directory of CNME-trained, licensed NDs by location and specialty.
            </p>
            <Link href="/listings" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-700">
              Browse the Directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-stone-100">
            <h3 className="text-lg font-semibold text-stone-800 mb-4">Related Guides</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides/what-is-a-naturopathic-doctor" className="text-sm text-emerald-600 hover:opacity-80 font-medium">What is a Naturopathic Doctor? →</Link>
              <Link href="/guides/naturopathic-doctor-vs-functional-medicine" className="text-sm text-emerald-600 hover:opacity-80 font-medium">ND vs. Functional Medicine →</Link>
              <Link href="/guides/naturopathic-medicine-insurance" className="text-sm text-emerald-600 hover:opacity-80 font-medium">Does Insurance Cover ND? →</Link>
              <Link href="/guides/how-to-choose-a-naturopathic-doctor" className="text-sm text-emerald-600 hover:opacity-80 font-medium">How to Choose an ND →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
