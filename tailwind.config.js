/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        surface: '#FAFBFC',
        ink: '#111111',
      },
      animation: {
        shimmer: 'shimmer 8s ease-in-out infinite',
        float: 'float 2.5s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'slide-up-in': 'slide-up-in 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-out': 'slide-up-out 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        nudge: 'nudge 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'slide-up-in': {
          '0%': { opacity: '0', transform: 'translateY(60%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-60%)' },
        },
        nudge: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(3px)' },
        },
      },
    },
  },
  plugins: [],
}
