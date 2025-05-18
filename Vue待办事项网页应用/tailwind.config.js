// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#28a745', // 自定义主色（绿色）
        secondary: '#6c757d',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}