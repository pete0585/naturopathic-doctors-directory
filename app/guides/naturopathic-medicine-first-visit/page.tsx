import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Your First Naturopathic Doctor Visit: What to Expect | NaturopathicDoctorFinder',
  description: 'A first ND visit takes 60–90 minutes and covers your health history in depth. Here is how to prepare and what will happen.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/guides/naturopathic-medicine-first-visit' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long is a first naturopathic appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Initial consultations with a licensed ND typically last 60–90 minutes. This is a hallmark of naturopathic care — the extended time allows the ND to take a thorough health history covering your current symptoms, past medical history, family history, diet, sleep, stress, exercise, medications, and supplements. This depth is what enables the ND to identify contributing factors that a 15-minute conventional visit would miss.',
      },
    },
    {
      '@type': 'Question',
      name: 'What paperwork should I complete before my first ND visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most NDs send an intake packet before the first appointment covering: full health history, current medications and supplements (bring bottles or a detailed list), symptom timeline, dietary habits, sleep patterns, stress history, family health history, and prior lab results if available. Completing this thoroughly before the visit allows the ND to review it in advance and use your appointment time for assessment rather than data entry.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my ND order labs at the first visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most NDs review your existing lab results first before ordering new tests. If your conventional workup is recent and comprehensive, your ND may not need additional testing immediately. If gaps exist — or if your ND uses specialty labs (DUTCH hormone test, GI-MAP stool analysis, organic acids) — lab orders may come at or shortly after the first appointment. Ask your ND at the end of the first visit: "What tests are you recommending and why? What will they cost?"',
      },
    },
    {
      '@type': 'Question',
      name: 'What treatment will I receive at the first visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first visit is primarily assessment. Do not expect a complete treatment plan at the end of visit one — your ND needs your lab results and time to synthesize the information before making specific recommendations. Many NDs make a few immediate, low-risk recommendations (dietary changes, a basic supplement, sleep hygiene adjustments) while waiting for labs. A full treatment protocol typically comes at the second or third appointment after lab review.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to my first naturopathic appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring: a complete list of all medications with dosages, all supplements with dosages (or the bottles), any recent lab results (print them if you have access — do not assume your ND has access to your conventional providers' records), a written list of your symptoms in priority order, and your questions. Also: insurance card if applicable, HSA/FSA card, and a sense of your health goals — not just what is wrong, but what you want to be able to do that your health is currently preventing.',
      },
    },
  ],
}

export default function NaturopathicFirstVisitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-green-700">Find an ND</Link>
          <span>/</span>
          <span className="text-slate-600">First Visit Guide</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">
          Your First Naturopathic Doctor Visit: What to Expect
        </h1>
        <p className="text-slate-500 text-lg mb-10 leading-relaxed">
          A first ND visit is very different from a conventional doctor appointment. Here is what happens,
          how to prepare, and what questions to ask.
        </p>
        <div className="space-y-4 mb-8">
          {faqSchema.mainEntity.map((item) => (
            <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-800 mb-2">{item.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-green-700 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Find a Naturopathic Doctor Near You</h2>
          <p className="text-green-100 mb-6">Browse licensed NDs by city and specialty. Many offer free initial consultations.</p>
          <Link href="/listings" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-green-700">Browse NDs Near Me →</Link>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200">
          <h3 className="font-semibold text-slate-700 mb-3">Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/what-is-a-naturopathic-doctor" className="text-sm text-green-700 font-medium">What Is a Naturopathic Doctor? →</Link>
            <Link href="/guides/naturopathic-doctor-cost" className="text-sm text-green-700 font-medium">How Much Does a Naturopathic Doctor Cost? →</Link>
            <Link href="/guides/questions-to-ask-your-naturopathic-doctor" className="text-sm text-green-700 font-medium">Questions to Ask Your ND →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
