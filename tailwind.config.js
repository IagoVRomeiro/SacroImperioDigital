/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        vatican: {
          "primary": "#FFD700", // gold
          "secondary": "#F5F5F5", // off-white
          "accent": "#333333", // dark grey
          "neutral": "#3d4451",
          "base-100": "#ffffff", // white
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}