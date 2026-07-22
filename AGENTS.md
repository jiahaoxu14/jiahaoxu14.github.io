# Repository Guidelines

## Project Structure & Module Organization

This repository is a small, dependency-free personal website. `index.html` is the homepage and `404.html` is the GitHub Pages fallback. Site-wide styles live in `css/styles.css`, while lightweight browser behavior belongs in `js/main.js`. Keep reusable images in `images/` and downloadable documents in `docs/`; the current résumé is `docs/Resume_Jiahao.pdf`.

Add new top-level pages as descriptive lowercase directories with an `index.html`, for example `projects/index.html`. Use root-relative links such as `/images/portrait.jpg` so pages work consistently at every route.

## Build, Test, and Development Commands

The site has no package manager, framework, or build step. Preview it from the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/` and stop the server with `Ctrl+C`. Before committing, run:

```sh
git diff --check
git status --short
```

These commands catch whitespace problems and help confirm the intended file set.

## Coding Style & Naming Conventions

Indent HTML and CSS with two spaces. Prefer semantic HTML elements, accessible labels, visible keyboard focus, and concise class names in kebab case (`site-header`, `project-list`). Define shared colors and spacing as CSS custom properties in `:root`. Keep layouts responsive and respect `prefers-reduced-motion`. Use modern vanilla JavaScript with `const` and `let`, semicolons, double quotes, and guard DOM lookups before using them.

Name assets descriptively in lowercase, using hyphens between words. Do not commit editor metadata or generated minified bundles.

## Testing Guidelines

No automated test suite or coverage threshold is configured. Test the homepage and `404.html` at narrow and wide viewport sizes. Verify navigation, keyboard focus, images, the résumé link, and the browser console. Check new routes through the local server rather than opening files directly, because the site uses root-relative URLs.

## Commit & Pull Request Guidelines

Existing history uses short subjects such as `Update Resume` and `fix: publication time`. Prefer specific imperative messages, for example `feat: add publications section` or `fix: improve mobile navigation`. Keep commits focused. Pull requests should summarize the visible result, list manually tested pages and viewport sizes, link related issues, and include before-and-after screenshots for visual changes.
