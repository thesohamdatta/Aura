/* hero-parallax.js — drives hero scroll storytelling
 * Reads --section-progress from .hero (set by scroll-orchestrator)
 * Computes and sets CSS custom properties for parallax + light animation
 * No dependencies, vanilla ES5, respects prefers-reduced-motion
 */
(function () {
  "use strict";

  var reduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hero = document.querySelector(".hero");
  if (!hero) return;

  var heroGradient = hero.querySelector(".hero-gradient");
  var heroMedia = hero.querySelector(".hero-media");
  var ticking = false;

  // Parallax config
  var PARALLAX_MAX_PX = 80; // background moves 80px total
  var GLOW_MIN = 0.15; // glow opacity at top
  var GLOW_MAX = 0.45; // glow opacity at bottom
  var VIGNETTE_BASE_MIN = 0.55; // linear gradient bottom stop
  var VIGNETTE_BASE_MAX = 0.75; // deeper at bottom
  var VIGNETTE_RADIAL_MIN = 0.15; // radial gradient opacity
  var VIGNETTE_RADIAL_MAX = 0.35; // deeper at bottom

  // Easing: Apple-style spring feel (cubic-bezier approximation)
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function updateHero() {
    if (reduced) return;

    // Get --section-progress from hero element (0 to 1)
    var style = window.getComputedStyle(hero);
    var progressStr = style.getPropertyValue("--section-progress").trim();
    var progress = parseFloat(progressStr) || 0;

    // Clamp
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    // Apply easing for more natural feel
    var eased = easeOutCubic(progress);

    // Compute values
    var parallaxY = eased * PARALLAX_MAX_PX;
    var glowOpacity = GLOW_MIN + (GLOW_MAX - GLOW_MIN) * eased;
    var vignetteBase =
      VIGNETTE_BASE_MIN + (VIGNETTE_BASE_MAX - VIGNETTE_BASE_MIN) * eased;
    var vignetteRadial =
      VIGNETTE_RADIAL_MIN + (VIGNETTE_RADIAL_MAX - VIGNETTE_RADIAL_MIN) * eased;

    // Apply to root so CSS can use them (or directly on elements)
    // Using root for cascade efficiency
    var root = document.documentElement;
    root.style.setProperty("--hero-parallax-y", parallaxY.toFixed(2));
    root.style.setProperty("--hero-glow-opacity", glowOpacity.toFixed(3));
    root.style.setProperty("--hero-vignette-base", vignetteBase.toFixed(3));
    root.style.setProperty("--hero-vignette-radial", vignetteRadial.toFixed(3));
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(function () {
        updateHero();
        ticking = false;
      });
    }
  }

  // Initial
  updateHero();

  // Listen for scroll progress changes (polling approach since we read from CSS)
  // scroll-orchestrator updates on scroll via RAF, so we hook into scroll event
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });

  // Also re-read on scroll-orchestrator's internal refresh cycle
  // We can detect changes by watching the hero's --section-progress
  // But polling on scroll is sufficient and simpler
})();
