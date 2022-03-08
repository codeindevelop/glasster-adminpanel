const defaultcolors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      // Persian Fonts
      sans: ['iransans'],
      pelak: ['pelak'],
      yekan: ['yekanbakh'],
      dana: ['dana'],
      // English Fonts
      pop: ['Poppins Regular'],
      sf: ['sf-ui'],
    },
    colors: {
      ...defaultcolors,
      // Light Colors
      'light-primary': '#f1faff',
      'light-danger': '#fff5f8',
      'light-info': '#f8f5ff',
      'light-success': '#e8fff3',
      'light-warning': '#fff8dd',

      //Core Colors
      primary: '#009ef7',
      success: '#50cd89',
      info: '#7239ea',
      warning: '#ffc700',
      danger: '#f1416c',
      dark: '181c32',
    },
    extend: {},
  },
  plugins: [],
};
