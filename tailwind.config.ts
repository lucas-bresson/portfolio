import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
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
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        // bookmark
        softBlue: 'hsl(231, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        fadedSteel: 'hsl(229, 8%, 60%)',
        shadowyNavy: 'hsl(229, 31%, 21%)',
        // memory-game
        darkBlue: 'hsl(205, 45%, 15%)',
        // clipboard
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        // darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
        // fylo
        deepNavy: 'hsl(218, 28%, 13%)',
        midnightBlue: 'hsl(216, 53%, 9%)',
        richOcean: 'hsl(219, 30%, 18%)',
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
        smokySlate: '	hsl(235, 31%, 30%)',
        deepNavyShade: 'hsl(232.9,36.2%,18.4%)',
        charcoalNavy: 'hsl(232, 41%, 14%)',
        pastelBlue: 'hsl(225.4,90.2%,92%)',
        grayishBlue3: 'hsl(232, 13%, 43%)',
        pastelRed: 'hsl(0, 91%, 71%)',
        // multi-step form
        marineBlue: 'hsl(213, 96%, 18%)',
        purplishBlue: 'hsl(243, 100%, 62%)',
        lightSkyBlue: 'hsl(228, 100%, 84%)',
        strawberryRed: 'hsl(354, 84%, 57%)',
        coolGray: 'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        // home
        deepCharcoalGray: '#212a31',
        slateGray: '#3c4754',
        oceanBlue: '#124e66',
        mutedTeal: '#748d92',
        lightAsh: '#d3d9d4',
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
        // multi-step-form
        'sidebar-mobile': "url('/multi-step-form/bg-sidebar-mobile.svg')",
        'sidebar-desktop': "url('/multi-step-form/bg-sidebar-desktop.svg')",
      }),
    },
  },
  plugins: [],
};
export default config;
