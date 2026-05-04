"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="relative z-[60] flex w-full items-center justify-center px-2 sm:px-3 lg:px-4 py-0 bg-[#A4E4FF]">
      <Link
        href="/"
        className="block shrink-0 leading-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Image
          src="/new-logo.png"
          alt="Mad Scramble"
          width={384}
          height={156}
          className="block h-[5.5rem] w-auto sm:h-24 md:h-28 lg:h-32 xl:h-36"
          priority
        />
      </Link>
    </header>
  )
}
