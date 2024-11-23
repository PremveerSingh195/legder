/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "450px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      sm1: "690px",

      md: "768px",
      // => @media (min-width: 768px) { ... }

      md1: "776px",

      md2: "850px",

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      lg1: "1040px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, hsla(0, 0%, 90%, .2), hsla(0, 0%, 90%, .05) 75.8%)",
        "custom-gadient-hover":
          "linear-gradient(90deg,rgba(212,160,255,.4),rgba(212,160,255,0) 75.8%,rgba(212,160,255,.24))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};