import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");
const customColors = {
  primary: {
    light: "rgba(46, 46, 49, 1)",
    normal: "rgba(25, 25, 25, 1)",
    normal_75: "rgba(25, 25, 25, 0.75)",
  },
  secondary: {
    light: "rgba(139, 127, 172, 1)",
    light_75: "rgba(139, 127, 172, 0.75)",
    normal: "rgba(75, 60, 115, 1)",
    dark: "rgba(21, 21, 35, 1)",
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
    extend: {
      colors: customColors,
      backgroundImage: {
        // 'grainy': "url('/textures/grainy.jpg')",
        'grainy': "url('/textures/grainy.svg')",
        'logo': "url('/logo.png')",
        'primary-dark-gradient': `linear-gradient(115deg, ${customColors.primary.light} 0%, ${customColors.primary.normal} 30%, ${customColors.secondary.dark} 100%)`,
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
