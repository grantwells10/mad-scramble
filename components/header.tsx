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
    <header className="relative z-[60] flex w-full items-center justify-center sm:justify-between px-3 sm:px-6 lg:px-8 pt-2 pb-1 sm:pt-3 sm:pb-1.5">
      <div className="shrink-0 lg:pl-6 xl:pl-10 2xl:pl-14">
        <Link href="/" className="block shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Image
            src="/new-logo.png"
            alt="Mad Scramble"
            width={384}
            height={156}
            className="h-[9rem] w-auto sm:h-40 md:h-52 lg:h-56 xl:h-[14rem]"
            priority
          />
        </Link>
      </div>

      <div className="hidden sm:flex items-center gap-5 mr-1 sm:mr-3 lg:mr-5">
        <a
          href={socialLinks[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-14 w-14 sm:h-[3.5rem] sm:w-[3.5rem] overflow-hidden rounded-[22%] transition-opacity hover:opacity-90"
          aria-label={socialLinks[0].label}
        >
          <Image
            src="/instagram.png"
            alt=""
            fill
            sizes="56px"
            className="object-contain pointer-events-none select-none"
          />
        </a>
        <a
          href={socialLinks[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-14 w-14 sm:h-[3.5rem] sm:w-[3.5rem] overflow-hidden rounded-[22%] transition-opacity hover:opacity-90"
          aria-label={socialLinks[1].label}
        >
          <Image
            src="/tiktok.png"
            alt=""
            fill
            sizes="56px"
            className="object-contain pointer-events-none select-none"
          />
        </a>
      </div>
    </header>
  )
}
