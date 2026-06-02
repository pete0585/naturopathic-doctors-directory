import Link from 'next/link'
import { MapPin, Phone, Globe, Leaf, CheckCircle, Star, Wifi } from 'lucide-react'
import type { Listing } from '@/lib/types'
import { SPECIALTIES, STATE_NAMES, formatPhone } from '@/lib/utils'

interface ListingCardProps {
  listing: Listing
}

export default function ListingCard({ listing }: ListingCardProps) {
  const isFeatured = listing.listing_tier === 'featured'
  const isVerified = listing.listing_tier === 'verified' || isFeatured

  return (
    <div className={`bg-white rounded-xl border ${isFeatured ? 'border-brand-gold shadow-md' : 'border-surface-border shadow-sm'} hover:shadow-md transition-shadow relative`}>
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
          Featured
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {listing.photo_url ? (
              <img
                src={listing.photo_url}
                alt={listing.full_name}
                className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary/20"
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <Leaf className="w-7 h-7 text-brand-primary/40" aria-label="ND" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div>
                <h3 className="font-semibold text-gray-900 text-base leading-tight">{listing.full_name}, ND</h3>
                {listing.practice_name && (
                  <p className="text-sm text-gray-600 mt-0.5">{listing.practice_name}</p>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 shrink-0">
                {isVerified && (
                  <span className="flex items-center gap-1 text-xs bg-brand-primary/10 text-brand-primary font-medium px-2 py-1 rounded-full">
                    <CheckCircle className="w-3.5 h-3.5" aria-label="Verified" />
                    Licensed ND
                  </span>
                )}
                {listing.is_aanp_member && (
                  <span className="flex items-center gap-1 text-xs bg-brand-gold/10 text-brand-gold font-medium px-2 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5" aria-label="AANP" />
                    AANP Member
                  </span>
                )}
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 shrink-0" aria-label="Location" />
                {listing.city}, {STATE_NAMES[listing.state] ?? listing.state}
              </span>
              {listing.offers_telemedicine && (
                <span className="flex items-center gap-1 text-brand-primary">
                  <Wifi className="w-3.5 h-3.5" aria-label="Telemedicine" />
                  Telemedicine
                </span>
              )}
              {listing.accepting_new_patients && (
                <span className="flex items-center gap-1 text-green-700">
                  <CheckCircle className="w-3.5 h-3.5" aria-label="Accepting patients" />
                  Accepting Patients
                </span>
              )}
            </div>

            {listing.specialties.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {listing.specialties.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-brand-primary/5 border border-brand-primary/15 text-brand-primary-dark px-2.5 py-1 rounded-full"
                  >
                    {SPECIALTIES[s] ?? s}
                  </span>
                ))}
                {listing.specialties.length > 3 && (
                  <span className="text-xs text-gray-500 px-1 py-1">
                    +{listing.specialties.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-surface-border flex items-center justify-between gap-3 flex-wrap">
          <div className="flex gap-3">
            {listing.phone && (
              <a
                href={`tel:${listing.phone}`}
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-brand-primary transition-colors"
              >
                <Phone className="w-4 h-4" aria-label="Phone" />
                {formatPhone(listing.phone)}
              </a>
            )}
            {listing.website && isVerified && (
              <a
                href={listing.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-brand-primary transition-colors"
              >
                <Globe className="w-4 h-4" aria-label="Website" />
                Website
              </a>
            )}
          </div>
          <Link
            href={`/listings/${listing.slug}`}
            className="bg-brand-primary hover:bg-brand-primary-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
