"use client"

import Image from "next/image"
import Link from "next/link"

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
  return (
    <header className="relative z-[60] flex w-full items-center justify-center sm:justify-between px-2 sm:px-4 lg:px-6 pt-4 pb-1 sm:pt-5 sm:pb-1.5">
      <Link href="/" className="block shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <Image
          src="/new-logo.png"
          alt="Mad Scramble"
          width={384}
          height={156}
          className="h-[10.5rem] w-auto sm:h-48 md:h-60 lg:h-[16.5rem]"
          priority
        />
      </Link>

      <div className="hidden sm:flex items-center gap-5 mr-1 sm:mr-3 lg:mr-5">
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
    </header>
  )
}
