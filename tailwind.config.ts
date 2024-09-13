import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}', // Adjust paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark","light","black"], // You can add more themes here
  },
};

export default config;