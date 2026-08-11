/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        japandi: {
          bg: '#F4F0E8',         // Warm Soft Linen Cream Base
          surface: '#FAF7F2',    // Solid Elevated Card Surface
          dark: '#1F1813',       // Ultra Deep Charcoal Coffee (Crisp Headings)
          body: '#3B312A',       // High Contrast Dark Body Text
          coffee: '#5E3E29',     // Rich Artisanal Espresso Accent
          wood: '#A67844',       // Warm Timber Wood Accent
          woodDark: '#8C6234',   // Deep Timber Wood
          sage: '#485942',       // Crisp Zen Matcha / Sage
          cream: '#FFFFFF',      // Pure White Highlight
          muted: '#5C4E43',      // High-Contrast Subtitle Text
          subtle: '#E2D9C8',     // Solid Border Neutral
          shadowDark: '#B8AA96', // Crisp Neumorphic Shadow
          shadowLight: '#FFFFFF' // Bright Highlight Shadow
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'neu-flat': '10px 10px 24px rgba(184, 170, 150, 0.55), -10px -10px 24px #FFFFFF',
        'neu-flat-sm': '6px 6px 14px rgba(184, 170, 150, 0.5), -6px -6px 14px #FFFFFF',
        'neu-hover': '12px 12px 26px rgba(170, 154, 132, 0.65), -12px -12px 26px #FFFFFF',
        'neu-inset': 'inset 4px 4px 10px rgba(175, 160, 138, 0.5), inset -4px -4px 10px #FFFFFF',
        'neu-pill': '6px 6px 14px rgba(184, 170, 150, 0.5), -6px -6px 14px #FFFFFF',
      }
    },
  },
  plugins: [],
}
