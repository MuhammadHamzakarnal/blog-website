import Image from "next/image"


export default function AboutPage() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#4B0981] mb-8">About Pakistan Fighter Jets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center">
            <Image 
              src="/PAFWallpaper-DefenceTalk.com.jpg" 
              alt="Fighter Jets" 
              width={600} 
              height={400} 
              className="rounded-md"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-4">
              Pakistan has one of the most advanced and capable air forces in the region. Our fleet of fighter jets represents the nation strength technological prowess and commitment to safeguarding the skies of Pakistan. From air defense to ground attack missions these jets serve a variety of crucial roles in maintaining security.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              The Pakistan Air Force (PAF) operates a diverse range of fighter jets each designed to perform specific missions including air superiority multirole operations and interception. From the JF-17 Thunder a result of collaboration with China to the Shenyang F-7 and Mirage 5 Pakistan air fleet continues to evolve with modern technology to ensure the nation defense.
            </p>
            <p className="text-lg text-gray-700">
              As we continue to innovate our fighter jets represent the pride and bravery of Pakistan air force pilots engineers and the entire defense sector. With ongoing upgrades and strategic partnerships Pakistan fighter jets are poised to remain among the most formidable forces in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
