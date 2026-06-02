import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data'
import { SPECIALTIES, LICENSED_ND_STATES } from '@/lib/utils'

const BASE_URL = 'https://naturopathicdoctorfinder.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs()

  const listingUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/listings/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const stateUrls: MetadataRoute.Sitemap = LICENSED_ND_STATES.map((state) => ({
    url: `${BASE_URL}/categories/${state.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const specialtyUrls: MetadataRoute.Sitemap = Object.keys(SPECIALTIES).map((key) => ({
    url: `${BASE_URL}/categories/${key}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const staticUrls: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/listings`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/submit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  return [...staticUrls, ...stateUrls, ...specialtyUrls, ...listingUrls]
}
