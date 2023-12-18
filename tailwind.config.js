
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
      'xl': '1264px',
    },
    colors:{
      transparent: 'transparent',
      dark: '#000000',
      primary: '#ff993e',
      pragrapgh: '#3D4044',
      white: '#ffffff',//use
      gray:{
        80: '#C3C5C5', //use
        50:'#F7F7F7',
      },
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

