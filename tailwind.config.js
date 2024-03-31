
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
      primary: '#FFFDC6',
      pragrapgh: '#3D4044',
      white: '#ffffff',//use
      light_gray: "#777C85",
      black: "#000000",
      green_light:"#085122",
      border_color: "#DEDDE6",
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
    // require('@tailwindcss/typography')
  ],
}

