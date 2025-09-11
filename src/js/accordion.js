// Lightweight accordion functionality
class AccordionManager {
  constructor() {
    this.init();
  }

  init() {
    const lists = document.querySelectorAll("[data-accordion-list]");
    lists.forEach((list) => this.setupAccordion(list));
  }

  setupAccordion(list) {
    const items = Array.from(list.querySelectorAll(".faq-acc-root"));

    items.forEach((item)  => {
      const contentWrapper = item.querySelector(".accordion-content");
      if (!contentWrapper) return;

      // Set initial state
      contentWrapper.style.maxHeight = "0px";
      contentWrapper.style.overflow = "hidden";
      contentWrapper.style.transition = "max-height 0.3s ease, opacity 0.2s ease";
      contentWrapper.style.opacity = "0";

      item.addEventListener("toggle", () => {
        if (item.open) {
          // Close other items
          items.forEach((other) => {
            if (other !== item && other.open) {
              other.open = false;
              const otherContent = other.querySelector(".accordion-content");
              if (otherContent) {
                otherContent.style.maxHeight = "0px";
                otherContent.style.opacity = "0";
              }
            }
          });

          // Open current item
          contentWrapper.style.maxHeight = contentWrapper.scrollHeight + "px";
          contentWrapper.style.opacity = "1";
        } else {
          // Close current item
          contentWrapper.style.maxHeight = "0px";
          contentWrapper.style.opacity = "0";
        }
      });
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new AccordionManager());
} else {
  new AccordionManager();
}

