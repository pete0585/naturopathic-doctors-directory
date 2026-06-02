export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  if (digits.length === 11 && digits[0] === '1') {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`
  }
  return phone
}

export const SPECIALTIES: Record<string, string> = {
  autoimmune: 'Autoimmune Conditions',
  thyroid: 'Thyroid & Hormonal Health',
  lyme: 'Lyme Disease',
  fertility: 'Fertility & Reproductive Health',
  pediatrics: 'Pediatric & Family Care',
  hormones: 'Hormone Balancing',
  gut_health: 'Gut Health & Digestion',
  iv_therapy: 'IV Therapy',
  mental_health: 'Mental Health & Anxiety',
  oncology: 'Integrative Oncology',
  sports: 'Sports & Performance Medicine',
  weight_management: 'Weight Management',
  skin: 'Skin Conditions',
  pain: 'Chronic Pain & Inflammation',
}

export const TREATMENT_MODALITIES: Record<string, string> = {
  botanical_medicine: 'Botanical Medicine',
  iv_therapy: 'IV Therapy',
  acupuncture: 'Acupuncture',
  homeopathy: 'Homeopathy',
  nutrition: 'Clinical Nutrition',
  hydrotherapy: 'Hydrotherapy',
  physical_medicine: 'Physical Medicine',
  biofeedback: 'Biofeedback',
  chelation: 'Chelation Therapy',
}

// All 25 US jurisdictions where naturopathic medicine is licensed
export const LICENSED_ND_STATES = [
  'AK', 'AZ', 'CA', 'CO', 'CT', 'DC', 'HI', 'ID', 'KS',
  'ME', 'MD', 'MA', 'MN', 'MT', 'NJ', 'NH', 'NM', 'ND',
  'OR', 'RI', 'UT', 'VT', 'WA', 'WY', 'PR',
]

export const STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
  DC: 'Washington D.C.', PR: 'Puerto Rico',
}

// Top licensed-state markets sorted by ND concentration
export const TOP_ND_STATES = ['WA', 'OR', 'CA', 'AZ', 'CO', 'CT', 'MA', 'MD', 'MN', 'UT']
