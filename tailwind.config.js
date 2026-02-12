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
        surface: '#F5F7FA',
        ink: '#111111',
      },
      animation: {
        shimmer: 'shimmer 5s linear infinite',
        'bounce-slow': 'bounce-slow 2s infinite',
        'slide-up-in': 'slide-up-in 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-out': 'slide-up-out 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'bounce-slow': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
        'slide-up-in': {
          '0%': { opacity: '0', transform: 'translateY(60%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-60%)' },
        },
      },
    },
  },
  plugins: [],
}
