## Problem Statement

The user wants to enhance the homepage (`index.html`) with an interactive product presentation showcase section matching the "Every little thing they do is magic" layout from the Apple AirPods 4 product page. This section displays a phone mock-up and device showing the Aura mobile app, synced with scroll animations and premium float dropshadow styling to showcase the user experience.

## Solution

We insert a full-width section with a `#f5f5f7` background on the homepage, situated between the highlights card grid and the macro photo product gallery. This section is titled "Seamless experience", features a dynamic float-in animation when entering the viewport, and presents text highlighting the core values of Aura's memory recall.

## User Stories

1. As a website visitor, I want to see a high-fidelity rendering of the companion app next to the pendant, so that I can understand what the screenless pendant interface looks like on my phone.
2. As a mobile viewer, I want the mockup image to adapt to my screen size without introducing horizontal scrolling, so that the reading experience remains fluid.
3. As a visitor browsing the page, I want subtle transition animations to guide my eye down the page when content enters the viewport, so that the page feels responsive and premium.

## Implementation Decisions

- **DOM Location:** The section is inserted immediately after the highlights grid `</section>` and before the "Take a closer look" `<section>` block in `website/index.html`.
- **Assets:** The single phone + device mockup image is located at `website/assets/png/mobile and device.png`.
- **Scoped Styles:** Built-in `<style>` rules are declared inside the section element, utilizing `#app-demo-section` selectors. Styling targets padding (`120px` top / `80px` bottom for desktop), centering layout rules, and standard transition classes.
- **Scroll Anim Engine:** A dedicated `IntersectionObserver` instance triggers transitions once inside a `<script>` tag scoped to the section elements via unique element IDs: `#demoPhoneImage`, `#demoCaptionLabel`, and `#demoCaptionBody`.
- **Mockup Shadow:** Applies `filter: drop-shadow(0 40px 60px rgba(0,0,0,0.18)) drop-shadow(0 8px 20px rgba(0,0,0,0.1))` rather than `box-shadow` on the mockup image tag.

## Testing Decisions

- **Validation:** Executed against `scratch/run_tests.js`.
- **Checks:**
  - Background is exactly `#f5f5f7`.
  - Image markup has `filter: drop-shadow` styling rules.
  - Verification of mobile layout sizes: headline reduces to `34px`, section padding reduces, and image widths scale to `calc(100% - 32px)` preventing scroll overflow.

## Out of Scope

- Real dynamic app data syncing inside the static HTML file.
- Adding third-party JavaScript scroll engines (like ScrollMagic/AOS).
