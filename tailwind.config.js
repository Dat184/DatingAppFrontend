/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
        MJ: ["MJ Glamour Coquette", "sans-serif"],
      },
      colors: {
        lavender: {
          50: "#f9f7ff",
          100: "#f4effe",
          200: "#e9dffd",
          300: "#d8c6fa",
          400: "#c2a3f1",
          500: "#ab7de8",
          600: "#9660da",
          700: "#8047bf",
          800: "#6a3d9c",
          900: "#5a357d",
        },
        rose: {
          50: "#fff1f6",
          100: "#ffe4ee",
          200: "#fecdd8",
          300: "#fda4b9",
          400: "#fb7195",
          500: "#f33e6f",
          600: "#e31d51",
          700: "#c01244",
          800: "#a01239",
          900: "#861334",
        },
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to bottom, rgba(74, 47, 103, 0.5), rgba(74, 47, 103, 0.7)), url('/src/assets/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
