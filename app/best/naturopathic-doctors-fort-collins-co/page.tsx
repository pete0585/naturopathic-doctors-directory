import type { Metadata } from "next"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"

export const metadata: Metadata = {
  title: "Best Naturopathic Doctor in Fort Collins, CO | Naturopathic Doctor Directory",
  description: "Find naturopathic doctor in Fort Collins, Colorado. 20+ listed. Filter by city and compare providers.",
  alternates: { canonical: "https://naturopathicdoctorfinder.com/best/naturopathic-doctors-fort-collins-co" },
}

async function getListings() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("nd_listings")
    .select("*")
    .eq("city", "Fort Collins")
    .eq("state", "CO")
    .eq("is_active", true)
    .limit(24)
  return data ?? []
}

function listingName(row: Record<string, unknown>) {
  return (
    (row["full_name"] as string) ||
    (row.name as string) ||
    (row.full_name as string) ||
    (row.clinic_name as string) ||
    "Listing"
  )
}

function listingHref(row: Record<string, unknown>) {
  const slug = String(row.slug || "")
  return "/listings/SLUG".replace("SLUG", slug)
}

export default async function CityPage() {
  const listings = await getListings()
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many naturopathic doctor are in Fort Collins, CO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Naturopathic Doctor Directory lists 20+ naturopathic doctor in Fort Collins, Colorado. Counts change as new listings are seeded.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find naturopathic doctor in Fort Collins?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Search naturopathicdoctorfinder.com and filter by Fort Collins. Compare listed providers, then contact the one that fits.",
        },
      },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-sm text-neutral-500">Fort Collins, CO</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Naturopathic Doctor in Fort Collins, CO
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          20+ listed naturopathic doctor in the Fort Collins area. Pages are generated from live directory listings — not outreach.
        </p>
        <p className="mt-2 text-sm text-neutral-500">{listings.length} shown on this page.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {listings.map((row: Record<string, unknown>, i: number) => (
            <li key={String(row.id || row.slug || i)} className="rounded-xl border border-neutral-200 p-4">
              <Link href={listingHref(row)} className="font-semibold hover:underline">
                {listingName(row)}
              </Link>
              <p className="mt-1 text-sm text-neutral-500">
                {String(row.city || "Fort Collins")}, {String(row.state || "CO")}
              </p>
            </li>
          ))}
        </ul>
        {listings.length === 0 && (
          <p className="mt-8 text-neutral-500">Listings for this city are still being seeded.</p>
        )}
      </main>
    </>
  )
}
