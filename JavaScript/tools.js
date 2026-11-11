// Here is a structured, detailed teaching breakdown for your students covering **Module Bundlers (Webpack & Vite)**, **Babel & Transpilation**, and **ESLint & Prettier Setup**. You can use this format directly for your lectures or slide presentations.

// ---

// ### **1. Module Bundlers: Webpack vs. Vite**

// #### **What is a Module Bundler/Build Tool?**

// Modern web apps are split into dozens or hundreds of modular files (`.js`, `.css`, `.png`). Browsers cannot efficiently fetch dozens of individual files over HTTP/1.x without performance bottlenecks. A bundler takes all these source files, resolves their imports/exports, and bundles them into optimized production files.

// #### **Webpack**

// * **How it works:** It builds a **dependency graph** starting from an entry point (e.g., `index.js`). It reads every import, passes them through **loaders** (like `babel-loader` or `css-loader`), applies **plugins** (like HTML generation or minification), and outputs bundled static assets.
// * **Pros & Cons:** Extremely mature, highly customizable, massive ecosystem. However, it can have slower cold start times and build speeds on large enterprise codebases because it bundles the entire application *before* serving it.

// #### **Vite (The Modern Standard)**

// * **How it works:** Created by Evan You (Vue creator), Vite splits development and production:
// * **During Development:** It leverages native **ES Modules (ESM)** built into modern browsers. It serves source code on-demand, only compiling and transforming files as the browser requests them.
// * **During Production:** It uses **Rollup** to bundle code with pre-configured optimizations.


// * **Pros & Cons:** Blazing fast Hot Module Replacement (HMR) and instant server start regardless of project size. It has become the default choice for modern frameworks like React and Vue.

// ---

// ### **2. Babel & Transpilation**

// #### **What is Transpilation?**

// Unlike compilation (which translates source code into machine/binary code), **transpilation** (source-to-source compilation) translates modern JavaScript (ES6+, JSX, TypeScript) into older, universally compatible JavaScript (ES5) so older browsers can execute it without crashing.

// #### **The Role of Babel**

// * **Syntax Transformation:** Converts cutting-edge syntax (like optional chaining `?.`, nullish coalescing `??`, or arrow functions) into backward-compatible equivalents using plugins like `@babel/preset-env`.
// * **JSX Transformation:** Converts JSX syntax used in React (`<div>Hello</div>`) into standard JavaScript function calls (`React.createElement('div', null, 'Hello')`).
// * **Polyfilling:** Injects missing global APIs (like `Promise` or `Array.prototype.includes`) for legacy environments using tools like `core-js`.

// ---

// ### **3. ESLint & Prettier Setup**

// #### **The Difference Between Formatting and Linting**

// * **Prettier (The Stylist):** Focuses purely on **code formatting** (whitespace, trailing commas, line length, single vs. double quotes). It automatically rewrites code to look visually consistent.
// * **ESLint (The Inspector):** Focuses on **code quality and logic** (catching syntax errors, unused variables, unhandled promises, security risks, and enforcing best practices).

// #### **How to Set Them Up Together (Without Conflicts)**

// Because ESLint rules can sometimes conflict with Prettier's formatting style, developers use a standard integration configuration:

// 1. **Install Dependencies:**
// ```bash
// npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

// ```


// 2. **Configure ESLint (`.eslintrc.json`):**
// ```json
// {
//   "env": {
//     "browser": true,
//     "es2021": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:prettier/recommended"
//   ],
//   "parserOptions": {
//     "ecmaVersion": "latest",
//     "sourceType": "module"
//   },
//   "rules": {
//     "no-unused-vars": "warn",
//     "no-console": "off"
//   }
// }

// ```


// 3. **Configure Prettier (`.prettierrc`):**
// ```json
// {
//   "semi": true,
//   "trailingComma": "es5",
//   "singleQuote": true,
//   "printWidth": 80,
//   "tabWidth": 2
// }

// ```



// ---

// ### **Why Do We Use All of Them Together? (The Complete Workflow)**

// When building a professional full-stack or frontend application, these tools work sequentially as a pipeline:

// 1. **Writing Code:** Students write modern, clean code using ES6+ features and JSX.
// 2. **Linting & Formatting (`ESLint + Prettier`):** As they code, the editor flags bugs (ESLint) and auto-formats spacing/quotes on save (Prettier) to maintain code hygiene.
// 3. **Transpilation (`Babel`):** When building for production, Babel ensures that the modern code can run smoothly on older user browsers.
// 4. **Bundling (`Vite / Webpack`):** Finally, Vite/Webpack gathers all modules, chunks them efficiently, optimizes asset paths, and outputs a production-ready package ready for deployment.

// Would you like me to format this lesson into a structured 10-slide teaching outline for your presentation script?