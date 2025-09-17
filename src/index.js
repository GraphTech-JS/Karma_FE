import "./css/main.scss";

// Initialize mobile menu
const mobileMenu = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector("[data-nav]");

function toggleMobileMenu() {
  nav.classList.toggle("menu-open");
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", toggleMobileMenu);
}

// Initialize sliders when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
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
      const active = ((swiper.realIndex % dotsCount) + dotsCount) % dotsCount;
      dots.forEach((d, i) => d.classList.toggle("swiper-pagination-bullet-active-custom", i === active));
    };
    swiper.on("slideChange", update);
    update();
  }

  // Desktop trusted
  const trustedDesktop = document.querySelector(".swiper-container-trusted-desktop");
  if (trustedDesktop && window.Swiper) {
    let desktopPagination = trustedDesktop.querySelector(".swiper-pagination-trusted");
    if (!desktopPagination) {
      desktopPagination = document.createElement("div");
      desktopPagination.className = "swiper-pagination-trusted mt-[30px]";
      trustedDesktop.appendChild(desktopPagination);
    }

    const desktopSwiper = new window.Swiper(trustedDesktop, {
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

    setupCustomDots(desktopSwiper, desktopPagination, 4); // рівно 4 точки
  }

  // Mobile trusted
  const trustedMobile = document.querySelector(".swiper-container-trusted-mobile");
  if (trustedMobile && window.Swiper) {
    let mobilePagination = trustedMobile.querySelector(".swiper-pagination-trusted");
    if (!mobilePagination) {
      mobilePagination = document.createElement("div");
      mobilePagination.className = "swiper-pagination-trusted mt-[30px]";
      trustedMobile.appendChild(mobilePagination);
    }

    const mobileSwiper = new window.Swiper(trustedMobile, {
      loop: false,
      speed: 500,
      autoplay: { delay: 2500, disableOnInteraction: false },
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });

    setupCustomDots(mobileSwiper, mobilePagination, 4);
  }

  requestAnimationFrame(() => {
    const productsEl = document.querySelector(".swiper-container-products");
    if (productsEl && window.Swiper) {
      new window.Swiper(productsEl, {
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
    }
  });

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
});
