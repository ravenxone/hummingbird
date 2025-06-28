# Project Summary: Personal Website "Hummingbird"

This document outlines the development process, design choices, and technical architecture of the "Hummingbird" personal website project.

## 1. Project Goal & Design Source

The primary goal was to build a visually-rich, two-section personal website ("notes" and "about") based on a detailed design provided via Figma. The key requirements were:

-   A specific and distinct typographic style.
-   A unique layout for content presentation.
-   A simple, file-based content management system for the "notes" section.
-   A polished, modern user experience with subtle animations.

**Design Source**: [Figma - Personal Website](https://www.figma.com/design/MTW2yZ7IG23Fb4Kmlp9IHB/Personal-website)

## 2. Desired Outcome

The end product is a fast, modern, and aesthetically pleasing website that is statically generated for optimal performance and can be easily deployed to services like Vercel. The content for the blog/notes section can be updated by simply adding or editing Markdown files in a local directory, which are then automatically built into the site.

## 3. Implementation Details & Architectural Choices

### 3.1. Technology Stack

-   **Framework**: **Next.js (with App Router)** was chosen over a simple HTML/CSS project.
    -   **Why?**: Next.js excels at Static Site Generation (SSG), which pre-renders the entire site into highly optimized static files. This provides excellent performance and SEO. The App Router enables modern React features like Server Components, which are crucial for the file-based content strategy.
-   **Language**: **TypeScript** is used for its static typing, which helps prevent common bugs and improves code maintainability as the project grows.
-   **Styling**: **CSS Modules** were chosen for styling.
    -   **Why?**: CSS Modules provide locally-scoped class names, preventing style conflicts between components. This allows for granular, component-level styling without the overhead of a large utility-first framework, giving us full control to match the Figma design precisely.

### 3.2. Content Management (The "Notes" Section)

The content workflow was designed to be as simple as possible, directly addressing the user request.

-   **Source**: A `notes/` directory at the project root contains all blog posts as individual Markdown (`.md`) files.
-   **Metadata**: Each file uses a "frontmatter" block at the top to define metadata.
    ```yaml
    ---
    title: "On the beauty of everyday things"
    date: "2024-03-15"
    tag: "Art"
    ---
    ```
-   **Parsing**: The `gray-matter` library is used to parse these files, separating the metadata (frontmatter) from the main content.
-   **Rendering**: The main page (`src/app/page.tsx`) is a **Next.js Server Component**. This allows it to use Node.js APIs directly on the server (at build time). It uses the `fs` module to read all files from the `notes/` directory, parse them, and pass the data to the `BlogPost` component for rendering.

### 3.3. Styling, Fonts, and Assets

-   **Custom Fonts**:
    -   The primary headline font, `PP Editorial New`, is loaded locally from `/public/fonts/` using a `@font-face` rule in `src/app/globals.css`. This avoids reliance on external services like Google Fonts and ensures the exact font is always available.
    -   The body font, `Quicksand`, is loaded from Google Fonts for simplicity.
-   **Background Texture**: A key design element is the "handmade paper" texture.
    -   **Implementation**: This was achieved with a `::after` pseudo-element on the `<body>`. The texture itself is a tiny, inline SVG that generates noise, which is more performant than loading a large image file.
    -   **Design Choice/Bug Fix**: Initially, this was positioned absolutely, which created a "seam" on larger monitors. The final implementation uses `position: fixed` to ensure the texture covers the entire viewport, regardless of screen size or content length, creating a uniform and seamless effect.
-   **SVG Logo**: The hummingbird logo is its own reusable React component (`src/app/components/HummingbirdLogo/index.tsx`), making it easy to include anywhere.

### 3.4. Component Architecture & Key Decisions

The project's structure is designed for reusability and maintainability.

-   **Persistent Layout (`src/app/layout.tsx`)**: This is the most important architectural choice. The root layout file defines the shell of the application.
    -   **Why?**: By placing the `<Header />` component inside this layout, we ensure it is rendered **only once**. It persists across page navigations, while Next.js swaps out the page content (`{children}`) below it. This was the critical insight required to make the navigation animations work correctly.
-   **Reusable `Header` Component**: The header, containing the logo and navigation, is a single, self-contained component.
    -   **Why?**: This follows the DRY (Don't Repeat Yourself) principle. Since the header is identical on all pages, it would be inefficient to duplicate the code. This way, any future change to the header only needs to be made in one file.
-   **Sliding Underline Animation**: The navigation underline was a central focus.
    -   **Implementation**: It's a `<div>` element that is moved using CSS transitions on its `left` and `width` properties. Its position is calculated in React using `useRef` to reference the navigation bar and `useEffect` to trigger the calculation whenever the page's URL (`pathname`) changes.
    -   **Bug Fix (Race Condition)**: The underline initially failed to appear after being moved to the persistent layout. This was because the measurement code was running *before* the new page's content had fully rendered.
    -   **Solution**: The measurement logic inside the `Header`'s `useEffect` hook is wrapped in a `setTimeout` with a minimal delay (50ms). This pushes the measurement to the end of the execution queue, ensuring the DOM is fully updated and the active link can be correctly measured.
-   **Layout Stability (The "Jiggle" Fix)**: A subtle but annoying bug was the page content "shaking" when navigating between pages of different lengths.
    -   **Cause**: The browser's scrollbar appearing/disappearing, which changes the available viewport width.
    -   **Solution**: A single line of CSS in `globals.css` (`html { overflow-y: scroll; }`) forces the scrollbar to *always* be visible, even if the content doesn't require scrolling. This creates a stable layout width, eliminating the jiggle.

## 4. Technical Specifications

### 4.1. Project Dependencies

The project relies on the following external libraries, defined in `package.json`:

-   **`next`**: The core framework for React, providing server-rendering, static site generation, and routing.
-   **`react` & `react-dom`**: The fundamental libraries for building the user interface.
-   **`gray-matter`**: A utility used to parse Markdown files with frontmatter. This is essential for the file-based content system in the "notes" section. It's used in `src/app/page.tsx`.
-   **`framer-motion`**: A library for creating animations. While it was part of an earlier iteration, it is no longer used in the final implementation for the navigation animation.

### 4.2. Code Structure

The main application code is housed within the `src/` directory.

```
src/
└── app/
    ├── layout.tsx         # The root layout, contains the <html> and <body> shell.
    |                      # -> Imports and uses the Header component.
    ├── globals.css        # Global stylesheet (fonts, background, resets).
    ├── page.tsx           # The "notes" page (home page).
    |                      # -> Reads from `notes/`, uses `gray-matter`.
    ├── page.module.css    # Styles specific to the "notes" page.
    ├── about/
    │   ├── page.tsx       # The "about" page component.
    │   └── page.module.css# Styles specific to the "about" page.
    └── components/
        ├── Header/
        │   ├── index.tsx  # The persistent Header component with navigation logic.
        │   └── styles.module.css
        ├── BlogPost/
        │   ├── index.tsx  # Component for a single blog post preview.
        │   └── styles.module.css
        └── HummingbirdLogo/
            └── index.tsx  # The hummingbird SVG logo component.
``` 