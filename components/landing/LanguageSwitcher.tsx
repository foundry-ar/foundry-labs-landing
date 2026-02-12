import type { Locale } from '@/lib/i18n'

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-500">
      {locale === 'en' ? (
        <>
          <span className="font-semibold text-black">EN</span>
          <span>/</span>
          <a
            href="/es"
            hrefLang="es"
            aria-label="Cambiar a español"
            className="hover:text-black focus-visible:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors"
          >
            ES
          </a>
        </>
      ) : (
        <>
          <a
            href="/"
            hrefLang="en"
            aria-label="Switch to English"
            className="hover:text-black focus-visible:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors"
          >
            EN
          </a>
          <span>/</span>
          <span className="font-semibold text-black">ES</span>
        </>
      )}
    </div>
  )
}
