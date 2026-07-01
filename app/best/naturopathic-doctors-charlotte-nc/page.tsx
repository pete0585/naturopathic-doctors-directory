import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best Naturopathic Doctors in Charlotte, NC | Naturopathic Doctor Finder',
  description:
    'Find naturopathic practitioners in Charlotte, NC. North Carolina does not license NDs as physicians — this page explains your options for naturopathic-style care in Charlotte.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/best/naturopathic-doctors-charlotte-nc' },
}

export const revalidate = 3600

export default async function BestNDsCharlotte() {
  const listings = await getListingsByCity('Charlotte', 'NC')
  const featured = listings.filter((l) => l.listing_tier === 'featured')
  const verified = listings.filter((l) => l.listing_tier === 'verified')
  const top = [...featured, ...verified, ...listings.filter((l) => l.listing_tier === 'free')].slice(0, 10)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/listings" className="hover:text-brand-primary">Find an ND</Link>
        <span>/</span>
        <span className="text-gray-700">Charlotte, NC</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best Naturopathic Doctors in Charlotte, North Carolina
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Charlotte is a rapidly growing metro with a strong interest in integrative and functional
          health. However, North Carolina does not license naturopathic doctors as of 2026. NDs
          practicing in Charlotte are not licensed healthcare providers and cannot prescribe
          medications. This page explains what that means and what alternatives Charlotte patients have.
        </p>
      </div>

      {/* Critical licensing notice */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-red-900 mb-2">North Carolina Does Not License Naturopathic Doctors</h2>
        <p className="text-sm text-red-800 leading-relaxed mb-3">
          <strong>This is a critical disclosure.</strong> As of 2026, North Carolina does not have
          a naturopathic doctor licensing law. NDs practicing in North Carolina are not licensed
          physicians. They cannot legally prescribe medications, perform medical diagnoses, or represent
          themselves as licensed healthcare providers. Anyone calling themselves an &quot;ND&quot; or
          &quot;naturopathic doctor&quot; in North Carolina is operating outside any state medical
          licensing framework.
        </p>
        <p className="text-sm text-red-800 leading-relaxed">
          <strong>This does not mean you cannot get naturopathic-style care in Charlotte.</strong> It means
          you should understand what you are getting before booking, and consider the alternatives listed below.
        </p>
      </div>

      {/* Alternatives box */}
      <div className="bg-brand-cream border border-brand-sage/20 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-gray-900 mb-3">Better Options for Charlotte Patients</h2>
        <div className="space-y-3">
          {[
            {
              option: 'Telehealth with a licensed ND (Washington, Oregon, Connecticut, Vermont, Maine)',
              detail: 'These states have robust ND licensing including prescribing authority. A licensed WA or OR ND can provide comprehensive naturopathic care via telehealth — including prescribing thyroid hormones, bioidentical HRT, and common medications — for Charlotte patients.',
            },
            {
              option: 'Functional medicine MDs and DOs in Charlotte',
              detail: 'Atrium Health and Novant Health both have integrative medicine programs in Charlotte. Several private-practice functional medicine MDs operate in the Charlotte metro and offer root-cause workups comparable to naturopathic primary care — within a full medical license.',
            },
            {
              option: 'Certified Nutrition Specialists (CNS) and Registered Dietitians',
              detail: "North Carolina licenses dietitians and nutrition professionals. CNS practitioners with functional nutrition training offer evidence-based dietary and supplement guidance within their licensed scope.",
            },
          ].map(({ option, detail }) => (
            <div key={option} className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 text-sm mb-1">{option}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {top.length > 0 ? (
        <>
          <div className="mb-4 text-sm text-gray-600">
            Showing <strong className="text-gray-900">{top.length}</strong> practitioners — <strong>verify credentials and NC licensing status before booking</strong>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {top.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </>
      ) : (
        <div className="text-center py-12 mb-10">
          <p className="text-gray-500 mb-4">
            Consider telehealth with a licensed ND from a licensed state, or browse functional medicine practitioners.
          </p>
          <Link href="/listings" className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors">
            Browse All NDs
          </Link>
        </div>
      )}

      {/* FAQ section */}
      <div className="space-y-4 mb-10">
        <h2 className="text-xl font-bold text-gray-900">Questions About ND Care in Charlotte</h2>
        {[
          {
            q: 'Can I see a naturopathic doctor in Charlotte?',
            a: "You can see someone who calls themselves a naturopathic doctor in Charlotte, but they are not a licensed medical provider in North Carolina. They cannot prescribe medications, order labs under a medical license, or provide medical diagnoses. If you want licensed naturopathic care with prescribing authority, use a telehealth ND from a licensed state like Washington, Oregon, or Vermont.",
          },
          {
            q: 'Does North Carolina have ND licensing legislation pending?',
            a: "ND licensing legislation has been introduced in North Carolina at various points but has not passed as of 2026. The AANP (American Association of Naturopathic Physicians) tracks state licensing efforts. Check their website for the current status of North Carolina legislation.",
          },
          {
            q: 'What is the difference between an ND and a functional medicine doctor in Charlotte?',
            a: "A functional medicine doctor in Charlotte is typically an MD or DO (licensed physician) who has pursued additional training in functional medicine (through IFM or similar programs). They hold a full medical license including prescribing authority. An ND in Charlotte is not a licensed physician and cannot prescribe. For comprehensive root-cause care with prescribing authority in Charlotte, a functional medicine MD or DO is often the better local choice.",
          },
        ].map(({ q, a }) => (
          <div key={q} className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">{q}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are You a Licensed ND Offering Telehealth to Charlotte Patients?</h2>
        <p className="text-gray-600 mb-4">
          Licensed NDs from states with telehealth-friendly licensing can reach North Carolina patients through this directory.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/listings"
            className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors"
          >
            Find Your Listing
          </Link>
          <Link
            href="/submit"
            className="bg-white border border-brand-primary text-brand-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary/5 transition-colors"
          >
            Submit Your Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
