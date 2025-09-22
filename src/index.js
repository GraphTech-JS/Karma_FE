import "./css/main.scss";

import Swiper from "swiper";
import {Navigation, Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- Mobile menu toggle ---
const mobileMenu = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector("[data-nav]");

function toggleMobileMenu() {
  nav?.classList.toggle("menu-open");
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", toggleMobileMenu);
}

document.addEventListener("DOMContentLoaded", () => {
  // --------- Custom Dots ----------
  function setupCustomDots(swiper, paginationEl, dotsCount = 4) {
    if (!paginationEl) return;
    paginationEl.innerHTML = "";

    const dots = [];
    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement("span");
      dot.className = "swiper-pagination-bullet-custom";
      dot.addEventListener("click", () => swiper.slideToLoop(i));
      paginationEl.appendChild(dot);
      dots.push(dot);
    }

    const update = () => {
      const active = swiper.params.loop
        ? ((swiper.realIndex % dotsCount) + dotsCount) % dotsCount
        : swiper.activeIndex % dotsCount;

      dots.forEach((d, j) => {
        d.classList.toggle(
          "swiper-pagination-bullet-active-custom",
          j === active
        );
      });
    };

    swiper.on("slideChange", update);
    update();
  }

  // Використовувані модулі
  const swiperModules = [Navigation, Autoplay, Pagination];

  // --------- Desktop trusted ----------
  const trustedDesktop = document.querySelector(
    ".swiper-container-trusted-desktop"
  );
  if (trustedDesktop && trustedDesktop.querySelector(".swiper-wrapper")) {
    let desktopPagination = trustedDesktop.querySelector(
      ".swiper-pagination-trusted"
    );
    if (!desktopPagination) {
      desktopPagination = document.createElement("div");
      desktopPagination.className = "swiper-pagination-trusted mt-[30px]";
      trustedDesktop.appendChild(desktopPagination);
    }

    const desktopSwiper = new Swiper(trustedDesktop, {
      modules: swiperModules,
      loop: true,
      speed: 500,
      autoplay: {delay: 2500, disableOnInteraction: false},
      slidesPerView: 4,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });

    setupCustomDots(desktopSwiper, desktopPagination, 4);
  }

  // --------- Mobile trusted ----------
  const trustedMobile = document.querySelector(
    ".swiper-container-trusted-mobile"
  );
  if (trustedMobile && trustedMobile.querySelector(".swiper-wrapper")) {
    let mobilePagination = trustedMobile.querySelector(
      ".swiper-pagination-trusted"
    );
    if (!mobilePagination) {
      mobilePagination = document.createElement("div");
      mobilePagination.className = "swiper-pagination-trusted mt-[30px]";
      trustedMobile.appendChild(mobilePagination);
    }

    const mobileSwiper = new Swiper(trustedMobile, {
      modules: swiperModules,
      loop: false,
      speed: 500,
      autoplay: {delay: 2500, disableOnInteraction: false},
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });

    setupCustomDots(mobileSwiper, mobilePagination, 4);
  }

  // --------- Products swiper (lazy init через IntersectionObserver) ----------
  const productsEl = document.querySelector(".swiper-container-products");
  if (productsEl && productsEl.querySelector(".swiper-wrapper")) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          new Swiper(productsEl, {
            modules: swiperModules,
            loop: true,
            speed: 500,
            autoplay: {delay: 3000, disableOnInteraction: false},
            slidesPerView: 1,
            spaceBetween: 16,
            navigation: {
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            },
            breakpoints: {
              768: {slidesPerView: "auto", spaceBetween: 20},
              1000: {slidesPerView: "auto", spaceBetween: 51},
              1200: {slidesPerView: "auto", spaceBetween: 51},
            },
          });
          observer.disconnect();
        }
      },
      {rootMargin: "0px 0px -50px 0px"}
    );

    observer.observe(productsEl);
  }

  // --------- Debounce & safe resize ----------
  function debounce(fn, delay = 150) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => {
        requestAnimationFrame(() => fn.apply(this, args));
      }, delay);
    };
  }

  window.addEventListener(
    "resize",
    debounce(() => {
      document.querySelectorAll(".swiper-container").forEach((el) => {
        if (el.swiper) el.swiper.update();
      });
    }, 200)
  );
});
