"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"
const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/eatmadscramble",
    label: "Instagram",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@eatmadscramble",
    label: "TikTok",
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className="relative z-[60] flex w-full items-center justify-between px-3 sm:px-6 lg:px-8 pt-4 pb-1 sm:pt-5 sm:pb-1.5">
        <Link href="/" className="block shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Image
            src="/new-logo.png"
            alt="Mad Scramble"
            width={384}
            height={156}
            className="h-32 w-auto sm:h-40 md:h-48 lg:h-[13rem]"
            priority
          />
        </Link>

        <div className="hidden sm:flex items-center gap-5 mr-3 sm:mr-6 lg:mr-10">
          <a
            href={socialLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-[4.25rem] w-[4.25rem] overflow-hidden rounded-[22%] transition-opacity hover:opacity-90"
            aria-label={socialLinks[0].label}
          >
            <Image
              src="/instagram.png"
              alt=""
              fill
              sizes="68px"
              className="object-contain pointer-events-none select-none"
            />
          </a>
          <a
            href={socialLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-[4.25rem] w-[4.25rem] overflow-hidden rounded-[22%] transition-opacity hover:opacity-90"
            aria-label={socialLinks[1].label}
          >
            <Image
              src="/tiktok.png"
              alt=""
              fill
              sizes="68px"
              className="object-contain pointer-events-none select-none"
            />
          </a>
        </div>

        <button
          type="button"
          className="sm:hidden mr-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-[#341514] ring-1 ring-black/5"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <XIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </header>

      {open && (
        <div className="sm:hidden fixed inset-0 top-0 z-40 flex flex-col gap-6 bg-[#E4F5FD] pl-6 pr-14 pt-36 pb-8">
          <Link href="#contact" onClick={close} className="font-gabarito text-xl font-bold text-[#341514] py-2">
            Talk to the founders
          </Link>
          <div className="flex gap-5 pt-4">
            <a
              href={socialLinks[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-[4.75rem] w-[4.75rem] overflow-hidden rounded-[22%] transition-opacity active:opacity-80"
              aria-label={socialLinks[0].label}
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
              className="relative block h-[4.75rem] w-[4.75rem] overflow-hidden rounded-[22%] transition-opacity active:opacity-80"
              aria-label={socialLinks[1].label}
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
      )}
    </>
  )
}
