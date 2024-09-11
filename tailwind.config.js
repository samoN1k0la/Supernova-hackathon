/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'design-orange': '#f66955',
        'design-green': '#01b29e',
        'design-pink': '#ef639c',
        'design-purple': '#ba79cb',
        'design-gray': '#dedede'
      },
    },
  },
  plugins: [],
}

