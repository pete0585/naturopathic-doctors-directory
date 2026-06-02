import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ListingDetail from '@/components/ListingDetail'
import { getListingBySlug } from '@/lib/data'
import { STATE_NAMES } from '@/lib/utils'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const listing = await getListingBySlug(slug)
  if (!listing) return { title: 'ND Not Found' }

  const location = `${listing.city}, ${STATE_NAMES[listing.state] ?? listing.state}`
  const title = `${listing.full_name}, ND${listing.practice_name ? ` — ${listing.practice_name}` : ''} | Naturopathic Doctor ${location}`
  const description = listing.bio
    ? listing.bio.slice(0, 160)
    : `${listing.full_name} is a licensed Naturopathic Doctor in ${location}. View profile, specialties, and contact information.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      images: listing.photo_url ? [{ url: listing.photo_url }] : [],
    },
    alternates: { canonical: `https://naturopathicdoctorfinder.com/listings/${slug}` },
  }
}

export const revalidate = 3600

export default async function ListingPage({ params }: PageProps) {
  const { slug } = await params
  const listing = await getListingBySlug(slug)

  if (!listing) notFound()

  return <ListingDetail listing={listing} />
}
