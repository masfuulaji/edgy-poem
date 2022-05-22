module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        ldblue: {
          100: "#1F51C6",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
