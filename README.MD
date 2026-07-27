<div align="center">

<img src="Assets/hero/123456l.png" alt="Aura pendant worn in the real world" width="360" />

<br/>

# Aura

Aura is an open-source pendant you wear around your neck.
Voice in. Memory out. No screen.

<br/>

</div>

## What works

| Layer | Where |
|---|---|
| Pendant firmware (XIAO ESP32-S3 Sense) | [`firmware/`](firmware/) |
| Backend (FastAPI, 4-layer AI) | [`backend/`](backend/) |
| Android companion app | [`app/`](app/) |
| Printable case | [`hardware/CASE.stl`](hardware/CASE.stl) |

## Start here

| You want to | Open |
|---|---|
| Flash the pendant | [`firmware/readme.md`](firmware/readme.md) |
| Run the backend | [`backend/README.md`](backend/README.md) |
| Build the Android app | [`app/README.md`](app/README.md) |
| Print the case | [`hardware/README.md`](hardware/README.md) |

## How the stack fits

Pendant streams audio and frames over Wi-Fi. Backend turns them into searchable memory. The app is how you ask the memory a question.

[Read the full argument](website/manifesto.html).

## Hardware

Off-the-shelf parts. Printable case. No proprietary enclosure.

| Piece | Spec |
|---|---|
| MCU | XIAO ESP32-S3 Sense |
| Mic | Digital PDM |
| Camera | OV2640 |
| Wireless | Wi-Fi 2.4GHz + BLE 5.0 |
| Case | [`hardware/CASE.stl`](hardware/CASE.stl) |

Total BOM: around \$50 USD. Component list and assembly notes live in [`hardware/README.md`](hardware/README.md).

## Open source

MIT licensed. Built by a four-person undergrad team in Pune.

- [Contributing](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security](SECURITY.md)
- [License](LICENSE)

---

<div align="center">

[Star on GitHub](https://github.com/thesohamdatta/aura) · [Report a vulnerability](SECURITY.md) · [MIT](LICENSE)

</div>
