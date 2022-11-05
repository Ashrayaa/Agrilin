/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'spotpurple': '#3B006A',
        'engagepurple' : '#71157A',
        'litepurple' : '#faf6fe',
      },
    },
  },
  plugins: [],
}
