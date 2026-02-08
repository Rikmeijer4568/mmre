import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - dark teal/green
        primary: {
          50: '#EDFFE3',   // Light accent green
          100: '#d8f5cd',
          200: '#b5eba0',
          300: '#8ddc6e',
          400: '#5fc445',
          500: '#3da32a',
          600: '#2d8220',
          700: '#1F514C',  // Main brand color
          800: '#1a4540',
          900: '#153835',
          950: '#0d2320',
        },
        // Accent colors
        accent: {
          DEFAULT: '#1F514C',  // Main brand color
          light: '#2a6b64',
          dark: '#163b37',
        },
        // Light green for highlights
        highlight: {
          DEFAULT: '#EDFFE3',
          dark: '#d8f5cd',
        },
        // WhatsApp green
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-hedvig)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Custom text size
        'body': ['24px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}
export default config
