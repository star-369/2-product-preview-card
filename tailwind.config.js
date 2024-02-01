/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./css/style.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-cyan": "var(--dark-cyan)",
      "darker-cyan": "var(--darker-cyan)",
      cream: "var(--cream)",

      "very-dark-blue": "var(--very-dark-blue)",
      "dark-grayish-blue": "var(--dark-grayish-blue)",
      white: "var(--white)",
    },
    fontFamily: {
      montserrat: "var(--montserrat)",
      fraunces: "var(--fraunces)",
    },
  },
  plugins: [],
};
