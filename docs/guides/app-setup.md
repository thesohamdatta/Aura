# <font color="#E63B2E">MOBILE APP SETUP GUIDE</font>

> **Archive // Technical Manual for AURA Android App**

---

## Requirements

- Android Studio Hedgehog or later
- Android SDK 26+ (Android 8.0+)
- A physical Android device with Bluetooth LE support (BLE emulation is unreliable on emulators)

---

## Build & Run

**Option A — Android Studio (recommended):**

1. Open `app/android/` in Android Studio
2. Let Gradle sync complete
3. Connect your Android device via USB (enable USB debugging)
4. Click **Run ▶**

**Option B — Command line:**

```bash
cd app/android

# Debug build
./gradlew assembleDebug

# Install on connected device
./gradlew installDebug
```

APK output: `app/build/outputs/apk/debug/app-debug.apk`

---

## Configuration

Set the backend URL in the app settings after first launch:

```
API_BASE_URL = https://your-ngrok-url.ngrok-free.app/
```

Include the trailing slash.

---

## Pairing with AURA

1. Flash firmware to the pendant (see [`firmware/readme.md`](../firmware/readme.md))
2. Power on the AURA pendant
3. Open the app → go to **Devices**
4. Tap **Pair new device** → select **AURA** from the list
5. Connection established — pendant LED confirms

---

## Troubleshooting

| Issue | Fix |
|:---|:---|
| Device not found in scan | Power cycle pendant, ensure BLE is on |
| Gradle sync fails | Check Android SDK version, update Gradle |
| APK installs but crashes | Verify `API_BASE_URL` is set correctly |
| No transcription appearing | Check backend is running and ngrok tunnel is active |
