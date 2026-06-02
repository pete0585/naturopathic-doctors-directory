import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2D6A4F',
          'primary-dark': '#1F4D38',
          'primary-light': '#3D8A65',
          sage: '#74A57F',
          'sage-light': '#9DC4A8',
          cream: '#F8F3E8',
          gold: '#C5A84C',
          'gold-light': '#DFC06A',
        },
        surface: {
          DEFAULT: '#FDFAF5',
          card: '#FFFFFF',
          border: '#E8E1D9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
