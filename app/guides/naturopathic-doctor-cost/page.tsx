import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does a Naturopathic Doctor Cost? | NaturopathicDoctorFinder',
  description: 'ND initial visits cost $150–$400; follow-ups $100–$250. Most insurance does not cover naturopathic care. Here is what to expect and how to manage costs.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/guides/naturopathic-doctor-cost' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a naturopathic doctor appointment cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Initial consultations with a licensed naturopathic doctor (ND) typically cost $150–$400 for a 60–90 minute appointment. Follow-up visits run $100–$250 for 30–60 minutes. In the 25 states + DC where naturopathic medicine is licensed as a primary care specialty, some insurance plans cover ND visits — but most do not. Advanced specialty testing (gut microbiome, DUTCH hormone panels, food sensitivity panels) adds significant cost beyond the visit fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover naturopathic doctor visits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Coverage varies by state and plan. In licensing states (like Washington, Oregon, California, Arizona, Minnesota, and Connecticut), some insurance plans include ND visits — but this is the exception, not the rule. Many large commercial plans still exclude naturopathic care. Check your plan's Explanation of Benefits or call member services. If your ND is not covered, ask about a superbill for potential out-of-network reimbursement. HSA and FSA funds can be used for licensed ND visits.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much do naturopathic supplements cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Supplement plans recommended by NDs typically range from $50–$250/month depending on the protocol. This is a separate cost from the visit and testing fees. NDs who sell supplements in their practice have a financial incentive to recommend them — a legitimate ND should be transparent about what you need and willing to tell you where to source it affordably. Professional brands like Metagenics, Thorne, and Pure Encapsulations can also be purchased directly online at similar prices to what practices charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is seeing a naturopathic doctor worth the cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For patients with unexplained symptoms, complex hormonal issues, autoimmune conditions, or chronic gut dysfunction who have not found answers through conventional care — many report significant value. The 60–90 minute initial appointment allows a depth of investigation that a 15-minute PCP visit cannot match. For patients with simple acute care needs or conditions well-managed by conventional medicine, a conventional physician is typically more appropriate and cost-effective.',
      },
    },
  ],
}

export default function NaturopathicDoctorCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-green-700">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-green-700">Find an ND</Link>
          <span>/</span>
          <span className="text-slate-600">Naturopathic Doctor Cost</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">
          How Much Does a Naturopathic Doctor Cost?
        </h1>
        <p className="text-slate-500 text-lg mb-10 leading-relaxed">
          ND initial visits cost $150–$400; follow-ups $100–$250. Advanced testing adds more.
          Here is a complete picture of naturopathic care costs and how to manage them.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead><tr className="bg-green-700 text-white">
              <th className="text-left px-4 py-3">Item</th>
              <th className="text-left px-4 py-3">Typical Cost</th>
            </tr></thead>
            <tbody>
              {[
                ['Initial consultation (60–90 min)', '$150–$400'],
                ['Follow-up visit (30–60 min)', '$100–$250'],
                ['Advanced lab testing (per test)', '$150–$450'],
                ['Monthly supplements', '$50–$250'],
                ['Monthly membership (if offered)', '$100–$300'],
              ].map(([item, cost], i) => (
                <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-medium text-slate-700">{item}</td>
                  <td className="px-4 py-3 text-slate-600">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
          <p className="text-green-100 mb-6">Browse licensed NDs by location, specialty, and insurance acceptance.</p>
          <Link href="/listings" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-green-700">Browse NDs Near Me →</Link>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200">
          <h3 className="font-semibold text-slate-700 mb-3">Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/what-is-a-naturopathic-doctor" className="text-sm text-green-700 font-medium">What Is a Naturopathic Doctor? →</Link>
            <Link href="/guides/naturopathic-medicine-insurance" className="text-sm text-green-700 font-medium">Does Insurance Cover Naturopathic Medicine? →</Link>
            <Link href="/guides/nd-vs-md-vs-do" className="text-sm text-green-700 font-medium">ND vs MD vs DO →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
