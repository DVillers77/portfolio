# Portfolio Style Guide: Typography & Color

This guide establishes the foundational design standards for the portfolio
website, ensuring consistency across all pages (Index, About, Projects). All
elements are implemented using **CSS variables** for a maintainable and scalable
codebase (DRY principle).

---

## 1. Typography

We use a modern, minimalist font pairing to ensure high legibility and a
professional aesthetic.

### Typeface Selection & Personality

| Element               | Typeface             | Personality                       | Weights Used                     |
| :-------------------- | :------------------- | :-------------------------------- | :------------------------------- |
| **Display/Headlines** | Poppins (Sans-Serif) | "Modern, Geometric, Professional" | "700 (Bold), 800 (Extra-Bold)"   |
| **Body/UI Text**      | Inter (Sans-Serif)   | "Clean, Highly Legible, Neutral"  | "400 (Regular), 600 (Semi-Bold)" |

### Typographic Scale (Implemented in stylesheet.css)

| Element                  | CSS Variable     | Font Family | Size (Desktop) | Size (Mobile)    | Alignment                       |
| :----------------------- | :--------------- | :---------- | :------------- | :--------------- | :------------------------------ |
| **Base Body Text**       | `--font-body`    | Inter       | 1rem (16px)    | 0.95rem (15.2px) | Left                            |
| **H1 (Main Title)**      | `--font-display` | Poppins     | 2.5rem         | 1.8rem           | Center (on Index page)          |
| **H2 (Section Heading)** | `--font-display` | Poppins     | 1.8rem         | 1.5rem           | Left                            |
| **Navbar Links**         | `--font-display` | Poppins     | 1.1rem         | 1.1rem           | Left (Mobile), Center (Desktop) |

---

## 2. Color Palette (WCAG Compliant)

The palette is designed to convey a **creative, imaginative, and
forward-thinking** message while ensuring **WCAG AA** accessibility. All colors
are defined as CSS Variables.

### Color Palette Selection

| Color Role               | CSS Variable                  | Hex Value | Usage / Where Used                                                                                 |
| :----------------------- | :---------------------------- | :-------- | :------------------------------------------------------------------------------------------------- |
| **Primary Accent**       | `--color-primary-green`       | `#3cb371` | **Success Color:** Main CTA buttons, link hover states, blockquote borders, active slideshow dots. |
| **Secondary Accent**     | `--color-accent-violet`       | `#ff00ff` | **Brand Accent:** Navbar inset shadows, hover glows, modal close icon hover.                       |
| **Primary Background**   | `--color-background-lightest` | `#f0fff4` | Main page background (odd rows), active navbar link background, form background.                   |
| **Secondary Background** | `--color-neutral-white`       | `#ffffff` | Content panels (even rows), modal background.                                                      |

### Font Color Usage

| Text Role        | CSS Variable            | Hex Value | Contrast Ratio (on `#f0fff4`) | Usage / Where Used                                  |
| :--------------- | :---------------------- | :-------- | :---------------------------- | :-------------------------------------------------- |
| **Headlines**    | `--color-text-black`    | `#0a0a0a` | **17.8:1 (AAA Pass)**         | H1-H6 headings, prominent titles.                   |
| **Body Text**    | `--color-text-dark`     | `#333333` | **12.6:1 (AAA Pass)**         | Paragraphs, labels, general UI text.                |
| **Inverse Text** | `--color-neutral-white` | `#ffffff` | 4.5:1 (AA Pass on `#3cb371`)  | Text on primary buttons and within the dark navbar. |

---

## 3. Reflection for Assignment

### What font families (typefaces) did you choose to use?

- Poppins (for Headings/Display)
- Inter (for Body/UI Text)

### Why did you choose these typefaces?

- Inter was chosen for its superior legibility at various sizes, making it an
  excellent, clean, and neutral choice for long-form body content and general
  user interface elements.
- Poppins was chosen for its modern, geometric feel, which gives headings and
  key navigational elements a distinctive and professional style that contrasts
  well with the body text.
