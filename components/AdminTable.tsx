'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, Trash2, Leaf } from 'lucide-react'
import type { Listing } from '@/lib/types'
import { STATE_NAMES, formatPhone } from '@/lib/utils'

interface AdminTableProps {
  listings: Listing[]
}

export default function AdminTable({ listings: initialListings }: AdminTableProps) {
  const [listings, setListings] = useState(initialListings)
  const [loading, setLoading] = useState<string | null>(null)

  async function patch(id: string, updates: Partial<Listing>) {
    setLoading(id)
    const res = await fetch('/api/admin/listings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updates }),
    })
    if (res.ok) {
      setListings((prev) =>
        prev.map((l) => (l.id === id ? { ...l, ...updates } : l))
      )
    }
    setLoading(null)
  }

  async function remove(id: string) {
    if (!confirm('Delete this listing permanently?')) return
    setLoading(id)
    const res = await fetch('/api/admin/listings', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    if (res.ok) {
      setListings((prev) => prev.filter((l) => l.id !== id))
    }
    setLoading(null)
  }

  if (listings.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No listings found.
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-surface-border bg-surface">
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Location</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Phone</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Tier</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((l) => (
            <tr key={l.id} className="border-b border-surface-border hover:bg-surface/50">
              <td className="py-3 px-4">
                <div>
                  <p className="font-medium text-gray-900">{l.full_name}, ND</p>
                  {l.practice_name && <p className="text-xs text-gray-500">{l.practice_name}</p>}
                  {l.claimed_at && <span className="text-xs text-brand-primary font-medium">Claimed</span>}
                </div>
              </td>
              <td className="py-3 px-4 text-gray-600">
                {l.city}, {STATE_NAMES[l.state] ?? l.state}
              </td>
              <td className="py-3 px-4 text-gray-600">
                {l.phone ? formatPhone(l.phone) : '—'}
              </td>
              <td className="py-3 px-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  l.listing_tier === 'featured'
                    ? 'bg-brand-gold/10 text-brand-gold'
                    : l.listing_tier === 'verified'
                    ? 'bg-brand-primary/10 text-brand-primary'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {l.listing_tier}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex gap-1">
                  {l.is_active ? (
                    <span className="flex items-center gap-1 text-xs text-green-700">
                      <Leaf className="w-3.5 h-3.5" aria-label="Active" />
                      Active
                    </span>
                  ) : (
                    <span className="text-xs text-red-600">Inactive</span>
                  )}
                  {l.is_approved ? (
                    <span className="flex items-center gap-1 text-xs text-green-700 ml-2">
                      <CheckCircle className="w-3.5 h-3.5" aria-label="Approved" />
                      Approved
                    </span>
                  ) : (
                    <span className="text-xs text-yellow-700 ml-2">Pending</span>
                  )}
                </div>
              </td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  {!l.is_approved && (
                    <button
                      onClick={() => patch(l.id, { is_approved: true })}
                      disabled={loading === l.id}
                      className="text-green-700 hover:text-green-900 disabled:opacity-50"
                      title="Approve"
                    >
                      <CheckCircle className="w-4 h-4" aria-label="Approve" />
                    </button>
                  )}
                  {l.is_active ? (
                    <button
                      onClick={() => patch(l.id, { is_active: false })}
                      disabled={loading === l.id}
                      className="text-yellow-600 hover:text-yellow-800 disabled:opacity-50"
                      title="Deactivate"
                    >
                      <XCircle className="w-4 h-4" aria-label="Deactivate" />
                    </button>
                  ) : (
                    <button
                      onClick={() => patch(l.id, { is_active: true })}
                      disabled={loading === l.id}
                      className="text-green-700 hover:text-green-900 disabled:opacity-50"
                      title="Activate"
                    >
                      <CheckCircle className="w-4 h-4" aria-label="Activate" />
                    </button>
                  )}
                  <button
                    onClick={() => remove(l.id)}
                    disabled={loading === l.id}
                    className="text-red-500 hover:text-red-700 disabled:opacity-50"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" aria-label="Delete" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
