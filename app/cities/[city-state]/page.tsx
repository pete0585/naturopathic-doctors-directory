import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListingsByCity } from '@/lib/data'

interface CityData {
  city: string
  state: string
  stateFullName: string
  intro: string
}

const CITY_DATA: Record<string, CityData> = {
  'portland-or': {
    city: 'Portland',
    state: 'OR',
    stateFullName: 'Oregon',
    intro:
      'Oregon was one of the first US states to license naturopathic medicine, and Portland is the epicenter of that tradition. The city is home to graduates of the National University of Natural Medicine (NUNM) — one of only a handful of CNME-accredited ND programs in North America — and patients here have decades of experience working with licensed NDs as primary care providers.',
  },
  'seattle-wa': {
    city: 'Seattle',
    state: 'WA',
    stateFullName: 'Washington',
    intro:
      "Washington state licensed naturopathic medicine in 1919 — over a century ago — giving Seattle's ND community more institutional depth than almost anywhere else in the country. NDs here hold a broad scope of practice, including the ability to prescribe certain pharmaceuticals, order labs, and perform minor surgery, making them genuine primary care physicians for patients who prefer a root-cause approach.",
  },
  'los-angeles-ca': {
    city: 'Los Angeles',
    state: 'CA',
    stateFullName: 'California',
    intro:
      'California licenses more naturopathic doctors than any other state, and Los Angeles reflects that density. From specialty clinics in Santa Monica and Beverly Hills focused on hormone optimization and IV therapy, to neighborhood practices in Silver Lake and Pasadena treating chronic illness, LA offers access to NDs covering the full range of naturopathic medicine.',
  },
  'san-francisco-ca': {
    city: 'San Francisco',
    state: 'CA',
    stateFullName: 'California',
    intro:
      "The Bay Area's culture of biohacking and functional health has created deep demand for naturopathic care. San Francisco NDs frequently work with tech professionals dealing with burnout, gut dysfunction, and hormonal imbalances from high-stress careers, alongside patients seeking natural approaches to chronic autoimmune and inflammatory conditions.",
  },
  'phoenix-az': {
    city: 'Phoenix',
    state: 'AZ',
    stateFullName: 'Arizona',
    intro:
      "Arizona has one of the most expansive scopes of practice for NDs in the country. Phoenix and the broader Valley of the Sun are home to a high concentration of NDs trained in IV therapy, peptide protocols, and integrative approaches to metabolic and hormonal health — driven by a patient population actively seeking alternatives to the conventional healthcare system.",
  },
  'scottsdale-az': {
    city: 'Scottsdale',
    state: 'AZ',
    stateFullName: 'Arizona',
    intro:
      "Scottsdale has developed a thriving integrative medicine market, with NDs frequently operating alongside functional medicine MDs, acupuncturists, and wellness centers. Arizona's broad ND scope of practice means Scottsdale NDs can order comprehensive lab work, prescribe bioidentical hormones, and administer IV nutrients — making them effective primary care providers for patients seeking comprehensive natural medicine.",
  },
  'denver-co': {
    city: 'Denver',
    state: 'CO',
    stateFullName: 'Colorado',
    intro:
      "Colorado is a licensed ND state with a growing community of health-conscious residents drawn to the outdoors, clean living, and functional medicine. Denver NDs reflect this culture — many specialize in sports performance, altitude adaptation, and lifestyle medicine alongside traditional naturopathic approaches to chronic disease. The city's proximity to Bastyr University's California campus network keeps the local ND community well-connected to current clinical research.",
  },
  'boulder-co': {
    city: 'Boulder',
    state: 'CO',
    stateFullName: 'Colorado',
    intro:
      "Boulder consistently ranks among the healthiest cities in the US, and its naturopathic medicine community reflects that. NDs here see a primarily health-optimization-focused patient base — athletes, outdoor enthusiasts, and professionals who want a practitioner who can help them perform at their best, not just manage disease. Boulder NDs often have deep expertise in nutrition, botanical medicine, and evidence-based supplementation.",
  },
  'boston-ma': {
    city: 'Boston',
    state: 'MA',
    stateFullName: 'Massachusetts',
    intro:
      "Massachusetts licensed naturopathic medicine in 1996, and Boston NDs have built practices alongside one of the world's greatest concentrations of academic medical centers. Many Boston NDs are experienced at co-managing patients with conventional oncologists, endocrinologists, and gastroenterologists — providing integrative care for complex chronic conditions that benefit from both conventional and naturopathic approaches.",
  },
  'san-diego-ca': {
    city: 'San Diego',
    state: 'CA',
    stateFullName: 'California',
    intro:
      "San Diego's naturopathic medicine community is shaped by two forces: the wellness culture of North County (Encinitas, Del Mar, Carlsbad) and a large active-duty and veteran military population. NDs here frequently specialize in sports medicine, hormone optimization, and trauma-informed integrative care — serving both performance-focused civilians and veterans navigating complex health challenges from service.",
  },
  'bethesda-md': {
    city: 'Bethesda',
    state: 'MD',
    stateFullName: 'Maryland',
    intro:
      "Maryland licensed naturopathic medicine in 2014, opening the Metro DC corridor to ND care for the first time. Bethesda and Rockville NDs see a highly educated, research-literate patient base — many of whom are also receiving care at NIH, Johns Hopkins, or George Washington University Hospital. These patients often seek NDs specifically to integrate natural approaches with their existing conventional treatment plans.",
  },
  'hartford-ct': {
    city: 'Hartford',
    state: 'CT',
    stateFullName: 'Connecticut',
    intro:
      "Connecticut has a long history of naturopathic medicine licensing and one of the highest per-capita concentrations of NDs in New England. Hartford-area practitioners see a diverse patient population and frequently specialize in pediatric care, autoimmune conditions, and women's hormonal health — areas where the naturopathic approach of treating root causes has clear advantages over symptom-only management.",
  },
  'minneapolis-mn': {
    city: 'Minneapolis',
    state: 'MN',
    stateFullName: 'Minnesota',
    intro:
      "Minnesota licensed naturopathic medicine in 2023, opening a major Midwest market to ND care for the first time. Minneapolis NDs entering this newly licensed landscape bring training from CNME-accredited programs across the country and are building practices to serve a patient population that previously had limited access to licensed naturopathic care. Early movers in the market are seeing strong patient demand.",
  },
  'salt-lake-city-ut': {
    city: 'Salt Lake City',
    state: 'UT',
    stateFullName: 'Utah',
    intro:
      "Utah's health-conscious, family-oriented culture has driven steady demand for naturopathic medicine. Salt Lake City NDs frequently specialize in pediatric care, fertility support, and family wellness — areas where naturopathic medicine's gentle, nutrition-first approach aligns well with the values of Utah's patient population. The state's licensing framework allows NDs to practice as primary care physicians.",
  },
  'albuquerque-nm': {
    city: 'Albuquerque',
    state: 'NM',
    stateFullName: 'New Mexico',
    intro:
      "New Mexico has licensed naturopathic medicine since 1994 and has one of the longest-established ND communities in the Southwest. Albuquerque NDs practice in a culturally diverse city where integrative approaches to health have strong community roots. Many specialize in chronic pain, environmental medicine, and conditions common in the high-desert Southwest, including allergy, inflammatory skin conditions, and metabolic issues.",
  },
}

interface PageProps {
  params: Promise<{ 'city-state': string }>
}

export async function generateStaticParams() {
  return Object.keys(CITY_DATA).map((slug) => ({ 'city-state': slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { 'city-state': cityState } = await params
  const data = CITY_DATA[cityState]
  if (!data) return { title: 'Naturopathic Doctors' }

  return {
    title: `Naturopathic Doctors in ${data.city}, ${data.state} | Find Licensed NDs`,
    description: `Find licensed Naturopathic Doctors in ${data.city}, ${data.stateFullName}. Browse NDs accepting new patients, specializing in root-cause medicine, and offering telemedicine in ${data.city}.`,
    alternates: { canonical: `https://naturopathicdoctorfinder.com/cities/${cityState}` },
  }
}

export const revalidate = 3600

export default async function CityPage({ params }: PageProps) {
  const { 'city-state': cityState } = await params
  const data = CITY_DATA[cityState]

  if (!data) notFound()

  const listings = await getListingsByCity(data.city, data.state)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How many naturopathic doctors are in ${data.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `NaturopathicDoctorFinder.com currently lists ${listings.length}+ licensed NDs in and around ${data.city}, ${data.state}. This represents active Google Maps-verified practices — the full licensed ND population in ${data.stateFullName} is larger. New listings are added regularly.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are naturopathic doctors in ${data.stateFullName} licensed?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. ${data.stateFullName} is one of 25 US jurisdictions where naturopathic medicine is a licensed healthcare profession. Licensed NDs complete a 4-year graduate medical program at a CNME-accredited school and pass national board exams (NPLEX) before practicing. All NDs in this directory practice in licensed states.`,
        },
      },
      {
        '@type': 'Question',
        name: `What do naturopathic doctors in ${data.city} treat?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${data.city} NDs commonly treat chronic conditions including thyroid disorders, autoimmune disease, hormonal imbalances, gut health issues, Lyme disease, fertility challenges, and anxiety. Many also see patients for preventive care and health optimization. Use the filters on the browse page to find NDs specializing in your specific condition.`,
        },
      },
      {
        '@type': 'Question',
        name: `Do naturopathic doctors in ${data.city} accept insurance?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Insurance coverage for naturopathic medicine varies by state and plan. Some ${data.stateFullName} insurance plans cover ND visits; many do not. Your best approach is to contact the ND's office directly and ask which insurances they accept. Many NDs offer transparent self-pay rates as an alternative.`,
        },
      },
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary">Home</Link>
        <span>/</span>
        <Link href="/listings" className="hover:text-brand-primary">Find an ND</Link>
        <span>/</span>
        <Link href={`/categories/${data.state.toLowerCase()}`} className="hover:text-brand-primary">
          {data.stateFullName}
        </Link>
        <span>/</span>
        <span className="text-gray-700">{data.city}</span>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Naturopathic Doctors in {data.city}, {data.state}
        </h1>
        <p className="text-gray-600 max-w-3xl">{data.intro}</p>
      </div>

      {/* Listings grid */}
      {listings.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">No listings found in {data.city} yet.</p>
          <Link href={`/listings?state=${data.state}`} className="text-brand-primary hover:underline font-medium">
            Browse all NDs in {data.stateFullName} →
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-gray-600">
            <strong className="text-gray-900">{listings.length}</strong> naturopathic doctor{listings.length !== 1 ? 's' : ''} found in {data.city}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
          <div className="text-center mb-12">
            <Link
              href={`/listings?state=${data.state}`}
              className="text-brand-primary hover:underline font-medium"
            >
              See all naturopathic doctors in {data.stateFullName} →
            </Link>
          </div>
        </>
      )}

      {/* FAQ section */}
      <div className="bg-brand-cream rounded-xl border border-brand-sage/20 p-6 prose-guide">
        <h2>Frequently Asked Questions — {data.city} Naturopathic Doctors</h2>

        <h3>How do I find a good naturopathic doctor in {data.city}?</h3>
        <p>
          Start with what you're hoping to address — chronic fatigue, a thyroid condition, hormonal imbalances, gut issues. Use the filters on this page to narrow to NDs who list your condition as a specialty. From there, check whether they're accepting new patients and whether they offer telemedicine. Most NDs offer a free 15-minute phone consultation before booking a full initial visit.
        </p>

        <h3>What should I expect at a first appointment?</h3>
        <p>
          Initial visits with a naturopathic doctor are typically 60 to 90 minutes — significantly longer than a conventional primary care appointment. Your ND will take a comprehensive health history covering your symptoms, diet, sleep, stress, environment, and medical history. Many will order labs at the first or second visit. You'll leave with a concrete treatment plan, not just a diagnosis.
        </p>

        <h3>Are naturopathic doctors real doctors?</h3>
        <p>
          Licensed NDs (Naturopathic Doctors) in {data.stateFullName} complete a 4-year graduate medical program at a CNME-accredited school — covering the same basic science curriculum as conventional medical schools, plus specialized training in natural therapeutics. They pass two national board exams (NPLEX I and II) and meet {data.stateFullName}'s licensure requirements. They are not MDs, but they are licensed medical professionals with graduate-level medical training.
        </p>

        <h3>What's the difference between an ND and a "naturopath"?</h3>
        <p>
          This distinction matters. A "naturopathic doctor" (ND) holds a graduate degree from a CNME-accredited school and is licensed in {data.stateFullName}. A "naturopath" can be anyone — many states have no requirements whatsoever for the title. NaturopathicDoctorFinder.com only lists licensed NDs in licensed states. When you find a provider here, you're finding a credentialed professional.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Are you a licensed ND in {data.city}?</h2>
        <p className="text-gray-600 mb-4">
          Claim your free profile or add your practice to reach patients searching for a naturopathic doctor in {data.city}.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/listings"
            className="bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary-dark transition-colors"
          >
            Find Your Listing
          </Link>
          <Link
            href="/submit"
            className="bg-white border border-brand-primary text-brand-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-primary/5 transition-colors"
          >
            Submit Your Practice
          </Link>
        </div>
      </div>
    </div>
  )
}
