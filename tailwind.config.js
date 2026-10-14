/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#090d16",
        surface: "#0b0f1a",
        surfaceBorder: "rgba(255, 255, 255, 0.1)",
        obsidian: {
          base: "#090d16",
          card: "#0b0f1a",
          panel: "#0f1422",
          border: "rgba(255, 255, 255, 0.1)",
        },
        neon: {
          rose: "#f43f5e",
          amber: "#f59e0b",
          cyan: "#06b6d4",
          emerald: "#10b981",
          purple: "#a855f7",
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["var(--font-comfortaa)", "Comfortaa", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backdropBlur: {
        "2xl": "40px",
        "3xl": "64px",
      },
    },
  },
  plugins: [],
};
