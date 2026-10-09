/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFDF6',           // main background
        cream: '#F6F0E4',           // alternate section backgrounds
        'brand-brown': '#6D2D12',   // primary text & strong visual elements
        'roasted-brown': '#3B1C12', // dark contrast sections & footer
        'golden-amber': '#D99A16',  // buttons, borders, highlights & accents
        'golden-amber-dark': '#B8800F',
        'golden-amber-light': '#F3C053',
        'leaf-green': '#27843B',    // subtle botanical details
        'leaf-green-light': '#E8F5EB',
        'muted-taupe': '#8A7767',   // secondary text
        'taupe-light': '#EFE9DE',   // subtle dividers / borders
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(109, 45, 18, 0.05)',
        'elevated': '0 12px 32px -4px rgba(59, 28, 18, 0.09)',
        'premium': '0 20px 40px -10px rgba(59, 28, 18, 0.12)',
        'gold-glow': '0 4px 20px rgba(217, 154, 22, 0.25)',
      },
    },
  },
  plugins: [],
}
