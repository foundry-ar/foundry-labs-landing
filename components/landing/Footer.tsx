import { LanguageSwitcher } from './LanguageSwitcher'
import type { Locale } from '@/lib/i18n'
import type { Messages } from '@/messages'

export function Footer({ locale, messages: m }: { locale: Locale; messages: Messages }) {
  return (
    <footer className="bg-surface px-6 pt-16 pb-10 relative z-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg aria-hidden="true" viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                <rect x="4" y="4" width="14" height="14" stroke="#7c3aed" strokeWidth="2"/>
                <rect x="14" y="14" width="14" height="14" stroke="#2563eb" strokeWidth="2"/>
              </svg>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {m.footer.brand}
              </span>
            </div>
            <p className="text-sm text-gray-400">{m.footer.tagline}</p>
          </div>

          <div className="flex gap-12 md:gap-16 text-sm text-gray-500">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-700 mb-1">{m.footer.studioLabel}</span>
              <a href="#services" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">{m.footer.services}</a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-700 mb-1">{m.footer.contactLabel}</span>
              <a href="mailto:contact@foundry.ar" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">contact@foundry.ar</a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>{m.footer.copyright}</span>
          <div className="flex items-center gap-3">
            <span>{m.footer.location}</span>
            <span className="text-gray-300">·</span>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  )
}
