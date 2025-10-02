// JS Goes here - ES6 supported
import "./css/main.scss";

// Lazy load non-critical JavaScript for better mobile performance
const loadNonCriticalJS = () => {
  import("./modal.js");
  import("./accessibility.js");
  import("./forms.js"); // Додаємо обробку форм
};

// Load non-critical JS after page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNonCriticalJS);
} else {
  loadNonCriticalJS();
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