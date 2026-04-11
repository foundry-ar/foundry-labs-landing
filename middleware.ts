import { NextRequest, NextResponse } from 'next/server'

const LOCALE_COOKIE = 'preferred-locale'
const LOCALES = ['es', 'en'] as const
type Locale = typeof LOCALES[number]

function parseAcceptLanguage(header: string): Locale {
  const tags = header.split(',').map((part) => {
    const [tag, q] = part.trim().split(';q=')
    return { tag: tag.trim().toLowerCase(), q: q ? parseFloat(q) : 1 }
  })
  tags.sort((a, b) => b.q - a.q)

  for (const { tag } of tags) {
    if (tag.startsWith('es')) return 'es'
    if (tag.startsWith('en')) return 'en'
  }
  return 'es'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Next.js internals, static files, and PostHog ingest
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/ingest') ||
    pathname.includes('.') ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt'
  ) {
    return NextResponse.next()
  }

  // User explicitly navigated to a locale path — set cookie and continue
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const response = NextResponse.next()
    response.cookies.set(LOCALE_COOKIE, 'en', { path: '/', maxAge: 60 * 60 * 24 * 365 })
    return response
  }

  // Explicit locale switch via ?lang= param (from language switcher)
  const langParam = request.nextUrl.searchParams.get('lang')
  if (langParam === 'es' && pathname === '/') {
    const clean = new URL('/', request.url)
    const response = NextResponse.redirect(clean)
    response.cookies.set(LOCALE_COOKIE, 'es', { path: '/', maxAge: 60 * 60 * 24 * 365 })
    return response
  }
  if (langParam === 'en') {
    const clean = new URL('/en', request.url)
    const response = NextResponse.redirect(clean)
    response.cookies.set(LOCALE_COOKIE, 'en', { path: '/', maxAge: 60 * 60 * 24 * 365 })
    return response
  }

  // Root path — check cookie first, then Accept-Language
  if (pathname === '/') {
    const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value as Locale | undefined
    if (cookieLocale === 'en') {
      return NextResponse.redirect(new URL('/en', request.url))
    }
    if (!cookieLocale) {
      const acceptLanguage = request.headers.get('accept-language') ?? ''
      const detected = parseAcceptLanguage(acceptLanguage)
      if (detected === 'en') {
        const response = NextResponse.redirect(new URL('/en', request.url))
        response.cookies.set(LOCALE_COOKIE, 'en', { path: '/', maxAge: 60 * 60 * 24 * 365 })
        return response
      }
      // Spanish detected — set cookie and serve /
      const response = NextResponse.next()
      response.cookies.set(LOCALE_COOKIE, 'es', { path: '/', maxAge: 60 * 60 * 24 * 365 })
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
