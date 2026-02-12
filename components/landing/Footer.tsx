export function Footer() {
  return (
    <footer className="bg-surface px-6 pt-16 pb-10 relative z-20">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand + tagline */}
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Foundry Labs
            </div>
            <p className="text-sm text-gray-400">Senior Engineering &amp; Systems Design</p>
          </div>

          {/* Navigation + contact */}
          <div className="flex gap-12 md:gap-16 text-sm text-gray-500">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-700 mb-1">Studio</span>
              <a href="#services" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">Services</a>
              <a href="#approach" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">Approach</a>
              {/* TODO: About page */}
              {/* <a href="#about" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">About</a> */}
            </div>

            {/* TODO: Add social links when URLs are ready - Twitter/X, LinkedIn, GitHub */}
            {/* <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-700 mb-1">Connect</span>
              <a href="#twitter" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">LinkedIn</a>
              <a href="#github" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">GitHub</a>
            </div> */}

            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-700 mb-1">Contact</span>
              <a href="mailto:contact@foundry.ar" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm transition-colors">contact@foundry.ar</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>&copy; Foundry Labs 2026</span>
          <span>Based in Argentina &middot; Working globally</span>
        </div>
      </div>
    </footer>
  )
}
