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
        // Refined typography scale
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.65', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.35', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
      },
      spacing: {
        // Premium section spacing
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      boxShadow: {
        // Premium layered shadows
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 4px 16px -4px rgba(0, 0, 0, 0.08)',
        'soft-md': '0 4px 12px -2px rgba(0, 0, 0, 0.06), 0 8px 24px -4px rgba(0, 0, 0, 0.1)',
        'soft-lg': '0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 16px 48px -8px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 16px 40px -8px rgba(0, 0, 0, 0.1), 0 32px 64px -16px rgba(0, 0, 0, 0.15)',
        'premium': '0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.03), 0 12px 24px rgba(0, 0, 0, 0.06)',
        'premium-lg': '0 0 0 1px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.04), 0 24px 48px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px rgba(31, 81, 76, 0.15)',
        'glow-lg': '0 0 40px rgba(31, 81, 76, 0.2)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backgroundImage: {
        // Premium gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(237,255,227,0.3) 100%)',
        'gradient-hero': 'linear-gradient(180deg, #f8faf7 0%, #ffffff 50%, #f8faf7 100%)',
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
export default config
