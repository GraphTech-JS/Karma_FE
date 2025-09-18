import "./css/main.scss";

const mobileMenu = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector("[data-nav]");

function toggleMobileMenu() {
  nav.classList.toggle("menu-open");
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
    for (let i = 0; i < dotsCount; i += 1) {
      const dot = document.createElement("span");
      dot.className = "swiper-pagination-bullet-custom";
      dot.addEventListener("click", () => swiper.slideToLoop(i));
      paginationEl.appendChild(dot);
      dots.push(dot);
    }

    const update = () => {
      requestAnimationFrame(() => {
        const active = swiper.params.loop
          ? ((swiper.realIndex % dotsCount) + dotsCount) % dotsCount
          : swiper.activeIndex % dotsCount;

        dots.forEach((d, i) => {
          const isActive = i === active;
          if (
            isActive &&
            !d.classList.contains("swiper-pagination-bullet-active-custom")
          ) {
            d.classList.add("swiper-pagination-bullet-active-custom");
          } else if (
            !isActive &&
            d.classList.contains("swiper-pagination-bullet-active-custom")
          ) {
            d.classList.remove("swiper-pagination-bullet-active-custom");
          }
        });
      });
    };

    swiper.on("slideChange", update);
    update();
  }

  // --------- Desktop trusted ----------
  const trustedDesktop = document.querySelector(
    ".swiper-container-trusted-desktop"
  );
  if (
    trustedDesktop &&
    window.Swiper &&
    trustedDesktop.querySelector(".swiper-wrapper")
  ) {
    let desktopPagination = trustedDesktop.querySelector(
      ".swiper-pagination-trusted"
    );
    if (!desktopPagination) {
      desktopPagination = document.createElement("div");
      desktopPagination.className = "swiper-pagination-trusted mt-[30px]";
      trustedDesktop.appendChild(desktopPagination);
    }

    const desktopSwiper = new window.Swiper(trustedDesktop, {
      observer: false,
      observeParents: false,
      resizeObserver: false,
      loop: true,
      speed: 500,
      autoplay: { delay: 2500, disableOnInteraction: false },
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });

    setupCustomDots(desktopSwiper, desktopPagination, 4);
    window.desktopSwiper = desktopSwiper;
  }

  // --------- Mobile trusted ----------
  const trustedMobile = document.querySelector(
    ".swiper-container-trusted-mobile"
  );
  if (
    trustedMobile &&
    window.Swiper &&
    trustedMobile.querySelector(".swiper-wrapper")
  ) {
    let mobilePagination = trustedMobile.querySelector(
      ".swiper-pagination-trusted"
    );
    if (!mobilePagination) {
      mobilePagination = document.createElement("div");
      mobilePagination.className = "swiper-pagination-trusted mt-[30px]";
      trustedMobile.appendChild(mobilePagination);
    }

    const mobileSwiper = new window.Swiper(trustedMobile, {
      observer: false,
      observeParents: false,
      resizeObserver: false,
      loop: false,
      speed: 500,
      autoplay: { delay: 2500, disableOnInteraction: false },
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });

    setupCustomDots(mobileSwiper, mobilePagination, 4);
    window.mobileSwiper = mobileSwiper;
  }

  // --------- Products swiper ----------
  const productsEl = document.querySelector(".swiper-container-products");
  if (
    productsEl &&
    window.Swiper &&
    productsEl.querySelector(".swiper-wrapper")
  ) {
    const productsSwiper = new window.Swiper(productsEl, {
      observer: false,
      observeParents: false,
      resizeObserver: false,
      loop: true,
      speed: 500,
      autoplay: { delay: 3000, disableOnInteraction: false },
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
      breakpoints: {
        768: { slidesPerView: "auto", spaceBetween: 20 },
        1000: { slidesPerView: "auto", spaceBetween: 51 },
        1200: { slidesPerView: "auto", spaceBetween: 51 },
      },
    });

    window.productsSwiper = productsSwiper;
  }

  function debounce(fn, delay = 150) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  window.addEventListener(
    "resize",
    debounce(() => {
      if (window.desktopSwiper) window.desktopSwiper.update();
      if (window.mobileSwiper) window.mobileSwiper.update();
      if (window.productsSwiper) window.productsSwiper.update();
    }, 200)
  );
});