import {CustomSlider} from "./slider.js";

// Initialize all sliders exactly as in your index.js
export function initializeSliders() {
  // Check if elements exist before initializing
  const trustedDesktop = document.querySelector(".swiper-container-trusted-desktop");
  const trustedMobile = document.querySelector(".swiper-container-trusted-mobile");
  const productsSlider = document.querySelector(".swiper-container-products");

  // Desktop/Tablet trusted companies slider (4 visible)
  if (trustedDesktop) {
    new CustomSlider(".swiper-container-trusted-desktop", {
      autoplay: true,
      loop: true,
      slidesPerView: 4,
      spaceBetween: 0,
      paginationCount: 4,
      fixedSlideWidth: null,
      responsive: {
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
    });
  }

  // Mobile trusted companies slider (1 slide showing 2x2 grid inside)
  if (trustedMobile) {
    new CustomSlider(".swiper-container-trusted-mobile", {
      autoplay: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      paginationCount: 4,
    });
  }

  // Initialize desktop products slider with responsive configuration (2 cards, 51 gap, move by 2)
  if (productsSlider) {
    new CustomSlider(".swiper-container-products", {
      autoplay: true,
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      fixedSlideWidth: null,
      responsive: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
          fixedSlideWidth: null,
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 25,
          fixedSlideWidth: null,
        },
        1200: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          fixedSlideWidth: null,
        },
      },
    });
  }

  // Initialize simple mobile slider
  const mobileSlider = document.getElementById("mobile-slider");
  const mobileWrapper = document.getElementById("mobile-slider-wrapper");
  const mobilePrev = document.querySelector(".mobile-prev");
  const mobileNext = document.querySelector(".mobile-next");

  if (mobileSlider && mobileWrapper) {
    let currentSlide = 0;
    const totalSlides = mobileWrapper.children.length;

    function updateSlider() {
      const translateX = -currentSlide * 100;
      mobileWrapper.style.transform = `translateX(${translateX}%)`;
    }

    if (mobilePrev) {
      mobilePrev.addEventListener("click", () => {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
        updateSlider();
      });
    }

    if (mobileNext) {
      mobileNext.addEventListener("click", () => {
        currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
        updateSlider();
      });
    }
  }

  // Initialize trusted companies mobile slider (separate custom controls if needed)
  const trustedMobileSlider = document.getElementById("trusted-mobile-slider");
  const trustedMobileWrapper = document.getElementById("trusted-mobile-wrapper");
  const trustedMobilePrev = document.querySelector(".trusted-mobile-prev");
  const trustedMobileNext = document.querySelector(".trusted-mobile-next");
  const trustedPaginationDots = document.querySelectorAll(".trusted-pagination-dot");

  if (trustedMobileSlider && trustedMobileWrapper) {
    let currentTrustedSlide = 0;
    const totalTrustedSlides = trustedMobileWrapper.children.length;

    function updateTrustedSlider() {
      const translateX = -currentTrustedSlide * 100;
      trustedMobileWrapper.style.transform = `translateX(${translateX}%)`;

      // Update pagination dots
      trustedPaginationDots.forEach((dot, index) => {
        if (index === currentTrustedSlide) {
          dot.classList.remove("bg-gray-400");
          dot.classList.add("bg-[#ba0108]");
        } else {
          dot.classList.remove("bg-[#ba0108]");
          dot.classList.add("bg-gray-400");
        }
      });
    }

    if (trustedMobilePrev) {
      trustedMobilePrev.addEventListener("click", () => {
        currentTrustedSlide =
          currentTrustedSlide > 0
            ? currentTrustedSlide - 1
            : totalTrustedSlides - 1;
        updateTrustedSlider();
      });
    }

    if (trustedMobileNext) {
      trustedMobileNext.addEventListener("click", () => {
        currentTrustedSlide =
          currentTrustedSlide < totalTrustedSlides - 1
            ? currentTrustedSlide + 1
            : 0;
        updateTrustedSlider();
      });
    }

    // Add click handlers for pagination dots
    trustedPaginationDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentTrustedSlide = index;
        updateTrustedSlider();
      });
    });
  }
}
