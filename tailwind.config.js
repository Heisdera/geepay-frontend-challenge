/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Plus Jakarta Sans, sans-serif",
    },

    extend: {
      fontSize: {
        custom: "13px",
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",

        "success-color": "var(--success-color)",
        "error-color": "var(--error-color)",
        "warning-color": "var(--warning-color)",

        "white-color": "var(--white-color)",
        "background-color": "var(--background-color)",

        "neutral-gray-50": "var(--neutral-gray-50)",
        "neutral-gray-100": "var(--neutral-gray-100)",
        "neutral-gray-200": "var(--neutral-gray-200)",
        "neutral-gray-300": "var(--neutral-gray-300)",
        "neutral-gray-400": "var(--neutral-gray-400)",
        "neutral-gray-500": "var(--neutral-gray-500)",
        "neutral-gray-600": "var(--neutral-gray-600)",
        "neutral-gray-700": "var(--neutral-gray-700)",
        "neutral-gray-800": "var(--neutral-gray-800)",
        "neutral-gray-900": "var(--neutral-gray-900)",

        "primary-color-12": "var(--primary-color-12)",
        "error-color-12": "var(--error-color-12)",
        "text-color": "var(--text-color)",
        "stat-color": "var(--stat-color)",
        "sidebar-bgColor": "var(--sidebar-bgColor)",
        "border-color": "var(--border-color)",

        "purple-color": "var(--purple-color)",
        "blue-color": "var(--purple-color)",
        "orange-color": "var(--purple-color)",
        "red-color": "var(--purple-color)",
        "tooltip-bgColor": "var(--tooltip-bgColor)",
      },
    },
  },
  plugins: [],
};
