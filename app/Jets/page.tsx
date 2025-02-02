import { sanityClient } from "@/sanity/lib/client"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/sanity/lib/image" // ✅ Image URL Resolver

import { Poppins } from 'next/font/google'

// Initialize the Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],

})
export type JetData = {
  title: string
  slug: { current: string }
  image: {
    asset: { _ref: string }
  }
  description: string
  country: string
  speed: string
  generation: string
  role: string
  firstFlight: string
  manufacturer: string
}

// ✅ Fetch All Fighter Jets
async function getJetsData(): Promise<JetData[]> {
  const query = `*[_type == "fighterJet"]{
    title,
    slug,
    image {
      asset -> {
        _id
      }
    },
    description,
    country,
    speed,
    generation,
    role,
    firstFlight,
    manufacturer
  }`
  
  const allJets = await sanityClient.fetch(query)
  return allJets
}

// ✅ Fighter Jets Listing Page
export default async function FighterJetsPage() {
  const allJets: JetData[] = await getJetsData()

  if (!allJets || allJets.length === 0) {
    return <div>No jets found.</div>
  }

  return (
    <div>
      <h1 className={`${poppins.className} text-4xl font-extrabold text-center my-6 text-[#4B0981]`}>Fighter Jets</h1>
      <div className={`${poppins.className} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6`}>
        {allJets.map((jet) => (
          <div key={jet.slug.current} className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <Link href={`/Jets/${jet.slug.current}`}>
              {/* Image */}
              <div className="relative w-full h-48">
                <Image 
                  src={urlFor(jet.image.asset) || "/placeholder-image.png"} 
                  alt={jet.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-md"
                />
              </div>
              {/* Title */}
              <h2 className="mt-4 text-lg font-semibold">{jet.title}</h2>
              {/* Description with flexible size */}
              <p className="text-sm md:text-base text-gray-600 line-clamp-2">{jet.description}</p>
              {/* View Details Button */}
              <div className="mt-4 flex justify-center">
                <Link href={`/Jets/${jet.slug.current}`}>
                  <button className=" bg-gradient-to-r from-[#86c9dd] to-[#a078d4] text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
