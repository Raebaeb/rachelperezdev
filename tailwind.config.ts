import type { Config } from "tailwindcss";
import TailwindCSSAnimated from "tailwindcss-animated";

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
  plugins: [TailwindCSSAnimated],
} satisfies Config;
