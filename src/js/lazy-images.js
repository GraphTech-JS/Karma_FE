// Lazy loading for offscreen images
class LazyImageLoader {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            this.loadImage(img);
            this.observer.unobserve(img);
          }
        });
      }, {
        rootMargin: "50px 0px",
        threshold: 0.1
      });

      // Observe all images with loading="lazy"
      document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        this.observer.observe(img);
      });
    } else {
      // Fallback for older browsers
      document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
        this.loadImage(img);
      });
    }
  }

  loadImage(img) {
    if (img.dataset.src) {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    }
    // eslint-disable-next-line no-unused-vars
    // Add fade-in effect
    img.style.opacity = "0";
    img.style.transition = "opacity 0.3s ease";
    // eslint-disable-next-line no-unused-vars
    img.onload = () => {
      img.style.opacity = "1";
    };
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new LazyImageLoader();
  });
} else {
  new LazyImageLoader();
}
