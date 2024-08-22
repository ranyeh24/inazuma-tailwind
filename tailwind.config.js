/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: ["selector", "[data-web-theme=dark]"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#3d63dd",
          color: "#fff",
          light: {
            1: "#fdfdfe",
            2: "#f7f9ff",
            3: "#edf2fe",
            4: "#dfeaff",
            5: "#d0dfff",
            6: "#bdd1ff",
            7: "#a6bff9",
            8: "#87a5ef",
            9: "#3d63dd",
            10: "#3657c3",
            11: "#395bc7",
            12: "#1d2e5c",
          },
          dark: {
            1: "#1d222e",
            2: "#1e2534",
            3: "#233157",
            4: "#273a6f",
            5: "#2e4480",
            6: "#364d8e",
            7: "#3e58a0",
            8: "#4664b8",
            9: "#3d63dd",
            10: "#3154cd",
            11: "#94b5ff",
            12: "#d5e2ff",
          },
        },
        body: {
          light: {
            1: "#fcfcfd",
            2: "#f9f9fb",
            3: "#eff0f3",
            4: "#e7e8ec",
            5: "#e0e1e6",
            6: "#d8d9e0",
            7: "#cdced7",
            8: "#b9bbc6",
            9: "#8b8d98",
            10: "#80828d",
            11: "#62636c",
            12: "#1e1f24",
          },
          dark: {
            1: "#212224",
            2: "#28292b",
            3: "#303134",
            4: "#36373b",
            5: "#3c3d42",
            6: "#43444a",
            7: "#4f5058",
            8: "#666872",
            9: "#72747f",
            10: "#7d7f8a",
            11: "#b4b6bf",
            12: "#eeeef0",
          },
        },
      },
      borderColor: {
        alpha: {
          light: "#00073527",
          dark: "#d6dbfc2f",
        },
      },
      backgroundColor: {
        body: {
          striped: {
            light: "#00005506",
            dark: "#adc5f30f",
          },
        },
      },
      boxShadow: {
        "card-1": "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "card-2": "0px 10px 20px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
