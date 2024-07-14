/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        "3d": "1px 1px 0 #fff, 2px 2px 0 #e5e5e5, 3px 3px 0 #d9d9d9, 4px 4px 0 #ccc, 5px 5px 0 #b3b3b3, 6px 6px 0 #999, 7px 7px 0 #808080, 8px 8px 0 #666, 9px 9px 0 #4d4d4d, 10px 10px 0 #333, 11px 11px 0 #1a1a1a, 12px 12px 0 #000",
        "3d-light":
          "1px 1px 0 #fff, 2px 2px 0 #e0e0e0, 3px 3px 0 #c0c0c0, 4px 4px 0 #a0a0a0, 5px 5px 0 #808080, 6px 6px 0 #606060",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-3d": {
          textShadow:
            "1px 1px 0 #fff, 2px 2px 0 #e5e5e5, 3px 3px 0 #d9d9d9, 4px 4px 0 #ccc, 5px 5px 0 #b3b3b3, 6px 6px 0 #999, 7px 7px 0 #808080, 8px 8px 0 #666, 9px 9px 0 #4d4d4d, 10px 10px 0 #333, 11px 11px 0 #1a1a1a, 12px 12px 0 #000",
        },
        ".text-shadow-3d-light": {
          textShadow:
            "1px 1px 0 #fff, 2px 2px 0 #e0e0e0, 3px 3px 0 #c0c0c0, 4px 4px 0 #a0a0a0, 5px 5px 0 #808080, 6px 6px 0 #606060",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
