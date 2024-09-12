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
        // clipboard
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        // darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        // fylo
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
        // shortly
        cyan: 'hsl(180, 66%, 49%)',
        cyanLight: 'hsl(180, 66%, 69%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
        // pomodoro
        darkBlue6: '	hsl(234, 33%, 24%)',
        darkBlue4: 'hsl(232.9,36.2%,18.4%)',
        darkBlue5: 'hsl(232, 41%, 14%)',
        pastelBlue: 'hsl(225.4,90.2%,92%)',
        grayishBlue3: 'hsl(232, 13%, 43%)',
        pastelRed: 'hsl(0, 91%, 71%)',
      },
      fontSize: {
        xxxs: '0.5rem',
        xxs: '0.625rem',
      },
      letterSpacing: {
        doubleWide: '.2em',
        tripleWide: '.3em',
        quadrupleWide: '.4em',
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
      backgroundImage: () => ({
        // bookmark
        dots: "url('/../../../../bookmark/bg-dots.svg')",
        // fylo
        'logo-dark-mode': "url('/../../../../fylo/logo-dark-mode.svg')",
        'logo-light-mode': "url('/../../../../fylo/logo-light-mode.svg')",
        'curvy-dark-mode': "url('/../../../../fylo/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('/../../../../fylo/bg-curvy-light-mode.svg')",
      }),
    },
  },
  plugins: [],
};
export default config;
