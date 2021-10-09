module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: ['last'],
      colors: {
        purple: "rgb(73,28,93)",
        orange: "rgb(252, 189, 112)",
        cream: "rgb(255,245,229)",
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      backgroundColor: ['active'],
      divideColor: ['group-hover'],
      backgroundColor: ['group-focus'],
      scale: ['focus-within'],
      textDecoration: ['focus-visible'],
      animation: ['motion-safe'],
      animation: ['motion-reduce'],
    },
  },
  plugins: [],
};
