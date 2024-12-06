### CSS Variables Documentation

This library includes a comprehensive set of CSS variables, which serve as the foundation for creating consistent and reusable styles across your projects. Below, you’ll find detailed information about the naming conventions, variable categories, and benefits of using CSS variables.

#### Benefits of Using CSS Variables
###### Dynamic Theming:
CSS variables allow for easy switching between themes (e.g., light and dark themes) without modifying the DOM or styles directly.

###### Reusability:
Variables can be reused across multiple components, ensuring consistent styles and reducing code duplication.

###### Maintainability:
With variables, you can centralize your design tokens (e.g., colors, spacings) in one place, making updates seamless.

###### Responsive Design:
CSS variables can be adjusted based on media queries or user preferences, enabling a responsive and accessible UI.

###### Reduced Complexity:
By abstracting design tokens into variables, you simplify your code and make it easier to read and maintain.




##### CSS Variables Naming Scheme
The naming conventions for the CSS variables are as follows:

Colors: `--color-(name)-(shade?)`
Example: `--color-gray-500, --color-primary`
Spacing: `--spacing-(name)-(type)-(variant?)-(state?)`
Example: `--spacing-normal, --spacing-xlarge`
Dimensions: `--dim-(name)-(type)-(variant?)-(state?)`
Example: `--dim-normal, --dim-large`
Transitions: `--transition-(name)-(variant?)`
Example: `--transition-short, --transition-main`


##### Base Colors
The following color variables are defined and can be used to maintain consistency across your designs:

White Variants: `--color-white, --color-white-eggshell`
Black Variant: `--color-black`
Gray Shades: `--color-gray-50` to `--color-gray-900`
Red Shades: `--color-red-50` to `--color-red-900`
Orange Shades: `--color-orange-50` to `--color-orange-900`
Lime Shades: `--color-lime-50` to `--color-lime-900`
Green Shades: `--color-green-50` to `--color-green-900`
Blue Shades: `--color-blue-50` to `--color-blue-900`
Fiord Shades: `--color-fiord-50` to `--color-fiord-900`


##### Theme Variables
The library provides variables for primary and secondary colors, as well as light and dark themes:

Primary Colors: `--color-primary`, `--color-primary-50` to `--color-primary-900`
Secondary Colors: `--color-secondary`, `--color-secondary-50` to `--color-secondary-900`
Surface Colors: `--color-surface, --color-background, --color-divider`

###### Light Theme (:root and .default-theme)
The light theme uses bright colors and subtle contrasts, such as:

`--color-surface: var(--color-white)`
`--color-primary: var(--color-blue-500)`

###### Dark Theme (.palette-darktheme)
The dark theme uses deep, rich colors for better accessibility in low-light environments:

`--color-surface: var(--color-black)`

###### Spacing and Dimensions
Predefined variables for spacing and dimensions ensure consistent layout spacing across the application:

Spacing: `--spacing-xxxsmall` to `--spacing-xxxxxlarge`
Dimensions: `--dim-xxsmall` to `--dim-xxxlarge`

###### Transitions
Predefined transitions offer smooth animations with different timing options:

`--transition-short: 100ms cubic-bezier(0, 0, 0.2, 1)`
`--transition-main: 150ms cubic-bezier(0.4, 0, 0.2, 1)`
`--transition-long: 300ms cubic-bezier(0.4, 0, 0.2, 1)`

CSS Variables Naming Scheme:
    --color-(name)-(shade?) for colors;
    --spacing-(name)-(type)-(variant?)-(state?) for spacings, such as padding, margin;
    --dim-(name)-(type)-(variant?)-(state?) for dimentions, such as height, radius;
    --transition-(name)-(variant?) for transitions;
*/

```css
:root {
 /* Base Colors */
 
  --color-white: #fff;
  --color-white-eggshell: #fafafa;
  --color-black: #181b1f;

  --color-gray-50: #fcfcfc;
  --color-gray-100: #f7f9fa;
  --color-gray-200: #f1f3f4;
  --color-gray-300: #e9eaee;
  --color-gray-400: #dce0e2;
  --color-gray-500: #92969b;
  --color-gray-600: #6a6d72;
  --color-gray-700: #30363e;
  --color-gray-800: #222426;
  --color-gray-900: #181b1f;

  --color-red-50: #ffe9ed;
  --color-red-100: #ffc9ce;
  --color-red-200: #f49292;
  --color-red-300: #eb6667;
  --color-red-400: #f53d40;
  --color-red-500: #f92020;
  --color-red-600: #eb0b21;
  --color-red-700: #d9001c;
  --color-red-800: #cc0014;
  --color-red-900: #bd0005;

  --color-orange-50: #fff3e1;
  --color-orange-100: #ffe1b3;
  --color-orange-200: #ffcd83;
  --color-orange-300: #ffb851;
  --color-orange-400: #ffa82d;
  --color-orange-500: #ff9a11;
  --color-orange-600: #fc8e10;
  --color-orange-700: #f67e0e;
  --color-orange-800: #f06e0d;
  --color-orange-900: #e6540b;

  --color-lime-50: #feffe6;
  --color-lime-100: #fbfdc0;
  --color-lime-200: #f7fa93;
  --color-lime-300: #f2f763;
  --color-lime-400: #edf335;
  --color-lime-500: #fbff00;
  --color-lime-600: #eaec67;
  --color-lime-700: #dee200;
  --color-lime-800: #bfb900;
  --color-lime-900: #917c00;

  --color-green-50: #e4f8e9;
  --color-green-100: #bdedca;
  --color-green-200: #90e1a7;
  --color-green-300: #57d683;
  --color-green-400: #00cc66;
  --color-green-500: #00c248;
  --color-green-600: #00b23e;
  --color-green-700: #009f31;
  --color-green-800: #008e24;
  --color-green-900: #006e0e;

  --color-blue-50: #e0f7fc;
  --color-blue-100: #b3ebf7;
  --color-blue-200: #81dff2;
  --color-blue-300: #4dd1eb;
  --color-blue-400: #24c7e5;
  --color-blue-500: #00bedf;
  --color-blue-600: #00aecb;
  --color-blue-700: #0099b1;
  --color-blue-800: #008598;
  --color-blue-900: #00626c;

  --color-fiord-50: #e6eef9;
  --color-fiord-100: #c7d5e3;
  --color-fiord-200: #9da8b2;
  --color-fiord-300: #879db2;
  --color-fiord-400: #6f889f;
  --color-fiord-500: #57748d;
  --color-fiord-600: #4a657c;
  --color-fiord-700: #3b5266;
  --color-fiord-800: #2d3f50;
  --color-fiord-900: #1b2b39;
}
:root,
.default-theme {
  /* Primary Colors */
  --color-primary: var(--color-blue-500);
  --color-primary-50: var(--color-blue-50);
  --color-primary-100: var(--color-blue-100);
  --color-primary-200: var(--color-blue-200);
  --color-primary-300: var(--color-blue-300);
  --color-primary-400: var(--color-blue-400);
  --color-primary-500: var(--color-blue-500);
  --color-primary-600: var(--color-blue-600);
  --color-primary-700: var(--color-blue-700);
  --color-primary-800: var(--color-blue-800);
  --color-primary-900: var(--color-blue-900);

  /* Secondary Colors */
  --color-secondary: var(--color-fiord-700);
  --color-secondary-50: var(--color-fiord-50);
  --color-secondary-100: var(--color-fiord-100);
  --color-secondary-200: var(--color-fiord-200);
  --color-secondary-300: var(--color-fiord-300);
  --color-secondary-400: var(--color-fiord-400);
  --color-secondary-500: var(--color-fiord-500);
  --color-secondary-600: var(--color-fiord-600);
  --color-secondary-700: var(--color-fiord-700);
  --color-secondary-800: var(--color-fiord-800);
  --color-secondary-900: var(--color-fiord-900);

  /* Surface Colors */
  --color-surface: var(--color-white);
  --color-background: var(--color-white-eggshell);
  --color-divider: var(--color-gray-300);

  --color-skeleton-bg: var(--color-gray-300);

  /* Status Colors */
  --color-success: var(--color-green-400);
  --color-success-50: var(--color-green-50);
  --color-warning: var(--color-orange-600);
  --color-warning-50: var(--color-orange-50);
  --color-error: var(--color-red-400);
  --color-error-50: var(--color-red-50);
  --color-disabled: var(--color-gray-300);
  --color-hover: var(--color-gray-100);

  /* Text Colors */
  --color-text-primary: var(--color-fiord-700);
  --color-text-secondary: var(--color-fiord-500);
  --color-text-tertiary: var(--color-fiord-400);
  --color-text-hint: var(--color-fiord-200);
  --color-text-disabled: var(--color-fiord-200);

  /* On Surface Colors */
  --color-on-primary: var(--color-surface);
  --color-on-secondary: var(--color-white);
  --color-on-surface: var(--color-black);
  --color-on-success: var(--color-white);
  --color-on-warning: var(--color-white);
  --color-on-error: var(--color-white);


  /* Gradients */
  --gradient-primary: linear-gradient(
    90deg,
    var(--color-primary-700) 0%,
    var(--color-primary-200) 100%
  );
}
:root {
   /* Transition variables*/
  --transition-short: all 100ms cubic-bezier(0, 0, 0.2, 1);
  --transition-main: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-long: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

   /*  Spacings*/
  --spacing-xxxsmall: 0.125rem;
  --spacing-xxsmall: 0.25rem;
  --spacing-xsmall: 0.5rem;
  --spacing-small: 0.75rem;
  --spacing-normal: 1rem;
  --spacing-large: 1.5rem;
  --spacing-xlarge: 2rem;
  --spacing-xxlarge: 3rem;
  --spacing-xxxlarge: 3.5rem;
  --spacing-xxxxlarge: 4rem;
  --spacing-xxxxxlarge: 4.5rem;

   /* Dimensions*/

  /* General dimensions*/
  --dim-xxsmall: 0.25rem;
  --dim-xsmall: 0.5rem;
  --dim-small: 0.75rem;
  --dim-normal: 1rem;
  --dim-large: 1.5rem;
  --dim-xlarge: 2rem;
  --dim-xxlarge: 3rem;
  --dim-xxxlarge: 4rem;


  /* Z-Index */
  --z-index-drawer: 1200;
  --z-index-tooltip: 1199;
  /* ... */
}

.palette-lighttheme {
  --color-success: var(--color-blue-800);
  --color-success-50: var(--color-blue-50);
  --color-warning: var(--color-lime-700);
  --color-warning-50: var(--color-lime-700);
  --color-error: var(--color-lime-500);
  --color-error-50: var(--color-lime-500);
  --color-disabled: var(--color-gray-400);
  --color-hover: var(--color-gray-200);
  --color-on-success: var(--color-white);
  --color-on-warning: var(--color-black);
  --color-on-error: var(--color-black);
}

.palette-darktheme {
  --color-surface: var(--color-black);
  --color-background: var(--color-gray-800);

  --color-primary-50: var(--color-gray-500);

  --color-gray-50: var(--color-surface);
  --color-gray-200: var(--color-gray-500);
  --color-gray-400: var(--color-gray-600);

  /* On Surface Colors */
  --color-on-surface: var(--color-surface);
  --color-hover: var(--color-gray-700);

  /* Text Colors */
  --color-text-primary: white;

  --color-text-hint: var(--color-fiord-700);
  --color-text-disabled: white;


  /* Dividers */
  --color-divider: var(--color-gray-600);

  /* skeleton */
  --color-skeleton-bg: var(--color-hover);
}
```

#### Using the Library
1. ##### Importing the Core CSS File
To make use of the predefined CSS variables and styles provided by this library, you need to import the core CSS file at the root of your project. This ensures that the styles are globally available.

```js
// Import the core CSS file in your root file (e.g., index.js or App.js)
import "lib20j/core.css";
```
This step ensures that all the CSS variables (such as colors, spacings, and transitions) are included in your project. These variables are used by the components and can also be used directly in your custom styles.

2. ##### Importing Components
The library provides flexibility in how you can import and use its components. You can choose from the following approaches:

Option 1: Named Imports
Use this method if you want to import multiple components at once. It keeps your imports cleaner and avoids multiple import statements.

```tsx
import { Button, ButtonProps, Input } from "lib20j";

function App() {
  return (
    <div>
      <Button variant="primary" size="large">
        Click Me
      </Button>
      <Input placeholder="Enter text here" />
    </div>
  );
}

```

When to Use?

If you prefer centralized imports.
When working with multiple components from the library.

Option 2: Default Import
Use this method if you prefer importing components individually. This approach is helpful for tree-shaking (minimizing unused code in the final build).

```tsx
import Button from "lib20j/Button";

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}
```

When to Use?

If you're only using a single component from the library.
For better clarity in larger codebases.


##### Explanation of Import Options
Named Imports (import { Button } from "lib20j";):

Offers a consistent and centralized way to import multiple components from the library.
Preferred for larger projects where many components are used together.
Default Import (import Button from "lib20j/Button";):

Allows importing components directly by their paths.
Helpful for optimizing bundle size, as only the imported component is included.

###### Example Usage
Here’s an example of a simple setup:
```tsx
// Import the core CSS file
import "lib20j/core.css";

// Import components
import { Button } from "lib20j";

function App() {
  return (
    <div>
      <h1 style={{ color: "var(--color-primary)" }}>Welcome to My App</h1>
      <Button variant="primary" size="large">
        Get Started
      </Button>
    </div>
  );
}

export default App;
```

##### Why Import Core CSS?
Global Variables: The core.css file contains CSS variables for colors, spacings, transitions, etc., making it easier to customize your styles.
Consistency: All components in the library use the same set of variables, ensuring a unified design system.
Theming: Variables can be overridden to apply custom themes (e.g., light and dark modes).

### Guidelines for Developing the Library
Here’s a detailed guide for developers contributing to this library. It explains the project structure, how to add new components, and configure the library exports.

#### Project Structure
The project follows a modular and scalable folder structure. Here's an example:

```less
src/
├── components/
│   ├── button/
│   │   ├── button.stories.ts     // Storybook stories
│   │   ├── button.test.tsx       // Unit tests
│   │   ├── button.type.ts        // TypeScript types for the component
│   │   ├── button.tsx            // Main component implementation
│   │   ├── style.module.css      // Component-specific styles
│   │   ├── index.tsx             // Default export for the component
│   ├── ...
├── index.ts                      // Entry point for all components
├── index.d.ts                    // Global type definitions
```

##### Step-by-Step Instructions for Adding a New Component
1. Create the Component Folder
Create a new folder inside src/components/ for the component. For example, for a Button component:

```
src/components/Button
```

2. Component Files
Add the following files inside the new folder:

button.tsx: The main implementation of the component.

button.type.ts: Define and export the TypeScript types for the component. For example:
```tsx
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
}
```

style.module.css: Add styles specific to the component. 

button.test.tsx: Write unit tests for the component using your preferred testing library (e.g., Jest, React Testing Library).

button.stories.ts: Add stories for the component to showcase it in Storybook.

index.tsx: Export the default component:
```ts
export { default } from "./button";

```

3. Add the Component to the Library
Open the index.ts file at the root of the src directory.

Export the new component like this:
```tsx
export { default as Button } from "./components/button";

```

. Update Global Type Definitions
Open the index.d.ts file at the root of the project.

Add the type definition for the component. Example:
```tsx
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
}

```

5. Configure Exports in package.json
To make the component accessible via default import paths, update the "exports" field in package.json. For the Button component, add:

```json
{
  "./Button": {
    "import": "./dist/components/button/index.js",
    "types": "./dist/button.d.ts"
  }
}

```

##### Final Notes
Folder Naming Conventions:

Use lowercase names for component folders (e.g., button).
Component files should follow camelCase (e.g., button.tsx, button.test.tsx).
Index Files:

Ensure each component folder contains an index.tsx file for default exports.
The root index.ts should act as the entry point for all components.
Storybook Usage:

Add stories to button.stories.ts to showcase the component.
Use these stories for both development and documentation purposes.
Testing:

Write tests for all components to ensure quality and avoid regressions.
CSS Modules:

Use style.module.css for component-specific styles to prevent conflicts.

##### Example Usage for Developers
1. Root index.ts Example:
```tsx
export { default as Button } from "./components/button";
export { default as Input } from "./components/input";
```

2. Root index.d.ts Example:
```tsx
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

```

By following this structure and process, you ensure the library remains modular, consistent, and easy to maintain while providing an excellent developer experience.