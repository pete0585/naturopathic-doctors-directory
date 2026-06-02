'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { CheckCircle, Leaf } from 'lucide-react'
import { SPECIALTIES, TREATMENT_MODALITIES, LICENSED_ND_STATES, STATE_NAMES } from '@/lib/utils'

const schema = z.object({
  full_name: z.string().min(2, 'Full name is required'),
  practice_name: z.string().optional(),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  website: z.string().url('Valid URL required').optional().or(z.literal('')),
  city: z.string().min(2, 'City is required'),
  state: z.string().length(2, 'State is required'),
  zip: z.string().optional(),
  address_line1: z.string().optional(),
  license_number: z.string().optional(),
  license_state: z.string().optional(),
  bio: z.string().max(2000, 'Bio max 2000 characters').optional(),
  specialties: z.array(z.string()).optional(),
  treatment_modalities: z.array(z.string()).optional(),
  accepts_insurance: z.boolean().optional(),
  offers_telemedicine: z.boolean().optional(),
  accepting_new_patients: z.boolean().optional(),
  is_aanp_member: z.boolean().optional(),
})

type FormData = z.infer<typeof schema>

export default function SubmitForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      specialties: [],
      treatment_modalities: [],
      accepts_insurance: false,
      offers_telemedicine: false,
      accepting_new_patients: true,
      is_aanp_member: false,
    },
  })

  const selectedSpecialties = watch('specialties') ?? []
  const selectedModalities = watch('treatment_modalities') ?? []

  function toggleArray(field: 'specialties' | 'treatment_modalities', value: string) {
    const current = field === 'specialties' ? selectedSpecialties : selectedModalities
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    setValue(field, next)
  }

  async function onSubmit(data: FormData) {
    setError('')
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const json = await res.json()
    if (!res.ok) {
      setError(json.error ?? 'Submission failed. Please try again.')
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-9 h-9 text-green-600" aria-label="Success" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Listing Submitted!</h2>
        <p className="text-gray-600">
          Your listing has been submitted and will appear in the directory shortly. Check your email for a verification link to claim your full profile.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Basic info */}
      <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="w-5 h-5 text-brand-primary" aria-label="ND" />
          <h2 className="font-bold text-gray-900">Basic Information</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('full_name')}
              placeholder="Dr. Jane Smith"
              className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            {errors.full_name && <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Practice Name</label>
            <input
              {...register('practice_name')}
              placeholder="Whole Health Naturopathic"
              className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Professional Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="you@yourpractice.com"
              className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="(555) 555-5555"
              className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
          <input
            {...register('website')}
            type="url"
            placeholder="https://yourpractice.com"
            className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
          {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>}
        </div>
      </div>

      {/* Location */}
      <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6 space-y-4">
        <h2 className="font-bold text-gray-900">Location</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            {...register('address_line1')}
            placeholder="123 Main St"
            className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              {...register('city')}
              placeholder="Seattle"
              className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State <span className="text-red-500">*</span>
            </label>
            <select
              {...register('state')}
              className="w-full border border-surface-border rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              <option value="">Select</option>
              {LICENSED_ND_STATES.map((abbr) => (
                <option key={abbr} value={abbr}>{abbr} — {STATE_NAMES[abbr]}</option>
              ))}
            </select>
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
            <input
              {...register('zip')}
              placeholder="98101"
              className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
        </div>
      </div>

      {/* License */}
      <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6 space-y-4">
        <h2 className="font-bold text-gray-900">ND License</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
            <input
              {...register('license_number')}
              placeholder="ND1234"
              className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">License State</label>
            <select
              {...register('license_state')}
              className="w-full border border-surface-border rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              <option value="">Select</option>
              {LICENSED_ND_STATES.map((abbr) => (
                <option key={abbr} value={abbr}>{abbr}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
        <h2 className="font-bold text-gray-900 mb-4">Specialties</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(SPECIALTIES).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => toggleArray('specialties', key)}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                selectedSpecialties.includes(key)
                  ? 'bg-brand-primary text-white border-brand-primary'
                  : 'bg-surface text-gray-700 border-surface-border hover:border-brand-primary/40'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Treatment modalities */}
      <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
        <h2 className="font-bold text-gray-900 mb-4">Treatment Modalities</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(TREATMENT_MODALITIES).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => toggleArray('treatment_modalities', key)}
              className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                selectedModalities.includes(key)
                  ? 'bg-brand-primary text-white border-brand-primary'
                  : 'bg-surface text-gray-700 border-surface-border hover:border-brand-primary/40'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Practice details */}
      <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6 space-y-4">
        <h2 className="font-bold text-gray-900">Practice Details</h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" {...register('accepting_new_patients')} className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
            <span className="text-sm text-gray-700">Currently accepting new patients</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" {...register('offers_telemedicine')} className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
            <span className="text-sm text-gray-700">Offer telemedicine / virtual consultations</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" {...register('accepts_insurance')} className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
            <span className="text-sm text-gray-700">Accept insurance</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" {...register('is_aanp_member')} className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
            <span className="text-sm text-gray-700">AANP member</span>
          </label>
        </div>
      </div>

      {/* Bio */}
      <div className="bg-white rounded-xl border border-surface-border shadow-sm p-6">
        <h2 className="font-bold text-gray-900 mb-2">Professional Bio</h2>
        <p className="text-sm text-gray-500 mb-3">Share your background, approach, and what makes your practice unique. (Up to 2,000 characters)</p>
        <textarea
          {...register('bio')}
          rows={5}
          placeholder="Describe your naturopathic philosophy, training, and specializations..."
          className="w-full border border-surface-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
        />
        {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold py-4 rounded-lg transition-colors disabled:opacity-60 text-base"
      >
        {isSubmitting ? 'Submitting...' : 'Submit My Listing — Free'}
      </button>

      <p className="text-center text-xs text-gray-500">
        Free listings appear in search results automatically. Upgrade to Verified ($99/yr) to add photo, bio, and specialty tags.
      </p>
    </form>
  )
}
