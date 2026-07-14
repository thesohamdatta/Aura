import {Layout, LayoutPanel} from '@astryxdesign/core/Layout';
import {SideNav, SideNavItem, SideNavSection} from '@astryxdesign/core/SideNav';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

export function DocsLayout() {
  return (
    <Layout
      start={
        <LayoutPanel style={{width: '260px', padding: 'var(--spacing-6)'}}>
          <SideNav>
            <SideNavSection title="Getting Started">
              <SideNavItem label="What Is Aura" href="#what-is-aura" />
              <SideNavItem label="How Aura Works" href="#how-it-works" />
              <SideNavItem label="Bill of Materials" href="#bill-of-materials" />
              <SideNavItem label="BOM Case Assembly" href="#bom-case" />
            </SideNavSection>
            <SideNavSection title="Engineering">
              <SideNavItem label="Hardware Overview" href="#hardware" />
              <SideNavItem label="Flashing Firmware" href="#firmware" />
              <SideNavItem label="Setting Up Backend" href="#backend" />
              <SideNavItem label="Setting Up App" href="#setup-app" />
            </SideNavSection>
            <SideNavSection title="Configuration">
              <SideNavItem label="AI Providers" href="#ai-providers" />
              <SideNavItem label="Transcription" href="#transcription" />
              <SideNavItem label="Camera" href="#camera-config" />
              <SideNavItem label="Battery & Power" href="#battery-power" />
              <SideNavItem label="OTA Updates" href="#ota-updates" />
            </SideNavSection>
            <SideNavSection title="Memory & AI">
              <SideNavItem label="Memory & RAG" href="#memory-rag" />
            </SideNavSection>
            <SideNavSection title="Privacy & Support">
              <SideNavItem label="Privacy & Data" href="#privacy-data" />
              <SideNavItem label="Troubleshooting" href="#troubleshooting" />
            </SideNavSection>
          </SideNav>
        </LayoutPanel>
      }
      content={
        <div style={{padding: 'var(--spacing-8) var(--spacing-12)', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '40px'}}>
          <div style={{marginBottom: '20px'}}>
            <Heading level={1} type="display-2">System Architecture</Heading>
            <Text color="secondary" style={{fontSize: '18px', marginTop: '16px', lineHeight: 1.6}}>
              The Aura project represents a shift toward modular open source hardware. This documentation provides a technical foundation for building, deploying, and maintaining Aura systems.
            </Text>
          </div>

          {/* What Is Aura */}
          <div id="what-is-aura" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>What Is Aura</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Aura is an open source AI wearable pendant. You wear it around your neck. It listens, sees, and thinks, so you do not have to pause your day to take notes or remember things.
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              It captures audio and images, sends them to an AI, and turns everything into summaries, transcripts, and action items, all accessible from your phone.
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6}}>
              Built on the Omi ecosystem. Fully open source. Around $50 to $70 to build yourself.
            </Text>
          </div>

          {/* How Aura Works */}
          <div id="how-it-works" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>How Aura Works</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              The execution pipeline flows simply:
            </Text>
            <ul style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px'}}>
              <li>Aura's microphone captures audio continuously.</li>
              <li>The camera captures images at set intervals.</li>
              <li>Both are sent to the backend over Wi-Fi.</li>
              <li>The backend transcribes audio via Deepgram or Whisper.</li>
              <li>Images are understood via GPT-4o Vision or Moondream.</li>
              <li>Everything is summarized and stored.</li>
              <li>You see it all in the Omi app on your phone.</li>
            </ul>
            <Text color="secondary" style={{lineHeight: 1.6}}>
              The ESP32-S3 handles capture and transmission. The backend handles all AI processing. Your phone is just the mobile interface.
            </Text>
          </div>

          {/* Bill of Materials */}
          <div id="bill-of-materials" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Bill of Materials</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '16px'}}>
              What to buy and where to get it:
            </Text>
            <div style={{overflowX: 'auto', marginBottom: '16px'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', color: 'var(--color-text-secondary)'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid var(--color-border)'}}>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Item</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Where to Buy</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Approx Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>XIAO ESP32-S3 Sense</td><td style={{padding: '10px 0'}}>Seeed Studio or Amazon</td><td style={{padding: '10px 0'}}>$15 to $24</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>150mAh LiPo x 6</td><td style={{padding: '10px 0'}}>Amazon</td><td style={{padding: '10px 0'}}>$12</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Wires</td><td style={{padding: '10px 0'}}>Amazon</td><td style={{padding: '10px 0'}}>$5</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>3D printed case</td><td style={{padding: '10px 0'}}>Print yourself or order online</td><td style={{padding: '10px 0'}}>$5 to $10</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>USB-C cable</td><td style={{padding: '10px 0'}}>Anywhere</td><td style={{padding: '10px 0'}}>Free</td></tr>
                  <tr style={{fontWeight: 600, color: 'var(--color-text-primary)'}}><td style={{padding: '10px 0'}}>Total Cost</td><td></td><td style={{padding: '10px 0'}}>~$50 to $70</td></tr>
                </tbody>
              </table>
            </div>
            <Text color="secondary" style={{lineHeight: 1.6}}>
              You can print the case STL files from the Aura hardware folder on GitHub.
            </Text>
          </div>

          {/* BOM Case Assembly */}
          <div id="bom-case" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>BOM Case Assembly</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Download the STL files from the <a href="https://github.com/thesohamdatta/Aura-Wearable-AI/tree/main/hardware" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-accent)', textDecoration: 'none'}}>Aura Hardware folder on GitHub</a>.
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Recommended 3D Print Settings:
            </Text>
            <ul style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px'}}>
              <li>Material: PLA or PETG</li>
              <li>Layer height: 0.2mm</li>
              <li>Infill: 20%</li>
              <li>Supports: Yes, where needed</li>
            </ul>
            <Text color="secondary" style={{lineHeight: 1.6}}>
              After printing, mount the ESP32-S3 board, route the battery wires, and snap the case shut. The pendant loop is built into the design. If you do not have a 3D printer, use local makerspaces or online printing services like Craftcloud or PCBWay.
            </Text>
          </div>

          {/* Hardware Overview */}
          <div id="hardware" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Hardware Overview</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '16px'}}>
              The XIAO ESP32-S3 Sense is the core. Camera and microphone are already integrated on the board, so no extra modules are needed.
            </Text>
            <div style={{overflowX: 'auto', marginBottom: '16px'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', color: 'var(--color-text-secondary)'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid var(--color-border)'}}>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Component</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Microcontroller</td><td style={{padding: '10px 0'}}>XIAO ESP32-S3 Sense</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Camera</td><td style={{padding: '10px 0'}}>OV2640, built into ESP32-S3 Sense</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Microphone</td><td style={{padding: '10px 0'}}>PDM, built into ESP32-S3 Sense</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Battery</td><td style={{padding: '10px 0'}}>6x 150mAh LiPo cells</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Enclosure</td><td style={{padding: '10px 0'}}>Custom 3D printed case</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Connectivity</td><td style={{padding: '10px 0'}}>Wi-Fi 2.4GHz + Bluetooth LE</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Charging</td><td style={{padding: '10px 0'}}>USB-C</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Flashing Firmware */}
          <div id="firmware" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Flashing the Firmware</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '16px'}}>
              Aura firmware runs on the XIAO ESP32-S3 Sense. It coordinates audio streams, BLE advertisement, Wi-Fi connections, and camera frames. Install it using one of the methods below.
            </Text>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Method 1: UF2 Drag and Drop Flash (Easiest)
            </Text>
            <ol style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px'}}>
              <li>Connect your XIAO ESP32-S3 Sense to your computer using a USB-C data cable.</li>
              <li>Enter bootloader mode: Hold down the Boot button, press and release the Reset button, then release Boot.</li>
              <li>A new USB disk drive named "ESP32S3" will mount on your system.</li>
              <li>Copy the precompiled .uf2 file from firmware/releases/ and drop it onto the mounted drive. The device will auto-flash and reboot.</li>
            </ol>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Method 2: PlatformIO (Recommended for developers)
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '20px'}}>
{`pip install platformio
cd firmware

# Compile and upload
platformio run -e seeed_xiao_esp32s3 --target upload

# Open serial debug output
platformio device monitor --baud 115200`}
            </pre>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Method 3: Arduino IDE
            </Text>
            <ol style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px'}}>
              <li>Install Arduino IDE 2.x.</li>
              <li>Add the ESP32 board manager URL in File / Preferences / Additional boards manager URLs:<br />
                <code style={{display: 'block', background: 'var(--color-background-body)', padding: '8px', borderRadius: '6px', marginTop: '6px', fontFamily: 'monospace', fontSize: '12px'}}>
                  https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
                </code>
              </li>
              <li>Go to Tools / Board / Boards Manager, search esp32, and install version 2.0.17.</li>
              <li>Configure the board in the Tools menu:
                <pre style={{background: 'var(--color-background-body)', padding: '12px', borderRadius: '8px', marginTop: '6px', fontSize: '12px', fontFamily: 'monospace'}}>
{`Tools -> Board  ->  XIAO_ESP32S3
Tools -> PSRAM  ->  OPI PSRAM  (Required. Camera fails without this.)
Tools -> Port   ->  your COM port`}
                </pre>
              </li>
              <li>Open firmware/firmware.ino and click Upload.</li>
              <li>Open Serial Monitor at 115200 baud. Expected output:<br />
                <pre style={{background: 'var(--color-background-body)', padding: '12px', borderRadius: '8px', marginTop: '6px', fontSize: '12px', fontFamily: 'monospace'}}>
{`[AURA] Camera initialized
[AURA] Microphone initialized
[AURA] BLE advertising
[AURA] Ready`}
                </pre>
              </li>
            </ol>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Method 4: Arduino CLI
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '12px'}}>
{`arduino-cli config add board_manager.additional_urls \\
  https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json

arduino-cli core install esp32:esp32@2.0.17

# Compile and upload (replace COM5 with your port)
arduino-cli compile --build-path build --output-dir dist \\
  -e -u -p COM5 -b esp32:esp32:XIAO_ESP32S3:PSRAM=opi`}
            </pre>
          </div>

          {/* Setting Up the Backend */}
          <div id="backend" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Setting Up the Backend</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              The Aura backend powers all AI capabilities, transcription pipelines, conversation processing, and cloud integrations. It acts as the orchestration layer between the ESP32-S3 hardware and deep model APIs.
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              System Requirements and Dependencies:
            </Text>
            <ul style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px'}}>
              <li>Python 3.10 or 3.11</li>
              <li>Google Cloud SDK and Firebase Command Line Tools</li>
              <li>System packages: git, ffmpeg, and opus</li>
              <li>Ngrok or Cloudflare Tunnel for local development exposing</li>
            </ul>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Step 1: Firebase Initialization
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '16px'}}>
{`gcloud auth login
gcloud config set project <your-project-id>
gcloud auth application-default login --project <your-project-id>`}
            </pre>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Ensure these APIs are enabled: Cloud Resource Manager API, Firebase Management API, and Cloud Firestore API. Create the composite Firestore indexes as required by the backend README.
            </Text>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Step 2: Environment Variables
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '16px'}}>
{`git clone https://github.com/thesohamdatta/Aura-Wearable-AI.git
cd Aura-Wearable-AI/backend
cp .env.template .env`}
            </pre>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '8px'}}>
              Configure your .env with the following required values:
            </Text>
            <ul style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px'}}>
              <li><code>OPENAI_API_KEY</code> and <code>DEEPGRAM_API_KEY</code></li>
              <li><code>PINECONE_API_KEY</code> and <code>PINECONE_INDEX_NAME</code> (1536 dimensions for OpenAI vectors)</li>
              <li><code>REDIS_DB_HOST</code>, <code>REDIS_DB_PORT</code>, and <code>REDIS_DB_PASSWORD</code></li>
              <li><code>GOOGLE_APPLICATION_CREDENTIALS=google-credentials.json</code></li>
            </ul>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Step 3: Installation and Server Boot
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '16px'}}>
{`python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

pip install -r requirements.txt

uvicorn main:app --reload --env-file .env --port 8000`}
            </pre>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Step 4: Exposing to Device (Ngrok)
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '12px'}}>
{`ngrok http 8000`}
            </pre>
            <Text color="secondary" style={{lineHeight: 1.6}}>
              Copy the generated HTTPS tunnel address and paste it as <code>API_BASE_URL</code> in your app, with a trailing slash: <code>API_BASE_URL=https://&lt;subdomain&gt;.ngrok-free.app/</code>
            </Text>
          </div>

          {/* Setting Up the App */}
          <div id="setup-app" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Setting Up the App</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Aura ships a native Android companion app built with Kotlin. It pairs with the pendant over Bluetooth LE, lets you configure the backend URL, browse transcription history, and monitor battery status in real time.
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Requirements:
            </Text>
            <ul style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px'}}>
              <li>Android Studio Hedgehog or later</li>
              <li>Android SDK 26+ (Android 8.0 minimum)</li>
              <li>A physical Android device with Bluetooth LE support</li>
            </ul>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Option A: Android Studio (Recommended)
            </Text>
            <ol style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px'}}>
              <li>Clone the repo and open app/android/ in Android Studio.</li>
              <li>Wait for the Gradle sync to complete.</li>
              <li>Connect your Android device via USB and enable USB Debugging in Developer Options.</li>
              <li>Click Run.</li>
            </ol>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Option B: Command Line
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '12px'}}>
{`cd app/android
./gradlew assembleDebug
./gradlew installDebug`}
            </pre>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '16px'}}>
              APK output: <code>app/build/outputs/apk/debug/app-debug.apk</code>
            </Text>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Pairing with Aura:
            </Text>
            <ol style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px'}}>
              <li>Flash the firmware to the pendant (see Flashing Firmware above).</li>
              <li>Power on the Aura pendant.</li>
              <li>Open the app and go to Devices.</li>
              <li>Tap Pair new device and select AURA from the BLE scan list.</li>
              <li>Connection established. The pendant LED confirms the pairing.</li>
            </ol>
          </div>

          {/* AI Providers Setup */}
          <div id="ai-providers" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>AI Providers Setup</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '16px'}}>
              Aura supports three AI providers. Set your preferred choice in your .env file:
            </Text>
            <div style={{overflowX: 'auto', marginBottom: '16px'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', color: 'var(--color-text-secondary)'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid var(--color-border)'}}>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Provider</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Best For</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Internet Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Groq</td><td style={{padding: '10px 0'}}>Fast, real-time responses</td><td style={{padding: '10px 0'}}>Yes</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>OpenAI</td><td style={{padding: '10px 0'}}>Best quality, vision support</td><td style={{padding: '10px 0'}}>Yes</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Ollama</td><td style={{padding: '10px 0'}}>Local, private, offline</td><td style={{padding: '10px 0'}}>No (Localhost)</td></tr>
                </tbody>
              </table>
            </div>
            <Text color="secondary" style={{lineHeight: 1.6}}>
              For Ollama, set <code>OLLAMA_URL=http://localhost:11434</code> in your backend .env.
            </Text>
          </div>

          {/* Transcription Setup */}
          <div id="transcription" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Transcription Setup</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '16px'}}>
              Aura captures PDM audio at 16kHz mono from the built-in microphone. Two transcription options are available:
            </Text>
            <div style={{overflowX: 'auto', marginBottom: '12px'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', color: 'var(--color-text-secondary)'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid var(--color-border)'}}>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Option</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Speed</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Internet Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Deepgram</td><td style={{padding: '10px 0'}}>Fast, real-time</td><td style={{padding: '10px 0'}}>Yes (console.deepgram.com)</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Whisper (local)</td><td style={{padding: '10px 0'}}>Slower, accurate</td><td style={{padding: '10px 0'}}>No (runs via Ollama)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Camera Configuration */}
          <div id="camera-config" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Camera Configuration</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              You can tune camera resolution, capture intervals, and compression settings inside your device's firmware.ino:
            </Text>
            <div style={{overflowX: 'auto', marginBottom: '12px'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', color: 'var(--color-text-secondary)'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid var(--color-border)'}}>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Parameter</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Default</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}><code>PHOTO_CAPTURE_INTERVAL_MS</code></td><td style={{padding: '10px 0'}}>10000</td><td style={{padding: '10px 0'}}>Time between photos in ms</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}><code>JPEG_QUALITY</code></td><td style={{padding: '10px 0'}}>12</td><td style={{padding: '10px 0'}}>0 = highest, 63 = lowest</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}><code>FRAMESIZE</code></td><td style={{padding: '10px 0'}}>VGA</td><td style={{padding: '10px 0'}}>Camera resolution (VGA, SVGA, UXGA)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Battery & Power */}
          <div id="battery-power" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Battery and Power</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '16px'}}>
              Aura runs on 6 parallel 150mAh LiPo cells. Voltage level indicates charge state:
            </Text>
            <div style={{overflowX: 'auto', marginBottom: '16px'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', color: 'var(--color-text-secondary)'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid var(--color-border)'}}>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Voltage</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Battery %</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>4.2 to 4.3V</td><td style={{padding: '10px 0'}}>100%</td><td style={{padding: '10px 0'}}>Fully charged</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>4.0 to 4.2V</td><td style={{padding: '10px 0'}}>80 to 100%</td><td style={{padding: '10px 0'}}>Good</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>3.8 to 4.0V</td><td style={{padding: '10px 0'}}>20 to 80%</td><td style={{padding: '10px 0'}}>Moderate</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>3.7 to 3.8V</td><td style={{padding: '10px 0'}}>0 to 20%</td><td style={{padding: '10px 0'}}>Low, charge soon</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>&lt;3.5V</td><td style={{padding: '10px 0'}}>Critical</td><td style={{padding: '10px 0'}}>Check hardware wiring</td></tr>
                </tbody>
              </table>
            </div>
            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Best Practices:
            </Text>
            <ul style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px'}}>
              <li>Charge when voltage drops below 3.8V (20%)</li>
              <li>Never let voltage drop below 3.5V (cell damage threshold)</li>
              <li>Charge between 10C and 40C ambient temperature</li>
              <li>Store at ~50% charge if unused for more than a week</li>
              <li>Increase PHOTO_CAPTURE_INTERVAL_MS in firmware for all-day use</li>
            </ul>
          </div>

          {/* OTA Updates */}
          <div id="ota-updates" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>OTA Firmware Updates</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Aura supports over-the-air firmware updates via BLE and Wi-Fi, so you can update the pendant's firmware without connecting a USB cable. Wi-Fi credentials are delivered from the app over Bluetooth LE.
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              OTA Update Flow:
            </Text>
            <ol style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px'}}>
              <li>Open the Aura app and navigate to Device Settings / Firmware Update.</li>
              <li>The app sends Wi-Fi credentials to the pendant via OTA_CONTROL_UUID BLE characteristic.</li>
              <li>Pendant connects to Wi-Fi using the provided credentials.</li>
              <li>App transmits the firmware download URL to the pendant.</li>
              <li>Pendant downloads and installs the new firmware image.</li>
              <li>Device reboots automatically with the new firmware loaded.</li>
            </ol>
            <div style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', marginBottom: '12px', border: '1px solid var(--color-border)'}}>
              <Text style={{fontWeight: 600, marginBottom: '8px'}}>Note on Wi-Fi Credentials</Text>
              <Text color="secondary" style={{fontSize: '14px'}}>
                Wi-Fi credentials sent during OTA are not stored permanently on the device. After the update, the device returns to BLE-only advertising mode. Your credentials are never persisted on flash storage.
              </Text>
            </div>
          </div>

          {/* Memory & RAG */}
          <div id="memory-rag" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Memory and RAG</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Aura's long-term memory system is built on a Retrieval-Augmented Generation (RAG) pipeline. Every conversation is embedded as a vector and stored in Pinecone for semantic recall. When you ask Aura something, it retrieves the most relevant memories to ground the AI response.
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Pipeline Architecture:
            </Text>
            <ol style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px'}}>
              <li>Audio transcription arrives from Deepgram or local Whisper as plain text.</li>
              <li>The backend chunks the transcript into overlapping segments.</li>
              <li>Each chunk is embedded using OpenAI's text-embedding-3-small model (1536 dimensions).</li>
              <li>Vectors are upserted into your Pinecone index, tagged with timestamp and session metadata.</li>
              <li>On retrieval, the user's question is embedded identically and top-k nearest vectors are fetched.</li>
              <li>Retrieved chunks are injected into the system prompt context window before the LLM call.</li>
            </ol>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '12px'}}>
{`# Pinecone index settings
# Dimensions: 1536 (matches OpenAI text-embedding-3-small)
# Metric: cosine
# Name: set in .env as PINECONE_INDEX_NAME=aura-memories`}
            </pre>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Redis is used as a fast ephemeral cache layer for recent conversation context, reducing redundant Pinecone queries. Use <a href="https://console.upstash.com" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-accent)', textDecoration: 'none'}}>Upstash</a> for a free serverless Redis instance.
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto'}}>
{`REDIS_DB_HOST=your-upstash-endpoint
REDIS_DB_PORT=6379
REDIS_DB_PASSWORD=your-upstash-password`}
            </pre>
          </div>

          {/* Privacy & Data */}
          <div id="privacy-data" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Privacy and Data</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '16px'}}>
              Aura is privacy-first by design. Nothing is sent anywhere by default without your explicit configuration. You control every API key and every endpoint.
            </Text>
            <div style={{overflowX: 'auto', marginBottom: '12px'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', color: 'var(--color-text-secondary)'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid var(--color-border)'}}>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Feature</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Local Option</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Cloud Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Transcription</td><td style={{padding: '10px 0'}}>Whisper (Ollama)</td><td style={{padding: '10px 0'}}>Deepgram</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>AI Processing</td><td style={{padding: '10px 0'}}>Ollama</td><td style={{padding: '10px 0'}}>Groq / OpenAI</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Memory Storage</td><td style={{padding: '10px 0'}}>Self-hosted Firebase</td><td style={{padding: '10px 0'}}>Aura Cloud</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Images</td><td style={{padding: '10px 0'}}>Your backend</td><td style={{padding: '10px 0'}}>Your backend</td></tr>
                </tbody>
              </table>
            </div>
            <Text color="secondary" style={{lineHeight: 1.6}}>
              Note: Recording in public spaces may be subject to local laws. Always inform others when recording.
            </Text>
          </div>

          {/* Troubleshooting */}
          <div id="troubleshooting" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Troubleshooting</Heading>

            <Text style={{fontWeight: 600, marginBottom: '12px'}}>Firmware and Hardware</Text>
            <div style={{overflowX: 'auto', marginBottom: '24px'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', color: 'var(--color-text-secondary)'}}>
                <thead>
                  <tr style={{borderBottom: '2px solid var(--color-border)'}}>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Problem</th>
                    <th style={{padding: '10px 0', fontWeight: 600, color: 'var(--color-text-primary)'}}>Fix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Camera init failed</td><td style={{padding: '10px 0'}}>Tools / PSRAM / OPI PSRAM, then re-upload</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>COM port missing (Windows)</td><td style={{padding: '10px 0'}}>Install <a href="https://www.wch-ic.com/downloads/CH341SER_EXE.html" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-accent)', textDecoration: 'none'}}>CH340 driver</a>, restart</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Device not appearing as USB drive</td><td style={{padding: '10px 0'}}>Re-enter bootloader mode, try a different USB cable (data cable required)</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Build fails (PlatformIO)</td><td style={{padding: '10px 0'}}>Run <code>pip install platformio</code>, then <code>pio run --target clean</code></td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Always shows 0% or 100% battery</td><td style={{padding: '10px 0'}}>Check voltage divider wiring on GPIO2, verify R1=169kΩ, R2=110kΩ</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>BLE not pairing</td><td style={{padding: '10px 0'}}>Power cycle device, forget in phone Bluetooth settings, re-pair</td></tr>
                  <tr style={{borderBottom: '1px solid var(--color-border)'}}><td style={{padding: '10px 0'}}>Wi-Fi not connecting</td><td style={{padding: '10px 0'}}>Confirm 2.4GHz network (ESP32 does not support 5GHz)</td></tr>
                </tbody>
              </table>
            </div>

            <Text style={{fontWeight: 600, marginBottom: '12px'}}>Backend and API</Text>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px'}}>
              <div>
                <Text style={{fontWeight: 600, marginBottom: '6px'}}><code>No internet connection</code> when loading models</Text>
                <Text color="secondary" style={{marginBottom: '8px'}}>Add to utils/stt/vad.py after the imports block:</Text>
                <pre style={{background: 'var(--color-background-body)', padding: '12px', borderRadius: '8px', fontSize: '12px', fontFamily: 'monospace'}}>
{`import ssl
ssl._create_default_https_context = ssl._create_unverified_context`}
                </pre>
              </div>
              <div>
                <Text style={{fontWeight: 600, marginBottom: '6px'}}><code>Internal Server Error</code> on Developer Settings page</Text>
                <Text color="secondary">Firestore composite indexes are missing. See Backend Setup / Step 1 for the required index definitions.</Text>
              </div>
              <div>
                <Text style={{fontWeight: 600, marginBottom: '6px'}}><code>authentication errors</code> from gcloud</Text>
                <Text color="secondary" style={{marginBottom: '8px'}}>Re-run application-default login:</Text>
                <pre style={{background: 'var(--color-background-body)', padding: '12px', borderRadius: '8px', fontSize: '12px', fontFamily: 'monospace'}}>
{`gcloud auth application-default login --project <your-project-id>`}
                </pre>
              </div>
              <div>
                <Text style={{fontWeight: 600, marginBottom: '6px'}}>No transcription appearing</Text>
                <Text color="secondary">Check the Deepgram API key in your .env file. Verify the backend server is running and that API_BASE_URL in the app includes a trailing slash.</Text>
              </div>
            </div>

            <div style={{background: 'var(--color-background-body)', padding: '20px', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
              <Text style={{fontWeight: 600, marginBottom: '6px'}}>Question not answered?</Text>
              <Text color="secondary">Contact support at: <a href="mailto:thesohamdatta@gmail.com" style={{color: 'var(--color-accent)', textDecoration: 'none'}}>thesohamdatta@gmail.com</a></Text>
            </div>
          </div>
        </div>
      }
    />
  );
}
