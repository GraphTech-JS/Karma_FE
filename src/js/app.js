// JS Goes here - ES6 supported
import "./css/main.scss";

// Lazy load non-critical JavaScript for better mobile performance
const loadNonCriticalJS = () => {
  import("./modal.js");
  import("./performance.js");
  import("./accessibility.js");
};

// Load non-critical JS after page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    // Load after a short delay to prioritize critical rendering
    setTimeout(loadNonCriticalJS, 100);
  });
} else {
  setTimeout(loadNonCriticalJS, 100);
}

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
