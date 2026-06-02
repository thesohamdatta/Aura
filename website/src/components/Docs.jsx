import { useState } from 'react'

const SystemArchitectureSVG = () => (
  <svg className="w-full h-auto bg-graphite/30 border border-ghost/10 dark:border-white/5 rounded-2xl p-6" viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="80" width="100" height="80" rx="8" stroke="var(--ghost)" strokeWidth="1.5" fill="var(--void)" />
    <text x="70" y="110" className="fill-ghost text-[10px] font-mono font-semibold" textAnchor="middle">AURA PENDANT</text>
    <text x="70" y="125" className="fill-mist text-[8px] font-mono" textAnchor="middle">Mic & Camera</text>
    <text x="70" y="140" className="fill-aura text-[8px] font-mono font-semibold" textAnchor="middle">ESP32-S3</text>
    
    <path d="M 120,120 L 200,120" stroke="var(--aura)" strokeWidth="1.5" strokeDasharray="4 4" />
    <circle cx="160" cy="120" r="12" fill="var(--void)" stroke="var(--ghost)" strokeWidth="1" />
    <text x="160" y="123" className="fill-ghost text-[8px] font-mono font-semibold" textAnchor="middle">Wi-Fi</text>
    
    <rect x="200" y="60" width="120" height="120" rx="8" stroke="var(--ghost)" strokeWidth="1.5" fill="var(--void)" />
    <text x="260" y="85" className="fill-ghost text-[10px] font-mono font-semibold" textAnchor="middle">BACKEND ENGINE</text>
    <line x1="210" y1="95" x2="310" y2="95" stroke="var(--ghost)" strokeWidth="0.5" strokeOpacity="0.2" />
    <text x="260" y="110" className="fill-mist text-[8px] font-mono" textAnchor="middle">Deepgram Speech</text>
    <text x="260" y="125" className="fill-mist text-[8px] font-mono" textAnchor="middle">GPT-4o Vision</text>
    <text x="260" y="140" className="fill-aura text-[8px] font-mono font-semibold" textAnchor="middle">Local SQLite / Vector</text>
    <text x="260" y="155" className="fill-ghost text-[8px] font-mono" textAnchor="middle">FastAPI (Python)</text>
    
    <path d="M 320,120 L 400,120" stroke="var(--ghost)" strokeWidth="1.5" strokeDasharray="2 2" />
    <rect x="400" y="80" width="80" height="80" rx="8" stroke="var(--ghost)" strokeWidth="1.5" fill="var(--void)" />
    <text x="440" y="110" className="fill-ghost text-[10px] font-mono font-semibold" textAnchor="middle">OMI APP</text>
    <text x="440" y="125" className="fill-mist text-[8px] font-mono" textAnchor="middle">Flutter UI</text>
    <text x="440" y="140" className="fill-aura text-[8px] font-mono font-semibold" textAnchor="middle">Transcripts</text>
  </svg>
);

const SoftwareMockupsCSS = () => (
  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center py-6 px-4 bg-graphite/20 border border-ghost/10 dark:border-white/5 rounded-2xl">
    <div className="w-[240px] border-[6px] border-ghost/85 rounded-[2rem] bg-void aspect-[9/18] relative shadow-xl overflow-hidden p-4 flex flex-col">
      <div className="w-12 h-3.5 bg-ghost rounded-full mx-auto mb-4" />
      <div className="flex justify-between items-center mb-4 border-b border-ghost/5 pb-2">
        <span className="text-[10px] font-mono text-aura font-semibold">Memories</span>
        <span className="text-[8px] font-mono text-mist">Connected</span>
      </div>
      <div className="space-y-2.5 overflow-y-auto flex-1 text-left">
        <div className="p-2 bg-graphite rounded-xl border border-ghost/5">
          <span className="text-[8px] font-mono text-aura block">19:42 · Hardware Lab</span>
          <p className="text-[9px] font-light leading-relaxed text-ghost">"Confirm the battery voltage levels are stable at 3.7V. If they drop, trigger deep sleep mode immediately."</p>
        </div>
        <div className="p-2 bg-graphite rounded-xl border border-ghost/5">
          <span className="text-[8px] font-mono text-aura block">18:15 · Ideas</span>
          <p className="text-[9px] font-light leading-relaxed text-ghost">"Aura should support hot-word activation for sending direct push requests to local server."</p>
        </div>
      </div>
    </div>
    
    <div className="w-[240px] border-[6px] border-ghost/85 rounded-[2rem] bg-void aspect-[9/18] relative shadow-xl overflow-hidden p-4 flex flex-col">
      <div className="w-12 h-3.5 bg-ghost rounded-full mx-auto mb-4" />
      <div className="flex justify-between items-center mb-4 border-b border-ghost/5 pb-2">
        <span className="text-[10px] font-mono text-aura font-semibold">Action Items</span>
        <span className="text-[8px] font-mono text-aura">2 Pending</span>
      </div>
      <div className="space-y-3 text-left">
        <div className="flex items-start gap-2 p-2 bg-graphite rounded-xl border border-ghost/5">
          <input type="checkbox" readOnly checked className="mt-0.5 accent-aura" />
          <div className="space-y-0.5">
            <span className="text-[9px] font-semibold text-ghost block">Buy ESP32-S3 board</span>
            <span className="text-[7px] text-mist block">From Seeed Studio ($15)</span>
          </div>
        </div>
        <div className="flex items-start gap-2 p-2 bg-graphite rounded-xl border border-ghost/5">
          <input type="checkbox" readOnly checked={false} className="mt-0.5 accent-aura" />
          <div className="space-y-0.5">
            <span className="text-[9px] font-semibold text-ghost block">Solder battery cells</span>
            <span className="text-[7px] text-mist block">Wire 6x 150mAh LiPos</span>
          </div>
        </div>
        <div className="flex items-start gap-2 p-2 bg-graphite rounded-xl border border-ghost/5">
          <input type="checkbox" readOnly checked={false} className="mt-0.5 accent-aura" />
          <div className="space-y-0.5">
            <span className="text-[9px] font-semibold text-ghost block">Configure Ollama URL</span>
            <span className="text-[7px] text-mist block">Point to local 11434 port</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AppSetupSVG = () => (
  <svg className="w-full h-auto bg-graphite/30 border border-ghost/10 dark:border-white/5 rounded-2xl p-6" viewBox="0 0 500 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="60" width="100" height="90" rx="8" stroke="var(--ghost)" strokeWidth="1" fill="var(--void)" />
    <text x="65" y="80" className="fill-aura text-[8px] font-mono font-semibold" textAnchor="middle">STEP 01</text>
    <text x="65" y="105" className="fill-ghost text-[10px] font-semibold" textAnchor="middle">Pair Device</text>
    <text x="65" y="125" className="fill-mist text-[8px] font-mono" textAnchor="middle">Turn on BLE</text>
    <text x="65" y="137" className="fill-mist text-[8px] font-mono" textAnchor="middle">Scan for "Omi"</text>
    
    <path d="M 115,105 L 175,105" stroke="var(--aura)" strokeWidth="1" strokeDasharray="3 3" />
    
    <rect x="175" y="60" width="130" height="90" rx="8" stroke="var(--ghost)" strokeWidth="1" fill="var(--void)" />
    <text x="240" y="80" className="fill-aura text-[8px] font-mono font-semibold" textAnchor="middle">STEP 02</text>
    <text x="240" y="105" className="fill-ghost text-[10px] font-semibold" textAnchor="middle">Provision Wi-Fi</text>
    <text x="240" y="125" className="fill-mist text-[8px] font-mono" textAnchor="middle">Enter SSID & Pass</text>
    <text x="240" y="137" className="fill-mist text-[8px] font-mono" textAnchor="middle">via App Interface</text>
    
    <path d="M 305,105 L 365,105" stroke="var(--aura)" strokeWidth="1" strokeDasharray="3 3" />
    
    <rect x="365" y="60" width="120" height="90" rx="8" stroke="var(--ghost)" strokeWidth="1" fill="var(--void)" />
    <text x="425" y="80" className="fill-aura text-[8px] font-mono font-semibold" textAnchor="middle">STEP 03</text>
    <text x="425" y="105" className="fill-ghost text-[10px] font-semibold" textAnchor="middle">Set Backend URL</text>
    <text x="425" y="125" className="fill-mist text-[8px] font-mono" textAnchor="middle">Save ngrok/cloud</text>
    <text x="425" y="137" className="fill-mist text-[8px] font-mono" textAnchor="middle">URL to device env</text>
  </svg>
);

const HowChatToolsWorkSVG = () => (
  <svg className="w-full h-auto bg-graphite/30 border border-ghost/10 dark:border-white/5 rounded-2xl p-6" viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="90" width="90" height="60" rx="6" stroke="var(--ghost)" strokeWidth="1" fill="var(--void)" />
    <text x="65" y="115" className="fill-ghost text-[9px] font-mono font-semibold" textAnchor="middle">USER INQUIRY</text>
    <text x="65" y="130" className="fill-mist text-[8px]" textAnchor="middle">"What did Soham say?"</text>
    
    <path d="M 110,120 L 160,120" stroke="var(--ghost)" strokeWidth="1" />
    
    <rect x="160" y="70" width="140" height="100" rx="8" stroke="var(--aura)" strokeWidth="1.5" fill="var(--void)" />
    <text x="230" y="95" className="fill-ghost text-[9px] font-mono font-semibold" textAnchor="middle">AI ROUTER</text>
    <line x1="170" y1="105" x2="290" y2="105" stroke="var(--ghost)" strokeWidth="0.5" strokeOpacity="0.2" />
    <text x="230" y="125" className="fill-mist text-[8px] font-mono" textAnchor="middle">Needs databases?</text>
    <text x="230" y="145" className="fill-aura text-[8px] font-mono font-semibold" textAnchor="middle">{"Yes -> Call Tool"}</text>
    
    <path d="M 300,100 L 370,60" stroke="var(--aura)" strokeWidth="1" />
    <path d="M 300,140 L 370,180" stroke="var(--ghost)" strokeWidth="1" strokeOpacity="0.4" />
    
    <rect x="370" y="30" width="110" height="60" rx="6" stroke="var(--aura)" strokeWidth="1.5" fill="var(--void)" />
    <text x="425" y="55" className="fill-aura text-[9px] font-mono font-semibold" textAnchor="middle">SQLite Query</text>
    <text x="425" y="70" className="fill-mist text-[7px]" textAnchor="middle">Search conversations</text>
    
    <rect x="370" y="150" width="110" height="60" rx="6" stroke="var(--ghost)" strokeWidth="1" strokeOpacity="0.4" fill="var(--void)" />
    <text x="425" y="175" className="fill-ghost text-[9px] font-mono font-semibold" textAnchor="middle" fillOpacity="0.5">Google Search</text>
    <text x="425" y="190" className="fill-mist text-[7px]" textAnchor="middle" fillOpacity="0.5">Find web resource</text>
  </svg>
);

const TranscriptionFlowSVG = () => (
  <svg className="w-full h-auto bg-graphite/30 border border-ghost/10 dark:border-white/5 rounded-2xl p-6" viewBox="0 0 500 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="70" width="100" height="80" rx="6" stroke="var(--ghost)" strokeWidth="1" fill="var(--void)" />
    <text x="65" y="95" className="fill-ghost text-[9px] font-mono font-semibold" textAnchor="middle">AUDIO CAPTURE</text>
    <text x="65" y="115" className="fill-mist text-[8px]" textAnchor="middle">16kHz Mono PDM</text>
    <text x="65" y="130" className="fill-aura text-[8px] font-mono" textAnchor="middle">ESP32 Buffer</text>
    
    <path d="M 115,110 L 165,110" stroke="var(--aura)" strokeWidth="1.5" />
    
    <rect x="165" y="70" width="110" height="80" rx="6" stroke="var(--ghost)" strokeWidth="1" fill="var(--void)" />
    <text x="220" y="95" className="fill-ghost text-[9px] font-mono font-semibold" textAnchor="middle">STREAMING BUFFER</text>
    <text x="220" y="115" className="fill-mist text-[8px]" textAnchor="middle">WAV header packing</text>
    <text x="220" y="130" className="fill-mist text-[8px]" textAnchor="middle">3-second packets</text>
    
    <path d="M 275,110 L 325,110" stroke="var(--aura)" strokeWidth="1.5" />
    
    <rect x="325" y="60" width="160" height="100" rx="8" stroke="var(--aura)" strokeWidth="2" fill="var(--void)" />
    <text x="405" y="85" className="fill-ghost text-[9px] font-mono font-semibold" textAnchor="middle">TRANSCRIPTION LAYER</text>
    <line x1="335" y1="95" x2="475" y2="95" stroke="var(--ghost)" strokeWidth="0.5" strokeOpacity="0.2" />
    <text x="405" y="115" className="fill-aura text-[8px] font-mono font-semibold" textAnchor="middle">Deepgram API (Cloud)</text>
    <text x="405" y="130" className="fill-mist text-[8px] font-mono" textAnchor="middle">or</text>
    <text x="405" y="145" className="fill-ghost text-[8px] font-mono font-semibold" textAnchor="middle">Whisper (Offline/Local)</text>
  </svg>
);

const categories = [
  {
    name: 'Getting Started',
    articles: [
      { id: 'what-is-aura', title: 'What Is Aura' },
      { id: 'how-aura-works', title: 'How Aura Works' },
      { id: 'hardware-overview', title: 'Hardware Overview' },
      { id: 'bill-of-materials', title: 'Bill of Materials' },
      { id: 'bom-case', title: 'BOM case' }
    ]
  },
  {
    name: 'Setup Guide',
    articles: [
      { id: 'flashing-the-firmware', title: 'Flashing the Firmware' },
      { id: 'setting-up-the-app', title: 'Setting Up the App' },
      { id: 'setting-up-the-backend', title: 'Setting Up the Backend' }
    ]
  },
  {
    name: 'Configuration',
    articles: [
      { id: 'ai-providers-setup', title: 'AI Providers Setup' },
      { id: 'transcription-setup', title: 'Transcription Setup' },
      { id: 'camera-configuration', title: 'Camera Configuration' },
      { id: 'battery-and-power', title: 'Battery & Power' }
    ]
  },
  {
    name: 'Security & Support',
    articles: [
      { id: 'privacy-and-data', title: 'Privacy & Data' },
      { id: 'troubleshooting', title: 'Troubleshooting' }
    ]
  }
]

const articlesContent = {
  'what-is-aura': {
    title: 'What Is Aura',
    category: 'Getting Started',
    desc: 'A quick intro to the Aura pendant and what it does.',
    content: (
      <div className="space-y-6">
        <p>Aura is an open-source AI wearable pendant. You wear it around your neck. It listens, sees, and thinks — so you don’t have to pause your day to take notes or remember things.</p>
        <p>It captures audio and images, sends them to an AI, and turns everything into summaries, transcripts, and action items — all accessible from your phone.</p>
        <p>Built on the Omi ecosystem. Fully open source. Around $50–70 to build yourself.</p>
        <div className="bg-aura/10 border border-aura/25 p-4 rounded-xl">
          <p className="text-xs font-mono text-aura uppercase tracking-wider mb-2">Core Concept</p>
          <p className="text-sm font-light text-mist leading-relaxed">No screens. No pings. No friction. Wear it, clip it, and walk through your world while your AI indexes the conversation.</p>
        </div>
      </div>
    )
  },
  'how-aura-works': {
    title: 'How Aura Works',
    category: 'Getting Started',
    desc: 'Audio, vision, AI — how it all connects.',
    content: (
      <div className="space-y-6">
        <p>Aura's architecture is simple yet powerful, dividing capture and intelligence layers:</p>
        <ol className="list-decimal list-inside space-y-3 font-light text-mist pl-2">
          <li><strong className="text-ghost dark:text-white">Aura's microphone</strong> captures audio continuously.</li>
          <li><strong className="text-ghost dark:text-white">The camera</strong> captures images at set intervals (e.g. 30 seconds).</li>
          <li>Both are sent to <strong className="text-ghost dark:text-white">the backend</strong> over Wi-Fi.</li>
          <li>The backend transcribes audio via <strong className="text-ghost dark:text-white">Deepgram or Whisper</strong>.</li>
          <li>Images are understood via <strong className="text-ghost dark:text-white">GPT-4o Vision or Moondream</strong>.</li>
          <li>Everything is summarized and stored in a database.</li>
          <li>You see it all in the <strong className="text-ghost dark:text-white">Omi app</strong> on your phone.</li>
        </ol>
        <p className="text-sm border-l-2 border-aura/40 pl-4 py-1 italic text-mist">
          "The ESP32-S3 handles capture and transmission. The backend handles all AI processing. Your phone is just the interface."
        </p>
        <div className="w-full pt-4">
          <p className="text-xs font-mono text-mist uppercase tracking-widest mb-3">System Architecture Diagram</p>
          <SystemArchitectureSVG />
        </div>
      </div>
    )
  },
  'hardware-overview': {
    title: 'Hardware Overview',
    category: 'Getting Started',
    desc: 'Every component that makes up Aura.',
    content: (
      <div className="space-y-6">
        <p>The device is built to be extremely lightweight, using standard off-the-shelf maker components:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-ghost/10 dark:border-white/5 font-mono text-xs">
            <thead>
              <tr className="bg-ghost/5 dark:bg-white/5 text-aura">
                <th className="p-3 border border-ghost/10 dark:border-white/5">Component</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Details</th>
              </tr>
            </thead>
            <tbody className="text-mist font-light">
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Microcontroller</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">XIAO ESP32-S3 Sense</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Camera</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">OV2640 — built into ESP32-S3 Sense</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Microphone</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">PDM — built into ESP32-S3 Sense</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Battery</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">6× 150mAh LiPo cells (arranged for fit)</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Enclosure</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Custom 3D printed case (pendant loop built in)</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Connectivity</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Wi-Fi 2.4GHz + Bluetooth LE</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Charging</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">USB-C direct port</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>The ESP32-S3 Sense is the core. Camera and microphone are already on the board — no extra modules needed.</p>
      </div>
    )
  },
  'bill-of-materials': {
    title: 'Bill of Materials',
    category: 'Getting Started',
    desc: 'What to buy and where to get it.',
    content: (
      <div className="space-y-6">
        <p>Here is exactly what you need to purchase to assemble your own Aura device:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-ghost/10 dark:border-white/5 font-mono text-xs">
            <thead>
              <tr className="bg-ghost/5 dark:bg-white/5 text-aura">
                <th className="p-3 border border-ghost/10 dark:border-white/5">Item</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Where to Buy</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5 text-right">Approx Cost</th>
              </tr>
            </thead>
            <tbody className="text-mist font-light">
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">XIAO ESP32-S3 Sense</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Seeed Studio / Amazon / AliExpress</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-right">$15–24</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">150mAh LiPo Cell × 6</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Amazon / LiPo specialty stores</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-right">$12</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Hookup Wires</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Amazon / Adafruit</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-right">$5</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">3D Printed Case</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Print yourself / local makerspace / PCBWay</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-right">$5–10</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">USB-C Cable</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Anywhere</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-right">—</td>
              </tr>
              <tr className="bg-ghost/5 dark:bg-white/5 font-semibold text-ghost dark:text-white">
                <td colSpan="2" className="p-3 border border-ghost/10 dark:border-white/5">Total Estimated Cost</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-right text-aura">~$50–70</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Print the case STL files from the Omi Glass hardware folder on GitHub.</p>
      </div>
    )
  },
  'bom-case': {
    title: 'BOM case',
    category: 'Getting Started',
    desc: 'Print and assemble the Aura enclosure.',
    content: (
      <div className="space-y-6">
        <p>Follow these 3D printing parameters for the most durable casing:</p>
        <ul className="list-disc list-inside space-y-2 text-mist font-light pl-2">
          <li><strong className="text-ghost dark:text-white">Material:</strong> PLA or PETG (matte texture recommended)</li>
          <li><strong className="text-ghost dark:text-white">Layer height:</strong> 0.2mm</li>
          <li><strong className="text-ghost dark:text-white">Infill:</strong> 20%</li>
          <li><strong className="text-ghost dark:text-white">Supports:</strong> Yes, required for overhangs</li>
        </ul>
        <p>After printing, mount the ESP32-S3 board, route the battery wires, and snap the case shut. The pendant loop is built into the design.</p>
        <p className="text-sm text-mist/60 bg-ghost/5 dark:bg-white/5 p-4 rounded-xl border border-ghost/5 dark:border-white/5">
          Don’t have a printer? Use a local makerspace or an online service like Craftcloud or PCBWay.
        </p>
      </div>
    )
  },
  'flashing-the-firmware': {
    title: 'Flashing the Firmware',
    category: 'Setup Guide',
    desc: 'Upload firmware to your ESP32-S3.',
    content: (
      <div className="space-y-6">
        <p>To compile and flash, you will need the Arduino IDE or PlatformIO:</p>
        <p className="text-xs font-mono text-mist uppercase tracking-wider mb-2">Setup Steps:</p>
        <ol className="list-decimal list-inside space-y-3 text-mist font-light pl-2">
          <li>Clone the <code className="bg-ghost/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-ghost dark:text-white text-xs">aura</code> repository.</li>
          <li>Open <code className="bg-ghost/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-ghost dark:text-white text-xs">firmware/firmware.ino</code> in Arduino IDE.</li>
          <li>In Arduino IDE, go to <strong className="text-ghost dark:text-white">Tools → Board → select XIAO_ESP32S3</strong>.</li>
          <li>Go to <strong className="text-ghost dark:text-white">Tools → PSRAM → set to OPI PSRAM</strong> (this is absolutely required!).</li>
          <li>Select the correct USB COM port and click <strong className="text-ghost dark:text-white">Upload</strong>.</li>
        </ol>
        <div className="space-y-2">
          <p className="text-xs font-mono text-mist uppercase tracking-wider">Expected serial monitor output:</p>
          <pre className="bg-graphite dark:bg-graphite/40 p-4 rounded-xl font-mono text-xs text-aura border border-ghost/10 dark:border-white/5 overflow-x-auto">
{`[INFO] Booting Aura Wearable...
[INFO] ESP32-S3 PSRAM initialized successfully.
[INFO] Camera OV2640 found and configured.
[INFO] Connecting to Wi-Fi SSID: OmiNet...
[INFO] Connected. IP Address: 192.168.1.42`}
          </pre>
        </div>
      </div>
    )
  },
  'setting-up-the-app': {
    title: 'Setting Up the App',
    category: 'Setup Guide',
    desc: 'Get the Aura Flutter app running on your phone.',
    content: (
      <div className="space-y-6">
        <p>Aura uses a Flutter app as its mobile interface to display transcripts, memories, and actions.</p>
        <div className="space-y-2">
          <p className="text-xs font-mono text-mist uppercase tracking-wider">Prerequisites:</p>
          <ul className="list-disc list-inside space-y-1 text-mist font-light pl-2">
            <li>Flutter SDK installed</li>
            <li>Android Studio (Android) or Xcode (iOS)</li>
            <li>Firebase project configured</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-mono text-mist uppercase tracking-wider">Environment Configuration:</p>
          <p>Create a file named <code className="bg-ghost/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-ghost dark:text-white text-xs">.dev.env</code> in the app root directory and specify your backend URL:</p>
          <pre className="bg-graphite dark:bg-graphite/40 p-4 rounded-xl font-mono text-xs text-aura border border-ghost/10 dark:border-white/5 overflow-x-auto">
{`API_BASE_URL=https://your-ngrok-backend-url.ngrok-free.app/`}
          </pre>
        </div>
        <p>For more details, visit: <a href="https://github.com/thesohamdatta/Aura-Wearable-AI/tree/main/app" target="_blank" rel="noopener noreferrer" className="text-aura underline">github.com/Aura/app</a></p>
        <div className="w-full space-y-6 pt-4">
          <div>
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-3">Flutter Companion Application</p>
            <SoftwareMockupsCSS />
          </div>
          <div>
            <p className="text-xs font-mono text-mist uppercase tracking-widest mb-3">Application Setup Architecture</p>
            <AppSetupSVG />
          </div>
        </div>
      </div>
    )
  },
  'setting-up-the-backend': {
    title: 'Setting Up the Backend',
    category: 'Setup Guide',
    desc: 'Run the Python backend locally or on the cloud.',
    content: (
      <div className="space-y-6">
        <p>The backend handles all heavy processing including audio transcription, summarization, and cloud indexing.</p>
        <div className="space-y-2">
          <p className="text-xs font-mono text-mist uppercase tracking-wider">Requirements:</p>
          <ul className="list-disc list-inside space-y-1 text-mist font-light pl-2">
            <li>Python 3.11+</li>
            <li>OpenAI or Groq API key</li>
            <li>Deepgram API key</li>
            <li>Firebase service account</li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-mono text-mist uppercase tracking-wider">Local Setup Commands:</p>
          <pre className="bg-graphite dark:bg-graphite/40 p-4 rounded-xl font-mono text-xs text-aura border border-ghost/10 dark:border-white/5 overflow-x-auto">
{`git clone https://github.com/thesohamdatta/Aura-Wearable-AI.git
cd Aura-Wearable-AI/backend
pip install -r requirements.txt
python main.py`}
          </pre>
        </div>
        <p>Expose locally with Ngrok so that the hardware can connect over the internet: <code className="bg-ghost/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs text-ghost dark:text-white">ngrok http 8000</code>. Set that URL as <code className="bg-ghost/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs text-ghost dark:text-white">API_BASE_URL</code> in your app setup.</p>
      </div>
    )
  },
  'ai-providers-setup': {
    title: 'AI Providers Setup',
    category: 'Configuration',
    desc: 'Configure Groq, OpenAI, or Ollama for Aura.',
    content: (
      <div className="space-y-6">
        <p>Aura supports three AI engines, allowing you to choose between cloud speed and local privacy:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-ghost/10 dark:border-white/5 font-mono text-xs">
            <thead>
              <tr className="bg-ghost/5 dark:bg-white/5 text-aura">
                <th className="p-3 border border-ghost/10 dark:border-white/5">Provider</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Best For</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Offline Support</th>
              </tr>
            </thead>
            <tbody className="text-mist font-light">
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white font-mono">Groq</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Fast, real-time responses</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-ghost/40 font-medium">Requires connection</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white font-mono">OpenAI</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Quality reasoning, vision tags</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-ghost/40 font-medium">Requires connection</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white font-mono">Ollama</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Local, private intelligence</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-aura font-semibold">Fully Offline</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>For Ollama (local model execution), configure your local Ollama instance and set <code className="bg-ghost/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs text-ghost dark:text-white">OLLAMA_URL=http://localhost:11434</code> in your backend environment configuration.</p>
        <div className="w-full pt-4">
          <p className="text-xs font-mono text-mist uppercase tracking-widest mb-3">AI Engine Tool Interaction Diagram</p>
          <HowChatToolsWorkSVG />
        </div>
      </div>
    )
  },
  'transcription-setup': {
    title: 'Transcription Setup',
    category: 'Configuration',
    desc: 'Set up Deepgram or Whisper for speech-to-text.',
    content: (
      <div className="space-y-6">
        <p>Choose your transcription layer based on network access requirements:</p>
        <ul className="list-disc list-inside space-y-2 text-mist font-light pl-2">
          <li><strong className="text-ghost dark:text-white">Deepgram:</strong> Fast, cloud-based, highly accurate. Get a free API key at <a href="https://console.deepgram.com" target="_blank" rel="noopener noreferrer" className="text-aura underline">console.deepgram.com</a></li>
          <li><strong className="text-ghost dark:text-white">Whisper (Local):</strong> Slower but fully secure and offline. Runs via your backend server's local model.</li>
        </ul>
        <p>Audio is captured at 16kHz mono PDM from the high-sensitivity built-in microphone on the ESP32-S3 Sense.</p>
        <div className="w-full pt-4">
          <p className="text-xs font-mono text-mist uppercase tracking-widest mb-3">Audio Transcription Pipeline Flowchart</p>
          <TranscriptionFlowSVG />
        </div>
      </div>
    )
  },
  'camera-configuration': {
    title: 'Camera Configuration',
    category: 'Configuration',
    desc: 'Tune resolution, interval, and JPEG quality.',
    content: (
      <div className="space-y-6">
        <p>Adjust these parameters inside the device firmware <code className="bg-ghost/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs text-ghost dark:text-white">firmware.ino</code> before flashing:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-ghost/10 dark:border-white/5 font-mono text-xs">
            <thead>
              <tr className="bg-ghost/5 dark:bg-white/5 text-aura">
                <th className="p-3 border border-ghost/10 dark:border-white/5">Setting</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Default Value</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Options</th>
              </tr>
            </thead>
            <tbody className="text-mist font-light">
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white font-mono">Resolution</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">SVGA (800×600)</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">QQVGA → UXGA</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white font-mono">Capture Interval</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">30 seconds</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Any millisecond range</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white font-mono">JPEG Quality</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">12</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">0 (best) to 63 (worst)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Lower resolution + higher interval = longer battery life. For vision AI models, <strong className="text-ghost dark:text-white">SVGA</strong> is the optimal balance of upload speed and detail extraction.</p>
      </div>
    )
  },
  'battery-and-power': {
    title: 'Battery & Power',
    category: 'Configuration',
    desc: 'Understand power consumption and battery life.',
    content: (
      <div className="space-y-6">
        <p>Understand current draw levels to optimize battery cycles:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-ghost/10 dark:border-white/5 font-mono text-xs">
            <thead>
              <tr className="bg-ghost/5 dark:bg-white/5 text-aura">
                <th className="p-3 border border-ghost/10 dark:border-white/5">Device State</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Current Draw</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Estimated Life (150mAh)</th>
              </tr>
            </thead>
            <tbody className="text-mist font-light">
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white font-mono">Active (camera + Wi-Fi)</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">~150–200mA</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-ghost/40 font-medium">~2 hours continuous</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white font-mono">Idle (BLE capture standby)</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">~20–40mA</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">~5 hours</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white font-mono">Deep Sleep (scheduled wake)</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">&lt;1mA</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 text-aura font-semibold">~8+ hours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-graphite border border-ghost/10 p-4 rounded-xl text-ghost">
          <p className="text-xs font-mono uppercase tracking-wider mb-2">LiPo Battery Safety Rules</p>
          <ul className="list-disc list-inside space-y-1 text-sm font-light">
            <li>Never short circuit positive and negative terminals.</li>
            <li>Do not discharge cells below 3.0V.</li>
            <li>Charge at 1C maximum (150mA per cell).</li>
            <li>Include a simple protection circuit.</li>
          </ul>
        </div>
      </div>
    )
  },
  'privacy-and-data': {
    title: 'Privacy & Data',
    category: 'Security & Support',
    desc: 'What gets stored, what stays local.',
    content: (
      <div className="space-y-6">
        <p>Aura is privacy-first by design. You own your data. Here is the local vs cloud breakdown:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-ghost/10 dark:border-white/5 font-mono text-xs">
            <thead>
              <tr className="bg-ghost/5 dark:bg-white/5 text-aura">
                <th className="p-3 border border-ghost/10 dark:border-white/5">Feature</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Local Path</th>
                <th className="p-3 border border-ghost/10 dark:border-white/5">Cloud Path</th>
              </tr>
            </thead>
            <tbody className="text-mist font-light">
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Transcription</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Whisper (local server)</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-mono text-xs">Deepgram API</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">AI Processing</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Ollama local models</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-mono text-xs">Groq / OpenAI API</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Memory Indexing</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Self-hosted SQLite / Firebase local</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-mono text-xs">Omi cloud endpoints</td>
              </tr>
              <tr className="border-b border-ghost/5 dark:border-white/5">
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-semibold text-ghost dark:text-white">Images</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5">Stored locally on your phone</td>
                <td className="p-3 border border-ghost/10 dark:border-white/5 font-mono text-xs">Secured Firebase bucket</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Nothing is sent anywhere by default without your explicit environment configuration. You control every single API token and endpoint.</p>
        <p className="text-xs font-mono text-mist/60 bg-ghost/5 dark:bg-white/5 p-3 rounded border border-ghost/5 dark:border-white/5">
          ⚠️ Note: Recording audio in public environments may be subject to local wiretapping/consent laws. Inform participants where appropriate.
        </p>
      </div>
    )
  },
  'troubleshooting': {
    title: 'Troubleshooting',
    category: 'Security & Support',
    desc: 'Common issues and how to fix them.',
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="p-4 bg-graphite/40 dark:bg-graphite/30 rounded-xl border border-ghost/10 dark:border-white/5">
            <h4 className="text-sm font-semibold text-ghost dark:text-white mb-2">Camera not initializing</h4>
            <p className="text-sm text-mist font-light">Check that the PSRAM configuration is set to OPI PSRAM in the Arduino IDE Tools menu before uploading.</p>
          </div>
          <div className="p-4 bg-graphite/40 dark:bg-graphite/30 rounded-xl border border-ghost/10 dark:border-white/5">
            <h4 className="text-sm font-semibold text-ghost dark:text-white mb-2">Wi-Fi connection failing</h4>
            <p className="text-sm text-mist font-light">Confirm you are using a 2.4GHz network. The ESP32-S3 does not support 5GHz frequencies. Verify your credentials in the header file.</p>
          </div>
          <div className="p-4 bg-graphite/40 dark:bg-graphite/30 rounded-xl border border-ghost/10 dark:border-white/5">
            <h4 className="text-sm font-semibold text-ghost dark:text-white mb-2">App not finding device</h4>
            <p className="text-sm text-mist font-light">Ensure BLE is enabled on your phone. Look for device "Omi" in your bluetooth scanner. Restart the ESP module.</p>
          </div>
          <div className="p-4 bg-graphite/40 dark:bg-graphite/30 rounded-xl border border-ghost/10 dark:border-white/5">
            <h4 className="text-sm font-semibold text-ghost dark:text-white mb-2">Short battery life cycles</h4>
            <p className="text-sm text-mist font-light">Decrease photo capture frequencies. Adjust camera resolution to SVGA. Configure deep sleep wake periods.</p>
          </div>
        </div>
        <p className="text-sm text-mist">
          Still stuck? Contact developers at{' '}
          <a href="mailto:thesohamdatta@gmail.com" className="text-aura underline">thesohamdatta@gmail.com</a>
        </p>
      </div>
    )
  }
}

export default function Docs() {
  const [selectedArticleId, setSelectedArticleId] = useState('what-is-aura')
  const [searchQuery, setSearchQuery] = useState('')

  const activeArticle = articlesContent[selectedArticleId] || articlesContent['what-is-aura']

  // Simple search filter
  const allArticles = categories.flatMap(cat => cat.articles)
  const filteredArticles = searchQuery
    ? allArticles.filter(art => art.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  return (
    <section className="bg-void text-ghost py-24 min-h-screen px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="border-b border-ghost/10 dark:border-white/5 pb-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight gradient-text-white">Help Center</h2>
            <p className="text-mist text-sm font-light mt-1">Documentation, setup guides, and hardware schematics.</p>
          </div>
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-graphite/50 dark:bg-graphite border border-ghost/15 dark:border-white/5 radius-pill px-5 py-2.5 text-sm
                focus:border-aura/50 focus:outline-none transition-all text-ghost dark:text-white"
            />
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-void dark:bg-graphite border border-ghost/20 dark:border-white/10 rounded-2xl p-2 z-20 shadow-2xl max-h-60 overflow-y-auto">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map(art => (
                    <button
                      key={art.id}
                      onClick={() => {
                        setSelectedArticleId(art.id)
                        setSearchQuery('')
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-ghost/5 dark:hover:bg-white/5 rounded-xl text-sm transition-colors text-ghost dark:text-white"
                    >
                      {art.title}
                    </button>
                  ))
                ) : (
                  <p className="text-xs text-mist p-3 text-center">No articles found.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {categories.map((cat) => (
              <div key={cat.name} className="space-y-3">
                <h3 className="text-xs font-mono text-mist uppercase tracking-widest pl-3 border-l-2 border-ghost/10 dark:border-white/5">
                  {cat.name}
                </h3>
                <ul className="space-y-1 list-none">
                  {cat.articles.map((art) => (
                    <li key={art.id}>
                      <button
                        onClick={() => setSelectedArticleId(art.id)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-xl transition-all duration-300 font-light ${
                          selectedArticleId === art.id
                            ? 'bg-aura/10 text-aura font-medium border border-aura/20 shadow-sm'
                            : 'text-mist hover:text-ghost dark:hover:text-white hover:bg-ghost/5 dark:hover:bg-white/5'
                        }`}
                      >
                        {art.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          {/* Reader Window */}
          <main className="lg:col-span-3 bg-graphite/40 dark:bg-graphite/30 radius-card p-8 md:p-12 border border-ghost/10 dark:border-white/5 min-h-[500px] shadow-sm">
            <span className="text-xs font-mono text-aura uppercase tracking-wider block mb-2">
              {activeArticle.category}
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-ghost dark:text-white mb-2">
              {activeArticle.title}
            </h1>
            <p className="text-sm text-mist font-light mb-8 italic">
              {activeArticle.desc}
            </p>
            <hr className="border-ghost/10 dark:border-white/5 mb-8" />
            <div className="text-ghost dark:text-ghost font-light leading-relaxed space-y-6">
              {activeArticle.content}
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
