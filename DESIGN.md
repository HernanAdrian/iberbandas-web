# IberBandas PRINCIPAL - Design System Documentation

## 1. Project Overview & Creative North Star
**Concept**: **"The Kinetic Engine"**
This design system is built for industrial conveyor systems, emphasizing uptime, structural integrity, and seamless flow. It avoids the "generic B2B dashboard" in favor of a **High-End Editorial** experience that feels engineered, authoritative, and technical.

**Core Principles**:
- **Intentional Asymmetry**: Breaking templates with structural anchors.
- **Floating Precision**: Layered tonal depth instead of rigid borders.
- **Structural Typography**: Large-scale technical type as a visual anchor.

---

## 2. Color Palette
The palette is rooted in industrial reliability with "Signal" highlights for action.

### Brand Colors
| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary (Signal)** | `#FF6B00` | Main CTAs, critical alerts, Actionable Momentum. |
| **Secondary (Logic)** | `#1B365D` | Foundation, trust, technical grouping. |
| **Tertiary** | `#0f2232` | Deep structural elements. |

### Surface Hierarchy (Tonal Layering)
*Prohibited: 1px solid borders for sectioning. Use background shifts instead.*

| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Background** | `#f9f9f9` | Global base background. |
| **Surface Low** | `#f3f3f3` | Section backgrounds on `surface`. |
| **Surface High** | `#e8e8e8` | Nested functional modules. |
| **Surface Highest** | `#e2e2e2` | UI elements needing high contrast (e.g., search bars). |
| **Surface Lowest** | `#ffffff` | Cards, modals, and interactive surface lift. |

---

## 3. Typography: The Technical Voice
**Primary Font Family**: `Inter`

| Level | Size (rem/px) | Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display LG** | 3.5rem (56px) | 700 | -0.02em | "Hard Data", hero statements, percentages. |
| **Display MD** | 2.5rem (40px) | 700 | -0.02em | Key technical metrics. |
| **Headline LG** | 2.0rem (32px) | 700 | Normal | Section headers (bold mandatory). |
| **Title SM** | 0.875rem (14px)| 600 | Normal | Module titles and specs. |
| **Body MD** | 1.0rem (16px) | 400 | Normal | Functional text, maintenance logs. |
| **Label SM** | 0.75rem (12px) | 500 | Normal | UI labels, data metadata. |

---

## 4. Spacing System
**Base Unit**: `0.225rem` (3.6px)

| Token | Value (rem) | Value (px) | Usage |
| :--- | :--- | :--- | :--- |
| **Spacing 4** | 0.9rem | 14.4px | Item gaps, internal padding for small components. |
| **Spacing 20** | 4.5rem | 72px | Standard section breathing room. |
| **Spacing 24** | 5.5rem | 88px | Top-level vertical section gaps. |

---

## 5. Component Styles

### Buttons: "Actionable Momentum"
- **Primary**: Background `#FF6B00`, Text `on-primary` (`#ffffff`), Corner Radius `0.375rem`.
- **Secondary**: Ghost style with `#1B365D` text and a Ghost Border (`outline-variant` at 15% opacity).
- **Tertiary**: Text-only, heavy weight for low-priority technical links.

### Cards & Lists: "The Seamless Belt"
- **Separation**: Defined by tonal shifts (e.g., `surface-lowest` cards on `surface-low` base).
- **Interaction**: Hover shifts background from `low` to `highest` with a swiftd 200ms transition.
- **Corners**: Subtle corners, maximum `0.75rem` (xl). **Never use bubbly/rounded corners.**

### Input Fields: "Precision Entry"
- **Background**: `surface-container-highest` (#e2e2e2).
- **Focus State**: `2px` border using Industrial Blue (#1B365D).
- **Format**: Minimalist, full-container style; no bottom-line-only inputs.

---

## 6. Visual Language & Effects

### Shadows & Elevation
- **Ambient Shadow**: `blur: 40px`, `y: 12px`, `opacity: 6%`. Shadow color must be tinted with `#1a1c1c` (never pure black).
- **Tonal Stacking**: Achieve depth by moving components one tier up in the surface scale.

### Glassmorphism
- **Backdrop Blur**: `12px`.
- **Opacity**: `80%` on `surface_container_low`.
- **Usage**: Secondary navigation or overlaying technical diagrams.

### Signature Texture
- **Industrial Glow**: Linear gradient (135°) from `#1B365D` (Secondary) to `#b6d0ff` (Secondary Container).

---

## 7. Assets & Identity

### Logo
- **Source Asset**: [LOGOTIPO.webp](file:///Users/hernanadrian/Desktop/IDEAS%20NEGOCIOS/IBERBANDASWEB/LOGOTIPO.webp)
- **Adaptation**:
    - **Header Size**: 180px x 40px (constrained height).
    - **Position**: Top-left, anchored with `spacing-4`.
    - **Style**: Integrated into the structural architecture of the header.

---
*Last Updated: 2026-03-29*
