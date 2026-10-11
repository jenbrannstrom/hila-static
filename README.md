# Hila static site

A lightweight, responsive static recreation of the Hila holistic therapy landing page. It is built with plain HTML, CSS, and JavaScript and is ready for GitHub Pages.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

The repository includes a Pages workflow that deploys the root directory whenever `main` is updated.

## Contact form

The original form depends on a WordPress backend. This static version validates fields and displays a confirmation placeholder. Connect the submit handler in `script.js` to your preferred form service to deliver messages.
