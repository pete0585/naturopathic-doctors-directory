import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Austin, TX | NaturopathicDoctorFinder',
  description:
    'Find naturopathic-style practitioners in Austin, TX. Texas does not license NDs — learn what that means for your care and how to find integrative practitioners in Austin.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-austin-tx' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is naturopathic medicine licensed in Texas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Texas is not one of the 25 US jurisdictions that license naturopathic doctors as independent practitioners. In Texas, someone calling themselves a naturopath or naturopathic doctor may not hold a state-regulated license in that capacity. Many practitioners offering naturopathic-style care in Austin are licensed in another field (such as medicine, nursing, or chiropractic) and provide integrative, root-cause care within that licensure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a naturopathic-style doctor in Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In Texas, your best options are: (1) MDs or DOs practicing functional or integrative medicine — they can diagnose, prescribe, and order labs just like a conventional doctor, with a root-cause philosophy. (2) Nurse practitioners with integrative training. (3) Chiropractors who practice functional wellness. (4) Graduates of naturopathic medical schools who have relocated to Texas and practice under supervision or a different license. For licensed ND care, consider telehealth with an ND licensed in a neighboring licensed state.",
      },
    },
    {
      '@type': 'Question',
      name: 'What can an Austin naturopath help with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Practitioners offering naturopathic-style care in Austin commonly help with: hormone imbalances, thyroid dysfunction, gut and digestive disorders, fatigue and adrenal issues, PCOS, anxiety and mood, autoimmune conditions, and chronic illness management. The approach depends heavily on the practitioner's training and licensure — look for someone who runs comprehensive labs and takes a root-cause approach.",
      },
    },
  ],
}

export default async function BestNDsAustin() {
  const listings = await getListingsByCity('Austin', 'TX')
  const top = listings.slice(0, 10)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
        <span className="text-gray-700">Austin, TX</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Austin, TX
        </h1>
        <p className="text-gray-600 max-w-3xl mb-4">
          Austin has one of the strongest integrative health communities in Texas — but it is important to understand the licensing landscape before you book an appointment.
        </p>

        {/* Important licensing note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-amber-900 mb-2">Texas Does Not License Naturopathic Doctors</h2>
          <p className="text-amber-800 text-sm leading-relaxed">
            Unlike states such as Oregon, Washington, Arizona, and Colorado, Texas does not have a naturopathic medicine licensing law. This means that in Texas, the title &quot;naturopath&quot; or &quot;naturopathic doctor&quot; is not a state-regulated credential — anyone can use it without formal training.
          </p>
          <p className="text-amber-800 text-sm leading-relaxed mt-2">
            This does not mean you cannot get naturopathic-style care in Austin. Many excellent practitioners — MDs, DOs, nurse practitioners, and chiropractors — practice integrative, root-cause medicine in Austin with strong functional medicine training. The listings below include practitioners who offer this style of care. Always verify credentials before booking.
          </p>
        </div>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> practitioners offering naturopathic or integrative care in Austin, TX
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {top.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </>
      ) : (
        <div className="text-center py-12 mb-10 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500 mb-4">Austin practitioner listings are being added. Check back shortly.</p>
          <Link href="/listings" className="text-brand-primary hover:underline font-medium">Browse all practitioners &rarr;</Link>
        </div>
      )}

      {/* What to look for in Austin */}
      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 mb-8 prose-guide">
        <h2>Finding Root-Cause Care in Austin</h2>
        <p>
          Austin&apos;s health-conscious culture has produced a strong integrative medicine ecosystem. The most credentialed route to naturopathic-style care in Texas is through a functional medicine MD or DO — physicians who have completed conventional medical training and then pursued additional training in functional or integrative medicine. These practitioners can order any lab, diagnose and treat any condition, and prescribe when needed, all while using a root-cause philosophy.
        </p>
        <p>
          Nurse practitioners with functional medicine training are another strong option. In Texas, NPs have significant autonomous practice authority and many have built highly regarded integrative practices serving conditions like thyroid disease, PCOS, hormonal imbalances, and gut dysfunction.
        </p>
        <h3>Telehealth with a Licensed ND</h3>
        <p>
          If you specifically want a licensed naturopathic doctor (ND) with graduate-level naturopathic medical training from an accredited school, your best option in Texas is telehealth. Licensed NDs in states like Oregon, Washington, or Arizona can see Texas patients via telehealth for consultations, protocol development, and supplement management — though they cannot prescribe in Texas. This is a legitimate and increasingly common arrangement.
        </p>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
        <h2 className="font-bold text-gray-900 mb-4">Common Questions</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-gray-800">Is naturopathic medicine licensed in Texas?</h3>
            <p className="text-gray-600 mt-1">No. Texas does not license NDs as independent practitioners. Seek care from licensed functional medicine MDs, DOs, or NPs, or consider telehealth with an ND licensed in another state.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What should I ask an Austin integrative practitioner before booking?</h3>
            <p className="text-gray-600 mt-1">Ask: What is your medical license? What training do you have in functional or integrative medicine? Do you run comprehensive labs? What conditions do you specialize in? A legitimate integrative practitioner will answer these confidently. See our <Link href="/guides/questions-to-ask-your-naturopathic-doctor" className="text-brand-primary hover:underline">full question guide</Link> before your appointment.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Can an Austin integrative doctor help with hormones?</h3>
            <p className="text-gray-600 mt-1">Yes — functional medicine MDs and NPs in Austin frequently address thyroid disorders, adrenal dysfunction, PCOS, perimenopause, and testosterone issues. Read our <Link href="/guides/naturopathic-doctor-for-hormones" className="text-brand-primary hover:underline">guide to naturopathic hormone care</Link> to understand what to expect.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Browse Naturopathic-Style Practitioners Near You</h2>
        <p className="text-gray-600 mb-4">
          Find integrative and root-cause practitioners across all 25 licensed ND states and beyond.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/listings"
            className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors"
          >
            Browse All Practitioners
          </Link>
          <Link
            href="/guides/what-is-a-naturopathic-doctor"
            className="bg-white border border-brand-primary text-brand-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary/5 transition-colors"
          >
            What Is a Naturopathic Doctor?
          </Link>
        </div>
      </div>
    </div>
  )
}
