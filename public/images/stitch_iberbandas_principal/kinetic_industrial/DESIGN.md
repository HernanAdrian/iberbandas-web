# Executive Design Charter: Industrial Precision & Kinetic Flow

## 1. Overview & Creative North Star: "The Kinetic Engine"
This design system is built upon the concept of **The Kinetic Engine**. In the world of industrial conveyor systems, value is defined by uptime, structural integrity, and the seamless flow of heavy-duty components. This system moves away from the "generic B2B dashboard" and toward a **High-End Editorial** experience that feels as engineered as the belts themselves.

We break the "template" look by using **Intentional Asymmetry**. Large-scale technical typography acts as a structural anchor, while components utilize "Floating Precision"—a layered approach that favors tonal depth over rigid, outlined containers. The result is a digital environment that feels authoritative, technical, and premium, speaking directly to the high-stakes world of factory management.

---

## 2. Colors: Industrial Depth & Signal Highlighting
The palette is rooted in industrial reliability, utilizing a deep blue foundation punctuated by a high-visibility signal orange.

*   **Primary Logic (`secondary` / `tertiary` tokens):** We utilize the deep industrial blue (#1B365D, mapped to `secondary` and `tertiary` tiers) to ground the interface in trust.
*   **The Signal CTA (`primary` tokens):** The vibrant orange (#FF6B00) is reserved exclusively for "Actionable Momentum"—primary CTAs, critical alerts, and status indicators.
*   **The "No-Line" Rule:** Designers are strictly prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. Use `surface-container-low` for a section background sitting on a `surface` base to create a clean, modern break.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers. An equipment card (`surface-container-lowest`) should sit on a maintenance log section (`surface-container-low`), which sits on the global background (`surface`). This "nested depth" replaces the need for dividers.
*   **Signature Textures:** For Hero sections or high-level analytics, use a subtle "Industrial Glow" gradient—transitioning from `secondary` (#1B365D) to `secondary_container` (#b6d0ff) at a 135-degree angle to provide a sense of metallic sheen and professional polish.

---

## 3. Typography: The Technical Voice
We utilize **Inter** to bridge the gap between technical documentation and premium editorial design.

*   **Display Scales (`display-lg`, `display-md`):** Used for "Hard Data" and impactful hero statements. These should be set with tight tracking (-0.02em) to feel like stamped industrial steel.
*   **Headline & Title (`headline-lg` to `title-sm`):** These define the hierarchy of technical specs. Bold weights are mandatory for headlines to maintain authority.
*   **Body & Labels (`body-md`, `label-sm`):** Functionality is king here. We prioritize high contrast (`on_surface` on `surface`) and generous line-heights to ensure factory managers can read maintenance logs in low-light environments.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows and heavy borders are replaced with a sophisticated layering principle.

*   **Tonal Stacking:** Depth is achieved by "stacking" surface tiers. To make a module "pop," move it one level "up" in the surface-container scale (e.g., moving from `surface-container-low` to `surface-container-highest`).
*   **Ambient Shadows:** For floating elements like Modals or Tooltips, use an ultra-diffused shadow: `blur: 40px`, `y: 12px`, `opacity: 6%`. The shadow color must be a tinted version of the `on_surface` token, never a pure black.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be a "Ghost Border" using `outline_variant` at **15% opacity**. This provides a hint of structure without cluttering the visual field.
*   **Glassmorphism:** For secondary navigation or overlaying technical diagrams, use a backdrop-blur (12px) on a semi-transparent `surface_container_low` (80% opacity). This creates a "frosted glass" effect that keeps the user grounded in the overall machinery context.

---

## 5. Components: Stylized Primaries

### Buttons: "Actionable Momentum"
*   **Primary:** High-visibility Orange (#FF6B00 / `primary`). Use `rounded-md` (0.375rem) for a modern, technical corner.
*   **Secondary:** Ghost style with a `secondary` text label and a Ghost Border.
*   **Tertiary:** Text-only with a heavy weight; used for low-priority technical links.

### Cards & Lists: "The Seamless Belt"
*   **Rule:** Forbid the use of divider lines.
*   **Implementation:** Separate list items using the `spacing-4` (0.9rem) gap and subtle background alternating between `surface-container-low` and `surface-container-high`.
*   **Interaction:** On hover, a card should shift from `surface-container-low` to `surface-container-highest` with a swift 200ms transition.

### Input Fields: "Precision Entry"
*   **Style:** Minimalist. No bottom-line-only inputs. Use a full container with `surface_container_highest`. 
*   **Focus State:** The `outline` should glow with a 2px `secondary` (Deep Blue) border to indicate active technical focus.

### Industry-Specific Components
*   **Status Gauges:** Use a "Kinetic Ring"—a circular progress indicator using `primary` (Orange) for active state and `outline_variant` (at 20% opacity) for the track.
*   **Technical Data Grid:** Use `surface-container-lowest` for headers and `body-sm` for high-density data, ensuring the "No-Line" rule is upheld through alternating row colors.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use whitespace as a functional tool to separate complex technical data.
*   **DO** use `display-lg` typography for single-digit "Uptime" or "Efficiency" percentages to create visual impact.
*   **DO** leverage the `spacing-20` (4.5rem) or `spacing-24` (5.5rem) values for top-level section breathing room.

### Don't:
*   **DON'T** use 100% opaque borders to separate content.
*   **DON'T** use generic "drop shadows" that look like 2010-era web design; keep it ambient and low-opacity.
*   **DON'T** use the vibrant orange for anything other than primary actions or critical status; overusing it dilutes its "Signal" power.
*   **DON'T** use rounded corners above `xl` (0.75rem). This is an industrial system; it needs to feel sturdy, not "bubbly."