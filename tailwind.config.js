module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    './demo/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  safelist: [
    'alert-error',
    'alert-info',
    'alert-warning',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      dropShadow: {
        outline: [
          '1px 0px 0px black',
          '-1px 0px 0px black',
          '0px 1px 0px black',
          '0px -1px 0px black',
        ]
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
