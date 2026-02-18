/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1e3a8a",
        "accent-red": "#cc1616",
        "background-light": "#f6f8f7",
        "background-dark": "#09090b",
        "card-dark": "#18181b",
        "border-dark": "#27272a",
      },
      fontFamily: {
        'source-code': ['Source Code Pro', 'monospace'], // Menambahkan font
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
