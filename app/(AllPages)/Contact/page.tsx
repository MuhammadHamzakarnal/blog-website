"use client"
import Image from "next/image"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!name || !email || !message) {
      setStatus("Please fill out all fields.")
      return
    }

    // Normally, here we would send this data to a server or email
    setStatus("Your message has been sent successfully!")
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="relative bg-white min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#4B0981] mb-6">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center items-center">
            <Image
              src="/Pakistan_Air_Force_Logo_(Official).png" // Replace with your image
              alt="Fighter Jet Image"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 mt-2 border border-[#ddd] rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mt-2 border border-[#ddd] rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 mt-2 border border-[#ddd] rounded-md"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4B0981] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#FFD700] transition duration-300"
              >
                Send Message
              </button>

              {status && (
                <div className="mt-4 text-center">
                  <p className={`text-lg ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                    {status}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
