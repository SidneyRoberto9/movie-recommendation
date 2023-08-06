/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'movie-body': 'linear-gradient(90deg, #9f55ff 0%, #ff46b9 100%)',
        'movie-body-back': 'linear-gradient(120deg, #C497FF 30%, #9947FF 100%)',
        'button-recommendation': 'linear-gradient(90deg, #8323ff 0%, #ff2daf 100%)',
      },
      colors: {
        'yellow-banana': '#FEEA35',
        'gray-light': '#8b8d9b',
        'gray-light-500': '#2b2b37',
      },
      backgroundColor: {
        card: '#1E1F28',
      },
      boxShadow: {
        card: '0px -3px 22px 0px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
