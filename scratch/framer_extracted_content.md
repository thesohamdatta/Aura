# Page: /docs/privacy-and-data
**Title**: Privacy & Data â€“ OPTIXEL Help Center
**Description**: What gets stored, what stays local.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Privacy & Data

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Account & App Settings

  Aura is privacy-first by design.

  Feature

  Local Option

  Cloud Option

  Transcription

  Whisper (Ollama)

  Deepgram

  AI processing

  Ollama

  Groq / OpenAI

  Memory storage

  Self-hosted Firebase

  Omi cloud

  Images

  Your backend

  Nothing is sent anywhere by default without your configuration. You control every API key and every endpoint.

  Recording in public spaces may be subject to local laws. Always inform others when recording.

  Previous

  â€¹ Battery & Power

  Next

  Troubleshooting â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/battery-and-power
**Title**: Battery & Power â€“ OPTIXEL Help Center
**Description**: Understand power consumption and battery life.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Battery & Power

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Features & Performance

  Estimated consumption:

  State

  Current Draw

  Active (camera + Wi-Fi)

  ~150â€“200mA

  Idle (BLE only)

  ~20â€“40mA

  Deep sleep

  <1mA

  350Ah total:

  Usage Pattern

  Battery Life

  Capture every 5s

  ~2 hours

  Capture every 30s

  ~5 hours

  Deep sleep between captures

  ~8+ hours

  Battery safety:

  Never short circuit LiPo cells

  Do not discharge below 3.0V per cell

  Charge at 1C max (150mA per cell)

  Include a protection circuit

  Previous

  â€¹ Camera Configuration

  Next

  Privacy & Data â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/troubleshooting
**Title**: Troubleshooting â€“ OPTIXEL Help Center
**Description**: Common issues and how to fix them. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Troubleshooting

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Troubleshooting

  Camera not initializing â†’ Check PSRAM is set to OPI PSRAM in Arduino IDE Tools menu. This is required.

  Wi-Fi not connecting â†’ Confirm 2.4GHz network. ESP32 does not support 5GHz. Check SSID and password are correct.

  App not finding device â†’ Make sure ESP32 is powered on. Look for "Omi" in Bluetooth scan. Restart both app and device.

  No transcription appearing â†’ Check Deepgram API key in .env. Verify backend is running and API_BASE_URL is set correctly in the app.

  Short battery life â†’ Reduce capture frequency. Enable deep sleep between captures. Lower camera resolution.

  Build errors in Arduino IDE â†’ Ensure ESP32 board package version 2.9.0 is installed. Use exact version â€” other versions may break camera driver.

  Previous

  â€¹ Privacy & Data

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/camera-configuration
**Title**: Camera Configuration â€“ OPTIXEL Help Center
**Description**: Tune resolution, interval, and JPEG quality.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Camera Configuration

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Features & Performance

  Edit these values in firmware.ino:

  Setting

  Default

  Options

  Resolution

  SVGA (800Ã—600)

  QQVGA â†’ UXGA

  Capture interval

  30 seconds

  Any (ms)

  JPEG quality

  12

  0 (best) â€“ 63 (worst)

  Lower resolution + higher interval = longer battery life.

  For vision AI, SVGA is the sweet spot â€” good enough for GPT-4o, small enough to transmit fast.

  Previous

  â€¹ Transcription Setup

  Next

  Battery & Power â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/transcription-setup
**Title**: Transcription Setup â€“ OPTIXEL Help Center
**Description**: Set up Deepgram or Whisper for speech-to-text.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Transcription Setup

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Features & Performance

  Option

  Speed

  Requires Internet

  Deepgram

  Fast, real-time

  Yes

  Whisper (local)

  Slower, accurate

  No

  Deepgram:

  Get a free key at console.deepgram.com

  Whisper (local via Ollama): No API key needed. Set in .env:

  Audio is captured at 16kHz mono PDM from the built-in microphone on the ESP32-S3 Sense.

  Previous

  â€¹ AI Providers Setup

  Next

  Camera Configuration â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/setting-up-the-backend
**Title**: Setting Up the Backend â€“ OPTIXEL Help Center
**Description**: Run the Python backend locally or on the cloud.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Setting Up the Backend

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Account & App Settings

  The backend handles all AI processing â€” transcription, summarization, memory storage.

  Requirements:

  Python 3.11+

  OpenAI or Groq API key

  Deepgram API key

  Firebase project

  Steps:

  Expose locally with Ngrok:

  Set the Ngrok URL as API_BASE_URL in the app's .dev.env.

  Full reference:  https://github.com/thesohamdatta/aura/tree/main/backend

  Previous

  â€¹ Setting Up the App

  Next

  AI Providers Setup â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/bill-of-materials
**Title**: Bill of Materials â€“ OPTIXEL Help Center
**Description**: What to buy and where to get it. **Filter:** Getting Started. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Bill of Materials

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Getting Started

  Item

  Where to Buy

  Approx Cost

  XIAO ESP32-S3 Sense

  Seeed Studio / Amazon

  $15â€“24

  150mAh LiPo Ã— 6

  Amazon

  $12

  Wires

  $5

  3D printed case

  Print yourself or order online

  $5â€“10

  USB-C cable

  Anywhere

  â€”

  Total: ~$50â€“70

  Print the case STL files from the Omi Glass hardware folder on GitHub.

  Previous

  â€¹ Hardware Overview

  Next

  BOM case â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/ai-providers-setup
**Title**: AI Providers Setup â€“ OPTIXEL Help Center
**Description**: Configure Groq, OpenAI, or Ollama for Aura.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- AI Providers Setup

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Features & Performance

  Aura supports three AI providers:

  Provider

  Best For

  Requires Internet

  Groq

  Fast, real-time responses

  Yes

  OpenAI

  Best quality, vision support

  Ollama

  Local, private, offline

  No

  Set in your .env file:

  For Ollama (local):

  Set OLLAMA_URL=http://localhost:11434 in .env.

  Previous

  â€¹ Setting Up the Backend

  Next

  Transcription Setup â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/how-aura-works
**Title**: How Aura Works â€“ OPTIXEL Help Center
**Description**: Audio, vision, AI â€” how it all connects.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- How Aura Works

### H2:
- The flow is simple:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Getting Started

  Aura's microphone captures audio continuously

  The camera captures images at set intervals

  Both are sent to the backend over Wi-Fi

  The backend transcribes audio via Deepgram or Whisper

  Images are understood via GPT-4o Vision or Moondream

  Everything is summarized and stored

  You see it all in the Omi app on your phone

  The ESP32-S3 handles capture and transmission. The backend handles all AI processing. Your phone is just the interface.

  Previous

  â€¹ What Is Aura

  Next

  Hardware Overview â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/setting-up-the-app
**Title**: Setting Up the App â€“ OPTIXEL Help Center
**Description**: Get the Aura Flutter app running on your phone.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Setting Up the App

### H2:
- Aura uses the  Flutter app as its mobile interface.
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Account & App Settings

  Quick setup (recommended):

  What you need first:

  Flutter SDK installed

  Android Studio (Android) or Xcode (iOS)

  Firebase project configured

  Environment file:

  Set API_BASE_URL in .dev.env to your backend URL. Include the trailing /.

  For Windows:

  Full setup details: https://github.com/thesohamdatta/aura/tree/main/app

  Previous

  â€¹ Flashing the Firmware

  Next

  Setting Up the Backend â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/bom-case
**Title**: BOM case â€“ OPTIXEL Help Center
**Description**: Print and assemble the Aura enclosure.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- BOM case

### H2:
- AURA

### H5:
- Download the STL files from the aura hardware folder: https://github.com/thesohamdatta/aura/tree/main/hardware

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Getting Started

  Print settings:

  Material: PLA or PETG

  Layer height: 0.2mm

  Infill: 20%

  Supports: Yes, where needed

  After printing, mount the ESP32-S3 board, route the battery wires, and snap the case shut. The pendant loop is built into the design.

  Don't have a printer? Use a local makerspace or an online service like Craftcloud or PCBWay.

  Previous

  â€¹ Bill of Materials

  Next

  Flashing the Firmware â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/flashing-the-firmware
**Title**: Flashing the Firmware â€“ OPTIXEL Help Center
**Description**: Upload firmware to your ESP32-S3.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Flashing the Firmware

### H2:
- What you need:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Troubleshooting

  Arduino IDE or PlatformIO

  ESP32 board package installed

  USB-C cable connected to your XIAO ESP32-S3 Sense

  Steps:

  Clone the aura repo

  Open firmwareino in Arduino IDE

  In Arduino IDE go to Tools â†’ Board â†’ select XIAO_ESP32S3

  Go to Tools â†’ PSRAM â†’ set to OPI PSRAM (required)

  Select your port and click Upload

  Expected output on Serial Monitor:

  Previous

  â€¹ BOM case

  Next

  Setting Up the App â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/hardware-overview
**Title**: Hardware Overview â€“ OPTIXEL Help Center
**Description**: Every component that makes up Aura.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- Hardware Overview

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Features & Performance

  Component

  Details

  Microcontroller

  XIAO ESP32-S3 Sense

  Camera

  OV2640 â€” built into ESP32-S3 Sense

  Microphone

  PDM â€” built into ESP32-S3 Sense

  Battery

  6Ã— 150mAh LiPo cells

  Enclosure

  Custom 3D printed case

  Connectivity

  Wi-Fi 2.4GHz + Bluetooth LE

  Charging

  USB-C

  The ESP32-S3 Sense is the core. Camera and microphone are already on the board â€” no extra modules needed.

  Previous

  â€¹ How Aura Works

  Next

  Bill of Materials â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs/what-is-aura
**Title**: What Is Aura â€“ OPTIXEL Help Center
**Description**: A quick intro to the Aura pendant and what it does.. Find clear steps, tips, and support from the OPTIXEL team in our Help Center knowledge base.


### H1:
- What Is Aura

### H2:
- AURA

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Getting Started

  Aura is an open-source AI wearable pendant. You wear it around your neck. It listens, sees, and thinks â€” so you don't have to pause your day to take notes or remember things.

  It captures audio and images, sends them to an AI, and turns everything into summaries, transcripts, and action items â€” all accessible from your phone.

  Built on the Omi ecosystem. Fully open source. Around $50â€“70 to build yourself.

  Next

  How Aura Works â€º

  Question not answered?contact us at

  SUPPORT@OPTIXELCAM.COM

  < Back To Help Center

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /docs
**Title**: Aura : Elevate the way you work 
**Description**: Always with you

### H2:
- Docs
- AURA

### H3:
- What Is Aura
- How Aura Works
- Hardware Overview
- Bill of Materials
- BOM case
- Flashing the Firmware

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Search

  Popular Articles

  What Is Aura

  BOM case

  AI Providers Setup

  Filter

  Getting Started

  Troubleshooting

  Features & Performance

  Account & App Settings

  Read More

  01

  02

  03

  04

  05

  06

  Question not answered?contact us at

  thesohamdatta@gmail.com

  Headquarter | 01

  Aura HQ,Backyard

  Email

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /dilemma
**Title**: Aura : Elevate the way you work 
**Description**: Always with you

### H2:
- Dilemma
- AURA

### H3:
- Humans Need Third Device
- Social Dilemma
- AI Dilemma
- Aura

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  We have Personal Computers â€” to create, work, and produce things that matter. We have Tiny Supercomputers â€” Smartphones â€” to consume, but we are drawn into the Social Dilemma.

  But why have humans never built something different?

  They tried. Ten years before smartphones, they made wearables â€” but added a screen to it. A screen that demands attention. A screen that distracts. A screen we never needed.

  That is why we are building Aura.

  A device that combines the productive power of a computer and the connectivity of a smartphone â€” but with one fundamental difference. It does not pull you in. It works for you, quietly, in the background â€” transforming your intent into action, without ever asking for your attention.

  Less distraction. More done.

  The social giants are eating our brains.

  Their influence has a deeply negative impact on our behaviour â€” how we talk, what we see, how we do things, how we live. This effect is damaging human nature, and it already has.

  The smartphone is at the centre of all this. It manipulates our minds without us ever knowing why we do what we do, or how we became this way. We were not like this before.

  For years, we have developed and refined this technology. Some of the greatest engineers in the world have worked on it â€” hired for one reason and one reason only: attention. How to capture the maximum attention of people. How to turn that attention into money. How to build an empire out of it.

  There is no escape here.

  No freedom. No freedom. No freedom.

  AI is not going to make it good or help us live better in this socially fucked up world. Instead, AI can and will change how we live, what we see, and how we perceive things â€” things we never needed and never wanted. The Slop. Its impact on our brain is not reversible.

  AI is absolutely revolutionary and can change humanity. But humans are creating AI, AI is creating AI, and AI Dominate humans. We are in the Matrix.

  Hence, we believe AI is humanity's last invention.

  That's Why We Need Aura

  We need a device that doesn't demand attention, doesn't bombard us with information, doesn't ping us with notifications every second â€” a device that needs no screen.

  We need it combining the intelligence of AI and the human mind. The Personal Superintelligence.

  The least socially disruptive device we've ever needed.

  Humane AI Pin was the beginning â€” and it will return in another soul.

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /
**Title**: Aura elevate the way you work 
**Description**: Always with you 

### H2:
- AURA
- Your Partner In Everything
- Wear the Intelligence
- A Closer Look at Aura.
- Gallary.
- Engine .
- What We see
- SOHAM DATTA
- Lead | Aura
- We carry supercomputers that make us lonelier. Assistants that don't assist. Companions that don't know us. 


Something is Missing
- Frequently Asked Questions.

### H3:
- Never Miss A Thing.
- Recalls Instantly
- Never Forget Again
- Wear It. Clip It. Done.
- The Brain
- See & Hear
- The Long Haul

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  Always With You , Always For You .

  AI Captures every conversation, insight and idea automatically.

  Ask anything from your day. Aura already knows the answer.

  Auto summaries, tasks and memories. Your second brain, but smarter.

  Magnetic clasp. No setup. Just put it on and go.

  No Screen  No Distraction.

  Look Cool , Work Greate

  Processor

  XIAO ESP32-S3 Sense

  AI

  Groq / OpenAI / Ollama

  Transcription

  Deepgram / Whisper

  App

  iOS / Android (Flutter)

  Sensor

  OV2640 CMOS Camera

  Lens

  66Â° FOV, f/2.8

  Photo

  1600Ã—1200 @ JPEG

  Microphone

  PDM, 16kHz mono

  Connectivity

  Wi-Fi â€¢ Bluetooth â€¢ Mic

  Battery Life

  Up to 4 Hours

  Charging

  USB-C

  Weight

  Under 50g

  Question not answered?contact us at

  thesohamdatta@gmail.com

  Or

  Visit Docs

  What is Aura ?

  A wearable AI pendant we're building because we thought it would be really cool. Turns out, it is.

  Can I buy one

  Not yet. We're still building it.

  Who made this

  Soham Laxman two crazy guys with all powers of Internet.

  Is it finished

  We have a working prototype. So, almost. Kind of. We're getting there.

  Is it open source?

  Yes. That's the whole point.

  Are you funded?

  Working on it. If you believe in what we're doing, let's talk.

  SUPPORT@OPTIXELCAM.COM

  Visit Help Center >

  Headquarter | 01

  Aura HQ,Backyard

  Email

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

# Page: /about-us
**Title**: Aura : Elevate the way you work 
**Description**: Always with you

### H1:
- We founded Aura with one vision: To reinvent how people See and Hear their world .

### H2:
- THINGS THAT MATTERS
- OUR MISSION
- OUR VISION
- Thanks to Open Source
- Journey
- BUILDING THE BEYONDTHE TEAM
- AURA

### H3:
- Designing the Device
- OS1 - Research
- Raspberry PI
- Omi
- First Prototype
- Success
- Final
- Real Humans
- Soham Datta
- Laxman Pajai

### Paragraph text:
  AURA

  HOME

  ABOUT US

  DILEMMA

  DOCS

  OPEN SOURCE

  About us

  We have Personal Computers  to create, work, and produce things that matter. We have Tiny Supercomputers Smartphones  to consume, but we are drawn into the Social Dilemma.

But why have humans never built something different?

  That's The Point

  Open Source

  Languages

  Cost nothing

  Offline / Online

  To Create Less Socially Disruptive Technology , To change our behaviuors  made by this social media giants  over the years , and change how we live and  use internet .

  Create and Operating System for the AI and Human connection  .

  Aura is built on the top of Omi AI ecosystem

  Adeus key

  Omi AI

  Cosmos OS

  Ollama

  From Sketches to Real Prototype

  We are interested in Psychology behind aura , and how we can  fight to our BehaviorsHow Humans Consume things and Work on it .The Attention is getting Lost Its time to Rewire our brain

  Inspiration Her (2013)

  June 2025

  Draw First ever Sketch of the Aura

  Connecting Humans and AI

  July 2026

  What AI OS can bring to Humans With Edge AI

  Failure

  july 2025

  We choose the Wrong one

  Open Ecosystem for AI wearables

  Dec 2025

  Discovered Smartphone can compute faster

  The aura - aura

  Feb 2026

  Failed  Tried Failed

  First ever Recording

  March 2026

  Got too excited and short the module 
cost 20$

  The Hardware + Software

  April 2026

  Memories , Task, Chats .
Became my Friend

  Aura helping People

  2030

  Aura getting shaped by Experiences Not by Tiny screeens

  We are not from IIT

  Lead Researcher

  For the love of the personal intelligence

  For the love of personal intelligence

  Hardware and Design

  For the love of Experience

  Headquarter | 01

  Aura HQ,Backyard

  Email

  thesohamdatta@gmail.com

  Pages

  Home

  About Us

  Dilemma

  Docs

  404 Page

  Phone

  IND : (+91) 9420984066

  Social Media

  LinkedIn

  Github

  Whatsapp

  Create a free website with Framer, the website builder loved by startups, designers and agencies.

--------------------------------------------------

