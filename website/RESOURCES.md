# Aura Website — RESOURCES.md
## Every CDN URL, library version, and code pattern. Copy-paste ready.

---

## CDN Stack (Exact URLs — pinned versions)

### 1. GSAP 3.12.5 + ScrollTrigger
```html
<!-- Load in this exact order, at bottom of <body> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
```
Register in JS: `gsap.registerPlugin(ScrollTrigger);`
License: Free for open-source / free-to-use projects ✅

### 2. Lenis 1.3.23 (Smooth Scroll)
```html
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.23/dist/lenis.min.js" defer></script>
```
Package: `lenis` (not the deprecated `@studio-freight/lenis`)
License: MIT ✅

**Required GSAP sync pattern:**
```js
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
});

// MUST sync with GSAP or ScrollTrigger will drift
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);
```

### 3. Three.js r184 (3D Pendant)
```html
<!-- Import map — goes in <head>, BEFORE any module script -->
<script type="importmap">
{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.184.0/build/three.module.js",
    "three/examples/": "https://cdn.jsdelivr.net/npm/three@0.184.0/examples/jsm/"
  }
}
</script>
```
Usage in JS files: `<script type="module" src="js/home.js"></script>`
Inside home.js: `import * as THREE from 'three';`
License: MIT ✅

**Addons needed:**
```js
import { OrbitControls } from 'three/examples/controls/OrbitControls.js';
import { GLTFLoader }    from 'three/examples/loaders/GLTFLoader.js';
```

### 4. Prism.js 1.29.0 (Docs Syntax Highlighting)
```html
<!-- In <head> of docs.html only -->
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-one-dark.min.css">

<!-- At bottom of docs.html body -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-c.min.js" defer></script>
```
Theme chosen: `prism-one-dark` — matches VS Code dark, elegant, not distracting
License: MIT ✅

### 5. Space Mono (Google Fonts)
```html
<!-- In <head> of every page -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet">
```

---

## Three.js Pendant Scene — Boilerplate

```js
// home.js — Three.js pendant setup
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/controls/OrbitControls.js';

export function initPendant(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 3);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  // Lighting — soft, premium
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const directional = new THREE.DirectionalLight(0xffffff, 1.0);
  directional.position.set(2, 2, 2);
  scene.add(directional);
  const rim = new THREE.DirectionalLight(0x00d9ff, 0.3); // cyan rim light
  rim.position.set(-2, -1, -1);
  scene.add(rim);

  // Pendant sphere (placeholder until .glb model is ready)
  const geo = new THREE.SphereGeometry(0.9, 64, 64);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x2a2a2a,
    metalness: 0.4,
    roughness: 0.3,
    envMapIntensity: 1,
  });
  const pendant = new THREE.Mesh(geo, mat);
  scene.add(pendant);

  // Mouse parallax (subtle)
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Animate
  function tick() {
    requestAnimationFrame(tick);
    // Slow auto-rotation + mouse parallax
    pendant.rotation.y += 0.003;
    pendant.rotation.x += (mouseY * 0.1 - pendant.rotation.x) * 0.05;
    pendant.rotation.y += (mouseX * 0.1 - pendant.rotation.y) * 0.01;
    renderer.render(scene, camera);
  }
  tick();
}
```

---

## GSAP ScrollTrigger — Pendant Scroll-Scrub Pattern

*(Deferred until pendant photos are shot — 30–50 frames at 7° increments)*

```js
// pendant-scrub.js — activate when frames/ folder is populated
function initPendantScrub() {
  const canvas  = document.getElementById('pendant-canvas');
  const ctx     = canvas.getContext('2d');
  const FRAMES  = 50;
  const obj     = { frame: 0 };

  // 1. Preload all frames
  const images = Array.from({ length: FRAMES }, (_, i) => {
    const img = new Image();
    img.src = `assets/pendant-frames/frame-${String(i + 1).padStart(3,'0')}.jpg`;
    return img;
  });

  // 2. Render function
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[Math.round(obj.frame)], 0, 0, canvas.width, canvas.height);
  }

  // 3. GSAP scrub
  gsap.to(obj, {
    frame: FRAMES - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
      trigger: '#pendant-scrub-section',
      start: 'top top',
      end: '+=2000',
      scrub: 0.5,
      pin: true,
    },
    onUpdate: render,
  });

  images[0].onload = render;
}
```

**What the hardware team needs to shoot:**
- 50 photos of pendant rotating in a circle (360° ÷ 50 = 7.2° per frame)
- White or dark background, consistent studio lighting
- Same camera distance, same angle (slightly above center)
- Export: JPEG, 800×800px, named `frame-001.jpg` to `frame-050.jpg`
- Save to: `website/assets/pendant-frames/`

---

## Reference OSS Repos (Study, Don't Fork)

| Repo | URL | What to study |
|---|---|---|
| AirPods Pro clone | https://github.com/Fr4n0m/airpods-animation | Canvas frame sequence pattern |
| AirPods GSAP | https://github.com/anushkachauhxn/airpods-pro-website | ScrollMagic + GSAP combination |
| Apple scroll | https://github.com/emanuelefavero/apple-scroll-animation | Minimal frame sync |
| iPhone 15 (React) | https://github.com/adrianhajdin/iphone | Three.js + GSAP full reference |
| Watches dark/light | https://github.com/bedimcode/responsive-watches-website | Dark mode, mobile polish |
| Product showcase | https://github.com/pixelgridui/animated-bottle-scroll | Pinned section pattern |
| Lenis | https://github.com/darkroomengineering/lenis | Official source + examples |
| GSAP demos | https://gsap.com/st-demos | ScrollTrigger reference |

---

## Existing Assets in Repo

```
Assets/hero/
  aura 1.jpg          ← pendant front face (main hero image)
  aura 2.jpg          ← pendant alternate angle
  aura 3.png          ← pendant in hand / scale
  aura 4.png
  aura 5.jpg
  aura 6.jpg
  hero image 1.jpg    ← worn on chest
  hero image 2.jpg
  hero image 3.jpg
  hero image 4.jpg
  hero image 5.jpg
  hero image 6.jpg
  hero image 7.jpg
  hero image 8.jpg
```

These get **copied** into `website/assets/images/` — we never reference `../Assets/` from the website (breaks GitHub Pages).

---

## Page Load Order (Script loading strategy)

Every page uses this exact script order at bottom of `<body>`:

```html
<!-- 1. GSAP (must come before ScrollTrigger) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>

<!-- 2. Lenis -->
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.23/dist/lenis.min.js" defer></script>

<!-- 3. Shared site scripts -->
<script src="js/nav.js" defer></script>
<script src="js/animations.js" defer></script>

<!-- 4. Page-specific script (only on pages that need it) -->
<script type="module" src="js/home.js" defer></script>  <!-- home only -->
<script src="js/docs.js" defer></script>                 <!-- docs only -->
<script src="js/ai.js" defer></script>                   <!-- ai only -->
```

The importmap for Three.js goes in `<head>` on home.html only.
Prism.js goes in `<head>` (CSS) and `<body>` (JS) on docs.html only.
