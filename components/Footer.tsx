import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function Footer() {
  const specialties = [
    { key: 'autoimmune', label: 'Autoimmune NDs' },
    { key: 'thyroid', label: 'Thyroid NDs' },
    { key: 'lyme', label: 'Lyme Disease NDs' },
    { key: 'fertility', label: 'Fertility NDs' },
    { key: 'pediatrics', label: 'Pediatric NDs' },
    { key: 'hormones', label: 'Hormone NDs' },
  ]

  const topStates = [
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
  ]

  return (
    <footer className="bg-brand-primary-dark text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-brand-cream rounded-sm">
                <Leaf className="w-5 h-5 text-brand-primary" aria-label="Leaf" />
              </div>
              <span className="text-white font-bold text-base">NaturopathicDoctorFinder</span>
            </div>
            <p className="text-sm text-green-200 leading-relaxed">
              The only neutral directory covering all licensed Naturopathic Doctors across all 25 US jurisdictions where naturopathic medicine is regulated.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Browse by Specialty</h3>
            <ul className="space-y-2">
              {specialties.map((s) => (
                <li key={s.key}>
                  <Link href={`/listings?specialty=${s.key}`} className="text-sm text-green-200 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Top States</h3>
            <ul className="space-y-2">
              {topStates.map((s) => (
                <li key={s.abbr}>
                  <Link href={`/listings?state=${s.abbr}`} className="text-sm text-green-200 hover:text-white transition-colors">
                    NDs in {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">For NDs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/submit" className="text-sm text-green-200 hover:text-white transition-colors">
                  Add Your Listing
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-sm text-green-200 hover:text-white transition-colors">
                  Find Your Profile
                </Link>
              </li>
              <li>
                <a href="mailto:hello@naturopathicdoctorfinder.com" className="text-sm text-green-200 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-primary pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-green-300">
          <p>&copy; {new Date().getFullYear()} NaturopathicDoctorFinder.com. All rights reserved.</p>
          <p className="text-center">
            This directory lists licensed Naturopathic Doctors (NDs) with graduate degrees from CNME-accredited programs. It is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
