/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        primary: {
          neon: "#8A2BE2",
          dark: "#4B0082",
          accent: "#9370DB"
        },
        cyan: {
          glow: "#00FFFF",
          dim: "rgba(0, 255, 255, 0.2)"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(138, 43, 226, 0.5)',
        'glow-lg': '0 0 40px rgba(138, 43, 226, 0.8)',
        'glow-cyan': '0 0 15px rgba(0, 255, 255, 0.4)',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
