/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "industrial-navy": "#0F3A5F",
        "growth-green": "#0F9D58",
        "slate-steel": "#37474F",
        "status-warning": "#FFA000",
        "status-error": "#D32F2F",
        "primary": "#002441",
        "background": "#f7fafc",
        "on-background": "#181c1e",
        "secondary": "#506169",
        "on-secondary": "#ffffff",
        "primary-container": "#0f3a5f",
        "on-primary-container": "#80a4cf",
        "secondary-container": "#d1e2ec",
        "surface-container-low": "#f1f4f6",
        "surface-container-lowest": "#ffffff",
        "surface": "#f7fafc",
        "on-surface": "#181c1e"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['"Courier Prime"', 'monospace']
      },
      spacing: {
        "base": "8px",
        "gutter": "24px",
        "margin-desktop": "40px",
        "margin-mobile": "16px",
        "max-width": "1440px"
      },
      letterSpacing: {
        "display-lg": "-0.02em",
        "headline-lg": "-0.01em",
        "label-caps": "0.15em"
      }
    }
  },
  plugins: []
}
