/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: { 128: "32rem" },
    },
    backgroundImage: {
      eu: 'url("../assets/me-profile.jpeg")',
      background: 'url("../assets/background-main-page.jpg")',
    },
  },
  plugins: [],
};