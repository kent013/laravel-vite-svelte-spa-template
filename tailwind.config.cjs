/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.{js,ts}',
    './resources/**/*.svelte',
    './tailwind.safelist',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.slate,
        tertiary: colors.pink,
      },
      fontFamily: {
        mono: [
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      animation: {
        'shake-top': 'shake-top 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
