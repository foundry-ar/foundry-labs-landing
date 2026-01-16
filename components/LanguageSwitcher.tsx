import Link from 'next/link'

export function LanguageSwitcher({ currentLocale }: { currentLocale: 'en' | 'es' }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {currentLocale === 'en' ? (
        <>
          <span className="text-ink font-medium">EN</span>
          <span className="text-gray-300">/</span>
          <Link href="/es" className="text-gray-400 hover:text-ink transition-colors">
            ES
          </Link>
        </>
      ) : (
        <>
          <Link href="/" className="text-gray-400 hover:text-ink transition-colors">
            EN
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-ink font-medium">ES</span>
        </>
      )}
    </div>
  )
}


