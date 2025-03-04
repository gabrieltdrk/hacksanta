/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'fade-in-up': 'fadeInUp 500ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        colors: {
          '--color-principal-70': '#EDEFF2',
          '--color-principal-80': '#444466',
          '--color-principal-90': '#222244',
          '--color-principal-100': '#111133',

          '--color-secondary-60': '#FFEECC',
          '--color-secondary-70': '#FFCC99',
          '--color-secondary-80': '#FFAA66',
          '--color-secondary-90': '#FF8833',
          '--color-secondary-100': '#FF5522',
          '--color-secondary-110': '#CC4400',
          '--color-secondary-120': '#993300',
          '--color-secondary-130': '#662200',

          '--color-neutral-60': '#FCFDFF',
          '--color-neutral-70': '#E6E9F2',
          '--color-neutral-80': '#C2C4CC',
          '--color-neutral-90': '#A1A3AA',
          '--color-neutral-100': '#818388',
          '--color-neutral-110': '#515255',
          '--color-neutral-120': '#303133',
          '--color-neutral-130': '#0B0C0D',

          '--color-sucess-60': '#EEFFBB',
          '--color-sucess-70': '#BBEE88',
          '--color-sucess-80': '#88CC66',
          '--color-sucess-90': '#55BB44',
          '--color-sucess-100': '#229922',
          '--color-sucess-110': '#118822',
          '--color-sucess-120': '#006622',
          '--color-sucess-130': '#004422',

          '--color-alert-60': '#FFFFCC',
          '--color-alert-70': '#FFEE99',
          '--color-alert-80': '#FFEE66',
          '--color-alert-90': '#FFDD33',
          '--color-alert-100': '#FFCC00',
          '--color-alert-110': '#CC9900',
          '--color-alert-120': '#997700',
          '--color-alert-130': '#664400',

          '--color-error-60': '#FFDDCC',
          '--color-error-70': '#FFAA99',
          '--color-error-80': '#FF7766',
          '--color-error-90': '#FF4433',
          '--color-error-100': '#DD0000',
          '--color-error-110': '#BB0000',
          '--color-error-120': '#880000',
          '--color-error-130': '#660000',
        },
        plugins: [

        ],
      }
    }
  }
}