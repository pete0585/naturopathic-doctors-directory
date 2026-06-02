import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'
import { slugify } from '@/lib/utils'

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { full_name, email, city, state } = body

  if (!full_name || !email || !city || !state) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const supabase = await createServiceClient()

  const baseSlug = slugify(`${full_name as string} ${city as string} ${state as string}`)
  let slug = baseSlug
  let attempt = 0

  while (attempt < 10) {
    const { data: existing } = await supabase
      .from('nd_listings')
      .select('id')
      .eq('slug', slug)
      .maybeSingle()

    if (!existing) break
    attempt++
    slug = `${baseSlug}-${attempt}`
  }

  const { error } = await supabase.from('nd_listings').insert({
    slug,
    full_name,
    practice_name: body.practice_name ?? null,
    email,
    phone: body.phone ?? null,
    website: body.website ?? null,
    address_line1: body.address_line1 ?? null,
    city,
    state,
    zip: body.zip ?? null,
    license_number: body.license_number ?? null,
    license_state: body.license_state ?? null,
    bio: body.bio ?? null,
    specialties: body.specialties ?? [],
    treatment_modalities: body.treatment_modalities ?? [],
    is_aanp_member: body.is_aanp_member ?? false,
    accepts_insurance: body.accepts_insurance ?? false,
    offers_telemedicine: body.offers_telemedicine ?? false,
    accepting_new_patients: body.accepting_new_patients ?? true,
    listing_tier: 'free',
    is_active: true,
    is_approved: true,
    source: 'self_submit',
  })

  if (error) {
    console.error('Submit error:', error)
    return NextResponse.json({ error: 'Failed to submit listing' }, { status: 500 })
  }

  return NextResponse.json({ success: true, slug })
}
