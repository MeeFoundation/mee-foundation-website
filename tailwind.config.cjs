/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
import theme from 'mee-components/tailwind';

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/mee-components/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: theme,
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    plugin(({matchUtilities, theme}) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        meeTheme: {
          primary: '#4E868E',
          'primary-content': '#FFFFFF',
          secondary: '#F1D77A',
          'secondary-content': '#F5F6F6',
          accent: '#F5B68926',
          neutral: '#333C4D',

          'base-100': '#FFFFFF', // background

          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#E66C4E',
        },
      },
    ],
  },
};
