module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    './demo/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "var(--tg-theme-button-color)",
          'primary-content': "var(--tg-theme-button-text-color)",
          neutral: "var(--tg-theme-bg-color)",
          'neutral-content': "var(--tg-theme-text-color)",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "var(--tg-theme-button-color)",
          'primary-content': "var(--tg-theme-button-text-color)",
          neutral: "var(--tg-theme-bg-color)",
          'neutral-content': "var(--tg-theme-text-color)",
        }
      }
    ],
  },
};
