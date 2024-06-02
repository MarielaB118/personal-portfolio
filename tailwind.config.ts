import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal' : '#2F4550',
        'aynesGray' : '#586F7C',
        'ashGray' : '#C2D3CD',
        'ghostWhite' : '#F4F4F9'
      },
    },
  },
  plugins: [],
};
export default config;
