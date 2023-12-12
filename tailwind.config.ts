import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      
        screens: {
          '3xl': '1600px',
        },
     
    },
  },
  plugins: [],
} satisfies Config

