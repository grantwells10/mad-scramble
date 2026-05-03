import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { publicFaviconUrl } from "@/lib/favicon-url"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
})

const siteDescription =
  "Flavor-infused whole eggs — launching NYC tri-state this summer."

export async function generateMetadata(): Promise<Metadata> {
  const iconHref = publicFaviconUrl()
  return {
    title: "Mad Scramble",
    description: siteDescription,
    applicationName: "Mad Scramble",
    icons: {
      icon: [{ url: iconHref, type: "image/png" }],
      shortcut: iconHref,
      apple: [{ url: iconHref, type: "image/png" }],
    },
    openGraph: {
      title: "Mad Scramble",
      description: siteDescription,
      siteName: "Mad Scramble",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mad Scramble",
      description: siteDescription,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inika:wght@400;700&family=Gabarito:wght@400;700;800;900&family=Patrick+Hand&family=Londrina+Solid:wght@100;300;400;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-inika ${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
