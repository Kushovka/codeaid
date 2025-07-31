import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        blue01: '#2563EB',
        blue02: '#3730A3',
        blue03: '#93C5FD',
        black01: '#1F2937',
        black02: '#374151',
        black03: '#4B5563',
        black04: '#111827',
        white01: '#EEF2FF',
        gray01: '#9CA3AF',
        gray02: '#E0E7FF',
        gray03: '#6B7280',
        purple01: '#D8B4FE',
        purple02: '#4F46E5',
        purple03: '#3730A3'
      },
      backgroundImage: {
        'home-hero': "url('/images/homeHero/bg.png')"
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
