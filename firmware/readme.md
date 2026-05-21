# AURA Firmware

Firmware for the AURA wearable AI pendant running on the **Seeed XIAO ESP32-S3 Sense**.

Handles audio capture, image capture, BLE streaming to the companion app, and OTA updates.

---

## Architecture

```
firmware/src/
├── app.cpp              ← main application loop & task orchestration
├── app.h
├── mic.cpp              ← PDM microphone (I2S, 16kHz)
├── mic.h
├── opus_encoder.cpp     ← Opus audio compression
├── opus_encoder.h
├── ota.cpp              ← OTA firmware update over BLE+WiFi
├── ota.h
├── config.h             ← all tunable settings
├── camera_pins.h        ← ESP32-S3 Sense camera pin map
└── camera_index.h       ← camera driver
```

Key settings are in `config.h`. You should not need to edit anything else for a standard build.

---

## Configuration (`src/config.h`)

All important values are in one file:

```cpp
// Device identity
#define BLE_DEVICE_NAME         "AURA"
#define FIRMWARE_VERSION_STRING "2.3.2"

// Camera
#define PHOTO_CAPTURE_INTERVAL_MS  30000   // 30s between captures
#define CAMERA_FRAME_SIZE          FRAMESIZE_VGA  // 640×480

// Audio
#define MIC_SAMPLE_RATE  16000   // 16kHz
#define OPUS_BITRATE     32000   // 32kbps

// Battery (2× 250mAh = 500mAh total)
#define BATTERY_MAX_VOLTAGE  4.2f
#define BATTERY_MIN_VOLTAGE  3.2f
```

Increasing `PHOTO_CAPTURE_INTERVAL_MS` extends battery life significantly.
