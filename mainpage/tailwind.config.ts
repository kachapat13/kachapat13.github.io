import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");
const customColors = {
  primary: {
    light: "46, 46, 49",
    normal: "25, 25, 25",
  },
  secondary: {
    lighter: "192, 185, 210",
    light: "139, 127, 172",
    normal: "75, 60, 115",
    dark: "21, 21, 35",
  }
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    fontFamily: {
      'playfair-display': ['Playfair Display', 'Prompt'],
    },
    extend: {
      colors: customColors,
      backgroundImage: {
        'iridescent-fluid': "url('/img/iridescent_fluid.png')",
        'grainy': "url('/textures/grainy.png')",
        'logo': "url('/logo.png')",
        'primary-dark-gradient': `linear-gradient(115deg, rgb(${customColors.primary.light}) 0%, rgb(${customColors.primary.normal}) 30%, rgb(${customColors.secondary.dark}) 100%)`,
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
