import Link from 'next/link'
import { MapPin, Phone, Globe, Mail, CheckCircle, Leaf, Wifi, Shield, Star } from 'lucide-react'
import type { Listing } from '@/lib/types'
import { SPECIALTIES, TREATMENT_MODALITIES, STATE_NAMES, formatPhone } from '@/lib/utils'
import { ViewTracker } from './ViewTracker'

interface ListingDetailProps {
  listing: Listing
  monthlyViews: number
}

export default function ListingDetail({ listing, monthlyViews }: ListingDetailProps) {
  const isFeatured = listing.listing_tier === 'featured'
  const isVerified = listing.listing_tier === 'verified' || isFeatured
  const isClaimed = listing.listing_tier !== 'free' && listing.listing_tier != null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'MedicalBusiness'],
    name: listing.full_name,
    jobTitle: 'Naturopathic Doctor',
    description: listing.bio ?? `${listing.full_name}, ND — Naturopathic Doctor in ${listing.city}, ${listing.state}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip ?? undefined,
      addressCountry: 'US',
    },
    ...(listing.phone ? { telephone: listing.phone } : {}),
    ...(listing.website ? { url: listing.website } : {}),
    ...(listing.photo_url ? { image: listing.photo_url } : {}),
    medicalSpecialty: listing.specialties.map((s) => SPECIALTIES[s] ?? s),
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ViewTracker listingId={String(listing.id)} directorySlug='naturopathic-doctors' />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/listings" className="hover:text-brand-primary">Naturopathic Doctors</Link>
        {listing.state && (
          <>
            <span>/</span>
            <Link href={`/listings?state=${listing.state}`} className="hover:text-brand-primary">
              {STATE_NAMES[listing.state] ?? listing.state}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-gray-700">{listing.full_name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile header */}
          <div className={`bg-white rounded-xl border ${isFeatured ? 'border-brand-gold' : 'border-surface-border'} shadow-sm p-6`}>
            <div className="flex items-start gap-5">
              {listing.photo_url ? (
                <img
                  src={listing.photo_url}
                  alt={listing.full_name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-brand-primary/20 shrink-0"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Leaf className="w-10 h-10 text-brand-primary/40" aria-label="ND" />
                </div>
              )}

              <div className="flex-1">
                <div className="flex flex-wrap items-start gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-gray-900">{listing.full_name}, ND</h1>
                  {isFeatured && (
                    <span className="flex items-center gap-1 text-xs bg-brand-gold/15 text-brand-gold font-bold px-2 py-1 rounded-full">
                      <Star className="w-3 h-3" aria-label="Featured" />
                      Featured
                    </span>
                  )}
                </div>

                {listing.practice_name && (
                  <p className="text-gray-600 font-medium">{listing.practice_name}</p>
                )}

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 shrink-0" aria-label="Location" />
                    {listing.city}, {STATE_NAMES[listing.state] ?? listing.state}
                  </span>
                  {listing.license_number && (
                    <span className="flex items-center gap-1.5 text-brand-primary">
                      <Shield className="w-4 h-4 shrink-0" aria-label="Licensed" />
                      Licensed ND — {listing.license_state ?? listing.state} #{listing.license_number}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {isVerified && (
                    <span className="flex items-center gap-1 text-xs bg-brand-primary/10 text-brand-primary font-medium px-2.5 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" aria-label="Verified" />
                      Verified Licensed ND
                    </span>
                  )}
                  {listing.is_aanp_member && (
                    <span className="flex items-center gap-1 text-xs bg-brand-gold/10 text-brand-gold font-medium px-2.5 py-1 rounded-full">
                      <Star className="w-3.5 h-3.5" aria-label="AANP" />
                      AANP Member
                    </span>
                  )}
                  {listing.offers_telemedicine && (
                    <span className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-full">
                      <Wifi className="w-3.5 h-3.5" aria-label="Telemedicine" />
                      Telemedicine
                    </span>
                  )}
                  {listing.accepting_new_patients && (
                    <span className="flex items-center gap-1 text-xs bg-green-50 text-green-700 font-medium px-2.5 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" aria-label="Accepting" />
                      Accepting New Patients
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          {isClaimed && listing.bio && (
            <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-3">About {listing.full_name}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{listing.bio}</p>
            </div>
          )}

          {/* Specialties */}
          {listing.specialties.length > 0 && (
            <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {listing.specialties.map((s) => (
                  <Link
                    key={s}
                    href={`/listings?specialty=${s}`}
                    className="text-sm bg-brand-primary/5 border border-brand-primary/15 text-brand-primary-dark hover:bg-brand-primary/10 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {SPECIALTIES[s] ?? s}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Treatment modalities */}
          {listing.treatment_modalities.length > 0 && (
            <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-4">Treatment Modalities</h2>
              <div className="flex flex-wrap gap-2">
                {listing.treatment_modalities.map((m) => (
                  <span
                    key={m}
                    className="text-sm bg-surface border border-surface-border text-gray-700 px-3 py-1.5 rounded-full"
                  >
                    {TREATMENT_MODALITIES[m] ?? m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Licensed states info */}
          <div className="bg-brand-cream rounded-xl border border-brand-sage/30 p-5">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" aria-label="Licensed" />
              <div>
                <p className="font-semibold text-brand-primary-dark text-sm">What is a Licensed Naturopathic Doctor (ND)?</p>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                  Licensed NDs complete a 4-year graduate program at a CNME-accredited naturopathic medical school and pass national board exams (NPLEX). They are licensed in {' '}
                  <Link href="/listings" className="text-brand-primary hover:underline">25 US jurisdictions</Link>. This is different from &quot;naturopath&quot; — a title used in unlicensed states by practitioners with varying training.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {isClaimed && (
            <div className='rounded-xl border border-blue-200 bg-blue-50 p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-blue-600'>Profile Activity</p>
              <p className='mt-1 text-3xl font-bold text-blue-900'>{monthlyViews}</p>
              <p className='text-sm text-blue-700'>people viewed your profile this month</p>
              {listing.listing_tier === 'free' && (
                <p className='mt-2 text-xs text-blue-600'>
                  0 could contact you.{' '}
                  <a href={`/claim/${listing.id}?upgrade=true`} className='underline font-medium'>
                    Upgrade to be reachable →
                  </a>
                </p>
              )}
            </div>
          )}

          {/* Contact */}
          <div className="bg-white rounded-xl border border-surface-border shadow-sm p-5 sticky top-6">
            <h2 className="font-bold text-gray-900 mb-4">Contact</h2>

            {isClaimed ? (
              <div className="space-y-3">
                {listing.phone && (
                  <a
                    href={`tel:${listing.phone}`}
                    className="flex items-center gap-3 p-3 bg-surface rounded-lg hover:bg-brand-primary/5 transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-brand-primary shrink-0" aria-label="Phone" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-brand-primary">{formatPhone(listing.phone)}</span>
                  </a>
                )}

                {listing.website && (
                  <a
                    href={listing.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-surface rounded-lg hover:bg-brand-primary/5 transition-colors group"
                  >
                    <Globe className="w-5 h-5 text-brand-primary shrink-0" aria-label="Website" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-brand-primary">Visit Website</span>
                  </a>
                )}

                {isVerified && listing.email && (
                  <a
                    href={`mailto:${listing.email}`}
                    className="flex items-center gap-3 p-3 bg-surface rounded-lg hover:bg-brand-primary/5 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-brand-primary shrink-0" aria-label="Email" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-brand-primary">Send Email</span>
                  </a>
                )}

                {listing.accepts_insurance && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 shrink-0" aria-label="Insurance" />
                    Accepts Insurance
                  </div>
                )}
              </div>
            ) : (
              <div className='rounded-lg border border-gray-200 bg-gray-50 p-4 text-center'>
                <p className='text-sm text-gray-500'>
                  Phone, website, and bio are only visible after this provider claims their listing.
                </p>
                <a href={`/claim/${listing.id}`} className='mt-2 inline-block text-sm font-medium text-blue-600 hover:underline'>
                  Is this you? Claim your free profile →
                </a>
              </div>
            )}

            {!isClaimed && (
              <div className="mt-4 pt-4 border-t border-surface-border">
                <p className="text-xs text-gray-500 mb-2">Is this your practice?</p>
                <Link
                  href={`/claim/${listing.id}`}
                  className="block w-full text-center border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-medium text-sm py-2.5 rounded-lg transition-colors"
                >
                  Claim This Profile
                </Link>
              </div>
            )}
          </div>

          {/* Practice details */}
          <div className="bg-white rounded-xl border border-surface-border shadow-sm p-5">
            <h2 className="font-bold text-gray-900 mb-3">Practice Details</h2>
            <dl className="space-y-2 text-sm">
              {listing.license_state && (
                <div className="flex justify-between">
                  <dt className="text-gray-500">Licensed In</dt>
                  <dd className="font-medium text-gray-900">{STATE_NAMES[listing.license_state] ?? listing.license_state}</dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-gray-500">Telemedicine</dt>
                <dd className="font-medium text-gray-900">{listing.offers_telemedicine ? 'Yes' : 'No'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">New Patients</dt>
                <dd className="font-medium text-gray-900">{listing.accepting_new_patients ? 'Accepting' : 'Not Accepting'}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Insurance</dt>
                <dd className="font-medium text-gray-900">{listing.accepts_insurance ? 'Accepted' : 'Out-of-pocket'}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
