/** @type {import('tailwindcss').Config} */
import theme from "tailwindcss/defaultTheme";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#04EBCF",
        secondary: "#3DA3DE",
        tertiary: "#AD00FE",
        lila: "#5D6BF0",
        musgo: "#20C8D9",
        darkMusgo: "#1A9FAF",
        accent: "#1E3D4F",
        light: "#DAF4F8",
      },
    },
  },
  plugins: [],
};
