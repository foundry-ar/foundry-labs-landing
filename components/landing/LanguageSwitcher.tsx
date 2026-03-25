import type { Locale } from '@/lib/i18n'
import type { Messages } from '@/messages'

export function LanguageSwitcher({ locale, messages: m }: { locale: Locale; messages: Messages }) {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-500">
      {locale === 'en' ? (
        <>
          <span className="font-semibold text-black">EN</span>
          <span>/</span>
          <a
            href="/"
            hrefLang="es"
            aria-label={m.languageSwitcher.switchToEs}
            className="hover:text-black focus-visible:text-black focus-ring rounded-sm transition-colors duration-300 ease-out"
          >
            ES
          </a>
        </>
      ) : (
        <>
          <a
            href="/en"
            hrefLang="en"
            aria-label={m.languageSwitcher.switchToEn}
            className="hover:text-black focus-visible:text-black focus-ring rounded-sm transition-colors duration-300 ease-out"
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
