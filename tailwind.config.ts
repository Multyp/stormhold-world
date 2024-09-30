import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      backgroundColor: {
        primary: "var(--bg-primary)",
      },
      textColor: {
        primary: "var(--text-title)",
        secondary: "var(--text-content)",
        link: "var(--text-link)",
      },
      keyframes: {
        stroke: {
          to: {
            strokeDashoffset: "0px",
          },
        },
      },
      animation: {
        stroke: "stroke 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
