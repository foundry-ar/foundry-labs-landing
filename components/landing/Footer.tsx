export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 py-24 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Foundry
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex gap-16 text-sm text-gray-500">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-black mb-2">Studio</span>
              <a href="#services" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">Services</a>
              <a href="#approach" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">Approach</a>
              {/* TODO: About page */}
              {/* <a href="#about" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">About</a> */}
            </div>

            {/* TODO: Add social links when URLs are ready - Twitter/X, LinkedIn, GitHub */}
            {/* <div className="flex flex-col gap-2">
              <span className="font-semibold text-black mb-2">Connect</span>
              <a href="#twitter" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">Twitter</a>
              <a href="#linkedin" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">LinkedIn</a>
              <a href="#github" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">GitHub</a>
            </div> */}

            <div className="flex flex-col gap-2">
              <span className="font-semibold text-black mb-2">Contact</span>
              <a href="mailto:contact@foundry.ar" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">contact@foundry.ar</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
        <span>&copy; Foundry Labs 2026</span>
        <span>Crafted in Argentina</span>
      </div>
    </footer>
  )
}
