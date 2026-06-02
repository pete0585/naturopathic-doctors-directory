import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsBySpecialty, getListingsByState } from '@/lib/data'
import { SPECIALTIES, LICENSED_ND_STATES, STATE_NAMES } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

function isStatePage(slug: string) {
  return LICENSED_ND_STATES.includes(slug.toUpperCase())
}

function isSpecialtyPage(slug: string) {
  return slug in SPECIALTIES
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const stateAbbr = slug.toUpperCase()

  if (isStatePage(slug)) {
    const stateName = STATE_NAMES[stateAbbr] ?? stateAbbr
    return {
      title: `Naturopathic Doctors in ${stateName} | Licensed NDs`,
      description: `Find licensed Naturopathic Doctors in ${stateName}. Browse NDs accepting new patients, offering telemedicine, and specializing in root-cause medicine.`,
      alternates: { canonical: `https://naturopathicdoctorfinder.com/categories/${slug}` },
    }
  }

  if (isSpecialtyPage(slug)) {
    const specialtyName = SPECIALTIES[slug]
    return {
      title: `Naturopathic Doctors for ${specialtyName} | Find an ND`,
      description: `Find licensed Naturopathic Doctors specializing in ${specialtyName}. NDs trained in root-cause, natural approaches to ${specialtyName.toLowerCase()}.`,
      alternates: { canonical: `https://naturopathicdoctorfinder.com/categories/${slug}` },
    }
  }

  return { title: 'Naturopathic Doctors' }
}

export const revalidate = 3600

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const stateAbbr = slug.toUpperCase()

  if (!isStatePage(slug) && !isSpecialtyPage(slug)) {
    notFound()
  }

  let listings: Awaited<ReturnType<typeof getListingsBySpecialty>> = []
  let title = ''
  let description = ''

  if (isStatePage(slug)) {
    const stateName = STATE_NAMES[stateAbbr] ?? stateAbbr
    listings = await getListingsByState(stateAbbr)
    title = `Naturopathic Doctors in ${stateName}`
    description = `${listings.length}+ licensed NDs practicing in ${stateName}. Find one accepting new patients, offering telemedicine, and specializing in root-cause medicine.`
  } else {
    const specialtyName = SPECIALTIES[slug]
    listings = await getListingsBySpecialty(slug)
    title = `Naturopathic Doctors for ${specialtyName}`
    description = `Find licensed NDs with training and clinical experience in ${specialtyName.toLowerCase()}. These practitioners use evidence-based natural medicine to address root causes.`
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-brand-primary flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" aria-label="Back" />
          Home
        </Link>
        <span>/</span>
        <Link href="/listings" className="hover:text-brand-primary">Find an ND</Link>
        <span>/</span>
        <span className="text-gray-700">{title}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-gray-600 max-w-2xl">{description}</p>
      </div>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: title,
            description,
            numberOfItems: listings.length,
            itemListElement: listings.slice(0, 10).map((l, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `https://naturopathicdoctorfinder.com/listings/${l.slug}`,
              name: `${l.full_name}, ND`,
            })),
          }),
        }}
      />

      {listings.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">No naturopathic doctors found in this category yet.</p>
          <Link href="/listings" className="text-brand-primary hover:underline font-medium">
            Browse all NDs
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-600">
            <strong className="text-gray-900">{listings.length}</strong> naturopathic doctor{listings.length !== 1 ? 's' : ''} found
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
          {listings.length >= 50 && (
            <div className="text-center mt-8">
              <Link
                href={isStatePage(slug) ? `/listings?state=${stateAbbr}` : `/listings?specialty=${slug}`}
                className="text-brand-primary hover:underline font-medium"
              >
                View all results with filters →
              </Link>
            </div>
          )}
        </>
      )}

      {/* SEO content */}
      {isSpecialtyPage(slug) && (
        <div className="mt-12 bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
          <h2>What can a Naturopathic Doctor do for {SPECIALTIES[slug]}?</h2>
          <p>
            Licensed Naturopathic Doctors (NDs) approach {SPECIALTIES[slug].toLowerCase()} by identifying and treating underlying contributors — not just managing symptoms. Using tools like comprehensive lab panels, dietary assessment, botanical medicine, and mind-body therapies, NDs develop individualized treatment plans that work alongside or instead of conventional approaches.
          </p>
          <p>
            When searching for a naturopathic doctor for {SPECIALTIES[slug].toLowerCase()}, look for practitioners who list this as a primary specialty and who practice in a state where naturopathic medicine is licensed. All NDs in our directory are licensed professionals with graduate-level medical training from CNME-accredited schools.
          </p>
        </div>
      )}

      {isStatePage(slug) && (
        <div className="mt-12 bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
          <h2>Naturopathic Medicine in {STATE_NAMES[stateAbbr]}</h2>
          <p>
            {STATE_NAMES[stateAbbr]} is one of 25 US jurisdictions where naturopathic medicine is a licensed healthcare profession. Licensed NDs in {STATE_NAMES[stateAbbr]} complete a 4-year graduate program at a CNME-accredited naturopathic medical school and pass national board examinations (NPLEX) before practicing.
          </p>
          <p>
            Use the filters above to find NDs in specific cities, specialties, or offering telemedicine. All NDs listed here are licensed in {STATE_NAMES[stateAbbr]} or another licensed jurisdiction.
          </p>
        </div>
      )}
    </div>
  )
}
