module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      heading: ["Orbitron", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brandBlue: '#224A59',
        brandYellow: '#F2BC1B'
      }
    }
  },
  plugins: []
}
