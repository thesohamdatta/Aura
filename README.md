<h1 align="center">Aura</h1>

<p align="center">
  <em>A wearable AI pendant that remembers what you see and hear.</em><br/>
  <em>Open source. Always with you , Alwa.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-black?style=flat-square" />
  <img src="https://img.shields.io/badge/platform-ESP32--S3-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/battery-12h-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/weight-45g-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/cost-$70-purple?style=flat-square" />
</p>

<p align="center">
  <a href="#">Docs</a> &nbsp;·&nbsp;
  <a href="#">Website</a> &nbsp;·&nbsp;
  <a href="#">Demo</a> &nbsp;·&nbsp;
  <a href="#">Parts List</a>
</p>

---

<p align="center">
  <img src="https://github.com/user-attachments/assets/f3c6feb5-d5c1-4739-a034-eb468905ccef" width="30%" alt="Aura pendant side view" />
  &nbsp;
  <img src="https://github.com/user-attachments/assets/56118e77-75c5-4ce1-bdb6-11a28883b16d" width="30%" alt="Aura ESP32-S3 board" />
  &nbsp;
 <img width="972" height="310" alt="image" src="https://github.com/user-attachments/assets/d564ad2a-e63e-46ed-b918-5a199e311106" />

</p>

---

## What It Does

You can wear aura as you want : pendant , clip , microphone , as a watch and many more ways . It captures moments — conversations, ideas, faces, scenes — throughout your day. Then , you ask questions. It answers.

```
"Where did I park?"                        → Aura knows.
"What did mom ask me to pick up?"          → Milk, eggs, the usual guilt trip.
"Did I take my meds this morning?"         → Yes. Relax.
```

No screen , no friction , no distaction , no more loopholes.

Virtual Assistance are joke they do not assists us

We have lot of distraction in our phone

Aura will be changing this

---

## Hardware Stack

<p align="center">
  <img src="https://github.com/user-attachments/assets/877e66fb-ac78-4f53-8ce2-252a449bdf52" width="75%" alt="Hardware diagram" />
</p>

| Component | Spec | Role |
|---|---|---|
| **XIAO ESP32-S3 Sense** | Dual-core 240MHz · 8MB PSRAM | Brain of the device |
| **OV2640 Camera** | 2MP · 66° FOV · JPEG output | Visual capture |
| **I2S MEMS Microphone** | 16kHz · omnidirectional | Audio recording |
| **LiPo Battery Pack** | 400+200mAh = 600mAh | All-day power |
| **3D-Printed Enclosure** | PLA/PETG · custom pendant form | Wearable housing |
| **30 AWG Wires** | Flexible · ultra-thin | Internal wiring |

> **Total BOM Cost: ~$30 &nbsp;·&nbsp; Weight: ~45g &nbsp;·&nbsp; Battery Life: 5-8 hours**

---

## Software Stack

<p align="center">
  <img src="https://github.com/user-attachments/assets/b6ac55a4-0b20-4d09-aec3-f96c68d22611" width="75%" alt="Software stack" />
</p>

| Layer | Technology | Purpose |
|---|---|---|
| **Firmware** | C++ · Arduino · ESP-IDF | Device operation, capture, BLE/WiFi |
| **Mobile App** | Flutter · Dart | iOS & Android interface |
| **Backend API** | Python 3.11 · FastAPI | Processing, routing, storage |
| **Database** | Firebase · Pinecone | Memories, vector search |
| **Communication** | BLE 5.0 · WiFi 802.11n | Device ↔ App ↔ Cloud |

---

## AI & Backend Stack

<p align="center">
  <img src="https://github.com/user-attachments/assets/bf38c30c-c303-4928-8b87-f6bba0ac83f2" width="75%" alt="AI pipeline" />
</p>

```
Audio  ──→  Transcription  ──→  LLM Processing  ──→  Memory
Image  ──→  Vision Model   ──┘                        Search
```

| Provider | Role | Mode |
|---|---|---|
| **Groq / Llama** | Real-time transcription + reasoning | Cloud · Fast |
| **OpenAI GPT-4o** | Vision understanding · highest quality | Cloud · Accurate |
| **Ollama** | Full local inference stack | Local · Private |
| **Deepgram** | Streaming audio transcription | Cloud · Real-time |
| **Whisper** | Offline transcription fallback | Local · Offline |

**Don't trust me either .**
Don't trust the cloud? Run everything locally with Ollama.
Zero data leaves your machine.

---

## Access

### Build It Yourself


```bash
# 1. Clone the repository
git clone https://github.com/your-org/aura.git
cd aura

# 2. Flash firmware to your ESP32-S3
cd firmware
platformio run -e seeed_xiao_esp32s3 --target upload

# 3. Configure your environment
cp .env.template .env
# Add: GROQ_API_KEY / OPENAI_API_KEY / OLLAMA_URL

# 4. Start the backend
cd backend && pip install -r requirements.txt
python main.py
```

---

## Usage

<p align="center">
  <img src="./assets/app-walkthrough.gif" width="60%" alt="App Walkthrough" />
</p>

1. **Wear it.** Clip the pendant. Done.
2. **Live your day.** Aura captures in the background.
3. **Ask anything.** Open the app. Search your memories.
4. **Review & act.** Transcripts, summaries, action items — waiting for you.

**LED Status:**

| Light | Meaning |
|---|---|
| 🟢 Solid green | Recording active |
| 🔵 Pulsing blue | Syncing to app |
| 🟡 Yellow | Low battery |
| ⚪ Off | Standby / idle |

---

## Contributing

We're building the future of wearable AI in the open. Every contribution matters.

```
🐛  Found a bug?        → Open an issue
💡  Have an idea?       → Start a Discussion
🔧  Want to build?      → Fork → Branch → PR
📖  Improve docs?       → Docs are code too
🌍  Other language?     → Help us translate
```

---

## The People

Built by a people that believes wearable AI should be open, affordable, and in your control — not the 299$ giant.

**Core Team:** [Soham Datta](https://www.linkedin.com/in/thesohamdatta) &nbsp;·&nbsp; [Laxman Pajai](https://www.linkedin.com/in/laxman-pajai-434b98239/?originalSubdomain=in)

---

<p align="center">
  <strong>Always with you , Always for you</strong><br/>
  <sub>Star ⭐ the repo if this matters to you. It helps others find it.</sub>
</p>

<p align="center">
  <a href="#">Docs</a> &nbsp;·&nbsp;
  <a href="#">GitHub</a> &nbsp;·&nbsp;
  <a href="#">App</a>
</p>

---

<sub>

**Disclaimer:** This project is developed with assistance of Clude code , Antigravity but with rigorous learning and with many sleepless nights

</sub>
