import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Chicago, IL | NaturopathicDoctorFinder',
  description:
    'Find naturopathic and integrative medicine practitioners in Chicago, IL. Illinois does not license NDs — learn what that means and how to find quality root-cause care in Chicago.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-chicago-il' },
}

export const revalidate = 3600

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is naturopathic medicine licensed in Illinois?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Illinois does not have a naturopathic licensing law. In Illinois, the title "naturopath" is not a state-regulated credential, so anyone can use it regardless of training. For licensed ND care, your options are: integrative MDs and DOs practicing in Chicago, or telehealth with a licensed ND in a licensed state (such as Wisconsin or Minnesota, which are neighbors to Illinois with ND licensing).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a Chicago ND diagnose conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Illinois, someone calling themselves a naturopath without another medical license cannot legally diagnose or treat medical conditions. However, licensed MDs, DOs, and nurse practitioners practicing integrative or functional medicine in Chicago can — and many use a naturopathic philosophy. If you want to work with a true ND with graduate-level naturopathic medical school training, telehealth with an ND licensed in Wisconsin or Minnesota is your best option.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an ND and an MD in Illinois?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Illinois, an MD is a state-licensed physician with legally recognized authority to diagnose and treat medical conditions. A self-described "naturopath" in Illinois without another healthcare license has no state-recognized scope of practice. The confusion often comes from the fact that in licensed states, NDs are fully regulated healthcare professionals with significant clinical authority — but that regulatory framework does not exist in Illinois.',
      },
    },
  ],
}

export default async function BestNDsChicago() {
  const listings = await getListingsByCity('Chicago', 'IL')
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
        <span className="text-gray-700">Chicago, IL</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Chicago, IL
        </h1>
        <p className="text-gray-600 max-w-3xl mb-4">
          Chicago has a strong integrative and functional medicine community — but the state of Illinois does not license naturopathic doctors. Here is what that means for your care.
        </p>

        {/* Important licensing note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
          <h2 className="font-bold text-amber-900 mb-2">Illinois Does Not License Naturopathic Doctors</h2>
          <p className="text-amber-800 text-sm leading-relaxed">
            Illinois is not among the 25 US jurisdictions where naturopathic medicine is a licensed healthcare profession. The title &quot;naturopath&quot; is unregulated in Illinois — anyone can use it without formal training or oversight. This is not a criticism of the practitioners themselves, but an important consumer protection note.
          </p>
          <p className="text-amber-800 text-sm leading-relaxed mt-2">
            The good news: Chicago has an excellent community of integrative and functional medicine practitioners — MDs, DOs, and nurse practitioners — who practice root-cause, naturopathic-philosophy medicine with full clinical authority. Neighboring states Minnesota and Wisconsin both license NDs, and many licensed NDs offer telehealth to Illinois residents.
          </p>
        </div>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> practitioners offering naturopathic or integrative care in Chicago, IL
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {top.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </>
      ) : (
        <div className="text-center py-12 mb-10 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500 mb-4">Chicago practitioner listings are being added. Check back shortly.</p>
          <Link href="/listings" className="text-brand-primary hover:underline font-medium">Browse all practitioners &rarr;</Link>
        </div>
      )}

      {/* Guide content */}
      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 mb-8 prose-guide">
        <h2>Finding Quality Integrative Care in Chicago</h2>
        <p>
          Chicago&apos;s medical community — anchored by Northwestern Medicine, Rush University Medical Center, University of Chicago Medicine, and Loyola — has increasingly embraced integrative approaches. Several major hospital systems have dedicated integrative medicine programs staffed by MDs and DOs who use functional and naturopathic approaches within a conventional medical framework.
        </p>
        <p>
          For patients seeking a more independent integrative practice, Chicago has a strong community of functional medicine MDs and NPs in neighborhoods like Lincoln Park, Wicker Park, River North, and the North Shore suburbs (Evanston, Wilmette, Northbrook). These practitioners typically run comprehensive labs, take extended initial appointments, and build individualized treatment plans — very similar to what a licensed ND would do in a licensed state.
        </p>
        <h3>Telehealth with a Licensed ND</h3>
        <p>
          If you specifically want a doctor of naturopathic medicine (ND) with accredited naturopathic medical school training, your strongest option is telehealth with an ND licensed in Wisconsin or Minnesota — both neighboring licensed states. These NDs can provide consultations, dietary and supplement protocols, and ongoing guidance for Illinois residents. Because they are not licensed to prescribe in Illinois, prescription-level interventions would need to go through a licensed Illinois provider.
        </p>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
        <h2 className="font-bold text-gray-900 mb-4">Common Questions</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-gray-800">Is naturopathic medicine licensed in Illinois?</h3>
            <p className="text-gray-600 mt-1">No. Illinois does not license NDs. For regulated, licensed naturopathic doctor care, use telehealth with an ND from Wisconsin or Minnesota, or seek a functional medicine MD, DO, or NP in Chicago.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">What credentials should I look for in an integrative doctor in Chicago?</h3>
            <p className="text-gray-600 mt-1">Look for MD, DO, or APRN/NP credentials from an Illinois-licensed practitioner. Additional training certifications to look for: Institute for Functional Medicine (IFM) Certified Practitioner, board-certified in Integrative Medicine, or ABIHM fellowship. See our <Link href="/guides/questions-to-ask-your-naturopathic-doctor" className="text-brand-primary hover:underline">full question guide</Link> for what to ask before booking.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Can an integrative doctor in Chicago help with hormones?</h3>
            <p className="text-gray-600 mt-1">Yes — functional medicine MDs and NPs in Chicago regularly address thyroid disorders, adrenal fatigue, PCOS, perimenopause, and testosterone concerns. Read our <Link href="/guides/naturopathic-doctor-for-hormones" className="text-brand-primary hover:underline">hormone care guide</Link> for what to expect from a root-cause approach to hormones.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Find a Naturopathic Doctor Near You</h2>
        <p className="text-gray-600 mb-4">
          Browse licensed NDs and integrative practitioners across all 25 licensed ND states — or find a telehealth ND who can see you anywhere.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/listings"
            className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors"
          >
            Browse All Practitioners
          </Link>
          <Link
            href="/guides/how-to-choose-a-naturopathic-doctor"
            className="bg-white border border-brand-primary text-brand-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary/5 transition-colors"
          >
            How to Choose an ND
          </Link>
        </div>
      </div>
    </div>
  )
}
