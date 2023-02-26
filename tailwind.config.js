module.exports = {
  darkMode: "class",
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],

  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
};
