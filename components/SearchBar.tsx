'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  large?: boolean
  className?: string
}

export default function SearchBar({ large = false, className }: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [q, setQ] = useState(searchParams.get('q') ?? '')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (q.trim()) {
      params.set('q', q.trim())
    } else {
      params.delete('q')
    }
    params.delete('page')
    router.push(`/listings?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex gap-2', className)}>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" aria-label="Search" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, city, or specialty..."
          className={cn(
            'w-full pl-10 pr-4 border border-surface-border rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent',
            large ? 'py-4 text-base' : 'py-3 text-sm'
          )}
        />
      </div>
      <button
        type="submit"
        className={cn(
          'bg-brand-primary hover:bg-brand-primary-dark text-white font-semibold rounded-lg transition-colors shrink-0',
          large ? 'px-6 py-4 text-base' : 'px-5 py-3 text-sm'
        )}
      >
        Search
      </button>
    </form>
  )
}
