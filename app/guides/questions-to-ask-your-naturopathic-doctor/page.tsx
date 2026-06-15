import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Questions to Ask Your Naturopathic Doctor Before Scheduling | NaturopathicDoctorFinder',
  description:
    'Before you book with a naturopathic doctor, ask these 15+ questions about credentials, approach, cost, and red flags — so you find someone genuinely qualified to help you.',
  alternates: {
    canonical: 'https://naturopathicdoctorfinder.com/guides/questions-to-ask-your-naturopathic-doctor',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if my ND is licensed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Check the licensing board in your state. Each of the 25 licensed ND jurisdictions has a state board of naturopathic medicine that publishes a list of actively licensed practitioners. You can also verify that your ND graduated from one of the eight CNME-accredited naturopathic medical schools and passed the NPLEX board examination. If they can't tell you which school they attended and which state they're licensed in, that's a red flag.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to my first ND appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring: recent lab work (within the past 12 months if you have it), a list of all current medications and supplements, your health history and any relevant medical records, a list of your primary concerns in order of priority, and insurance information if applicable. Most first ND appointments run 60-90 minutes — being prepared helps you use that time well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do naturopathic doctors order lab tests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — in licensed ND states, naturopathic doctors have the authority to order the same standard labs your primary care physician orders (CBC, metabolic panel, thyroid, hormones, lipids, etc.) plus functional medicine labs that conventional doctors rarely use, such as organic acids, DUTCH hormone testing, micronutrient panels, food sensitivity testing, and comprehensive stool analysis.',
      },
    },
  ],
}

export default function QuestionsToAskNDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-primary">Find an ND</Link>
          <span>/</span>
          <span className="text-gray-700">Questions to Ask Before Scheduling</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Questions to Ask Your Naturopathic Doctor Before Scheduling
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Not all naturopathic practitioners have the same training, credentials, or approach. Asking the right questions before you book — and knowing what good answers sound like — saves time, money, and frustration.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Training and Credentials</h2>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          In licensed ND states, naturopathic doctors are graduate-level healthcare professionals who attended a 4-year, CNME-accredited naturopathic medical school and passed the NPLEX board examination. But not everyone using the title has this background — especially in unlicensed states. These questions establish the basics.
        </p>

        <ol className="space-y-3 mb-8 text-sm">
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">1. Are you a licensed naturopathic doctor in this state?</p>
            <p className="text-gray-600 mt-1">This is the most important question. In the 25 licensed ND jurisdictions, the answer should be yes, with a state license number you can verify. If the answer is unclear or hedged, proceed carefully.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">2. Which naturopathic medical school did you graduate from?</p>
            <p className="text-gray-600 mt-1">There are eight CNME-accredited ND schools: NUNM, Bastyr, SCNM, CCNM, UBCNM, BINM, CNUHS, and MUIH. Graduation from one of these is the baseline credential.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">3. Did you complete a residency or postgraduate training?</p>
            <p className="text-gray-600 mt-1">Residency is not required for ND licensure, but completing one indicates additional clinical training. It matters most for complex or chronic conditions.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">4. Do you have any specialty certifications?</p>
            <p className="text-gray-600 mt-1">Additional certifications in areas like functional medicine, acupuncture, or midwifery can indicate depth in specific areas. Relevant to ask if you have a specific condition in mind.</p>
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Their Approach to Your Condition</h2>

        <ol className="space-y-3 mb-8 text-sm" start={5}>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">5. How many patients do you currently treat with [your condition]?</p>
            <p className="text-gray-600 mt-1">Experience with your specific condition matters. An ND who regularly treats Hashimoto&apos;s has seen dozens of cases and knows what works; one who rarely sees it is still learning.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">6. What labs do you typically run for someone presenting with my concerns?</p>
            <p className="text-gray-600 mt-1">A good answer is specific and goes beyond basic bloodwork. For hormonal issues, expect thyroid panels, sex hormones, cortisol curves. For gut issues, expect stool analysis, SIBO testing, or organic acids. Vague answers are a yellow flag.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">7. What does a typical treatment plan look like for your patients?</p>
            <p className="text-gray-600 mt-1">Look for plans that evolve based on lab results and your response — not a fixed supplement protocol handed to every patient with similar symptoms.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">8. Do you work alongside conventional medical providers, or do you prefer patients work exclusively with you?</p>
            <p className="text-gray-600 mt-1">Good NDs coordinate with your other providers. An ND who wants you to abandon conventional care entirely is a red flag, especially for serious conditions.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">9. What outcomes do your patients with my condition typically see, and on what timeline?</p>
            <p className="text-gray-600 mt-1">Honest practitioners set realistic expectations. Most naturopathic interventions produce gradual improvement over months, not dramatic changes in weeks. Be cautious of anyone promising rapid transformation.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">10. Do you offer telemedicine appointments?</p>
            <p className="text-gray-600 mt-1">Relevant if you have mobility limitations, live in a rural area, or want the option to do follow-ups remotely. Many NDs do both in-person and telehealth appointments.</p>
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Cost and Insurance</h2>

        <ol className="space-y-3 mb-8 text-sm" start={11}>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">11. Do you accept my insurance?</p>
            <p className="text-gray-600 mt-1">ND care is covered by insurance in some states and some plans — especially for primary care visits. Ask specifically which insurers you are in-network with, and whether your plan covers naturopathic visits even if you are out-of-network. Read our <Link href="/guides/naturopathic-medicine-insurance" className="text-brand-primary hover:underline">ND insurance guide</Link> for more.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">12. What is the cost of an initial appointment, and what does it include?</p>
            <p className="text-gray-600 mt-1">Initial ND visits typically run 60-90 minutes and cost $150-$400 out of pocket. Know what you are paying for — does it include a treatment plan? A follow-up call? Lab review?</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">13. Do you order labs through insurance or do you use your own lab accounts?</p>
            <p className="text-gray-600 mt-1">If an ND runs labs through their own accounts at cash-pay prices, costs can be significantly higher than labs ordered through your insurance. Ask upfront about estimated lab costs — they can be $200-$1,000+ depending on the panel.</p>
          </li>
          <li className="bg-white border border-gray-100 rounded-lg p-4">
            <p className="font-semibold text-gray-900">14. Do you sell supplements in your office, and are you required to recommend them?</p>
            <p className="text-gray-600 mt-1">Many NDs sell professional-grade supplements, which is legitimate. The question is whether you are being recommended supplements because you genuinely need them, or because they generate revenue. Good NDs will tell you what you can get elsewhere if cost is a concern.</p>
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags to Watch For</h2>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          Most naturopathic doctors are genuine, well-trained practitioners. But the field attracts some bad actors — especially in unlicensed states where anyone can use the title. Watch for:
        </p>

        <ul className="space-y-2 mb-8 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold mt-0.5">&#8277;</span>
            <span>Unable or unwilling to name their medical school or license number</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold mt-0.5">&#8277;</span>
            <span>Promises of curing serious or chronic conditions quickly</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold mt-0.5">&#8277;</span>
            <span>Recommends stopping all conventional medications at the first visit</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold mt-0.5">&#8277;</span>
            <span>Requires purchase of a large supplement package before running any labs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold mt-0.5">&#8277;</span>
            <span>Does not coordinate with or respect your other healthcare providers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold mt-0.5">&#8277;</span>
            <span>Uses vague or unprovable diagnostic methods (applied kinesiology, iridology, live blood analysis) as the primary diagnostic tool without lab confirmation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold mt-0.5">&#8277;</span>
            <span>Dismisses or actively discourages you from seeking other opinions</span>
          </li>
        </ul>

        <div className="mb-8">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm">15. A final question worth asking yourself:</h3>
          <div className="bg-white border border-gray-100 rounded-lg p-4 text-sm">
            <p className="font-semibold text-gray-900">Does this practitioner listen more than they talk?</p>
            <p className="text-gray-600 mt-1">A hallmark of good naturopathic practice is the extended intake — an ND who asks thorough questions about your history, lifestyle, diet, sleep, and stress before making any recommendations. If you feel rushed or like you are being fit into a pre-made protocol, trust that instinct.</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 mb-10">
          <h2 className="font-bold text-gray-900 mb-4">Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-gray-800">How do I verify my ND is licensed?</h3>
              <p className="text-gray-600 mt-1">Visit your state&apos;s naturopathic medicine licensing board website and search the active licensee list. In most states this is a public searchable database. If you are in an unlicensed state, ask the practitioner directly which state they are licensed in.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">What should I bring to my first ND appointment?</h3>
              <p className="text-gray-600 mt-1">Recent lab work, a list of medications and supplements, your health history, and your top 3-5 health concerns ranked by priority. Most initial appointments are 60-90 minutes — preparation helps you use that time well.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Do NDs order lab tests?</h3>
              <p className="text-gray-600 mt-1">Yes — licensed NDs in most states have lab ordering authority comparable to primary care physicians, plus access to functional medicine labs. See our <Link href="/guides/what-is-a-naturopathic-doctor" className="text-brand-primary hover:underline">What Is a Naturopathic Doctor guide</Link> for a full scope-of-practice overview.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Find a Naturopathic Doctor Near You</h2>
          <p className="text-gray-600 mb-4">
            Browse licensed NDs across all 25 licensed states. All practitioners in our directory are verified professionals.
          </p>
          <Link
            href="/listings"
            className="bg-brand-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-primary-dark transition-colors inline-block"
          >
            Find an ND Near You &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}
