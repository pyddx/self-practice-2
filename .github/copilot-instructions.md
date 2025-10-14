# Copilot Instructions for AI Agents

## Project Overview
This codebase is a collection of self-contained JavaScript and HTML exercises, organized by week (`week6` to `week10`). Each week contains code files and a text file, focusing on different JavaScript and DOM manipulation concepts. There is no build system, test framework, or external dependencies.

## Directory Structure
- `week6/` to `week10/`: Each contains code files (`.js`, `.html`) and a text file summarizing the week's topic.
- No central entry point; each file is standalone and intended for direct inspection or browser execution.

## Key Patterns & Conventions
- **Functional Programming**: Use of higher-order functions (`filter`, `map`, closures, composition) is common (see `week6/code-week6.js`).
- **DOM Manipulation**: Direct use of `document.getElementById`, `addEventListener`, and manipulation of `classList` and `dataset` attributes (see `week7/code-week7.js`, `week8/self-practice-classList.js`, `week8/self-practice-dataset.js`).
- **No Frameworks**: All code is vanilla JavaScript and HTML. No npm, package.json, or module system.
- **Language**: Some comments are in Thai, but code is in English.

## Developer Workflow
- **Edit and Run**: Open `.js` or `.html` files directly in a browser or editor. No build or test commands are required.
- **Debugging**: Use browser DevTools for debugging and inspection.
- **No Automated Tests**: There are no test scripts or test runners.

## Examples
- **Functional Pattern**: `filterAndTransform(arr, filterFn, transformFn)` in `week6/code-week6.js` demonstrates chaining `filter` and `map`.
- **DOM Event Handling**: `addEventListener` usage in `week7/code-week7.js` and `week8/self-practice-classList.js` for interactive UI changes.
- **Dataset Usage**: Custom data attributes accessed via `element.dataset` in `week8/self-practice-dataset.js`.

## Integration Points
- No external APIs or libraries are used. All code is self-contained.

## How to Contribute
- Add new exercises in a new `weekXX/` folder, following the existing pattern: one or more `.js`/`.html` files and a summary `.txt`.
- Keep code readable and use descriptive comments (English preferred for broader accessibility).

## References
- See `week6/code-week6.js` for functional programming examples.
- See `week7/code-week7.js` and `week8/self-practice-classList.js` for DOM manipulation patterns.
- See `week8/self-practice-dataset.js` for dataset attribute usage.

---
If any section is unclear or missing, please provide feedback for further refinement.