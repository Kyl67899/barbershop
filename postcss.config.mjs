const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: "./tailwind.config.js",
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
      ],
    },
  },
};
export default config;