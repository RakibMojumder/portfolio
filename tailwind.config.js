/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ['Roboto Mono', 'monospace']
      }
    },
  },
  plugins: [require('preline/plugin'),],
}