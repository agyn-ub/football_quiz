/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        madrid: {
          gold: '#FEBE10',
          blue: '#00529F',
          white: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
} 