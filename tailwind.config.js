
module.exports = {
  mode: 'jit',
  content: [
    "./**/*.{html,js,hbs}"
  ],
  theme: {
    screens: {
      'xs': '576px',
      'sm': '768px',
      'md': '992px',
      'lg': '1199px',
      'xl': '1375px',
    },
    colors:{
      dark: '#000000',
      primary: '#ff993e',
      pragrapgh: '#3D4044',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      Jakarta: ['Plus Jakarta Sans', 'sans-serif'],
    }, 
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

