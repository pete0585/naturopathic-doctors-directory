import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Is Naturopathic Medicine Covered by Insurance?',
  description:
    'Insurance coverage for naturopathic doctors varies significantly by state and plan. Here\'s what you need to know before your first appointment.',
  alternates: {
    canonical: 'https://naturopathicdoctorfinder.com/guides/naturopathic-medicine-insurance',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does insurance cover naturopathic doctors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your state and your specific insurance plan. Some states (Washington, Oregon, Connecticut, and a few others) mandate that insurance plans cover naturopathic medicine if they cover conventional primary care. Outside those states, coverage is hit-or-miss. Even in mandate states, your specific plan may have limitations on covered visit types, number of visits per year, or required referrals. Always call your insurance company before your first appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use an HSA or FSA to pay for naturopathic doctor visits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most cases, yes. Medical visits to licensed naturopathic doctors are eligible for HSA (Health Savings Account) and FSA (Flexible Spending Account) reimbursement, as are many related expenses like lab work ordered by your ND. Some supplements may not qualify. Keep your receipts and confirm eligibility with your HSA/FSA administrator for any borderline items.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of a naturopathic doctor without insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Self-pay rates for naturopathic doctor visits typically range from $150 to $350 for an initial 60-90 minute appointment and $75 to $175 for follow-up visits. Lab costs are separate and vary widely depending on what\'s ordered. Many NDs offer transparent self-pay rates and payment plans. Some NDs work on a sliding scale for patients with financial hardship.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which states require insurance to cover naturopathic doctors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'States with insurance mandate laws for naturopathic medicine include Washington, Oregon, Connecticut, Montana, New Hampshire, Vermont, Maine, Utah, and others. Mandate strength and scope varies by state — some mandate coverage only for specific plan types (state-regulated plans, not self-insured employer plans, which are governed by ERISA and exempt from state mandates). Call your insurer to confirm your specific plan\'s coverage.',
      },
    },
  ],
}

export default function NDInsuranceGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/listings" className="hover:text-brand-primary">Find an ND</Link>
        <span>/</span>
        <span className="text-gray-700">Naturopathic Medicine & Insurance</span>
      </nav>

      <article className="prose-guide">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Is Naturopathic Medicine Covered by Insurance?
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Insurance coverage for naturopathic doctors is more common than most people realize — but it&apos;s inconsistent enough that you need to check before assuming anything.
        </p>

        <h2>The Short Answer</h2>
        <p>
          Some insurance plans cover naturopathic doctor visits; many don&apos;t. The coverage you get depends on:
        </p>
        <ul>
          <li>Which state you&apos;re in (some states mandate ND coverage, most don&apos;t)</li>
          <li>What type of insurance plan you have (state-regulated vs. self-insured employer plan)</li>
          <li>Whether your specific plan includes naturopathic medicine as a benefit</li>
          <li>Whether the ND you want to see is in-network</li>
        </ul>

        <h2>States With Insurance Mandate Laws</h2>
        <p>
          Several licensed ND states have enacted laws requiring insurance plans to cover naturopathic medicine on the same basis as conventional medicine. These include:
        </p>
        <ul>
          <li><strong>Washington</strong> — one of the strongest mandates; applies to most state-regulated plans</li>
          <li><strong>Oregon</strong> — broad mandate; NDs are recognized as primary care providers</li>
          <li><strong>Connecticut</strong> — mandate in place for state-regulated plans</li>
          <li><strong>Montana</strong> — mandate applies to most insurance plans</li>
          <li><strong>New Hampshire</strong> — mandate for individual and group health plans</li>
          <li><strong>Vermont</strong> — mandate applies to health plans in the state</li>
          <li><strong>Maine</strong> — ND visits coverable under most plans</li>
          <li><strong>Utah</strong> — mandate enacted</li>
        </ul>
        <p>
          Even in mandate states, there&apos;s an important exception: self-insured employer plans (large employers who fund their own employee health benefits) are governed by federal ERISA law, not state insurance mandates. Many large employers use self-insured plans, which means a Washington state employee working for a major tech company might not have ND coverage even though Washington has a mandate.
        </p>

        <h2>How to Check Your Coverage</h2>
        <p>
          Don&apos;t guess. Call your insurance company before your first appointment. Here&apos;s what to ask:
        </p>
        <ol>
          <li><strong>"Does my plan cover naturopathic doctors?"</strong> — Get a yes or no.</li>
          <li><strong>"Is this plan state-regulated or self-insured?"</strong> — This determines whether mandate laws apply.</li>
          <li><strong>"What is the CPT code coverage for ND visits?"</strong> — NDs bill under specific evaluation and management codes (99203, 99213, etc.). Confirm these are covered.</li>
          <li><strong>"Are there in-network NDs, and who are they?"</strong> — Even if your plan covers NDs, it may only cover in-network providers at the lower co-pay rate.</li>
          <li><strong>"Is a referral required?"</strong> — Some plans require a referral from your primary care physician before seeing a specialist.</li>
          <li><strong>"Is there a visit limit?"</strong> — Some plans cap covered ND visits at 10 or 20 per year.</li>
        </ol>

        <h2>What About Labs?</h2>
        <p>
          Lab work ordered by your ND is often a significant out-of-pocket cost. Coverage varies:
        </p>
        <ul>
          <li><strong>Standard labs</strong> (CBC, metabolic panel, thyroid TSH) — often covered if your insurance covers diagnostic testing ordered by licensed healthcare providers, which NDs are in licensed states</li>
          <li><strong>Specialty functional labs</strong> (organic acids, SIBO breath tests, comprehensive microbiome analysis, cortisol mapping) — rarely covered by insurance; expect $200-800 out of pocket depending on the test</li>
          <li><strong>HSA/FSA</strong> — lab work ordered by a licensed healthcare provider is generally eligible for HSA/FSA reimbursement</li>
        </ul>

        <h2>Self-Pay: What Does It Actually Cost?</h2>
        <p>
          If your insurance doesn&apos;t cover ND visits, here&apos;s what to expect for self-pay rates:
        </p>
        <ul>
          <li><strong>Initial consultation (60-90 min):</strong> $150 to $350</li>
          <li><strong>Follow-up visit (30-45 min):</strong> $75 to $175</li>
          <li><strong>Lab interpretation visit:</strong> $50 to $125</li>
          <li><strong>IV therapy:</strong> $100 to $250 per session (separate from office visit)</li>
        </ul>
        <p>
          Costs vary significantly by region — NDs in San Francisco and New York typically charge more than NDs in rural New England or the Mountain West. Many NDs list their fees transparently on their websites or will tell you upfront during a free consultation call.
        </p>

        <h2>Using Your HSA or FSA</h2>
        <p>
          Good news: licensed naturopathic doctor visits are generally eligible for HSA and FSA reimbursement, just like visits to any other licensed healthcare provider. This includes:
        </p>
        <ul>
          <li>Office visit fees</li>
          <li>Lab work ordered by your ND</li>
          <li>Some therapeutic supplements (if prescribed as treatment for a specific diagnosed condition)</li>
          <li>IV therapy administered by your ND (if for medical treatment)</li>
        </ul>
        <p>
          General wellness supplements without a specific medical purpose typically don&apos;t qualify for HSA/FSA. Keep all receipts and consult your HSA/FSA administrator if you have questions about specific items.
        </p>

        <h2>The Value Equation</h2>
        <p>
          Even without insurance coverage, many patients find the math works out. A 90-minute initial ND visit at $250 often uncovers and addresses root causes that have required years of specialist appointments, repeat prescriptions, and escalating symptoms. For patients with chronic conditions — especially thyroid issues, autoimmune disease, gut dysfunction, or hormonal imbalances — the right ND can dramatically reduce the overall cost of managing their health over time.
        </p>
        <p>
          That&apos;s not a guarantee, and it&apos;s not true for every situation. But it&apos;s worth doing the math before deciding cost is a barrier.
        </p>

        {/* CTA */}
        <div className="mt-10 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Find a Naturopathic Doctor Near You</h2>
          <p className="text-gray-600 mb-4">
            Browse licensed NDs by city and state. Many list whether they accept insurance directly on their profile.
          </p>
          <Link
            href="/listings"
            className="bg-brand-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-primary-dark transition-colors inline-block"
          >
            Browse the Directory →
          </Link>
        </div>
      </article>
    </div>
  )
}
