// Critical JavaScript only
import "../index.js";

// Load lazy image loader immediately for better performance
import "./lazy-images.js";

document.addEventListener("DOMContentLoaded", () => {
  const hasSliders = document.querySelector(".swiper-container-trusted-desktop, .swiper-container-trusted-mobile");
  if (hasSliders) {
    import("./sliders-init.js");
  }
});

// Aggressive lazy loadin for non-critical JavaScript
const loadNonCriticalJS = () => {

  // Load modal only when user interacts
  const modalTrigger = document.querySelector("[onclick*='openContactModal']");
  if (modalTrigger) {
    // Load modal on first interaction
    const loadModal = () => {
      import("./modal.js");
      modalTrigger.removeEventListener("click", loadModal);
    };
    modalTrigger.addEventListener("click", loadModal, { once: true });
  }

  // Load performance monitoring only on mobile and only if needed
  if (window.innerWidth <= 768 && "requestIdleCallback" in window) {
    requestIdleCallback(() => {
      import("./performance.js");
    }, { timeout: 5000 });
  }

  // Load accessibility features only if needed
  if (window.innerWidth > 768) {
    import("./accessibility.js");
  }
};

// Load non-critical JS with aggressive delays
const loadWhenIdle = () => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadNonCriticalJS, { timeout: 3000 });
  } else {
    setTimeout(loadNonCriticalJS, 500);
  }
};

// Load after DOM is ready with delay
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(loadWhenIdle, 100);
  });
} else {
  setTimeout(loadWhenIdle, 100);
}

// Netlify Identity - only load if needed
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
