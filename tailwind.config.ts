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
        'paynesGray' : '#586F7C',
        'lightBlue' : '#B8DBD9',
        'ghostWhite' : '#F4F4F9'
      },
      keyframes: {
        'slide-bottom': {
          '0%': { transform: 'translateY(100%)'},
          '100%' : { transform: 'translateX(0%)'} 
        }
      },
      animation: {
        'slide-bottom': 'slide-bottom 1s ease-out'
      },
    },
  },
  plugins: [],
};
export default config;
