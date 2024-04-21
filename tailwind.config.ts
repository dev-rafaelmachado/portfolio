import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#212121',
      },
      fontFamily: {
        default: ['Lato', 'sans-serif'],
        title: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
