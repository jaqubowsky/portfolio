/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(222.2, 47.4%, 11.2%)",
        muted: "hsl(210, 40%, 96.1%)",
        "muted-foreground": "hsl(222.2, 47.4%, 11.2%)",
        card: "hsl(0, 0%, 100%)",
        "card-foreground": "hsl(222.2, 47.4%, 11.2%)",
        popover: "hsl(0, 0%, 100%)",
        "popover-foreground": "hsl(222.2, 47.4%, 11.2%)",
        border: "hsl(214.3, 31.8%, 91.4%)",
        input: "hsl(214.3, 31.8%, 91.4%)",
        primary: "hsl(222.2, 47.4%, 11.2%)",
        "primary-foreground": "hsl(210, 40%, 98%)",
        secondary: "hsl(210, 40%, 96.1%)",
        "secondary-foreground": "hsl(222.2, 47.4%, 11.2%)",
        accent: "hsl(210, 40%, 96.1%)",
        "accent-foreground": "hsl(222.2, 47.4%, 11.2%)",
        destructive: "hsl(0, 100%, 50%)",
        "destructive-foreground": "hsl(210, 40%, 98%)",
        ring: "hsl(222.2, 47.4%, 11.2%)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
