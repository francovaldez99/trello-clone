/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cardShadow: {
        custom: '0px 4px 12px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}