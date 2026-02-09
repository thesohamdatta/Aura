#!/bin/bash
#
# Set up the Aura Mobile Project (Android).
#
# Prerequisites (stable versions, use these or higher):
#
# For Android Developers:
# - Android Studio (Iguana | 2024.3)
# - Android SDK Platform (API 35)
# - JDK (v21)
# - Gradle (v8.10)
# - NDK (28.2.13676358)
#
# Usages: 
# - $bash setup.sh android
#

set -euo pipefail

echo "👋 Yo folks! Welcome to the AURA Mobile Project - We're hiring! Join us on Discord: http://discord.aura.me"
echo "Prerequisites (stable versions, use these or higher):"
echo ""
echo "For Android Developers:"
echo "- Android Studio (Iguana | 2024.3)"
echo "- Android SDK Platform (API 36)"
echo "- JDK (v21)"
echo "- Gradle (v8.10)"
echo "- NDK (28.2.13676358)"
echo ""
echo "Usages:"
echo "- bash setup.sh android"
echo ""


API_BASE_URL=https://api.auraapi.com/

######################################
# Setup Firebase with prebuilt configs
######################################
function setup_firebase() {
  mkdir -p android/app/src/dev/
  cp setup/prebuilt/firebase_options.dart lib/firebase_options_dev.dart
  cp setup/prebuilt/google-services.json android/app/src/dev/

  # Warn: Mocking, should remove
  mkdir -p android/app/src/prod/
  cp setup/prebuilt/firebase_options.dart lib/firebase_options_prod.dart
  cp setup/prebuilt/google-services.json android/app/src/prod/
}

#################
# Set up App .env
#################
function setup_app_env() {
  echo API_BASE_URL=$API_BASE_URL > .dev.env
  echo USE_WEB_AUTH=true >> .dev.env
  echo USE_AUTH_CUSTOM_TOKEN=true >> .dev.env
}

# #######################
# Set up Android Keystore
# #######################
function setup_keystore_android() {
  cp setup/prebuilt/key.properties android/
}

# #####
# Build
# #####
function run_build_android() {
  flutter pub get \
    && dart run build_runner build \
    && flutter run --flavor dev
}

#################
# Main Execution
#################
case "${1:-}" in
  android)
    setup_keystore_android \
      && setup_firebase \
      && setup_app_env \
      && run_build_android
    ;;
  *)
    if [ -z "${1:-}" ]; then
      echo "No platform specified. Defaulting to android."
      setup_keystore_android \
        && setup_firebase \
        && setup_app_env \
        && run_build_android
    else
      echo "Error: Unexpected platform '${1}'"
      echo "Usage: bash setup.sh android"
      exit 1
    fi
    ;;
esac
