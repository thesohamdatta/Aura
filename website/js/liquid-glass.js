/**
 * liquid-glass.js — Advanced Refractive Glass & Specular Highlight Simulator
 * Injects a dynamic SVG filter and binds passive scroll metrics to GPU-accelerated styling.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject SVG Filter if not already present
  if (!document.getElementById('liquid-glass-svg')) {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("id", "liquid-glass-svg");
    svg.setAttribute("style", "position: absolute; width: 0; height: 0; pointer-events: none;");
    svg.setAttribute("aria-hidden", "true");
    
    svg.innerHTML = `
      <defs>
        <filter id="liquid-glass-refraction" x="-20%" y="-20%" width="140%" height="140%">
          <!-- Generate organic fractal noise pattern for fluid refraction -->
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.012 0.024" 
            numOctaves="3" 
            result="waveNoise" />
          
          <!-- Warp backdrop pixels using the noise displacement map -->
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="waveNoise" 
            scale="12" 
            xChannelSelector="R" 
            yChannelSelector="G" 
            result="refracted" />
            
          <!-- Frosted blur filter -->
          <feGaussianBlur 
            in="refracted" 
            stdDeviation="20" 
            result="blurred" />
            
          <!-- Saturate background pixels to make content colors pop vibrantly -->
          <feColorMatrix 
            type="saturate" 
            values="2.2" 
            in="blurred" />
        </filter>
      </defs>
    `;
    document.body.appendChild(svg);
  }

  const filter = document.getElementById('liquid-glass-refraction');
  if (!filter) return;
  const displacementMap = filter.querySelector('feDisplacementMap');
  
  // 3. Accessibility Check: Bypass scroll animations if reduced-motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  // 2. Dynamic Scroll-Velocity Refraction & Specular Highlights
  let active = false;
  let lastScrollY = window.scrollY;
  let targetScale = 12; // Base refraction scale
  let currentScale = 12;

  function updateVisuals() {
    if (!active) return;
    
    // Smooth interpolation (lerp) toward target scale
    currentScale += (targetScale - currentScale) * 0.12;
    displacementMap.setAttribute('scale', currentScale.toFixed(1));
    
    // Return to base scale (12)
    if (Math.abs(currentScale - 12) < 0.15 && Math.abs(targetScale - 12) < 0.15) {
      currentScale = 12;
      displacementMap.setAttribute('scale', '12');
      active = false;
      return;
    }
    
    // Decay target scale back to base
    targetScale += (12 - targetScale) * 0.08;
    requestAnimationFrame(updateVisuals);
  }

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const dy = Math.abs(currentScrollY - lastScrollY);
    
    // Calculate scroll progress percentage (0 - 100)
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
    
    // Update specular highlight position (offset reflection)
    document.documentElement.style.setProperty('--navbar-specular-pos', `${progress}% 0`);
    
    // Warp scale increases dynamically with scroll speed (capped at 28)
    targetScale = Math.min(12 + dy * 0.9, 28);
    lastScrollY = currentScrollY;
    
    if (!active) {
      active = true;
      requestAnimationFrame(updateVisuals);
    }
  }, { passive: true });
});
