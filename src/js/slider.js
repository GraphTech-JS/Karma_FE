export class CustomSlider {
  constructor(container, options = {}) {
    this.container = document.querySelector(container);
    if (!this.container) {
      console.warn(`Slider container not found: ${container}`);
      return;
    }

    this.wrapper = this.container.querySelector(".swiper-wrapper");
    this.slides = this.container.querySelectorAll(".swiper-slide");

    if (!this.wrapper) {
      console.warn(`Slider wrapper not found in: ${container}`);
      return;
    }

    if (this.slides.length === 0) {
      console.warn(`No slides found in: ${container}`);
      return;
    }

    console.log(
      `Initializing slider: ${container} with ${this.slides.length} slides`
    );

    this.currentIndex = 0;
    this.autoplayInterval = null;
    this.isTransitioning = false;

    this.options = {
      autoplay: options.autoplay || false,
      delay: options.delay || 3000,
      loop: options.loop || true,
      slidesPerView: options.slidesPerView || 1,
      slidesPerGroup: options.slidesPerGroup || 1,
      spaceBetween: options.spaceBetween || 0,
      responsive: options.responsive || {},
      paginationCount: options.paginationCount || null,
      fixedSlideWidth: options.fixedSlideWidth || null,
      fixedWrapperWidth: options.fixedWrapperWidth || null,
      ...options,
    };

    this.init();
    this.setupResponsive();
  }

  init() {
    if (this.slides.length === 0) return;

    this.setupSlider();
    this.setupNavigation();
    this.setupPagination();
    this.showSlide(0, false);

    if (this.options.autoplay) {
      this.startAutoplay();
    }
  }

  setupSlider() {
    this.container.style.position = "relative";
    this.container.style.overflow = "hidden";
    this.wrapper.style.display = "flex";
    this.wrapper.style.width = "fit-content";
    this.wrapper.style.height = "auto";
    this.wrapper.style.transition =
      "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    this.wrapper.style.flexWrap = "nowrap";

    this.updateSlideStyles();
  }

  updateSlideStyles() {
    const currentSlidesPerView = this.getCurrentSlidesPerView();
    const currentSpaceBetween = this.getCurrentSpaceBetween();
    const containerWidth = this.container.offsetWidth;

    let slideWidth;

    if (this.options.fixedSlideWidth) {
      slideWidth = this.options.fixedSlideWidth;
    } else {
      const totalSpacing = currentSpaceBetween * (currentSlidesPerView - 1);
      const availableWidth = containerWidth - totalSpacing;
      slideWidth = Math.floor(availableWidth / currentSlidesPerView);

      const minSlideWidth = currentSlidesPerView === 1 ? 280 : 380;
      slideWidth = Math.max(slideWidth, minSlideWidth);

      const maxSlideWidth =
        currentSlidesPerView === 1 ? containerWidth - 20 : 500;
      slideWidth = Math.min(slideWidth, maxSlideWidth);

      if (currentSlidesPerView === 2) {
        const totalSpacingCheck = currentSpaceBetween;
        const maxPossibleWidth = (containerWidth - totalSpacingCheck) / 2;
        slideWidth = Math.min(slideWidth, maxPossibleWidth);
      }
    }

    this.slides.forEach((slide, index) => {
      slide.style.flex = "0 0 auto";
      slide.style.width = `${slideWidth}px`;
      slide.style.display = "flex";
      slide.style.alignItems = "center";
      slide.style.justifyContent = "center";
      slide.style.marginRight =
        index < this.slides.length - 1 ? `${currentSpaceBetween}px` : "0";
      slide.style.boxSizing = "border-box";
    });

    if (this.options.fixedWrapperWidth) {
      this.wrapper.style.width = `${this.options.fixedWrapperWidth}px`;
    } else {
      const wrapperWidth =
        slideWidth * this.slides.length +
        currentSpaceBetween * (this.slides.length - 1);
      this.wrapper.style.width = `${wrapperWidth}px`;
    }
  }

  setupNavigation() {
    const nextBtn =
      this.container.querySelector(".swiper-button-next-custom") ||
      this.container.parentElement.querySelector(".swiper-button-next-custom");
    const prevBtn =
      this.container.querySelector(".swiper-button-prev-custom") ||
      this.container.parentElement.querySelector(".swiper-button-prev-custom");

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.nextSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.prevSlide();
      });
    }
  }

  setupPagination() {
    const pagination = this.container.querySelector(
      ".swiper-pagination-trusted"
    );
    if (!pagination) return;

    pagination.innerHTML = "";

    const bulletCount = this.options.paginationCount || this.slides.length;
    for (let i = 0; i < bulletCount; i += 1) {
      const bullet = document.createElement("span");
      bullet.className = "swiper-pagination-bullet-custom";
      bullet.addEventListener("click", (e) => {
        e.preventDefault();
        const targetIndex = this.slides.length > 0 ? i % this.slides.length : 0;
        this.goToSlide(targetIndex);
      });
      pagination.appendChild(bullet);
    }

    this.bullets = pagination.querySelectorAll(
      ".swiper-pagination-bullet-custom"
    );
  }

  showSlide(index, animate = true) {
    if (index < 0 || index >= this.slides.length) return;

    this.isTransitioning = true;
    this.currentIndex = index;

    const currentSlidesPerView = this.getCurrentSlidesPerView();
    const currentSpaceBetween = this.getCurrentSpaceBetween();
    const containerWidth = this.container.offsetWidth;
    const computedWidth =
      (containerWidth - currentSpaceBetween * (currentSlidesPerView - 1)) /
      currentSlidesPerView;
    const slideWidth = this.options.fixedSlideWidth
      ? this.options.fixedSlideWidth
      : computedWidth;
    const translateX = -(index * (slideWidth + currentSpaceBetween));

    if (animate) {
      this.wrapper.style.transition =
        "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    } else {
      this.wrapper.style.transition = "none";
    }

    this.wrapper.style.transform = `translateX(${translateX}px)`;

    if (this.bullets) {
      const bulletIndex = this.options.paginationCount
        ? index % this.options.paginationCount
        : index;
      this.bullets.forEach((bullet, i) => {
        bullet.classList.toggle(
          "swiper-pagination-bullet-active-custom",
          i === bulletIndex
        );
      });
    }

    setTimeout(
      () => {
        this.isTransitioning = false;
      },
      animate ? 500 : 0
    );
  }

  nextSlide() {
    if (this.isTransitioning) return;

    const step = this.options.slidesPerGroup || 1;
    const maxStartIndex = Math.max(
      0,
      this.slides.length - this.getCurrentSlidesPerView()
    );
    const groups = Math.ceil((maxStartIndex + 1) / step) || 1;
    const currentGroup = Math.floor(this.currentIndex / step);
    const nextGroup = (currentGroup + 1) % groups;
    const targetIndex = Math.min(nextGroup * step, maxStartIndex);
    this.showSlide(targetIndex);
  }

  prevSlide() {
    if (this.isTransitioning) return;

    const step = this.options.slidesPerGroup || 1;
    const maxStartIndex = Math.max(
      0,
      this.slides.length - this.getCurrentSlidesPerView()
    );
    const groups = Math.ceil((maxStartIndex + 1) / step) || 1;
    const currentGroup = Math.floor(this.currentIndex / step);
    const prevGroup = (currentGroup - 1 + groups) % groups;
    const targetIndex = Math.min(prevGroup * step, maxStartIndex);
    this.showSlide(targetIndex);
  }

  goToSlide(index) {
    if (this.isTransitioning || index === this.currentIndex) return;
    this.showSlide(index);
  }

  startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = setInterval(() => {
      if (!this.isTransitioning) {
        this.nextSlide();
      }
    }, this.options.delay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  setupResponsive() {
    const handleResize = () => {
      this.updateSlideStyles();
      // Use animate=false to prevent transition during resize
      this.showSlide(this.currentIndex, false);
    };

    window.addEventListener("resize", handleResize);
  }

  getCurrentSlidesPerView() {
    const width = window.innerWidth;
    const responsive = this.options.responsive;

    let currentSlidesPerView = this.options.slidesPerView;

    Object.keys(responsive)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((breakpoint) => {
        if (width >= breakpoint) {
          currentSlidesPerView =
            responsive[breakpoint].slidesPerView || currentSlidesPerView;
        }
      });

    return currentSlidesPerView;
  }

  getCurrentSpaceBetween() {
    const width = window.innerWidth;
    const responsive = this.options.responsive;

    let currentSpaceBetween = this.options.spaceBetween;

    Object.keys(responsive)
      .map(Number)
      .sort((a, b) => a - b)
      .forEach((breakpoint) => {
        if (width >= breakpoint) {
          currentSpaceBetween =
            responsive[breakpoint].spaceBetween || currentSpaceBetween;
        }
      });

    return currentSpaceBetween;
  }
}
