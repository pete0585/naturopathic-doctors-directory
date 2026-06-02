import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Finding a Naturopathic Doctor for Autoimmune Disease',
  description:
    'Autoimmune conditions often respond well to naturopathic approaches that address inflammation triggers, gut health, and immune dysregulation. Here\'s how to find the right ND.',
  alternates: {
    canonical: 'https://naturopathicdoctorfinder.com/guides/nd-for-autoimmune-disease',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a naturopathic doctor treat autoimmune disease?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Licensed naturopathic doctors can address many factors that drive autoimmune disease — gut barrier dysfunction, nutrient deficiencies, chronic infections, hormonal imbalances, and environmental triggers. NDs use tools like elimination diets, targeted supplementation, botanical anti-inflammatories, and comprehensive labs to reduce the immune dysregulation that underlies conditions like Hashimoto\'s, lupus, rheumatoid arthritis, and Crohn\'s disease. NDs work best alongside rheumatologists and other specialists for complex autoimmune cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What autoimmune conditions do naturopathic doctors commonly treat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NDs frequently see patients with: Hashimoto\'s thyroiditis, Grave\'s disease, lupus (SLE), rheumatoid arthritis, psoriasis and psoriatic arthritis, multiple sclerosis, Crohn\'s disease, ulcerative colitis, celiac disease, Sjögren\'s syndrome, and chronic Lyme disease (which has autoimmune overlap). Many patients come after years of conventional treatment that managed symptoms but didn\'t address underlying drivers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What labs do naturopathic doctors run for autoimmune disease?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A comprehensive ND workup for autoimmune disease typically includes: full thyroid panel (TSH, free T3, free T4, reverse T3, TPO antibodies, thyroglobulin antibodies), ANA screen and specific autoantibody panels, comprehensive metabolic panel, inflammatory markers (CRP, ESR, homocysteine), nutrient levels (vitamin D, B12, ferritin, zinc, magnesium), gut health markers (secretory IgA, calprotectin), food sensitivity testing, and sometimes organic acids or SIBO breath testing. The specific panel depends on your condition and history.',
      },
    },
  ],
}

export default function NDForAutoimmune() {
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
        <Link href="/categories/autoimmune" className="hover:text-brand-primary">Autoimmune</Link>
        <span>/</span>
        <span className="text-gray-700">Finding an ND for Autoimmune Disease</span>
      </nav>

      <article className="prose-guide">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Finding a Naturopathic Doctor for Autoimmune Disease
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Autoimmune disease is one of the areas where naturopathic medicine has the most to offer patients who feel like they&apos;ve run out of options. Here&apos;s what to know before you start looking.
        </p>

        <h2>Why Autoimmune Patients Seek Out NDs</h2>
        <p>
          The conventional approach to most autoimmune conditions is immunosuppression — reducing the overactive immune response with medications like steroids, methotrexate, or biologics. These medications can be lifesaving, and in severe cases they&apos;re absolutely necessary. But they don&apos;t address why the immune system started attacking the body in the first place.
        </p>
        <p>
          Naturopathic doctors ask that question. And increasingly, the research is catching up: gut barrier dysfunction, chronic infections, nutritional deficiencies, hormonal imbalances, and environmental toxin exposure all appear to play roles in triggering and sustaining autoimmune activity. Addressing these upstream factors can reduce symptom burden, lower inflammatory markers, and sometimes reduce dependence on immunosuppressive medications — always done in coordination with your rheumatologist or specialist, not in place of them.
        </p>

        <h2>Autoimmune Conditions NDs Commonly Address</h2>
        <ul>
          <li><strong>Hashimoto&apos;s thyroiditis</strong> — the most common autoimmune thyroid condition; often underdiagnosed because TSH alone doesn&apos;t detect it</li>
          <li><strong>Lupus (SLE)</strong> — systemic autoimmune disease with complex multi-organ involvement</li>
          <li><strong>Rheumatoid arthritis</strong> — inflammatory joint disease driven by immune dysregulation</li>
          <li><strong>Psoriasis and psoriatic arthritis</strong> — skin and joint autoimmune conditions with strong gut-immune connections</li>
          <li><strong>Multiple sclerosis</strong> — neurological autoimmune disease with established connections to vitamin D deficiency and gut health</li>
          <li><strong>Inflammatory bowel disease</strong> — Crohn&apos;s disease and ulcerative colitis, where gut health IS the presenting issue</li>
          <li><strong>Celiac disease</strong> — autoimmune reaction to gluten with systemic effects beyond the gut</li>
          <li><strong>Sjögren&apos;s syndrome</strong> — autoimmune exocrine gland dysfunction (dry eyes, dry mouth)</li>
          <li><strong>Chronic Lyme disease</strong> — often presents with autoimmune-like immune dysregulation and overlap</li>
        </ul>

        <h2>What a Naturopathic Autoimmune Workup Looks Like</h2>
        <p>
          An ND specializing in autoimmune disease will typically run significantly more comprehensive labs than the standard autoimmune panel from a conventional rheumatologist. Expect:
        </p>
        <ul>
          <li><strong>Full thyroid panel:</strong> TSH, free T3, free T4, reverse T3, TPO antibodies, thyroglobulin antibodies — not just TSH</li>
          <li><strong>Comprehensive autoantibody screening:</strong> ANA with reflex, anti-dsDNA, anti-Sm, anti-Ro/SSA, anti-La/SSB, anti-CCP, rheumatoid factor (condition-specific)</li>
          <li><strong>Inflammatory markers:</strong> high-sensitivity CRP, ESR, homocysteine, ferritin</li>
          <li><strong>Gut health markers:</strong> secretory IgA, calprotectin, zonulin (leaky gut marker), sometimes comprehensive stool analysis</li>
          <li><strong>Nutrient assessment:</strong> vitamin D (25-OH), B12, methylmalonic acid, folate, zinc, magnesium, ferritin — deficiencies in all of these are common in autoimmune patients and worsen immune dysregulation</li>
          <li><strong>Infectious disease screening:</strong> EBV, HHV-6, Lyme coinfections, parasites (condition-specific)</li>
          <li><strong>Hormonal assessment:</strong> DHEA-S, cortisol curve, sex hormones (relevant in lupus, Sjögren&apos;s, RA)</li>
        </ul>

        <h2>How NDs Approach Treatment</h2>
        <p>
          After identifying drivers, an ND builds a layered treatment plan. Common therapeutic approaches for autoimmune conditions:
        </p>
        <ul>
          <li>
            <strong>Elimination diets:</strong> The autoimmune protocol (AIP), gluten-free, dairy-free, or low-lectin diets can reduce inflammatory load. NDs don&apos;t put everyone on the same diet — they use elimination and reintroduction to identify your specific triggers.
          </li>
          <li>
            <strong>Gut healing:</strong> If gut barrier dysfunction is present, protocols typically address pathogenic microorganisms, restore beneficial flora, and support gut barrier repair (glutamine, zinc carnosine, colostrum, DGL licorice, slippery elm).
          </li>
          <li>
            <strong>Anti-inflammatory botanicals:</strong> Curcumin, boswellia, resveratrol, and berberine have peer-reviewed research supporting anti-inflammatory effects in autoimmune conditions. NDs use therapeutic doses based on clinical evidence.
          </li>
          <li>
            <strong>Targeted nutrient repletion:</strong> Correcting deficiencies in vitamin D, B12, zinc, magnesium, and omega-3s is often a significant part of reducing autoimmune activity.
          </li>
          <li>
            <strong>Infection management:</strong> Chronic viral reactivation (EBV, HHV-6) and tick-borne infections can sustain autoimmune activity. NDs may use botanical or pharmaceutical antivirals depending on scope of practice.
          </li>
          <li>
            <strong>Stress and HPA axis support:</strong> Chronic stress drives cortisol dysregulation, which directly impacts immune regulation. Adaptogenic herbs (ashwagandha, rhodiola, eleuthero) and stress management protocols are often part of the plan.
          </li>
        </ul>

        <h2>What to Look for in an ND for Autoimmune Disease</h2>
        <p>
          Not all NDs specialize in autoimmune disease. Here&apos;s how to find one who does:
        </p>
        <ul>
          <li><strong>Lists autoimmune as a primary specialty</strong> — not just a condition they&apos;ll see, but a focus area</li>
          <li><strong>Uses functional labs</strong> — an ND who only runs standard lab panels isn&apos;t doing comprehensive autoimmune workups</li>
          <li><strong>Works alongside your specialists</strong> — the best autoimmune NDs coordinate with your rheumatologist, neurologist, or gastroenterologist, not compete with them</li>
          <li><strong>Has experience with your specific condition</strong> — Hashimoto&apos;s management looks different from Crohn&apos;s management; find someone who knows your condition well</li>
          <li><strong>Sets realistic expectations</strong> — autoimmune conditions typically improve over months, not weeks. Any ND promising rapid dramatic results is overselling</li>
        </ul>

        {/* CTA */}
        <div className="mt-10 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Find an ND Specializing in Autoimmune Disease</h2>
          <p className="text-gray-600 mb-4">
            Browse licensed naturopathic doctors who specialize in autoimmune conditions across all 25 licensed US states.
          </p>
          <Link
            href="/categories/autoimmune"
            className="bg-brand-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-primary-dark transition-colors inline-block"
          >
            Browse Autoimmune NDs →
          </Link>
        </div>
      </article>
    </div>
  )
}
