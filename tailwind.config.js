/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Light Theme Colors */
        'portfolio-light-bg': '#FAFAF9',
        'portfolio-light-surface': '#E7E5E4',
        'portfolio-light-text': '#1C1917',
        'portfolio-light-muted': '#78716C',
        /* Dark Theme Colors */
        'portfolio-dark-bg': '#0F172A',
        'portfolio-dark-surface': '#1E293B',
        'portfolio-dark-text': '#F8FAFC',
        'portfolio-dark-muted': '#94A3B8',
        /* Accent Colors */
        'portfolio-primary': '#2563EB',
        'portfolio-accent': '#F59E0B',
      },
      fontFamily: {
        'moderniz': ['Moderniz', 'sans-serif'],
        'bauhaus': ['Bauhaus93', 'sans-serif'],
      },
      animation: {
        shadowFade: 'shadowFade 5s infinite ease-in-out',
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        shadowFade: {
          '0%, 100%': { filter: 'drop-shadow(-1px 6px 3px rgba(0, 255, 255, 0.5))' },
          '50%': { filter: 'drop-shadow(-1px 6px 3px rgba(0, 255, 255, 0.3))' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
