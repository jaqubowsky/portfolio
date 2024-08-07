/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#222",
        secondary: "#fff",
        background: "#F3F4F6",
        foreground: "#0C0E1D",
        muted: "#9CA3AF",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
