/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "530px",
        smxl: "765px",
        md: "960px",
        smlg: "1110px",
        lg: "1230px",
        xllg: "1350px",
      },
    },
  },
  plugins: [],
};
