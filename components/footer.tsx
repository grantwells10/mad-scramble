"use client"

import React, { useState } from "react"
import Image from "next/image"
import { CheckCircle, X } from "lucide-react"
export default function Footer() {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("")

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_KEY!)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((r) => r.json())

      if (res.success) {
        setResult("Message sent successfully!")
        setIsSuccess(true)
        setShowModal(true)
        form.reset()
      } else {
        setResult("Failed to send message. Please try again.")
        setIsSuccess(false)
        setShowModal(true)
      }
    } catch {
      setResult("Network error. Please try again.")
      setIsSuccess(false)
      setShowModal(true)
    }

    setIsSubmitting(false)
  }

  const closeModal = () => {
    setShowModal(false)
    setResult("")
  }

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/eatmadscramble" },
    { name: "TikTok", href: "https://tiktok.com/@eatmadscramble" },
  ]

  const fieldBase =
    "w-full px-6 py-4 border-2 border-[#341514] bg-[#FFFCE9] font-poppins font-normal text-lg text-[#341514] placeholder:text-[#341514] placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-[#FFE135]/80"

  const inputClass = `${fieldBase} rounded-full`

  const textareaClass = `${fieldBase} rounded-2xl resize-none min-h-[160px]`

  return (
    <footer id="contact" className="scroll-mt-24 px-3 sm:px-6 lg:px-8 py-16 sm:py-20 bg-[#FFFCE9]">
      <div className="mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">
          <div className="flex w-full flex-col items-start lg:w-[38%]">
            <Image
              src="/smaller-logo.png"
              alt="Mad Scramble"
              width={260}
              height={110}
              className="h-auto w-full max-w-[220px] sm:max-w-[260px] mb-10"
            />
            <div className="flex w-full flex-wrap gap-5 lg:pr-12">
              <a
                href={socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-[4.75rem] w-[4.75rem] overflow-hidden rounded-[22%] transition-opacity hover:opacity-90 hover:scale-105"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.png"
                  alt=""
                  fill
                  sizes="76px"
                  className="object-contain pointer-events-none select-none"
                />
              </a>
              <a
                href={socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-[4.75rem] w-[4.75rem] overflow-hidden rounded-[22%] transition-opacity hover:opacity-90 hover:scale-105"
                aria-label="TikTok"
              >
                <Image
                  src="/tiktok.png"
                  alt=""
                  fill
                  sizes="76px"
                  className="object-contain pointer-events-none select-none"
                />
              </a>
            </div>
          </div>

          <div className="w-full lg:flex-1 lg:pl-10 xl:pl-14">
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-[#4C1610] mb-8 uppercase tracking-tight">
              Talk to the founders!
            </h3>
            <form onSubmit={onSubmit} className="space-y-5 max-w-2xl">
              <input type="text" name="name" placeholder="Name" required className={inputClass} />
              <input type="email" name="email" placeholder="Email" required className={inputClass} />
              <input type="text" name="subject" placeholder="Subject" required className={inputClass} />
              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                className={textareaClass}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#FFE135] px-12 py-4 font-poppins text-lg font-normal text-[#341514] shadow-md hover:bg-[#f5d820] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Sending…" : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-[#FFFCE9] rounded-2xl p-8 max-w-md w-full mx-4 relative border-2 border-[#341514]/10">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#341514]/60 hover:text-[#341514]"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="text-center pt-2">
              {isSuccess ? (
                <div className="mb-4">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="font-gabarito text-2xl font-bold text-[#341514] mb-2">Message sent!</h3>
                  <p className="font-inika text-[#341514]/90">Thanks for reaching out. We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <div className="mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-gabarito text-2xl font-bold text-[#341514] mb-2">Oops</h3>
                  <p className="font-inika text-[#341514]/90">{result || "Something went wrong. Please try again."}</p>
                </div>
              )}

              <button
                type="button"
                onClick={closeModal}
                className="mt-6 rounded-full bg-[#FFE135] px-8 py-3 font-gabarito font-bold text-[#341514] hover:bg-[#f5d820]"
              >
                {isSuccess ? "Awesome" : "Try again"}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
