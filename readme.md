# Portfolio: UX-Driven Front-End Development

A professional portfolio showcasing skills in HTML5, CSS3, and Vanilla
JavaScript, with a strong emphasis on user experience (UX), performance, and
accessibility (A11y).

---

## 🚀 Key Features & Technical Highlights

This project demonstrates a rigorous, clean approach to front-end development,
focusing on stability and maintainability.

### Architecture & Design

- **Dual Expertise:** Serves as a direct showcase for both UX design philosophy
  and robust front-end implementation.
- **Scalable CSS:** Utilizes **CSS Custom Properties (`:root` variables)** for a
  modular and easily themeable color palette, shadows, and spacing.
- **Performance Optimization:** Aggressively optimized image assets and utilizes
  resource hints (`<link rel="preconnect">`) for fast loading.

### Accessibility (A11y)

- **ARIA-Compliant Modal:** The Contact Modal includes **full focus trapping**
  (keyboard navigation locked inside the modal) and **scroll locking** (prevents
  background scrolling), adhering to WAI-ARIA standards.
- **Accessible Dynamic Content:** The project slideshow uses ARIA attributes
  (`aria-current`, `aria-live`) to ensure dynamic content changes are announced
  to screen readers.

### Vanilla JavaScript Implementation

- **Complex Scroll Handling:** Implements a custom JavaScript solution
  (`setupAnchorHandler`) to achieve smooth scrolling while preventing known
  browser history corruption issues.
- **Clean DOM Manipulation:** All dynamic elements (e.g., the Contact Modal) are
  created and managed outside the main DOM via the `<template>` tag for clean
  injection and removal.

---

## 🛠️ Project Showcase

| Project             | Description                                                                                                             |                 View Code                  |      View Live Demo      |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------- | :----------------------------------------: | :----------------------: |
| **Tic-Tac-Toe AI**  | Implements the **Minimax algorithm** for an unbeatable AI opponent, showcasing complex game logic and state management. |            [Link to Repository]            |   [Link to Live Demo]    |
| **To-Do App**       | A simple task manager demonstrating local storage persistence, DOM manipulation, and user input validation.             |            [Link to Repository]            |   [Link to Live Demo]    |
| **Image Slideshow** | Custom, accessible slideshow with keyboard controls (Arrow Keys) and dynamic ARIA updates for screen reader users.      | Included in the main portfolio repository. | N/A (Integrated feature) |

**(NOTE: Update the [Link to Repository] and [Link to Live Demo] fields before
publishing.)**

---

## ⚠️ Development Notes (Known Compromise)

This section documents the specific technical compromise made to ensure
cross-browser stability, showcasing a transparent approach to problem-solving.

### Scroll Anchor Stability Issue

The smooth scrolling for internal anchor links (like the dynamic slideshow title
link) presented a conflict with browser history.

- **Problem:** The browser's native link click was silently recording the URL
  hash (`#section-id`), causing the page to abruptly **jump to the wrong
  position upon refresh**.
- **Solution:** The custom **`setupAnchorHandler`** function uses
  `e.preventDefault()` to block the URL update and `setTimeout(0)` to reliably
  defer the focus state.
- **Current Compromise:** This solution successfully prevents URL corruption and
  the refresh jump. A minimal, negligible flicker remains only after **multiple,
  rapid, consecutive refreshes**—a low-impact race condition that is the stable
  compromise for this specific browser behavior.
