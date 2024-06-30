/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        kaisei: ["var(--font-kaisei)"],
        montserrat: ["var(--font-montserrat)"],
        jolly: ["var(--font-jolly-lodger)"],
      },
      colors: {
        background: "hsl(var(--background))",
        sBackground: "hsl(var(--secondary-background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
