# Sanaap Design System

The **Sanaap Design System** provides a unified collection of styles, themes, and components to ensure consistency across all Sanaap products.

---

## 📦 Installation & Usage

To use the design system in your project, first install it via npm or link it locally:

```bash
# Option 1: Install from npm (when published)
npm install sanaap-design-system

# Option 2: For local development
npm link
# Then in your target project
npm link sanaap-design-system
```

Once installed, import the core stylesheet in your root file (e.g., `main.tsx` or `index.tsx`):

```ts
import "sanaap-design-system/core.css";
```

This import is **required** to apply all theme variables and base styles.

---

## 🎨 Styles & Themes

All color and theme variables are defined inside the `styles` directory.

```
styles/
├── colors/
│   ├── blue.css
│   ├── gray.css
│   └── ...
└── themes/
    ├── palette.css
    ├── font.css
    └── ...
```

Example (`styles/colors/blue.css`):

```css
:root {
  --color-blue-0: #f4f9ff;
  --color-blue-50: #deeeff;
  --color-blue-100: #bddeff;
  --color-blue-200: #9bcdff;
  --color-blue-300: #79bbfd;
  --color-blue-400: #57a8fa;
  --color-blue-500: #3693f1;
  --color-blue-600: #1a7cde;
  --color-blue-700: #0a66c2;
  --color-blue-800: #0457aa;
  --color-blue-900: #024a92;
  --color-blue-1000: #003d7a;
}
```

Each color and theme file defines CSS variables that can be used throughout components.

---

## 🧩 Component Structure & Naming Rules

When developing new components, follow these strict rules to maintain consistency.

### 1. Naming Convention

* **All file and folder names** must use **camelCase** (e.g., `button`, `iconButton`, `textField`).

---

### 2. Component Directory Structure

Each component must include the following files:

```
components/button/
├── button.stories.tsx     # Storybook file
├── button.test.tsx        # Unit tests
├── button.tsx             # Component logic
├── button.type.ts         # Type definitions
├── index.ts               # Exports
└── style.module.css       # Component styles
```

---

### 3. Export Rules

In the component’s `index.ts` file, **only exports** should exist — no logic or code.

Example (`components/button/index.ts`):

```ts
export { default as Button } from './button';
export type { ButtonProps } from './button.type';
```

---

### 4. Styling

Use the [`clsx`](https://github.com/lukeed/clsx) package for combining CSS classes.

Example:

```tsx
import clsx from "clsx";
import styles from "./style.module.css";

export default function Button({ variant }: ButtonProps) {
  return <button className={clsx(styles.base, styles[variant])}>Click</button>;
}
```

---

### 5. Type Definitions

All TypeScript types must be defined in the `.type.ts` file of the component.

Example (`button.type.ts`):

```ts
export interface ButtonProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children?: React.ReactNode;
}
```

---

### 6. Local Testing

To test component behavior inside the package itself, use the `App.tsx` file located at the root of the project.

---

### 7. Type Registration

In the root `index.d.ts` file, **you must copy the exact type definitions** from each `[NAME].type.ts` file.
This step is mandatory; otherwise, component types will not be accessible externally.

---

### 8. Root Exports

In the root `index.ts`, both the component and its type must be exported using the following format:

```ts
export { default as Button } from "./components/button/button";
export type { ButtonProps } from "./components/button/button.type";
```

Follow this exact structure for all components.

---

## 🧪 Development Guidelines Summary

| Rule | Description                                      |
| ---- | ------------------------------------------------ |
| 1    | Use **camelCase** for all file and folder names  |
| 2    | Follow the specified component file structure    |
| 3    | Only export in `index.ts` (no logic)             |
| 4    | Use `clsx` for CSS class merging                 |
| 5    | Define all types in `.type.ts`                   |
| 6    | Use `App.tsx` for local testing                  |
| 7    | Copy all types into `index.d.ts`                 |
| 8    | Export components and types from root `index.ts` |
