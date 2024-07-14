import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      overflowWrap: {
        "break-word": "break-word",
      },
      wordBreak: {
        "break-word": "break-word",
      },
      overflow: {
        hidden: "hidden",
      },
      textOverflow: {
        ellipsis: "ellipsis",
      },
    },
  },
  plugins: [],
};
export default config;
