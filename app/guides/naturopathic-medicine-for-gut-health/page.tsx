import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Naturopathic Medicine for Gut Health: What NDs Do Differently | NaturopathicDoctorFinder',
  description:
    'Naturopathic doctors take a root-cause approach to gut health — IBS, SIBO, leaky gut, Crohn\'s, colitis. Here\'s what an ND does that a GI specialist typically doesn\'t.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/guides/naturopathic-medicine-for-gut-health' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a naturopathic doctor treat IBS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — irritable bowel syndrome is one of the most common reasons people seek naturopathic care. NDs address IBS by identifying the underlying drivers (SIBO, dysbiosis, food intolerances, stress nervous system dysregulation, hypochlorhydria) rather than just treating symptoms. Treatment typically combines elimination-reintroduction dietary protocols, targeted probiotics, herbal antimicrobials if SIBO is present, and nervous system regulation work — because the gut-brain connection is central to IBS pathophysiology.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is SIBO and how do NDs treat it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Small intestinal bacterial overgrowth (SIBO) is an overgrowth of bacteria in the small intestine that causes bloating, gas, altered bowel habits, and nutrient malabsorption. NDs typically test for SIBO via lactulose or glucose breath test, then use herbal antimicrobial protocols (Oregon grape, berberine, oil of oregano, neem) as a first-line approach — with pharmaceutical antibiotics (rifaximin, neomycin) as an option when herbal treatment isn't sufficient. Addressing root causes (motility, stomach acid, ileocecal valve function) is central to preventing recurrence.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do naturopathic doctors run gut health labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NDs in licensed states can order comprehensive stool testing (GI-MAP, Genova GI Effects, or Diagnostic Solutions panels), SIBO breath tests, food sensitivity testing (IgG panels), zonulin (intestinal permeability marker), organic acids, and nutrient absorption markers. These panels go considerably beyond what a standard GI evaluation typically includes and give a more complete picture of what's driving gut dysfunction.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does naturopathic treatment for gut issues take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Gut healing is rarely quick — most naturopathic gut protocols run 3-6 months at minimum. A typical sequence: comprehensive testing (weeks 1-2), elimination diet and antimicrobial phase if needed (weeks 2-8), repair and reinoculation (weeks 8-16), reintroduction and long-term maintenance protocol (months 4+). Patients often notice meaningful improvement in bloating and energy within the first 4-6 weeks, with more complete resolution taking longer. Complex cases — Crohn's, longstanding SIBO, post-infectious IBS — often take 6-12 months.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should I see a GI doctor or a naturopathic doctor for gut issues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "These aren't mutually exclusive. A GI doctor (gastroenterologist) is essential for ruling out structural disease — Crohn's, ulcerative colitis, colorectal cancer, celiac disease — via colonoscopy, endoscopy, and imaging. Once structural disease is ruled out or diagnosed and stable, a naturopathic doctor can work on the functional aspects: microbiome imbalance, diet optimization, inflammatory load reduction, and nervous system regulation. Many patients work with both simultaneously, using each practitioner for what they do best.",
      },
    },
  ],
}

const conditions = [
  { name: 'IBS (Irritable Bowel Syndrome)', approach: 'Root cause identification (SIBO, dysbiosis, food intolerances, HPA axis dysfunction), elimination protocols, nervous system regulation, targeted probiotics and prebiotics.' },
  { name: 'SIBO (Small Intestinal Bacterial Overgrowth)', approach: 'Breath test diagnosis, herbal antimicrobial protocol (berberine, oregano, neem), motility agents, prokinetics to prevent recurrence, dietary modification (Low-FODMAP, elemental diet for severe cases).' },
  { name: "Crohn's Disease", approach: "Complementary to gastroenterology: anti-inflammatory botanical protocols, micronutrient repletion (B12, D3, zinc, iron), mucosal repair (L-glutamine, zinc carnosine), diet optimization to reduce flare triggers. NDs do NOT replace gastroenterologist management for Crohn's." },
  { name: 'Leaky Gut (Intestinal Permeability)', approach: 'Elimination of triggers (gluten, NSAIDs, alcohol, high-sugar diet), mucosal repair protocol (L-glutamine, collagen, zinc carnosine, deglycyrrhizinated licorice), microbial rebalancing.' },
  { name: 'Dysbiosis', approach: 'Comprehensive stool testing (GI-MAP, GI Effects), targeted prebiotic and probiotic protocols, dietary diversity intervention, antimicrobial herbs when indicated.' },
]

export default function NaturopathicGutHealthPage() {
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
          <span className="text-gray-700">Naturopathic Medicine for Gut Health</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            Naturopathic Medicine for Gut Health
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Naturopathic doctors bring a root-cause approach to gut dysfunction that conventional gastroenterology often doesn&apos;t cover. Where a GI specialist rules out structural disease, an ND works on what&apos;s driving the dysfunction — microbiome imbalance, food intolerances, mucosal permeability, SIBO, and the gut-brain axis. Here&apos;s what that looks like in practice.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How the Naturopathic Gut Approach Differs</h2>
            <div className="space-y-3">
              {[
                { point: 'Comprehensive testing', detail: "NDs run panels that go beyond standard GI labs — GI-MAP comprehensive stool analysis, SIBO breath testing, intestinal permeability markers, food sensitivity testing, and organic acids. These create a detailed picture of what's actually happening in the gut." },
                { point: 'Diet as medicine', detail: "Dietary intervention — elimination-reintroduction, Low-FODMAP, specific carbohydrate diet, carnivore elimination for severe inflammatory states — is central to naturopathic gut treatment, not optional. Most NDs spend significant appointment time on dietary history and protocol education." },
                { point: 'Herbal and nutritional protocols', detail: "Berberine, oregano oil, garlic extract, and other botanical antimicrobials are evidence-supported for dysbiosis and SIBO. L-glutamine, zinc carnosine, deglycyrrhizinated licorice, and collagen peptides support mucosal repair. These aren't supplements grabbed off a shelf — NDs prescribe them at therapeutic doses based on clinical findings." },
                { point: 'Gut-brain connection', detail: "IBS is bidirectionally connected to the nervous system — stress worsens gut symptoms, and gut dysfunction worsens anxiety and mood. Naturopathic treatment addresses the HPA axis, vagal tone, and stress physiology as part of gut healing, not separately from it." },
              ].map(({ point, detail }) => (
                <div key={point} className="bg-brand-cream rounded-xl border border-brand-sage/20 p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{point}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Gut Conditions Treated</h2>
            <div className="space-y-3">
              {conditions.map(({ name, approach }) => (
                <div key={name} className="border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">{name}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{approach}</p>
                </div>
              ))}
            </div>
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
          <h3 className="font-semibold text-gray-900 mb-3">Find a Naturopathic Doctor for Gut Health</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/listings"
              className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors"
            >
              Browse the Directory
            </Link>
            <Link href="/guides/what-is-a-naturopathic-doctor" className="text-brand-primary font-medium hover:underline">What Is a Naturopathic Doctor? →</Link>
            <Link href="/categories/womens-health-naturopath" className="text-brand-primary font-medium hover:underline">Women&apos;s Health NDs →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
