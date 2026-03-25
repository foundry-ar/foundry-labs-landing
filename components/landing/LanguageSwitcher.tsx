import type { Locale } from '@/lib/i18n'
import type { Messages } from '@/messages'

export function LanguageSwitcher({ locale, messages: m }: { locale: Locale; messages: Messages }) {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-500">
      {locale === 'en' ? (
        <>
          <span className="font-semibold text-black inline-flex items-center justify-center min-w-[44px] min-h-[44px]" lang="en">EN</span>
          <span aria-hidden="true">/</span>
          <a
            href="/"
            hrefLang="es"
            lang="es"
            aria-label={m.languageSwitcher.switchToEs}
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] hover:text-black focus-visible:text-black focus-ring rounded-sm transition-colors duration-300 ease-out"
          >
            ES
          </a>
        </>
      ) : (
        <>
          <a
            href="/en"
            hrefLang="en"
            lang="en"
            aria-label={m.languageSwitcher.switchToEn}
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] hover:text-black focus-visible:text-black focus-ring rounded-sm transition-colors duration-300 ease-out"
          >
            EN
          </a>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-black inline-flex items-center justify-center min-w-[44px] min-h-[44px]" lang="es">ES</span>
        </>
      )}
    </div>
  )
}
