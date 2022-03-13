const defaultcolors = require('tailwindcss/colors');
let colors = require('tailwindcss/colors');
colors = { ...colors, ...{ transparent: 'transparent' } };

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      // Persian Fonts
      sans: ['iransans'],
      pelak: ['pelak'],
      yekan: ['yekanbakh'],
      iryekan: ['iranyekan'],
      dana: ['dana'],
      // English Fonts
      pop: ['Poppins Regular'],
      'pop-light': ['Poppins Light'],
      'pop-med': ['Poppins Medium'],
      'pop-bold': ['Poppins Bold'],
      sf: ['sf-ui'],
    },
    fontSize: {
      xxs: ['0.6rem', { lineHeight: '1.2' }],
      xs: ['0.75rem', { lineHeight: '1.5' }],
      sm: ['0.875rem', { lineHeight: '1.5715' }],
      base: ['1rem', { lineHeight: '1.5' }],
      lg: ['1.125rem', { lineHeight: '1.5' }],
      xl: ['1.25rem', { lineHeight: '1.5' }],
      '2xl': ['1.5rem', { lineHeight: '1.33' }],
      '3xl': ['1.88rem', { lineHeight: '1.33' }],
      '4xl': ['2.25rem', { lineHeight: '1.25' }],
      '5xl': ['3rem', { lineHeight: '1.25' }],
      '6xl': ['3.75rem', { lineHeight: '1.2' }],
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      ...colors,
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

      // Custom Partials Color
      'aside-light-bg': '#E2E8F0',
    },

    extend: {},
  },
  // Custom Variants for css classess
  variants: {
    animate: ['transition-all', 'duration-300'],
    display: ['responsive', 'group-hover'],
    wordBreak: ['responsive', 'group-hover'],
    textOverflow: ['responsive', 'group-hover'],
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    backgroundColor: ['group-hover', 'hover'],
    outline: ['focus'],
  },
  plugins: [],
};
