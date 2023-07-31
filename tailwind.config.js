export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ranchi': "#EFE8FD",
        'gray': "#6E7275",
        'blue-dark': "#3F2945",
        'light-blue': "#AF8BFC",
        'dark-blue': "#8366BF"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif']
      },
      height: {
        '128': '470px',
      },
      backgroundImage: {
        'contract-bg': "url('./src/assets/contractbg.png')"
      }
    },
  },
  plugins: [],
}

