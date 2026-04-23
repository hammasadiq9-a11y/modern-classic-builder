import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        accent: '#d4ff00',
        'accent-dark': '#a8cc00',
        surface: '#111111',
        'surface-2': '#1a1a1a',
        border: '#2a2a2a',
        muted: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        md: '4px',
        lg: '8px',
      },
    },
  },
  plugins: [],
}

export default config