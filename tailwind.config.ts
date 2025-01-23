import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      special: ['"Unica One"', "sans-serif"],
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        serif: ['"Young Serif"'],
      },
    },
  },
  plugins: [],
} satisfies Config;
