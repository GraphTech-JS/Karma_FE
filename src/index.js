import "./css/main.scss";
import {initializeSliders} from "./js/sliders-init.js";

// Initialize mobile menu
const mobileMenu = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector("[data-nav]");

function toggleMobileMenu() {
  nav.classList.toggle("menu-open");
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", toggleMobileMenu);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    initializeSliders();
  }, 100);
});
