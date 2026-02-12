import type { Messages } from '@/messages'

export function NavBar({ messages: m }: { messages: Messages }) {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-2">
          <svg aria-hidden="true" viewBox="0 0 32 32" className="w-7 h-7" fill="none">
            <rect x="4" y="4" width="14" height="14" stroke="#1a1a1a" strokeWidth="2"/>
            <rect x="14" y="14" width="14" height="14" stroke="#1a1a1a" strokeWidth="2"/>
          </svg>
          <span className="font-semibold text-sm tracking-tight">{m.nav.brand}</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-black focus-visible:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">{m.nav.services}</a>
          <a href="#contact" className="hover:text-black focus-visible:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">{m.nav.contact}</a>
        </div>

        <div>
          <a
            href="mailto:contact@foundry.ar"
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
          >
            {m.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
