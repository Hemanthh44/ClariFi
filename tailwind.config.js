/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#07090D",
          secondary: "#0B0E13",
        },
        surface: {
          DEFAULT: "#10141B",
          elevated: "#151A22",
        },
        border: {
          DEFAULT: "#242A34",
        },
        text: {
          primary: "#F8F9FB",
          secondary: "#C2C8D2",
          muted: "#8F98A8",
        },
        accent: {
          DEFAULT: "#F0203A",
          soft: "#F0203A1F",
          cyan: "#FF7A84",
          cyanSoft: "#FF7A841A",
        },
        positive: "#34D399",
        warning: "#F59E0B",
        danger: "#FF6B78",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(240,32,58,0.20), 0 16px 44px -18px rgba(240,32,58,0.42)",
        panel: "0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 50px -24px rgba(0,0,0,0.6)",
      },
      keyframes: {
        pulseLine: {
          "0%, 100%": { strokeOpacity: 0.25 },
          "50%": { strokeOpacity: 0.9 },
        },
        floatNode: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        pulseLine: "pulseLine 2.8s ease-in-out infinite",
        floatNode: "floatNode 5s ease-in-out infinite",
        rise: "rise .4s ease-out both",
      },
    },
  },
  plugins: [],
};
