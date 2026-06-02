import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const listings = [
  // Arizona (pioneer state)
  {
    full_name: 'Dr. Sarah Mitchell',
    practice_name: 'Desert Bloom Natural Medicine',
    email: 'sarah.mitchell@desertbloom.example.com',
    phone: '(602) 555-0101',
    website: 'https://desertbloom.example.com',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85001',
    bio: 'Board-certified ND with 12 years of experience specializing in hormonal health, thyroid disorders, and autoimmune conditions. Graduate of Southwest College of Naturopathic Medicine.',
    specialties: ['hormones', 'thyroid', 'autoimmune'],
    treatment_modalities: ['botanical_medicine', 'clinical_nutrition', 'homeopathy'],
    is_aanp_member: true,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'featured',
    source: 'seed',
  },
  {
    full_name: 'Dr. James Ortega',
    practice_name: 'Sonoran Wellness Center',
    email: 'james.ortega@sonoran.example.com',
    phone: '(520) 555-0102',
    city: 'Tucson',
    state: 'AZ',
    zip: '85701',
    bio: 'Naturopathic physician focused on integrative oncology support, IV therapy, and Lyme disease recovery. FABNO board certified.',
    specialties: ['oncology', 'lyme', 'iv_therapy'],
    treatment_modalities: ['iv_therapy', 'botanical_medicine', 'clinical_nutrition'],
    is_aanp_member: true,
    accepts_insurance: false,
    offers_telemedicine: false,
    accepting_new_patients: true,
    listing_tier: 'verified',
    source: 'seed',
  },
  // Washington
  {
    full_name: 'Dr. Emily Chen',
    practice_name: 'Pacific Northwest Natural Health',
    email: 'emily.chen@pnnh.example.com',
    phone: '(206) 555-0103',
    website: 'https://pnnh.example.com',
    city: 'Seattle',
    state: 'WA',
    zip: '98101',
    bio: 'Specializing in fertility, prenatal care, and pediatric naturopathic medicine. Committed to evidence-based natural healthcare for families.',
    specialties: ['fertility', 'pediatrics'],
    treatment_modalities: ['botanical_medicine', 'clinical_nutrition', 'acupuncture'],
    is_aanp_member: true,
    accepts_insurance: true,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'featured',
    source: 'seed',
  },
  {
    full_name: 'Dr. Marcus Webb',
    practice_name: 'Cascade Integrative Medicine',
    email: 'marcus.webb@cascade.example.com',
    phone: '(253) 555-0104',
    city: 'Tacoma',
    state: 'WA',
    zip: '98401',
    bio: 'Sports medicine and men\'s health specialist. Former collegiate athlete who now helps patients optimize performance and recover from injury naturally.',
    specialties: ['sports', 'weight_management'],
    treatment_modalities: ['clinical_nutrition', 'prolotherapy', 'botanical_medicine'],
    is_aanp_member: false,
    accepts_insurance: false,
    offers_telemedicine: false,
    accepting_new_patients: true,
    listing_tier: 'free',
    source: 'seed',
  },
  // Oregon
  {
    full_name: 'Dr. Amara Johnson',
    practice_name: 'Rose City Naturopathic',
    email: 'amara.johnson@rosecity.example.com',
    phone: '(503) 555-0105',
    website: 'https://rosecity.example.com',
    city: 'Portland',
    state: 'OR',
    zip: '97201',
    bio: 'NCNM alumna specializing in gut health, autoimmune conditions, and mental health. Believes healing starts in the digestive system.',
    specialties: ['gut_health', 'autoimmune', 'mental_health'],
    treatment_modalities: ['botanical_medicine', 'clinical_nutrition', 'homeopathy'],
    is_aanp_member: true,
    accepts_insurance: true,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'verified',
    source: 'seed',
  },
  {
    full_name: 'Dr. Kevin Park',
    practice_name: 'Pacific Vitality',
    email: 'kevin.park@pacvitality.example.com',
    phone: '(541) 555-0106',
    city: 'Eugene',
    state: 'OR',
    zip: '97401',
    bio: 'Thyroid and adrenal health expert with special focus on Hashimoto\'s thyroiditis and complex fatigue syndromes.',
    specialties: ['thyroid', 'hormones'],
    treatment_modalities: ['clinical_nutrition', 'botanical_medicine', 'mind_body'],
    is_aanp_member: true,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'verified',
    source: 'seed',
  },
  // California
  {
    full_name: 'Dr. Lisa Ramirez',
    practice_name: 'Bay Area Natural Medicine',
    email: 'lisa.ramirez@banm.example.com',
    phone: '(415) 555-0107',
    website: 'https://banm.example.com',
    city: 'San Francisco',
    state: 'CA',
    zip: '94102',
    bio: 'Integrative oncology and immune health specialist. Works alongside conventional cancer care teams to support patients through treatment and recovery.',
    specialties: ['oncology', 'autoimmune'],
    treatment_modalities: ['iv_therapy', 'botanical_medicine', 'clinical_nutrition'],
    is_aanp_member: true,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: false,
    listing_tier: 'featured',
    source: 'seed',
  },
  {
    full_name: 'Dr. Ryan Foster',
    practice_name: 'LA Integrative Health',
    email: 'ryan.foster@laih.example.com',
    phone: '(310) 555-0108',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90001',
    bio: 'Skin health and dermatology-focused ND. Treating acne, eczema, psoriasis, and rosacea through root-cause approaches.',
    specialties: ['skin', 'gut_health'],
    treatment_modalities: ['botanical_medicine', 'clinical_nutrition', 'homeopathy'],
    is_aanp_member: false,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'free',
    source: 'seed',
  },
  {
    full_name: 'Dr. Natalie Kim',
    practice_name: 'San Diego Naturopathic Clinic',
    email: 'natalie.kim@sdnc.example.com',
    phone: '(619) 555-0109',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
    bio: 'Women\'s health specialist focusing on PCOS, fertility optimization, perimenopause, and hormone balancing.',
    specialties: ['hormones', 'fertility', 'pain'],
    treatment_modalities: ['botanical_medicine', 'acupuncture', 'clinical_nutrition'],
    is_aanp_member: true,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'verified',
    source: 'seed',
  },
  // Colorado
  {
    full_name: 'Dr. Thomas Bradley',
    practice_name: 'Mile High Natural Medicine',
    email: 'thomas.bradley@mhnatural.example.com',
    phone: '(720) 555-0110',
    city: 'Denver',
    state: 'CO',
    zip: '80201',
    bio: 'Lyme disease and tick-borne illness specialist. Trained at Bastyr University with advanced Lyme-literate training.',
    specialties: ['lyme', 'autoimmune', 'mental_health'],
    treatment_modalities: ['botanical_medicine', 'iv_therapy', 'clinical_nutrition'],
    is_aanp_member: true,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'featured',
    source: 'seed',
  },
  // Connecticut
  {
    full_name: 'Dr. Rebecca Stone',
    practice_name: 'New England Naturopathic',
    email: 'rebecca.stone@nenn.example.com',
    phone: '(860) 555-0111',
    city: 'Hartford',
    state: 'CT',
    zip: '06101',
    bio: 'Pediatric and family ND with 15 years in practice. Specializes in ADD/ADHD, childhood immunity, and developmental wellness.',
    specialties: ['pediatrics', 'autoimmune'],
    treatment_modalities: ['homeopathy', 'clinical_nutrition', 'botanical_medicine'],
    is_aanp_member: true,
    accepts_insurance: true,
    offers_telemedicine: false,
    accepting_new_patients: true,
    listing_tier: 'verified',
    source: 'seed',
  },
  // Maryland
  {
    full_name: 'Dr. David Nguyen',
    practice_name: 'Chesapeake Integrative Health',
    email: 'david.nguyen@chesapeake.example.com',
    phone: '(410) 555-0112',
    city: 'Baltimore',
    state: 'MD',
    zip: '21201',
    bio: 'Cardiometabolic health and weight management specialist. Evidence-based ND integrating lifestyle medicine with naturopathic care.',
    specialties: ['weight_management', 'gut_health'],
    treatment_modalities: ['clinical_nutrition', 'botanical_medicine', 'mind_body'],
    is_aanp_member: true,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'free',
    source: 'seed',
  },
  // Minnesota
  {
    full_name: 'Dr. Anna Sorenson',
    practice_name: 'Twin Cities Natural Medicine',
    email: 'anna.sorenson@tcnm.example.com',
    phone: '(612) 555-0113',
    website: 'https://tcnm.example.com',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55401',
    bio: 'Mental health and nervous system specialist. Integrates naturopathic medicine with mind-body approaches for anxiety, depression, and chronic stress.',
    specialties: ['mental_health', 'autoimmune'],
    treatment_modalities: ['mind_body', 'botanical_medicine', 'clinical_nutrition'],
    is_aanp_member: false,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'free',
    source: 'seed',
  },
  // Vermont
  {
    full_name: 'Dr. Claire Whitmore',
    practice_name: 'Green Mountain Natural Health',
    email: 'claire.whitmore@gmnh.example.com',
    phone: '(802) 555-0114',
    city: 'Burlington',
    state: 'VT',
    zip: '05401',
    bio: 'Thyroid disease and Lyme specialist in rural Vermont. Committed to accessible naturopathic care via telemedicine for patients statewide.',
    specialties: ['thyroid', 'lyme', 'hormones'],
    treatment_modalities: ['botanical_medicine', 'clinical_nutrition', 'homeopathy'],
    is_aanp_member: true,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'verified',
    source: 'seed',
  },
  // Hawaii
  {
    full_name: 'Dr. Kona Akana',
    practice_name: 'Aloha Natural Medicine',
    email: 'kona.akana@alohamed.example.com',
    phone: '(808) 555-0115',
    city: 'Honolulu',
    state: 'HI',
    zip: '96801',
    bio: 'Island-based ND offering integrative care with traditional Hawaiian healing principles. Specializes in diabetes prevention and metabolic health.',
    specialties: ['weight_management', 'gut_health'],
    treatment_modalities: ['clinical_nutrition', 'botanical_medicine', 'mind_body'],
    is_aanp_member: false,
    accepts_insurance: false,
    offers_telemedicine: true,
    accepting_new_patients: true,
    listing_tier: 'free',
    source: 'seed',
  },
]

async function seed() {
  console.log(`Seeding ${listings.length} naturopathic doctor listings...`)

  for (const listing of listings) {
    const baseSlug = slugify(`${listing.full_name} ${listing.city} ${listing.state}`)
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
      ...listing,
      slug,
      is_active: true,
      is_approved: true,
    })

    if (error) {
      console.error(`Failed to insert ${listing.full_name}:`, error.message)
    } else {
      console.log(`✓ ${listing.full_name} (${listing.city}, ${listing.state})`)
    }
  }

  console.log('\nSeed complete.')
}

seed().catch(console.error)
