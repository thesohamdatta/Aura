// website/js/home.js
// Handles the Three.js hero pendant animation

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', () => {
  initPendant('pendant-canvas-container');
});

function initPendant(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 4);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  // Lighting (Premium Apple style)
  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);
  
  const directional = new THREE.DirectionalLight(0xffffff, 1.5);
  directional.position.set(2, 2, 2);
  scene.add(directional);
  
  const rim = new THREE.DirectionalLight(0x00d9ff, 0.5); // Subtle cyan rim light
  rim.position.set(-2, -1, -1);
  scene.add(rim);

  // Geometry & Material (Placeholder procedural sphere)
  const geo = new THREE.SphereGeometry(1.2, 64, 64);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x1A1A1A,
    metalness: 0.6,
    roughness: 0.3,
  });
  
  // Create group for rotation
  const pendantGroup = new THREE.Group();
  const pendant = new THREE.Mesh(geo, mat);
  pendantGroup.add(pendant);
  
  // Add a simple "lens" element to make the sphere look more like the device
  const lensGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
  const lensMat = new THREE.MeshStandardMaterial({
    color: 0x000000,
    metalness: 0.9,
    roughness: 0.1
  });
  const lens = new THREE.Mesh(lensGeo, lensMat);
  lens.rotation.x = Math.PI / 2;
  lens.position.z = 1.15;
  pendantGroup.add(lens);

  scene.add(pendantGroup);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2.0; // Slow, premium spin

  // Mouse parallax (Subtle effect)
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  // Only track mouse movement on non-touch devices
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX - windowHalfX) * 0.001;
      mouseY = (e.clientY - windowHalfY) * 0.001;
    });
  }

  // Handle Resize
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Animation Loop
  function tick() {
    requestAnimationFrame(tick);
    
    // Parallax easing
    targetX = mouseX * 0.5;
    targetY = mouseY * 0.5;
    
    pendantGroup.position.x += (targetX - pendantGroup.position.x) * 0.05;
    pendantGroup.position.y += (-targetY - pendantGroup.position.y) * 0.05;

    controls.update();
    renderer.render(scene, camera);
  }
  
  tick();
}
