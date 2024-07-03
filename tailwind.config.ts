import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      spacing: {
        128: "32rem",
      },
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
      },
      fontSize: {
        xxxs: "0.5rem",
        xxs: "0.625rem",
        //   text-xxxs    font-size: 0.5rem; /* 8px */
        //   text-xxs     font-size: 0.625rem; /* 10px */
        //   text-xs	    font-size: 0.75rem; /* 12px */
        //   text-sm	    font-size: 0.875rem; /* 14px */
        //   text-base	  font-size: 1rem; /* 16px */
        //   text-lg	    font-size: 1.125rem; /* 18px */
        //   text-xl	    font-size: 1.25rem; /* 20px */
        //   text-2xl	    font-size: 1.5rem; /* 24px */
        //   text-3xl	    font-size: 1.875rem; /* 30px */
      },
      letterSpacing: {
        doubleWide: ".2em",
        tripleWide: ".3em",
      },
      content: {
        check: 'url("/images/icon-check.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
