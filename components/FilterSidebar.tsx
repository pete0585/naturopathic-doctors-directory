'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { SPECIALTIES, TREATMENT_MODALITIES, LICENSED_ND_STATES, STATE_NAMES } from '@/lib/utils'

export default function FilterSidebar() {
  const router = useRouter()
  const searchParams = useSearchParams()

  function update(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    params.delete('page')
    router.push(`/listings?${params.toString()}`)
  }

  function toggle(key: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (params.get(key) === 'true') {
      params.delete(key)
    } else {
      params.set(key, 'true')
    }
    params.delete('page')
    router.push(`/listings?${params.toString()}`)
  }

  function clearAll() {
    router.push('/listings')
  }

  const hasFilters = searchParams.toString().length > 0

  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Filters</h2>
        {hasFilters && (
          <button onClick={clearAll} className="text-xs text-brand-primary hover:underline font-medium">
            Clear all
          </button>
        )}
      </div>

      {/* State filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">State</h3>
        <select
          value={searchParams.get('state') ?? ''}
          onChange={(e) => update('state', e.target.value)}
          className="w-full border border-surface-border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <option value="">All Licensed States</option>
          {LICENSED_ND_STATES.map((abbr) => (
            <option key={abbr} value={abbr}>
              {STATE_NAMES[abbr] ?? abbr}
            </option>
          ))}
        </select>
      </div>

      {/* Specialty filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Specialty</h3>
        <select
          value={searchParams.get('specialty') ?? ''}
          onChange={(e) => update('specialty', e.target.value)}
          className="w-full border border-surface-border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <option value="">All Specialties</option>
          {Object.entries(SPECIALTIES).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      {/* Treatment modality filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Treatment Modality</h3>
        <select
          value={searchParams.get('modality') ?? ''}
          onChange={(e) => update('modality', e.target.value)}
          className="w-full border border-surface-border rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
        >
          <option value="">All Modalities</option>
          {Object.entries(TREATMENT_MODALITIES).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      {/* Toggle filters */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700">Quick Filters</h3>

        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={searchParams.get('telemedicine') === 'true'}
            onChange={() => toggle('telemedicine')}
            className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
          />
          <span className="text-sm text-gray-700">Telemedicine Available</span>
        </label>

        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={searchParams.get('accepting') === 'true'}
            onChange={() => toggle('accepting')}
            className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
          />
          <span className="text-sm text-gray-700">Accepting New Patients</span>
        </label>
      </div>

      {/* Tier filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Listing Type</h3>
        <div className="space-y-2">
          {[
            { value: '', label: 'All Listings' },
            { value: 'featured', label: 'Featured NDs' },
            { value: 'verified', label: 'Verified NDs' },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="radio"
                name="tier"
                value={opt.value}
                checked={(searchParams.get('tier') ?? '') === opt.value}
                onChange={() => update('tier', opt.value)}
                className="w-4 h-4 border-gray-300 text-brand-primary focus:ring-brand-primary"
              />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
