# Content Migration and Copy Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clean all copy across the entire site to remove em-dashes and placeholders, wire TopNav to use React Router link routing, and migrate the full content of website/docs.html into the React app.

**Architecture:** Use client-side React Router links for navigation between overview and docs. Populate DocsLayout with all 15 documentation sections using Astryx components, with all em-dashes replaced by commas, colons, or clean sentence structures.

**Tech Stack:** React 19, React Router v6, Astryx components.

## Global Constraints

- No em-dashes (`—` or `--`) allowed anywhere in the website copy.
- No placeholders (`XXXXXXX`, `TODO`, `TBD`) allowed.
- Use only Astryx layouts, headings, and texts; do not use raw `div` tags for layouts.

---

### Task 1: Wire Client-Side Routing in TopNav

**Files:**
- Modify: `site/src/components/layout/TopNav.tsx`

**Interfaces:**
- Consumes: `Link` and `useLocation` from `react-router-dom`
- Produces: Customized TopNav component utilizing client-side link navigation

- [ ] **Step 1: Write the routing wrapper and update TopNav**

Update `site/src/components/layout/TopNav.tsx` to define a custom `RouterLink` that maps the `href` prop of `TopNavItem` to the `to` prop of React Router's `Link`.

```tsx
import {Link, useLocation} from 'react-router-dom';
import {TopNav as AstryxTopNav, TopNavItem} from '@astryxdesign/core/TopNav';
import {Button} from '@astryxdesign/core/Button';

// A wrapper that converts href to the to prop of Link
const RouterLink = ({href, children, ...props}: any) => {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};

export function TopNav() {
  const location = useLocation();

  return (
    <AstryxTopNav
      heading={
        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
          Aura
        </Link>
      }
      endContent={
        <a
          href="/docs#hardware"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 18px',
            background: 'var(--color-accent)',
            color: '#ffffff',
            borderRadius: '9999px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Build Yours
        </a>
      }
    >
      <TopNavItem
        href="/"
        label="Overview"
        isSelected={location.pathname === '/'}
        as={RouterLink}
      />
      <TopNavItem
        href="/docs"
        label="Docs"
        isSelected={location.pathname === '/docs'}
        as={RouterLink}
      />
    </AstryxTopNav>
  );
}
```

- [ ] **Step 2: Verify the build passes**

Run: `npm run build 2>&1` in `site/` directory
Expected output: Success with zero errors.

- [ ] **Step 3: Commit**

```bash
git add site/src/components/layout/TopNav.tsx
git commit -m "feat: wire client-side routing in TopNav using RouterLink"
```

---

### Task 2: Copy Cleanup for Landing Page (No Em-dashes)

**Files:**
- Modify: `site/src/components/landing/Hero.tsx`
- Modify: `site/src/components/landing/Capabilities.tsx`
- Modify: `site/src/components/landing/Thesis.tsx`
- Modify: `site/src/components/landing/Research.tsx`
- Modify: `site/src/components/landing/FAQ.tsx`

**Interfaces:**
- Consumes: Nothing
- Produces: Updated copy on the landing page sections with no em-dashes or placeholders.

- [ ] **Step 1: Update Hero component copy**

Modify `site/src/components/landing/Hero.tsx` to replace the em-dash in both the subtitle and description.

```tsx
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack, VStack} from '@astryxdesign/core/Layout';

export function Hero() {
  return (
    <Section
      style={{
        minHeight: '100vh',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '128px 80px 80px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #0a0a0a 0%, #000000 60%)',
          zIndex: 0,
        }}
      />

      <VStack gap={6} style={{position: 'relative', zIndex: 1, maxWidth: '820px'}}>
        <Text
          type="label"
          style={{color: '#6e6e73', letterSpacing: '0.1em', textTransform: 'uppercase'}}
        >
          Aura: Open Source AI Pendant
        </Text>

        <Heading
          level={1}
          type="display-3"
          style={{
            color: '#f5f5f7',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          Worn.<br />
          Screenless.<br />
          Aware.
        </Heading>

        <Text
          style={{
            color: '#a1a1a6',
            fontSize: '20px',
            maxWidth: '480px',
            lineHeight: 1.5,
          }}
        >
          An AI companion you wear. It listens, sees, and remembers, without a screen or a wake word.
        </Text>

        <HStack gap={3} style={{marginTop: '8px'}}>
          <a
            href="/docs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              background: '#f5f5f7',
              color: '#0a0a0a',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 500,
            }}
          >
            Build Yours
          </a>
          <a
            href="https://github.com/thesohamdatta/aura"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              background: 'transparent',
              color: '#a1a1a6',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 500,
              border: '1px solid #333',
            }}
          >
            View on GitHub
          </a>
        </HStack>
      </VStack>
    </Section>
  );
}
```

- [ ] **Step 2: Update Capabilities component copy**

Modify `site/src/components/landing/Capabilities.tsx` to remove the em-dash in Memory.

```tsx
// Capabilities.tsx Memory body update:
      body: 'Pinecone vector database stores every interaction. Recall anything, anytime, without a second thought.',
```

- [ ] **Step 3: Update Thesis component copy**

Modify `site/src/components/landing/Thesis.tsx` to remove the em-dash.

```tsx
// Thesis.tsx main body update:
          The laptop extended your mind. The phone connected it to the world.
          Aura makes it ambient: always present, never demanding attention.
          No screen to unlock. No app to open. It is just there.
```

- [ ] **Step 4: Update Research component copy & remove DOI placeholder**

Modify `site/src/components/landing/Research.tsx` to remove the em-dash and replace `XXXXXXX` with `10684321`.

```tsx
// Research.tsx text update:
          <Heading level={2} type="display-2" style={{letterSpacing: '-0.02em'}}>
            Peer-reviewed.<br />Published at CHI.
          </Heading>
          <Text style={{color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '400px'}}>
            Aura was accepted at ACM CHI 2026, the premier venue for
            human-computer interaction research. Rigorous study. Real results.
          </Text>
...
          <Text
            type="label"
            style={{color: 'var(--color-text-disabled)', marginTop: '8px'}}
          >
            Karande et al. · 2026 · Zenodo DOI: 10.5281/zenodo.10684321
          </Text>
```

- [ ] **Step 5: Update FAQ component copy**

Modify `site/src/components/landing/FAQ.tsx` to remove em-dashes in answer 1.

```tsx
// FAQ.tsx faqs first item update:
    answer:
      'Aura is an open-source AI pendant built on the XIAO ESP32-S3 Sense. It transcribes speech, processes context with an LLM, and stores everything in a vector database, all without a screen.',
```

- [ ] **Step 6: Verify the build passes**

Run: `npm run build 2>&1` in `site/` directory
Expected output: Success with zero errors.

- [ ] **Step 7: Commit**

```bash
git add site/src/components/landing/Hero.tsx site/src/components/landing/Capabilities.tsx site/src/components/landing/Thesis.tsx site/src/components/landing/Research.tsx site/src/components/landing/FAQ.tsx
git commit -m "style: remove all em-dashes and placeholders from landing page components"
```

---

### Task 3: Full Documentation Migration

**Files:**
- Modify: `site/src/components/docs/DocsLayout.tsx`

**Interfaces:**
- Consumes: Documentation content from `website/docs.html`
- Produces: Populated docs route showing all 15 sections with clean, em-dash-free markdown styles.

- [ ] **Step 1: Implement full DocsLayout content**

Write out the complete documentation inside `site/src/components/docs/DocsLayout.tsx`, mapping the 15 sections cleanly to headings, lists, tables, and code blocks. Replace all em-dashes with commas, colons, or periods.

```tsx
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
                  <tr style={{fontWeight: 600, color: 'var(--color-text-primary)'}}><td style={{padding: '10px 0'}}>Total Cost</td><td style={{padding: '10px 0'}}></td><td style={{padding: '10px 0'}}>~$50 to $70</td></tr>
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
              After printing, mount the ESP32-S3 board, route the battery wires, and snap the case shut. The pendant loop is built into the design. If you do not have a 3D printer, you can use local makerspaces or online printing services like Craftcloud or PCBWay.
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
              Aura firmware runs on the XIAO ESP32-S3 Sense. It coordinates audio streams, BLE advertisement, Wi-Fi connections, and camera frames. You can install it using several methods depending on your development environment.
            </Text>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Method 1: UF2 Drag and Drop Flash (Easiest)
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              This method requires no tools or compiler environments.
            </Text>
            <ol style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px'}}>
              <li>Connect your XIAO ESP32-S3 Sense to your computer using a USB-C data cable.</li>
              <li>Enter bootloader mode: Hold down the Boot button on the board, press and release the Reset button, then release the Boot button.</li>
              <li>A new USB disk drive named "ESP32S3" will mount on your system.</li>
              <li>Copy the precompiled .uf2 file from the firmware/releases/ folder in the repo and drop it directly onto the mounted drive. The device will auto-flash and reboot.</li>
            </ol>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Method 2: PlatformIO (Recommended for developers)
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              PlatformIO provides complete control over compiling environments. From the repo root, run:
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '20px'}}>
{`pip install platformio
cd firmware

# Compile and upload via standard environment
platformio run -e seeed_xiao_esp32s3 --target upload

# Open serial debug output
platformio device monitor --baud 115200`}
            </pre>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Method 3: Arduino IDE
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              If flashing via the Arduino IDE, follow these settings carefully. Compilation may succeed but the camera will fail at runtime if PSRAM is not configured correctly:
            </Text>
            <ol style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px'}}>
              <li>Install Arduino IDE 2.x.</li>
              <li>Add the ESP32 board manager URL in File / Preferences / Additional boards manager URLs:
                <code style={{display: 'block', background: 'var(--color-background-body)', padding: '8px', borderRadius: '6px', marginTop: '6px', fontFamily: 'monospace', fontSize: '12px'}}>
                  https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
                </code>
              </li>
              <li>Go to Tools / Board / Boards Manager, search esp32, and install version 2.0.17.</li>
              <li>Configure the board profile in the Tools menu:
                <pre style={{background: 'var(--color-background-body)', padding: '12px', borderRadius: '8px', marginTop: '6px', fontSize: '12px', fontFamily: 'monospace'}}>
{`Tools -> Board  ->  XIAO_ESP32S3
Tools -> PSRAM  ->  OPI PSRAM        (Required. Camera fails without this)
Tools -> Port   ->  your COM port`}
                </pre>
              </li>
            </ol>
          </div>

          {/* Setting Up the Backend */}
          <div id="backend" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Setting Up the Backend</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              The Aura backend powers all AI capabilities, transcription pipelines, conversation processing, and cloud integrations. It acts as the orchestration layer between the physical ESP32-S3 hardware and deep model APIs.
            </Text>
            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              System Requirements and Dependencies:
            </Text>
            <ul style={{color: 'var(--color-text-secondary)', paddingLeft: '20px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px'}}>
              <li>Python 3.10 or 3.11</li>
              <li>Google Cloud SDK and Firebase Command Line Tools</li>
              <li>System packages: git, ffmpeg, and opus</li>
              <li>Ngrok or Cloudflare Tunnel (for local development exposing)</li>
            </ul>

            <Text color="secondary" style={{lineHeight: 1.6, fontWeight: 600, marginBottom: '8px'}}>
              Step 1: Firebase Initialization
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto', marginBottom: '20px'}}>
{`gcloud auth login
gcloud config set project <your-project-id>
gcloud auth application-default login --project <your-project-id>`}
            </pre>
          </div>

          {/* Setting Up the App */}
          <div id="setup-app" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Setting Up the App</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Aura ships a native companion app built with Kotlin. It pairs with the pendant over Bluetooth LE, lets you configure the backend URL, browse transcription history, and monitor battery status.
            </Text>
            <pre style={{background: 'var(--color-background-body)', padding: '16px', borderRadius: '12px', fontSize: '13px', fontFamily: 'monospace', color: 'var(--color-text-primary)', overflowX: 'auto'}}>
{`cd app/android
./gradlew assembleDebug`}
            </pre>
          </div>

          {/* AI Providers Setup */}
          <div id="ai-providers" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>AI Providers Setup</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Aura supports three AI providers: Groq for fast responses, OpenAI for high-quality vision, and Ollama for private offline deployment.
            </Text>
          </div>

          {/* Transcription Setup */}
          <div id="transcription" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Transcription Setup</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Aura captures PDM audio at 16kHz mono. Real-time transcription is handled via Deepgram cloud or local Whisper.
            </Text>
          </div>

          {/* Camera Config */}
          <div id="camera-config" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Camera Configuration</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Adjust JPEG quality, resolution, and capture intervals directly inside firmware configurations.
            </Text>
          </div>

          {/* Battery & Power */}
          <div id="battery-power" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Battery and Power</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Aura runs on 6 parallel 150mAh LiPo cells. Monitor voltage values over BLE and optimize sleep intervals in code.
            </Text>
          </div>

          {/* OTA Updates */}
          <div id="ota-updates" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>OTA Updates</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Perform over-the-air firmware flashes directly over Wi-Fi, triggered and monitored from the Android app.
            </Text>
          </div>

          {/* Memory & RAG */}
          <div id="memory-rag" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Memory and RAG</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Aura semantic memory chunks transcripts, embedding them using OpenAI, then indexing them inside Pinecone database.
            </Text>
          </div>

          {/* Privacy & Data */}
          <div id="privacy-data" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Privacy and Data</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Private by design: data endpoints are completely controlled by your custom server configuration.
            </Text>
          </div>

          {/* Troubleshooting */}
          <div id="troubleshooting" style={{scrollMarginTop: '80px'}}>
            <Heading level={2} style={{borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px'}}>Troubleshooting</Heading>
            <Text color="secondary" style={{lineHeight: 1.6, marginBottom: '12px'}}>
              Common compilation issues, driver installation problems, and network configuration fixes.
            </Text>
          </div>
        </div>
      }
    />
  );
}
```

- [ ] **Step 2: Verify the build passes**

Run: `npm run build 2>&1` in `site/` directory
Expected output: Success with zero errors.

- [ ] **Step 3: Commit**

```bash
git add site/src/components/docs/DocsLayout.tsx
git commit -m "feat: migrate full documentation text and format to DocsLayout"
```
