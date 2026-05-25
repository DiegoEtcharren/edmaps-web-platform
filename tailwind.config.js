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
          blue: '#0F3A5F',   // Deep Industrial Blue (Base Background)
          green: '#0F9D58',  // Emerald Green (Quality / Approved Status)
          cyan: '#007A87',   // Technological Cyan (Connectivity)
          amber: '#F4B400',  // Technological Amber (IoT / Telemetry / Alerts)
          grey: '#37474F',   // Anthracite Grey (Subdued Contours)
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        industrial: '0.15em',
        structural: '0.25em',
      }
    },
  },
  plugins: [],
}
