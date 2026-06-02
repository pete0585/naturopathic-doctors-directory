import type { Metadata } from 'next'
import { createServiceClient } from '@/lib/supabase/server'
import AdminTable from '@/components/AdminTable'
import type { Listing } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Admin — NaturopathicDoctorFinder.com',
  robots: { index: false, follow: false },
}

export const revalidate = 0

export default async function AdminPage() {
  const supabase = await createServiceClient()

  const { data: listings } = await supabase
    .from('nd_listings')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(200)

  const { count: total } = await supabase
    .from('nd_listings')
    .select('*', { count: 'exact', head: true })

  const { count: claimed } = await supabase
    .from('nd_listings')
    .select('*', { count: 'exact', head: true })
    .not('claimed_at', 'is', null)

  const { count: paid } = await supabase
    .from('nd_listings')
    .select('*', { count: 'exact', head: true })
    .in('listing_tier', ['verified', 'featured'])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin — NaturopathicDoctorFinder.com</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Listings', value: total ?? 0 },
          { label: 'Claimed', value: claimed ?? 0 },
          { label: 'Paid (Verified/Featured)', value: paid ?? 0 },
          { label: 'Showing', value: listings?.length ?? 0 },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-surface-border shadow-sm p-5">
            <p className="text-2xl font-bold text-brand-primary">{stat.value.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-surface-border shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-surface-border">
          <h2 className="font-semibold text-gray-900">Recent Listings (200 most recent)</h2>
        </div>
        <AdminTable listings={(listings as Listing[]) ?? []} />
      </div>
    </div>
  )
}
