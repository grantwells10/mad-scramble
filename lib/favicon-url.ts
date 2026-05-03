import fs from "node:fs"
import path from "node:path"

/** Bust browser/CDN caches when `public/favicon.png` is replaced (mtime changes). */
export function publicFaviconUrl(): string {
  try {
    const filePath = path.join(process.cwd(), "public", "favicon.png")
    if (fs.existsSync(filePath)) {
      return `/favicon.png?v=${fs.statSync(filePath).mtimeMs}`
    }
  } catch {
    // ignore
  }
  return "/favicon.png"
}
