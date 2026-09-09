/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#050505",
          900: "#0a0a0b",
          800: "#111113",
          700: "#1a1a1e",
          600: "#26262c",
          500: "#3a3a42",
          400: "#5a5a64",
          300: "#8a8a94",
          200: "#b8b8c0",
          100: "#e0e0e6",
        },
        gold: {
          50: "#fbf7ee",
          100: "#f5ecd6",
          200: "#e9d8a8",
          300: "#dcbf73",
          400: "#d0a84a",
          500: "#c4923a",
          600: "#a8772f",
          700: "#875d28",
          800: "#6e4a22",
          900: "#5a3c1d",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slow-zoom": "slowZoom 20s ease-out forwards",
        "scroll-bounce": "scrollBounce 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.12)" },
        },
        scrollBounce: {
          "0%,100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(10px)", opacity: "0.4" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
