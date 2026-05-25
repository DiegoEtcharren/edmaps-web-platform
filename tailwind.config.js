/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          navy: '#0F3A5F',     // Deep Industrial Blue (Base Background / primary_container)
          green: '#0F9D58',    // Emerald Green (Quality Route / Approved Status / growth-green)
          steel: '#37474F',    // Anthracite Grey / Slate Steel
          amber: '#FFA000',    // Technological Amber (Telemetry / IoT Critical Alerts / status-warning)
          cyan: '#007A87',     // Technological Cyan (Connectivity)
          error: '#D32F2F',    // Status Error
          primary: '#002441',
          background: '#f7fafc'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['"Courier Prime"', 'monospace']
      },
      spacing: {
        'base': '8px',
        'gutter': '24px',
        'margin-desktop': '40px',
        'margin-mobile': '16px'
      },
      maxWidth: {
        'max-width': '1440px'
      },
      letterSpacing: {
        'display-lg': '-0.02em',
        'headline-lg': '-0.01em',
        'label-caps': '0.15em'
      }
    }
  },
  plugins: []
}
