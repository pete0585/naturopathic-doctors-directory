import {articles as editorialArticles} from '@/lib/editorial-blog'
import { readdir } from 'fs/promises'
import path from 'path'
import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/data'
import { SPECIALTIES, LICENSED_ND_STATES } from '@/lib/utils'

const BASE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://naturopathicdoctorfinder.com').replace(/\/$/, '')

async function getCityPageSlugs(): Promise<string[]> {
  const bestDir = path.join(process.cwd(), 'app', 'best')
  const entries = await readdir(bestDir, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith('naturopathic-doctors-'))
    .map((entry) => entry.name)
    .sort()
}

async function originalSitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs()
  const citySlugs = await getCityPageSlugs()

  const listingUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE}/listings/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const stateUrls: MetadataRoute.Sitemap = LICENSED_ND_STATES.map((state) => ({
    url: `${BASE}/categories/${state.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const specialtyUrls: MetadataRoute.Sitemap = Object.keys(SPECIALTIES).map((key) => ({
    url: `${BASE}/categories/${key}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const cityUrls: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${BASE}/best/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const staticUrls: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/listings`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/submit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  return [...staticUrls, ...cityUrls, ...stateUrls, ...specialtyUrls, ...listingUrls]
}

export default async function editorialSitemap():Promise<MetadataRoute.Sitemap>{const existing=await originalSitemap();const site="https://naturopathicdoctorfinder.com";return [...existing,{url:site+'/blog',changeFrequency:'weekly'},...editorialArticles().map(p=>({url:site+'/blog/'+p.slug,lastModified:new Date(p.date),changeFrequency:'monthly' as const}))]}
