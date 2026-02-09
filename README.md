# Aura - AI Wearable Pendant

An open-source AI-powered wearable pendant built on ESP32-S3 with advanced audio and visual capture capabilities. Aura enables seamless interaction with AI assistants through a compact, wearable form factor.

## 🌟 Features

- **ESP32-S3 Based Hardware**: Powerful microcontroller with built-in WiFi and Bluetooth
- **Audio Capture**: High-quality audio recording for voice interactions
- **Visual Capture**: Camera integration for visual context awareness
- **Real-time AI Processing**: Backend integration for intelligent responses
- **Mobile App**: Cross-platform mobile application for device management
- **Web Dashboard**: Browser-based interface for configuration and monitoring
- **MCP Integration**: Model Context Protocol support for advanced AI capabilities

## 📁 Repository Structure

```
Aura/
├── aura-pendant/     # Hardware firmware and schematics for the ESP32-S3 pendant
├── backend/          # Server-side API and AI processing logic
├── app/              # Mobile application (iOS & Android)
├── web/              # Web dashboard and configuration interface
└── mcp/              # Model Context Protocol integration
```

## 🚀 Quick Start

### Hardware Setup (Aura Pendant)

1. Navigate to the `aura-pendant/` directory
2. Install PlatformIO or Arduino IDE
3. Configure your WiFi credentials in the firmware
4. Flash the firmware to your ESP32-S3 device
5. Follow the hardware assembly guide in `aura-pendant/README.md`

**Detailed Instructions**: See [aura-pendant/README.md](./aura-pendant/README.md)

### Backend Setup

1. Navigate to the `backend/` directory
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Configure environment variables (API keys, database settings)
4. Start the backend server:
   ```bash
   python main.py
   ```

**Detailed Instructions**: See [backend/README.md](./backend/README.md)

### Mobile App Setup

1. Navigate to the `app/` directory
2. Install dependencies:
   ```bash
   flutter pub get
   # or
   npm install
   ```
3. Configure the backend API endpoint
4. Run the app:
   ```bash
   flutter run
   # or
   npm run start
   ```

**Detailed Instructions**: See [app/README.md](./app/README.md)

### Web Dashboard Setup

1. Navigate to the `web/` directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the backend API endpoint
4. Start the development server:
   ```bash
   npm run dev
   ```

**Detailed Instructions**: See [web/README.md](./web/README.md)

## 🛠️ Technology Stack

- **Hardware**: ESP32-S3, MEMS microphones, camera modules
- **Firmware**: C++ (Arduino/PlatformIO)
- **Backend**: Python, FastAPI, WebSocket
- **Mobile**: Flutter / React Native
- **Web**: React, Next.js
- **AI/ML**: Integration with various LLM providers

## 📖 Documentation

Comprehensive documentation for each component can be found in their respective directories:

- [Hardware Documentation](./aura-pendant/README.md)
- [Backend API Documentation](./backend/README.md)
- [Mobile App Documentation](./app/README.md)
- [Web Dashboard Documentation](./web/README.md)
- [MCP Integration Guide](./mcp/README.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests, report bugs, or suggest new features.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👤 Author

**Soham Datta**

- GitHub: [@thesohamdatta](https://github.com/thesohamdatta)
- Repository: [https://github.com/thesohamdatta/Aura](https://github.com/thesohamdatta/Aura)

## 🙏 Acknowledgments

This project builds upon the foundation and learnings from the Omi open-source community. We're grateful for their pioneering work in AI wearables and their commitment to open-source development.

---

**Note**: Aura is an independent project and is not affiliated with or endorsed by the original Omi project or Based Hardware.
