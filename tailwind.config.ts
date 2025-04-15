import type { Config } from "tailwindcss";

export default {
  content: [
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./_lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#353C44",
      white: "#FFFFFF",
      red: "#FF002C",
      gold: "#FFC100",
      linkBlue: "#0000EE",
      transparent: "transparent",
    },
    fontSize: {
      paragraph: [
        "1rem",
        {
          fontWeight: "400",
        },
      ],
      subheading: [
        "1rem",
        {
          fontWeight: "700",
        },
      ],
      subheading_2: [
        "1.75rem",
        {
          fontWeight: "700",
        },
      ],
      heading: [
        "2.5rem",
        {
          fontWeight: "400",
        },
      ],
    },
    screens: {
      phone: "425px",
      tablet: "800px",
      desktop: "1360px",
    },
    extend: {
      margin: {
        15: "60px",
      },
      padding: {
        15: "60px",
      },
      gap: {
        15: "60px",
      },
    },
  },
  plugins: [],
} satisfies Config;
