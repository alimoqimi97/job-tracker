const colors = require('tailwindcss/colors')



module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      slate: colors.slate,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      primary: 'hsl(180, 29%, 50%)',
      secondary: 'hsl(180, 52%, 96%)',
      light: 'hsl(180, 31%, 95%)',
      dark: 'hsl(180, 8%, 52%)',
      veryDark: 'hsl(180, 14%, 20%)',
    },
    extend: {
      backgroundImage: {
        'desktop-header': "url('/bg-header-desktop.svg')",
        'mobile-header': "url('/bg-header-mobile.svg')",
      }
    },
  },
  plugins: [],
}
