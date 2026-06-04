// Chat Simulator Queries Data
const responses = {
  meeting: {
    query: "What did we decide on Tuesday?",
    reply: "Context retrieved: You finalized building the open-source firmware using PlatformIO and budgeted BOM at ~$50 USD."
  },
  idea: {
    query: "Recall my idea about wearables.",
    reply: "Context retrieved: You noted that wearables should remain screenless and function quietly in the background without attention traps."
  }
};

function triggerSim(key) {
  const data = responses[key];
  if (!data) return;

  const queryEl = document.getElementById('sim-query-text');
  const waveEl = document.getElementById('sim-wave');
  const respEl = document.getElementById('sim-response');
  const respTextEl = document.getElementById('sim-response-text');

  if (!queryEl || !waveEl || !respEl || !respTextEl) return;

  queryEl.innerText = data.query;
  respEl.style.opacity = '0';
  waveEl.style.display = 'flex';

  setTimeout(() => {
    waveEl.style.display = 'none';
    respTextEl.innerText = data.reply;
    respEl.style.opacity = '1';
    respEl.style.transition = 'opacity 0.4s ease';
  }, 1500);
}

// Hardware Layer Info Panel Hover Trigger
const layersInfo = {
  front: {
    title: "Front Shell",
    desc: "3D-printed enclosure cover using matte black PLA. Features a precise lens cutout and integrated clasp."
  },
  mcu: {
    title: "XIAO ESP32-S3 Sense",
    desc: "Dual-core processor with 8MB PSRAM, integrated OV2640 2MP camera, and high-fidelity digital microphone."
  },
  back: {
    title: "350mAh Lithium Battery",
    desc: "Ultra-compact rechargeable cell providing up to 4 hours of constant capture. Fits into back slot."
  }
};

document.querySelectorAll('.exploded-layer').forEach(layer => {
  layer.addEventListener('mouseenter', () => {
    const type = layer.getAttribute('data-layer');
    const info = layersInfo[type];
    const infoTitle = document.getElementById('layer-info-title');
    const infoDesc = document.getElementById('layer-info-desc');
    if (info && infoTitle && infoDesc) {
      infoTitle.innerText = info.title;
      infoDesc.innerText = info.desc;
    }
  });
});

// Statistics counters animation
function initCounters() {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    let current = 0;
    const step = target / 50;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        stat.innerText = target;
        clearInterval(interval);
      } else {
        stat.innerText = Math.floor(current);
      }
    }, 30);
  });
}

// Trigger counters when scrolled into view
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  const problemSec = document.querySelector('.problem-section');
  if (problemSec) observer.observe(problemSec);
} else {
  initCounters();
}

// GSAP Timelines scroll reveal
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== 'undefined') {
    // Standard page transitions
    gsap.from(".hero-headline", { opacity: 0, y: 30, duration: 1, delay: 0.2 });
    gsap.from(".hero-subtext", { opacity: 0, y: 35, duration: 1, delay: 0.4 });
    gsap.from(".hero-image-wrapper", { opacity: 0, scale: 0.9, duration: 1.2, delay: 0.5 });
    gsap.from(".hero-actions", { opacity: 0, y: 20, duration: 1, delay: 0.6 });

    // Stagger section entries on scroll
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.section').forEach(sec => {
        gsap.from(sec, {
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 0,
          y: 40,
          duration: 0.8
        });
      });
    }
  }
});
