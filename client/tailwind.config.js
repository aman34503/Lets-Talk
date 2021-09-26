module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#540834",
      secondary: "#30101f",
      tertiary: "#750238",
      highlight: "#750238",
    }),

 

    colors: {

      primary: "#1B2431",
      secondary: "#016795",
      tertiary: "#1E488F",
      white: "#ffffff",
    },
    fontFamily: {
      serif: ["poppins"],
    },
  },
  variants: {
    backgroundColor: ["active"],
    width: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};
