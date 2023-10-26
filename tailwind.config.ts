import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      green: "#43faa7",
      black: "#040404",
      white: "white",
    },
    fontFamily: {
      "londrina-solid": ["var(--font-londrina-solid)"],
    },
  },
  plugins: [],
};
export default config;
