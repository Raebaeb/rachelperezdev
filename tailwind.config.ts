import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      special: ['"Sigana Condensed"', "sans-serif"],
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        serif: ['"Young Serif"'],
      },
    },
  },
} satisfies Config;
