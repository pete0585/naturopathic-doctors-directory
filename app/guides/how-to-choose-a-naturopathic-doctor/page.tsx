import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Choose a Naturopathic Doctor: 7 Questions to Ask',
  description:
    'Not all naturopathic doctors are the same. Learn what to look for, what questions to ask, and how to find the right ND for your specific health needs.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/guides/how-to-choose-a-naturopathic-doctor' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I find a good naturopathic doctor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by identifying your primary health goals — treating a specific condition, optimizing overall health, or finding a naturopathic primary care provider. Then look for NDs who list relevant specialties, are accepting new patients, and practice in a licensed state. Most NDs offer a free 15-minute phone consultation before booking, which lets you assess their approach before committing to a full appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What credentials should a naturopathic doctor have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A licensed naturopathic doctor should hold an ND degree from a CNME-accredited school and be licensed in a state that licenses naturopathic medicine. Ask for their license number and check it against your state licensing board. The eight accredited ND programs in North America are: Bastyr University (WA/CA), NUNM (OR), Southwest College of Naturopathic Medicine (AZ), Sonoran University (AZ), CCNM-Boucher (BC), CCNM-Toronto (ON), UBCO (BC), and Maryland University of Integrative Health (MD).',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I see an ND or a functional medicine doctor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This depends on your situation. Licensed NDs are trained specifically in naturopathic medicine from a dedicated graduate program. Functional medicine is an approach, not a credential — any MD, DO, or NP can call themselves a functional medicine practitioner after completing a certification course. An experienced ND with specialty training will often have more depth in natural therapeutics than an MD who completed a functional medicine weekend course. That said, some MDs with serious functional medicine training and decades of experience are excellent. Evaluate the individual practitioner, not just the title.',
      },
    },
  ],
}

export default function HowToChooseNDGuide() {
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
        <span className="text-gray-700">How to Choose a Naturopathic Doctor</span>
      </nav>

      <article className="prose-guide">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Choose a Naturopathic Doctor</h1>
        <p className="text-lg text-gray-600 mb-8">
          Finding a licensed naturopathic doctor is the first step. Finding the right one for your specific situation takes a bit more work — but the payoff is a practitioner who can actually help you, not just one who's nearby.
        </p>

        <h2>Start With Your Goal, Not a Location Search</h2>
        <p>
          The most common mistake patients make is searching "naturopathic doctor near me" and picking whoever's closest. Naturopathic medicine covers a wide range of specialties. An ND who's excellent at Lyme disease management may not have deep experience with fertility or pediatrics. The right first question is: what do you need this practitioner to be good at?
        </p>
        <p>
          Common reasons patients seek an ND:
        </p>
        <ul>
          <li>Chronic condition that hasn't fully responded to conventional treatment</li>
          <li>Thyroid issues or hormonal imbalances, especially if current labs are "normal"</li>
          <li>Gut health: IBS, SIBO, food sensitivities, inflammatory bowel</li>
          <li>Autoimmune disease: Hashimoto's, lupus, Crohn's, psoriasis</li>
          <li>Fertility support: cycle irregularities, PCOS, preconception care</li>
          <li>Lyme disease and tick-borne illness</li>
          <li>Mental health and anxiety, with or without pharmaceuticals</li>
          <li>Preventive care and health optimization</li>
        </ul>

        <h2>Verify Credentials Before Anything Else</h2>
        <p>
          "Naturopath" is an unprotected title in most states — anyone can use it. "Naturopathic doctor" in a licensed state means something specific: graduate degree from an accredited school, national board exams, and state licensure.
        </p>
        <p>
          Before booking an appointment, confirm:
        </p>
        <ol>
          <li><strong>ND degree from a CNME-accredited program</strong> — there are only 8 accredited schools in North America. If they list a school you don't recognize, look it up before assuming it's equivalent.</li>
          <li><strong>Licensed in a state that licenses NDs</strong> — 25 US jurisdictions license naturopathic medicine. Every ND in this directory practices in a licensed jurisdiction.</li>
          <li><strong>License is current and in good standing</strong> — ask for their license number and verify it through your state licensing board's online lookup tool.</li>
        </ol>

        <h2>7 Questions to Ask Before Booking</h2>
        <p>
          Most NDs offer a free 15-minute phone consultation before a full appointment. Use it. Here's what to ask:
        </p>
        <ol>
          <li>
            <strong>"What do you see most in your practice?"</strong> — NDs develop genuine expertise in the conditions they treat most often. If you have Hashimoto's and their practice is primarily sports medicine, they may not be the best fit.
          </li>
          <li>
            <strong>"How do you approach [your specific condition]?"</strong> — Listen for specificity. A good ND will have a clear framework: which labs they run, what they look for, and what their first-line approach is. Vague answers are a yellow flag.
          </li>
          <li>
            <strong>"Do you coordinate with my other providers?"</strong> — If you're also working with an endocrinologist, rheumatologist, or oncologist, you need an ND who's comfortable collaborating — not one who dismisses conventional medicine wholesale.
          </li>
          <li>
            <strong>"What labs do you typically run?"</strong> — Standard lab panels from conventional doctors often miss things NDs consider important: full thyroid panels (TSH, free T3, free T4, reverse T3, TPO antibodies), SIBO breath tests, comprehensive metabolic analysis, organic acids. If an ND doesn't run labs, ask why.
          </li>
          <li>
            <strong>"How long do initial appointments run?"</strong> — Good first visits are 60 to 90 minutes. If they're booking 30-minute initial visits, they're not gathering enough information.
          </li>
          <li>
            <strong>"What's your stance on pharmaceuticals?"</strong> — NDs range from "never recommend pharmaceuticals" to "use them when appropriate as part of a broader plan." Neither extreme is right for every patient. Find someone whose philosophy matches your situation.
          </li>
          <li>
            <strong>"What does follow-up look like?"</strong> — Chronic conditions take time to address. Ask how often they expect to see you, how they handle lab results (do you need another appointment, or will they review by portal?), and how accessible they are between visits.
          </li>
        </ol>

        <h2>Green Flags in a Naturopathic Practice</h2>
        <ul>
          <li>Clear, detailed intake forms sent before your first visit</li>
          <li>Orders comprehensive labs rather than relying only on what conventional doctors have run</li>
          <li>Explains their reasoning and educates you on what's happening in your body</li>
          <li>Sets realistic expectations — healing takes time, not a single supplement</li>
          <li>Comfortable discussing what's outside their scope and refers appropriately</li>
          <li>Tracks your progress systematically and adjusts the plan based on results</li>
        </ul>

        <h2>Red Flags to Watch For</h2>
        <ul>
          <li>Dismisses all conventional medicine or pharmaceuticals without nuance</li>
          <li>Recommends an expensive supplement protocol at the first visit before gathering data</li>
          <li>Can't explain the clinical reasoning behind their recommendations</li>
          <li>No license number available, or credential from a non-accredited school</li>
          <li>Promises specific outcomes ("I can cure your autoimmune disease")</li>
          <li>Discourages you from seeing your other providers</li>
        </ul>

        <h2>In-Person vs. Telemedicine</h2>
        <p>
          Many NDs now offer telemedicine, which has expanded access significantly — especially in states with fewer licensed NDs. Telemedicine works well for initial consultations, lab reviews, follow-up appointments, and conditions that don't require physical examination. If you're looking for an ND who offers physical medicine (manual therapy, IV therapy, injections), you'll need in-person care.
        </p>
        <p>
          Some NDs in licensed states can see patients across state lines via telemedicine, depending on their licensing and interstate compact participation. Always ask which states they're licensed to practice in before booking a telehealth visit.
        </p>

        {/* CTA */}
        <div className="mt-10 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Find a Naturopathic Doctor That Fits</h2>
          <p className="text-gray-600 mb-4">
            Browse licensed NDs by specialty, city, and telemedicine availability across all 25 licensed US states.
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
