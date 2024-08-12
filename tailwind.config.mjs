/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#fffbff",
        foreground: "#1e1b1e",
        card: "#fffbff",
        "card-foreground": "#1e1b1e",
        popover: "#fffbff",
        "popover-foreground": "#1e1b1e",
        primary: "#7f4894",
        "primary-foreground": "#ffffff",
        secondary: "#a398a3",
        "secondary-foreground": "#1e1b1e",
        muted: "#ebdfe9",
        "muted-foreground": "#4c444d",
        accent: "#f7eff3",
        "accent-foreground": "#332f33",
        destructive: "#ba1a1a",
        "destructive-foreground": "#ffffff",
        border: "#ebdfe9",
        input: "#ebdfe9",
        ring: "#f9d8ff",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
