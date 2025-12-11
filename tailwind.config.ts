import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // -------------------------
        // 🔥 UNIFIED RAPS BRAND PALETTE
        // -------------------------

        // Core Brand Colors
        "brand-orange": "#FE7F2D",
        "brand-gold": "#E5D352",
        "brand-burgundy": "#7B2D26",
        "brand-success": "#2BB673",
        "brand-muted-gray": "#6B6B6B",
        "brand-light-bg": "#FFFFFF",
        "brand-body": "#333333",

        // Backgrounds
        "background-light": "#FFFFFF",
        "background-dark": "#1a1a1a",

        // Text Colors
        "brand-text-light": "#181310",
        "brand-text-dark": "#e5e5e5",
        "brand-text-muted-light": "#8d6e5e",
        "brand-text-muted-dark": "#a3a3a3",

        // Surfaces
        "brand-surface-light": "#f8f6f5",
        "brand-surface-dark": "#2c2c2c",

        // Utility Colors (Takeaway / Settings / Menu Merged)
        "brand-blue": "#0d7ff2",        // takeaway blue
        "brand-orange-strong": "#FD7E14",
        "brand-green-strong": "#28A745",
        "brand-yellow": "#FFC107",
        "brand-red": "#DC3545",
        "brand-gray-text": "#60758a",
        "brand-strong-text": "#111418",

        // Borders
        "brand-border-light": "#e7dfda",
        "brand-border-dark": "#3a3a3a",

        // Aliases (for compatibility)
        primary: "#FE7F2D",
        highlight: "#E5D352",
        heading: "#7B2D26",
        body: "#333333",
        secondary: "#E5D352",
        tertiary: "#7B2D26",
      },

      fontFamily: {
        display: ["Be Vietnam Pro", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};

export default config;
