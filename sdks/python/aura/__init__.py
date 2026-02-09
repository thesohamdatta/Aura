"""
Aura Python SDK

A Python SDK for connecting to Aura wearable devices over Bluetooth,
decoding Opus-encoded audio, and transcribing it in real time.
"""

__version__ = "0.1.0"

from .bluetooth import print_devices, listen_to_aura
from .decoder import AuraOpusDecoder
from .transcribe import transcribe

__all__ = [
    "print_devices",
    "listen_to_aura",
    "AuraOpusDecoder", 
    "transcribe",
    "__version__",
]