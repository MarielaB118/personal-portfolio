import { transcode } from "buffer";
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
          '0%': { transform: 'translateY(100%)' },
          '100%' : { transform: 'translateX(0%)' } 
        },
        'slide-right':{
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        'slide-bottom': 'slide-bottom 1s ease-out',
        'slide-right': 'slide-right 1s ease-out'
      },
      scale: {
        'flip': '-1'
      }
    },
  },
  plugins: [],
};
export default config;
