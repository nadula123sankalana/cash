/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0A0A2A',
          dark: '#191970',
        },
        accent: {
          cyan: '#66D9EF',
          magenta: '#D81B60',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#AAAAAA',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1E40AF 0%, #4C1D95 50%, #6B21A8 100%)',
      },
    },
  },
  plugins: [],
}

