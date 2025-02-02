import { sanityClient } from '@/sanity/lib/client'
import Image from 'next/image'
import { urlFor } from "@/sanity/lib/image"

import { Poppins } from 'next/font/google'

// Initialize the Poppins font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],

})
async function getJetData(slug: string) {
  const query = `*[_type == "fighterJet" && slug.current == $slug][0]{
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

  return await sanityClient.fetch(query, { slug })
}

interface JetDetailPageProps {
  params: { slug: string }
}

export default async function JetDetailPage({ params }: JetDetailPageProps) {
  const jetData = await getJetData(params.slug)

  if (!jetData) {
    return <div>Jet not found.</div>
  }

  return (
    <div className={`${poppins.className}min-h-screen bg-gradient-to-r from-[#e4f0dd] to-[#f1eff3] p-8`}>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-[#4B0981] mb-4">{jetData.title}</h1>
        
        {/* Jet Image */}
        <div className="relative w-full h-64 mb-6">
          <Image 
            src={urlFor(jetData.image.asset) || "/placeholder-image.png"} 
            alt={jetData.title} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">{jetData.description}</p>

        {/* Jet Details List */}
        <div className="bg-[#F4F4F4] p-4 rounded-lg">
          <ul className="space-y-3">
            <li className="text-lg font-medium"><strong>Country:</strong> {jetData.country}</li>
            <li className="text-lg font-medium"><strong>Speed:</strong> {jetData.speed}</li>
            <li className="text-lg font-medium"><strong>Generation:</strong> {jetData.generation}</li>
            <li className="text-lg font-medium"><strong>Role:</strong> {jetData.role}</li>
            <li className="text-lg font-medium"><strong>First Flight:</strong> {jetData.firstFlight}</li>
            <li className="text-lg font-medium"><strong>Manufacturer:</strong> {jetData.manufacturer}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
