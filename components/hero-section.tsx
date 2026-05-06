"use client"

import Image from "next/image"
import { useState } from "react"

export default function HeroSection() {
  const [result, setResult] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const onWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setResult("")
    const form = e.currentTarget
    const formData = new FormData(form)
    const key = process.env.NEXT_PUBLIC_WEB3_WAITLIST_KEY
    if (!key) {
      setResult("Waitlist is not configured yet.")
      setSubmitting(false)
      return
    }
    formData.append("access_key", key)
    formData.append("subject", "Mad Scramble — Waitlist signup")
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const raw = await response.text()
      let data: { success?: boolean; message?: string } = {}
      try {
        data = raw ? (JSON.parse(raw) as typeof data) : {}
      } catch {
        setResult(
          "Got an unexpected reply from the form service—often an ad/privacy blocker. Try disabling it for this page or submit from another browser."
        )
        setSubmitting(false)
        return
      }
      if (data.success) {
        setResult("Thanks — you’re on the list!")
        form.reset()
      } else {
        const msg =
          typeof data.message === "string" && data.message.trim() ? data.message : "Something went wrong. Try again."
        setResult(msg)
      }
    } catch {
      setResult(
        "Could not reach the form service—check your connection, or temporarily allow blocked requests (ad blockers often block api.web3forms.com)."
      )
    }
    setSubmitting(false)
  }

  return (
    <section className="relative bg-[#FFFCEA] pb-16 sm:pb-24">
      <div className="mx-auto w-full px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-9 lg:gap-2 pt-6 sm:pt-8 lg:pt-10">
          <div className="flex flex-col lg:max-w-xl xl:max-w-2xl order-2 lg:order-1 lg:pl-10 xl:pl-14 2xl:pl-20">
            <p className="order-1 hidden lg:block font-poppins text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#30C2DB] drop-shadow-sm mb-4 leading-tight">
              <span className="block tracking-tight">LAUNCHING IN NYC TRI STATE</span>
              <span className="block">AREA THIS SUMMER</span>
            </p>
            <h1 className="order-2 hidden lg:block font-poppins text-4xl sm:text-5xl xl:text-6xl font-black text-[#3F3891] leading-[1.05] mb-8">
              EGGS FINALLY GOT
              <br />
              THEIR FLAVOR
            </h1>
            <p className="order-1 lg:order-3 font-poppins text-3xl sm:text-4xl lg:text-xl xl:text-2xl font-bold uppercase text-[#30C2DB] mb-4 text-center lg:text-left leading-tight">
              JOIN THE WAITLIST!
            </p>
            <form onSubmit={onWaitlistSubmit} className="order-2 lg:order-4 max-w-lg w-full mx-auto lg:mx-0">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="EMAIL"
                  disabled={submitting}
                  className="w-full min-h-[56px] flex-1 rounded-full border-2 border-[#30C2DB] bg-white/90 px-8 font-gabarito text-base font-bold text-[#30C2DB] placeholder:text-[#30C2DB] placeholder:font-bold placeholder:tracking-widest focus:outline-none focus:ring-2 focus:ring-[#30C2DB]/30 disabled:opacity-70"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="min-h-[56px] shrink-0 mx-auto w-fit max-w-full rounded-full border-2 border-[#30C2DB] bg-[#30C2DB] px-8 font-gabarito text-base font-bold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-[#28b3ca] hover:border-[#28b3ca] focus:outline-none focus:ring-2 focus:ring-[#30C2DB]/40 disabled:cursor-not-allowed disabled:opacity-70 lg:mx-0"
                >
                  {submitting ? "…" : "Submit"}
                </button>
              </div>
            </form>
            <p className="order-3 lg:hidden mt-3 font-poppins text-lg sm:text-2xl font-bold uppercase tracking-wide text-[#30C2DB] drop-shadow-sm text-center leading-tight">
              <span className="block tracking-tight">LAUNCHING IN NYC TRI STATE</span>
              <span className="block">AREA THIS SUMMER</span>
            </p>
            {result ? (
              <p className="order-4 lg:order-5 mt-3 font-inika text-sm text-[#341514]/90 text-center lg:text-left">{result}</p>
            ) : null}
          </div>

          <div className="order-1 lg:order-2 flex min-w-0 translate-x-0 justify-center sm:translate-x-1 lg:-translate-x-5 lg:justify-end lg:flex-1 pt-2 sm:pt-4 lg:pt-0">
            <figure
              className="relative isolate mx-auto w-[min(92vw,280px)] h-[280px] sm:w-[min(88vw,320px)] sm:h-[310px] md:w-[340px] md:h-[330px] lg:w-[400px] lg:h-[350px]"
              aria-label="Mad Scramble cartons: French Toast, Pancake, and Garlic Parm"
            >
              {/* Back row — French Toast (left) & Garlic Parm (right), tilted outward from center */}
              <div className="absolute bottom-0 left-[-6%] z-10 w-[50%] max-w-[184px] origin-bottom rotate-[-10deg] drop-shadow-lg translate-y-1 sm:translate-y-2">
                <Image
                  src="/french-toast.png"
                  alt=""
                  width={400}
                  height={520}
                  className="w-full h-auto object-contain object-bottom pointer-events-none select-none"
                  priority
                />
              </div>
              <div className="absolute bottom-0 right-[-6%] z-10 w-[50%] max-w-[184px] origin-bottom rotate-[10deg] drop-shadow-lg translate-y-1 sm:translate-y-2">
                <Image
                  src="/garlic-parm.png"
                  alt=""
                  width={400}
                  height={520}
                  className="w-full h-auto object-contain object-bottom pointer-events-none select-none"
                  priority
                />
              </div>
              {/* Front — Pancake on top of both side cartons */}
              <div className="absolute left-1/2 bottom-0 z-30 w-[53%] max-w-[198px] -translate-x-1/2 origin-bottom -translate-y-1 sm:-translate-y-2 drop-shadow-2xl">
                <Image
                  src="/pancake.png"
                  alt=""
                  width={400}
                  height={520}
                  className="w-full h-auto object-contain object-bottom pointer-events-none select-none"
                  priority
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
