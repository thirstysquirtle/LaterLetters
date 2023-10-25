/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {

    extend: {
      colors: {
        // Using modern `rgb`
        themeBG: 'rgb(var(--color-themeBG) / <alpha-value>)',
        themeAccent: 'rgb(var(--color-themeAccent) / <alpha-value>)',
        txtPrim:'rgb(var(--color-txtPrim) / <alpha-value>)',
        txtSec:'rgb(var(--color-txtSec) / <alpha-value>)',
        
      },
    },
  },
  plugins: [],
}

