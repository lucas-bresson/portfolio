import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      spacing: {
        128: '32rem',
      },
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        // sneakers-ecommerce
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        // bookmark
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue2: 'hsl(229, 8%, 60%)',
        veryDarkBlue2: 'hsl(229, 31%, 21%)',
        // memory-game
        darkBlue: 'hsl(205, 45%, 15%)',
      },
      fontSize: {
        xxxs: '0.5rem',
        xxs: '0.625rem',
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
        doubleWide: '.2em',
        tripleWide: '.3em',
      },
      content: {
        check: 'url("/images/icon-check.svg")',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'scale(0.75)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-out forwards',
      },
      backgroundImage: (theme) => ({
        // bookmark
        dots: "url('/../../../../bookmark/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
};
export default config;
