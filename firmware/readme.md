<div align="center">
  <p align="center"><code>[ SIGNAL 02 // THE EYE ]</code></p>
  <h1><b><font color="#E63B2E">FIRMWARE</font></b></h1>
</div>

<br/>

<div align="center">
  <img src="../Assets/MAIN/main moduel.webp" width="80%"/>
</div>

<br/>

Firmware for the AURA wearable AI pendant running on the **Seeed XIAO ESP32-S3 Sense**. Handles audio capture, image capture, BLE streaming, and OTA updates.

---

## Quick Start

1. **Connect** XIAO ESP32-S3 via USB-C.
2. **Flash** via UF2 (Method 1) or **Build** via PlatformIO (Method 2).
3. **Verify** Serial Monitor @ `115200` baud.

---

## Architecture

```
firmware/src/
├── app.cpp              ← main application loop
├── mic.cpp              ← audio capture
├── opus_encoder.cpp     ← compression
└── config.h             ← all tunable settings
```

---

## Configuration (`src/config.h`)

```cpp
#define PHOTO_CAPTURE_INTERVAL_MS  30000   // 30s
#define CAMERA_FRAME_SIZE          FRAMESIZE_VGA
#define MIC_SAMPLE_RATE            16000
```

<br/>

---

> **DEEP DIVE:** For detailed flashing methods, battery specs, and troubleshooting, visit the [Firmware Setup Guide](../docs/guides/firmware-setup.md).
