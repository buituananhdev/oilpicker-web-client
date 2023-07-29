/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--redorange-700, #FAB823)',
        transaction: 'rgba(255, 249, 194, 0.47)'
      },
      boxShadow: {
        'custom': '6px 8px 23px 0px rgba(159, 153, 153, 0.30)',
      },
      
    },
  },
  plugins: [],
}