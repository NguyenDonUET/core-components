import { colors } from "./src/tokens/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: "3.75rem", // 60px
        h2: "3rem", // 48px
        h3: "2.25rem", // 36px
        h4: "1.75rem", // 28px
        h5: "1.5rem", // 24px
        h6: "1.25rem", // 20px
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
}
