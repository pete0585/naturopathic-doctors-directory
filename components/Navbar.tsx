'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-brand-primary border-b border-brand-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-brand-cream rounded-sm">
              <Leaf className="w-5 h-5 text-brand-primary" aria-label="Leaf icon" />
            </div>
            <span className="text-white font-bold text-lg leading-tight">
              Naturopathic<span className="text-brand-sage-light">Doctor</span>Finder
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/listings" className="text-green-100 hover:text-white text-sm font-medium transition-colors">
              Find an ND
            </Link>
            <Link href="/listings?specialty=autoimmune" className="text-green-100 hover:text-white text-sm font-medium transition-colors">
              Autoimmune
            </Link>
            <Link href="/listings?specialty=thyroid" className="text-green-100 hover:text-white text-sm font-medium transition-colors">
              Thyroid
            </Link>
            <Link href="/listings?specialty=lyme" className="text-green-100 hover:text-white text-sm font-medium transition-colors">
              Lyme Disease
            </Link>
            <Link
              href="/submit"
              className="bg-brand-cream hover:bg-white text-brand-primary text-sm font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Add Your Listing
            </Link>
          </div>

          <button
            className="md:hidden text-green-100 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-brand-primary-dark border-t border-brand-primary px-4 py-4 space-y-3">
          <Link href="/listings" className="block text-green-100 hover:text-white text-sm font-medium py-2" onClick={() => setOpen(false)}>
            Find an ND
          </Link>
          <Link href="/listings?specialty=autoimmune" className="block text-green-100 hover:text-white text-sm font-medium py-2" onClick={() => setOpen(false)}>
            Autoimmune
          </Link>
          <Link href="/listings?specialty=thyroid" className="block text-green-100 hover:text-white text-sm font-medium py-2" onClick={() => setOpen(false)}>
            Thyroid
          </Link>
          <Link href="/listings?specialty=lyme" className="block text-green-100 hover:text-white text-sm font-medium py-2" onClick={() => setOpen(false)}>
            Lyme Disease
          </Link>
          <Link href="/submit" className="block bg-brand-cream text-brand-primary text-sm font-semibold px-4 py-2 rounded-md text-center" onClick={() => setOpen(false)}>
            Add Your Listing
          </Link>
        </div>
      )}
    </nav>
  )
}
