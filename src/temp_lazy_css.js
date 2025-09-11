// Lazy load non-critical CSS
function loadNonCriticalCSS() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/css/lazy-load.css';
  link.media = 'print';
  link.onload = function() { this.media = 'all'; };
  document.head.appendChild(link);
}

// Load after page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(loadNonCriticalCSS, 100);
  });
} else {
  setTimeout(loadNonCriticalCSS, 100);
}
