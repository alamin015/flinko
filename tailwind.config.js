import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        primary: "#111",
        secondary: "#585858"
      },
      fontFamily: {
        MuseoModerno: ["MuseoModerno"],
        Poppins: ["Poppins"]
      },
      container: {
        padding: "1rem",
        center: true
      }
    }
  },
  plugins: []
};
