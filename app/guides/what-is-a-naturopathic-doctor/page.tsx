import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is a Naturopathic Doctor? A Patient\'s Guide',
  description:
    'Learn what a naturopathic doctor (ND) is, how their training compares to MDs, what conditions they treat, and what to expect at your first appointment.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/guides/what-is-a-naturopathic-doctor' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a naturopathic doctor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A naturopathic doctor (ND) is a licensed healthcare professional who completes a 4-year graduate medical program at a CNME-accredited naturopathic medical school. NDs are trained to identify and treat the root causes of illness using natural therapies including clinical nutrition, botanical medicine, IV therapy, acupuncture, and lifestyle medicine. In the 25 US states and DC where naturopathic medicine is licensed, NDs function as primary care physicians.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is an ND different from an MD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both NDs and MDs complete graduate medical programs that cover the same basic science curriculum: anatomy, physiology, biochemistry, pathology, and clinical diagnosis. The key difference is in therapeutic approach. MDs are trained primarily in pharmaceutical and surgical interventions. NDs receive additional training in nutrition therapy, botanical medicine, homeopathy, physical medicine, and counseling — and are oriented toward finding and treating the underlying cause of symptoms rather than suppressing them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are naturopathic doctors real doctors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Licensed NDs are real healthcare providers with graduate medical training, national board examinations (NPLEX), and state licensure. They are not MDs — they are a distinct professional category, similar to how optometrists (ODs) and dentists (DMDs) are distinct from medical doctors but are still licensed healthcare professionals. In states with broad ND licensing (like Washington, Oregon, and Arizona), NDs can serve as primary care physicians, order labs, and prescribe certain medications.',
      },
    },
    {
      '@type': 'Question',
      name: 'What conditions do naturopathic doctors treat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NDs commonly treat: autoimmune conditions (Hashimoto\'s, lupus, rheumatoid arthritis), thyroid and hormonal disorders, Lyme disease and tick-borne illness, gut health issues (IBS, Crohn\'s, SIBO), fertility challenges, anxiety and depression, chronic fatigue, skin conditions (eczema, psoriasis, acne), weight management, and chronic pain. Many patients see NDs for preventive care and health optimization.',
      },
    },
  ],
}

export default function WhatIsAnNDGuide() {
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
        <span className="text-gray-700">What Is a Naturopathic Doctor?</span>
      </nav>

      <article className="prose-guide">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">What Is a Naturopathic Doctor?</h1>
        <p className="text-lg text-gray-600 mb-8">
          If you've been cycling through conventional doctors without getting answers, a naturopathic doctor might be the next step — but only if you understand what NDs actually do, how they're trained, and when they're the right fit.
        </p>

        <h2>The Short Answer</h2>
        <p>
          A naturopathic doctor (ND) is a licensed healthcare provider trained to find and treat the root causes of illness using natural therapeutics. They're not the same as an MD, but they're not a wellness coach either. In the 25 US states where naturopathic medicine is licensed, NDs complete a 4-year graduate medical program, pass national board exams, and practice as regulated healthcare professionals.
        </p>
        <p>
          The defining difference from conventional medicine: an ND's job isn't to manage your symptoms. It's to figure out why you're sick in the first place.
        </p>

        <h2>How Are Naturopathic Doctors Trained?</h2>
        <p>
          NDs complete a 4-year graduate program at a CNME-accredited naturopathic medical school. There are eight accredited programs in North America, including Bastyr University (WA/CA), the National University of Natural Medicine (OR), Southwest College of Naturopathic Medicine (AZ), and Sonoran University (AZ).
        </p>
        <p>
          The first two years cover the same basic science curriculum as conventional medical schools: anatomy, physiology, biochemistry, microbiology, pathology, immunology, and physical and clinical diagnosis. The second two years add training in:
        </p>
        <ul>
          <li><strong>Clinical nutrition</strong> — therapeutic dietary protocols, targeted supplementation, lab-guided nutritional assessment</li>
          <li><strong>Botanical medicine</strong> — evidence-based use of plant-based treatments with clinical pharmacology</li>
          <li><strong>IV therapy</strong> — intravenous nutrient administration (Myers cocktail, high-dose vitamin C, glutathione)</li>
          <li><strong>Homeopathy</strong> — individualized low-dose remedies (evidence is debated; not all NDs practice this)</li>
          <li><strong>Physical medicine</strong> — soft tissue work, hydrotherapy, therapeutic ultrasound</li>
          <li><strong>Mind-body medicine</strong> — counseling, stress management, biofeedback</li>
        </ul>
        <p>
          Before practicing, NDs must pass the NPLEX (Naturopathic Physicians Licensing Examinations) — two national board exams covering biomedical sciences and clinical sciences. State licensing requirements vary; some states require additional jurisprudence exams.
        </p>

        <h2>What Conditions Do NDs Treat?</h2>
        <p>
          Naturopathic medicine is especially well-suited to complex, chronic conditions that haven't responded to conventional approaches:
        </p>
        <ul>
          <li><strong>Autoimmune conditions</strong> — Hashimoto's thyroiditis, lupus, rheumatoid arthritis, multiple sclerosis, psoriasis</li>
          <li><strong>Thyroid and hormonal disorders</strong> — hypothyroidism, hyperthyroidism, adrenal dysfunction, hormonal imbalances</li>
          <li><strong>Lyme disease and tick-borne illness</strong> — particularly chronic or complex presentations</li>
          <li><strong>Gut health</strong> — IBS, Crohn's disease, ulcerative colitis, SIBO, leaky gut, food sensitivities</li>
          <li><strong>Fertility and reproductive health</strong> — irregular cycles, PCOS, unexplained infertility, preconception care</li>
          <li><strong>Anxiety, depression, and burnout</strong> — using nutrition, botanicals, and lifestyle interventions alongside or instead of pharmaceuticals</li>
          <li><strong>Chronic fatigue</strong> — including post-viral fatigue and fibromyalgia</li>
          <li><strong>Pediatric care</strong> — ear infections, eczema, ADHD, allergies, developmental support</li>
          <li><strong>Cancer support</strong> — integrative oncology alongside conventional treatment</li>
        </ul>
        <p>
          NDs also see patients for preventive care — people who are technically "healthy" but want to optimize energy, sleep, cognitive function, and longevity before problems develop.
        </p>

        <h2>What to Expect at Your First Appointment</h2>
        <p>
          Initial visits with an ND are typically 60 to 90 minutes. That's not a billing quirk — it's how naturopathic medicine works. You can't address root causes without understanding the full picture.
        </p>
        <p>
          Your ND will take a comprehensive health history: current symptoms, timeline, what you've already tried, diet and lifestyle, sleep, stress, relationships, environment, family history, medications, and supplements. Many NDs use detailed intake questionnaires you complete before the visit.
        </p>
        <p>
          After the history, your ND will often do a physical exam and may order labs — sometimes more comprehensive than what conventional doctors run. Functional labs (like comprehensive thyroid panels including T3/T4/rT3/TPO, SIBO breath tests, organic acids, or microbiome analysis) are common.
        </p>
        <p>
          You'll leave with a concrete treatment plan — not just a diagnosis. NDs prioritize addressing lifestyle and nutrition first, then botanical and supplemental support, then more interventional options. Most NDs want to see you back in 4 to 8 weeks to review labs and adjust.
        </p>

        <h2>Licensed vs. Unlicensed: The Distinction That Matters</h2>
        <p>
          Here's a critical point patients often miss: "naturopath" and "naturopathic doctor" are not interchangeable terms. A "naturopath" can be anyone, in most states — there's no required training or licensure. A "naturopathic doctor" in a licensed state has completed graduate medical school, passed national boards, and holds a state license.
        </p>
        <p>
          NaturopathicDoctorFinder.com only lists licensed NDs in the 25 US jurisdictions where naturopathic medicine is licensed. When you use this directory, you're finding credentialed professionals — not wellness practitioners using a similar-sounding title.
        </p>

        <h2>Is a Naturopathic Doctor Right for You?</h2>
        <p>
          An ND is likely a good fit if:
        </p>
        <ul>
          <li>You've been told your labs are "normal" but you still feel terrible</li>
          <li>You have a chronic condition that hasn't fully responded to conventional treatment</li>
          <li>You want to reduce or eliminate medications and have a provider guide that process safely</li>
          <li>You prefer longer appointments and a practitioner who explains their reasoning</li>
          <li>You want preventive care that goes beyond annual bloodwork and cholesterol checks</li>
        </ul>
        <p>
          An ND may not be the right fit if you need acute emergency care, require complex surgical evaluation, or need a provider primarily for prescription management. NDs work best as primary care providers or as part of a coordinated care team alongside specialists.
        </p>

        {/* CTA */}
        <div className="mt-10 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Find a Licensed Naturopathic Doctor Near You</h2>
          <p className="text-gray-600 mb-4">
            Browse licensed NDs in your city or state. Filter by specialty, telemedicine availability, and whether they're accepting new patients.
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
