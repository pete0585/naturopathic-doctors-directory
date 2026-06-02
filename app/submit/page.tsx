import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Leaf, CheckCircle } from 'lucide-react'
import SubmitForm from '@/components/SubmitForm'

export const metadata: Metadata = {
  title: 'Add Your ND Listing — Free | NaturopathicDoctorFinder.com',
  description: 'Licensed Naturopathic Doctor? Add your listing to NaturopathicDoctorFinder.com for free. Upgrade to Verified ($99/yr) to add your photo, bio, and specialty tags.',
  alternates: { canonical: 'https://naturopathicdoctorfinder.com/submit' },
}

export default function SubmitPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-primary/10 rounded-full mb-4">
          <Leaf className="w-7 h-7 text-brand-primary" aria-label="ND" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Add Your Listing</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Licensed Naturopathic Doctors can list for free. Upgrade to Verified ($99/yr) to stand out with your photo, bio, and specialty tags.
        </p>
      </div>

      {/* Pricing comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-white rounded-xl border border-surface-border p-5">
          <div className="text-2xl font-bold text-gray-900 mb-1">Free</div>
          <p className="text-sm text-gray-500 mb-3">Auto-seeded listing</p>
          <ul className="space-y-2">
            {['Name & city', 'Phone & website', 'Claim this profile CTA'].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-brand-sage shrink-0" aria-label="Included" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border-2 border-brand-primary p-5 relative">
          <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
            Most Popular
          </div>
          <div className="text-2xl font-bold text-brand-primary mb-1">$99<span className="text-sm font-normal text-gray-500">/yr</span></div>
          <p className="text-sm text-gray-500 mb-3">Verified ND</p>
          <ul className="space-y-2">
            {['Photo & professional bio', 'All specialty tags', 'Contact form from patients', '"Licensed ND" badge', 'Priority placement in search'].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-brand-primary shrink-0" aria-label="Included" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl border border-brand-gold p-5">
          <div className="text-2xl font-bold text-gray-900 mb-1">$199<span className="text-sm font-normal text-gray-500">/yr</span></div>
          <p className="text-sm text-gray-500 mb-3">Featured ND</p>
          <ul className="space-y-2">
            {['Everything in Verified', '#1 position in your city', 'Featured badge in search', 'Category sponsorship slot', 'Monthly inquiry report'].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" aria-label="Included" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-4 mb-8 text-sm text-gray-700">
        <strong>vs. AANP Find-a-Doctor:</strong> AANP charges $480/year for full membership — the directory listing is just one of many bundled features. We charge $99/year for just the directory, with better local SEO targeting for your specific city and specialties.
      </div>

      <Suspense fallback={null}>
        <SubmitForm />
      </Suspense>
    </div>
  )
}
