/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./site/layouts/**/*.html",
    "./site/layouts/**/*.htm",
    "./site/content/**/*.{html,md}",
    "./site/data/**/*.{json,yaml,yml}",
    "./src/**/*.{js,ts,css,scss}",
  ],
  safelist: [
    // основні swiper класи
    "swiper-container",
    "swiper-wrapper",
    "swiper-slide",

    "swiper-container-trusted",
    "swiper-container-trusted-desktop",
    "swiper-container-trusted-mobile",

    "swiper-container-products",

    "swiper-pagination-trusted",
    "swiper-pagination-bullet-custom",
    "swiper-pagination-bullet-active-custom",

    "swiper-button-next-custom",
    "swiper-button-prev-custom",

    "trusted-pagination-dot",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
        wallpoet: ["Wallpoet", "sans-serif"],
      },
    },
  },
  plugins: [],
};
