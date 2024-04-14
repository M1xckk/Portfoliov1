import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "darkmode-on": ["darkmode-on", "sans-serif"]
      },
      colors: {
        "gunmetal": "#333841",
        "blue-purple": "#413E78",
        "dark-blue-purple": "#2E294E",
        "pale-blue": "#BCE1EE",
        "slate-black": "#272727",
        "background-blue": "#08131E",
        "background-dark-blue": "#03070F",
        "pale-white": "#FFFCF2",
        "off-white": "#E5E2DA",
        "snow-white": "#FFFAFA",
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
