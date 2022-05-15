module.exports = {
    content: [
      "./public/**/*.html",
      "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: 'rgb(255 255 255)',
            black: 'rgba(0 0 0)',
            gray: {
                dark: 'hsl(223, 20%, 17%)'
            }
        },
        fontFamily: {
            dmsans: ["'DM Sans'", 'tahoma', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
  }
  