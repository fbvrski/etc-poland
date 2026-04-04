import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2D8A",
          dark: "#091D5E",
          light: "#1A4DB8",
        },
        accent: "#2E7DE0",
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#EEF2F8",
          dark: "#0F2D8A",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
