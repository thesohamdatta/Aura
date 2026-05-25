<div align="center">

# AURA

**The Open-Source Intelligence Frontier.**

<br/>

<img src="Assets/PRO/HERO/hero .png" alt="AURA — Cinematic Hero" width="100%" style="border-radius: 2rem;"/>

<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-000000?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/thesohamdatta/Aura-Wearable-AI?style=flat-square&color=000000)](https://github.com/thesohamdatta/Aura-Wearable-AI)
[![MCU](https://img.shields.io/badge/MCU-ESP32--S3%20Sense-000000?style=flat-square)](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)
[![Build Cost](https://img.shields.io/badge/Build%20Cost-~$60%20USD-000000?style=flat-square)](#-hardware-architecture)

<br/>

### "We have Personal Computers — to create, work, and produce things that matter. We have Tiny Supercomputers — Smartphones — to consume, but we are drawn into the Social Dilemma.

But why have humans never built something different?

They tried. Ten years before smartphones, they made wearables — but added a screen to it. A screen that demands attention. A screen that distracts. A screen we never needed.

That is why we are building Aura.

A device that combines the productive power of a computer and the connectivity of a smartphone — but with one fundamental difference. It does not pull you in. It works for you, quietly, in the background — transforming your intent into action, without ever asking for your attention.

Less distraction. More done."

AURA is a wearable AI context engine designed to capture, process, and remember environmental signals in real-time. It transforms your daily life into a searchable, semantic memory—controlled entirely by you.

<br/>

[**Deploy Backend**](backend/README.md) • [**Flash Firmware**](firmware/readme.md) • [**Get the App**](app/README.md) • [**Join Discord**](https://github.com/thesohamdatta/Aura-Wearable-AI/issues)

</div>

<br/>

---

<br/>

## 1. Miniature Scale. Massive Intelligence.

<div align="center">
  <table border="0">
    <tr>
      <td width="50%" align="center">
        <img src="Assets/AURA%20IMAGES/CIRCUIT%20DIAGRAM/1%20ruppe.jpeg" width="90%" style="border-radius: 50%; aspect-ratio: 1/1; object-fit: cover; border: 2px solid #333;"/>
        <p><i>Engineering at the edge of possibility.</i></p>
      </td>
      <td width="50%" align="center">
        <img src="Assets/AURA%20IMAGES/esp32%20s3%20sence/3d%20iamge%20of%20the%20all%20module.png" width="90%" style="border-radius: 2rem;"/>
        <p><i>The brain.</i></p>
      </td>
    </tr>
  </table>
</div>

<br/>

AURA leverages the compact power of the **XIAO ESP32-S3 Sense** to pack high-fidelity sensors into a form factor smaller than a coin. Unlike proprietary devices, AURA gives you the **Raw Stream**—no gatekeepers, no subscription fees.

- **Continuous Context:** Passive capture of audio and visual frames.
- **Privacy First:** Local streaming + self-hosted RAG backend.
- **Extreme Portability:** 350mAh LiPo powered, 3D-printable enclosure.

<br/>

---

<br/>

## 2. Intelligence Pipeline: Beyond Recording.

<div align="center">
  <img src="Assets/AURA%20IMAGES/DIAGRAMS/system_architecture.png" alt="AURA System Architecture" width="100%" style="border-radius: 2rem;"/>
</div>

<br/>

AURA doesn't just store files; it understands them. Our **Multi-Threaded RAG (Retrieval-Augmented Generation)** pipeline processes data through three distinct layers:

### **A. Perception Layer**
- **STT:** Deepgram Nova-3 for 98%+ transcription accuracy.
- **Vision:** GPT-4o Vision analysis of environmental frames.
- **Streaming:** Efficient MJPEG and PDM audio over WebSockets.

### **B. Cognition Layer (RAG)**
- **Vector DB:** Pinecone-backed semantic indexing.
- **Person-Awareness:** Intelligent speaker identification and assignment.
- **Contextual Chunking:** Multi-threaded extraction of relevant conversation segments.

### **C. Interface Layer**
- **Searchable Life:** Instantly recall "The meeting details from Tuesday."
- **Agentic Chat:** A personal AI that knows your world as well as you do.

<br/>

---

<br/>

## 3. The Experience: Your Life, Searchable.

<div align="center">
  <img src="Assets/AURA%20IMAGES/SOFTWARE/software_mockups.jpg" alt="AURA Mobile Interface" width="90%" style="border-radius: 2rem;"/>
</div>

<br/>

| Use Case | How AURA Helps |
| :--- | :--- |
| **Professional** | Instant summaries of every meeting, searchable by speaker or topic. |
| **Academic** | Never miss a lecture detail; ask questions to your class recordings. |
| **Creative** | Capture "Eureka" moments as they happen, indexed by visual context. |
| **Personal** | A searchable archive of family stories and shared memories. |

<br/>

---

<br/>

## 4. Hardware Architecture

<div align="center">
  <table border="0">
    <tr>
      <td width="33%" align="center">
        <img src="Assets/AURA%20IMAGES/CIRCUIT%20DIAGRAM/assembly.jpeg" width="100%" style="border-radius: 1.5rem; aspect-ratio: 1/1; object-fit: cover;"/>
      </td>
      <td width="33%" align="center">
        <img src="Assets/AURA%20IMAGES/HERO%20IMAGES/the%20hero%203.jpeg" width="100%" style="border-radius: 1.5rem; aspect-ratio: 1/1; object-fit: cover;"/>
      </td>
      <td width="33%" align="center">
        <img src="Assets/AURA%20IMAGES/HARDWARE/all_components.png" width="100%" style="border-radius: 1.5rem; aspect-ratio: 1/1; object-fit: cover;"/>
      </td>
    </tr>
  </table>
</div>

<br/>

AURA is designed for **Assembly**. Every component is off-the-shelf, making it the most accessible AI wearable on the planet.

| Component | Specification |
| :--- | :--- |
| **MCU** | Dual-core 32-bit LX7 @ 240MHz |
| **RAM** | 8MB PSRAM + 384KB SRAM |
| **Camera** | OV2640 2MP (1600x1200) |
| **Mic** | Digital PDM Microphone |
| **Wireless** | 2.4GHz WiFi + BLE 5.0 |

<br/>

---

<br/>

## 5. Roadmap: The Path to AGI Wearables

- [x] **Phase 1: Foundation** — Core streaming, transcription, and basic RAG.
- [ ] **Phase 2: Vision 2.0** — Real-time object detection and spatial awareness.
- [ ] **Phase 3: Multi-Modal Agents** — Proactive AI assistance based on current context.
- [ ] **Phase 4: Swarm Intelligence** — Multi-device context sharing and collaborative memory.

<br/>

---

<br/>

<div align="center">

**AURA** — Open Hardware · Open Firmware · Open Intelligence

[⭐ Star on GitHub](https://github.com/thesohamdatta/Aura-Wearable-AI) · [Issues](https://github.com/thesohamdatta/Aura-Wearable-AI/issues) · [MIT License](LICENSE)

<br/>

<img src="Assets/AURA%20IMAGES/HERO%20IMAGES/HERO/wearable.png" alt="AURA Logo" width="80px"/>

</div>
