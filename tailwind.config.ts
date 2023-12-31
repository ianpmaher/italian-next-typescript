import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, var(--green-color) 0%, var(--blue-color) 100%)',
      },
        colors: {
            'pink-custom-color': '#EF476F',
            'yellow-custom-color': '#FFD166',
            'green-custom-color': '#06D6A0',
            'blue-custom-color': '#00B0FF',
            'blue-darker-custom-color': '#118AB2',
            'blue-darkest-custom-color': '#073B4C',
            'light-color': '#FFFFFF',
        },
    },
  },
  plugins: [],
}
export default config
