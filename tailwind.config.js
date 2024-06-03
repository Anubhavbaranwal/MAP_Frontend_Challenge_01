/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
      colors:{
        bgcolor: '#A9A9A9'
      },
      boxShadow: {
        'gray': '0 20px 15px 3px rgba(255, 255, 255, 0.5), 0 8px 6px -2px rgba(255, 255, 255, 0.3)'      
      },
      translate: ['hover'],
      transitionProperty: ['hover'],
    },
  },
  plugins: [],
};
