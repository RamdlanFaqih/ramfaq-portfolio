# Portfolio Design & Architecture Plan

## 1. Core Concept & Art Direction
*   **Role:** Frontend Developer (Web & Mobile)
*   **Vibe:** Cozy, minimalist, breathable, and highly polished.
*   **Color Palette:** Monochrome.
    *   **Background:** Pure White (`#FFFFFF`) or Warm Off-White (`#FAFAFA`) to reduce eye strain and maximize the "cozy" feel.
    *   **Primary Text:** Soft Black (`#1A1A1A`) or Deep Charcoal (`#2D2D2D`).
    *   **Secondary Text/Borders:** Light Gray (`#E5E5E5`) and Medium Gray (`#A3A3A3`).
*   **Typography:** 
    *   **Headings:** An elegant Serif (e.g., *Playfair Display* or *Lora*) for a sophisticated, cozy touch.
    *   **Body:** A clean, highly readable Sans-Serif (e.g., *Inter*, *Geist*, or *SF Pro*).

## 2. Tech Stack
*   **Framework:** Next.js (App Router)
*   **UI Library:** React
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (perfect for strict monochrome constraints)
*   **Animation Engine:** Framer Motion (for smooth, complex page transitions and micro-interactions) or GSAP (for advanced scroll-based animations).

## 3. Animation Strategy ("Full Animation, Clean Look")
Animations will be fluid, slow-eased, and non-intrusive. The goal is a buttery-smooth experience without feeling chaotic.
*   **Page Load:** Soft fade-ins and subtle upward translations for typography.
*   **Scroll Reveal:** Elements gracefully fade and slide up into view as the user scrolls.
*   **Hover States:** Images gently scale up (zoom effect within a hidden overflow container), and text slightly desaturates or shifts in weight.
*   **Custom Cursor (Optional):** A minimalist inverted-color dot that expands when hovering over clickable elements.
*   **Page Transitions:** Screen wipes or cross-fades using Next.js template files and Framer Motion's `AnimatePresence`.

## 4. Page Structure & Content

### A. Hero Section (Landing)
*   **Visual:** Massive whitespace. A highly readable, animated greeting.
*   **Content:** 
    *   "Hi, I'm [Your Name]."
    *   "Crafting fluid, user-centric experiences for Web & Mobile."
*   **Action:** A subtle, bouncing "scroll down" indicator (e.g., a thin vertical line that animates downwards).

### B. About Me
*   **Layout:** Two-column grid. Text on one side, a clean monochromatic portrait or abstract geometric animation on the other.
*   **Content:** Brief background focusing on passion for pixel-perfect design, performance, and seamless user interfaces.
*   **Skills Marquee:** A slow-moving, infinite horizontal scrolling text displaying core technologies: `React` • `Next.js` • `TypeScript` • `React Native` • `Tailwind CSS`.

### C. Selected Works (Projects)
*   **Layout:** Vertical list or an alternating zigzag grid. Huge emphasis on large, high-quality, greyscale mockups that reveal their original color (or stay monochrome) on hover.
*   **Project 1: Interactive 3D Mapping Interface**
    *   *Tech:* React, TypeScript, `@vis.gl/react-google-maps`.
    *   *Details:* Engineered custom 3D camera controls and dynamic marker labeling for a spatial data visualization tool.
*   **Project 2: Mobile Application**
    *   *Tech:* React Native / Expo.
    *   *Details:* Cross-platform mobile architecture with fluid gesture animations and native performance.
*   **Project 3: High-Performance Web App**
    *   *Tech:* Next.js, Tailwind.
    *   *Details:* Server-side rendered application with complex state management and responsive design.

### D. Experience / Resume
*   **Layout:** A minimalist timeline or an accordion menu.
*   **Details:** Role, Company, and Dates. Clicking expands to show 2-3 concise bullet points of achievements.

### E. Footer / Contact
*   **Visual:** Cozy, full-screen height section.
*   **Content:** 
    *   "Let's build something together."
    *   Large, interactive email link.
    *   Minimalist icons for GitHub, LinkedIn, and Twitter/X.
*   **Animation:** A subtle parallax effect where the footer reveals itself from underneath the preceding section.