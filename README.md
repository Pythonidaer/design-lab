# Design Lab

Exact website files from the published Design Lab, exported October 3, 2026.

## Contents

- index.html: page structure
- style.css: styling and responsive layouts
- app.js: core lessons and controls
- style-lab.js: Style & motion lessons
- coast.jpg: lighthouse image
- motion.mp4: silent background video
- motion-poster.jpg: video still image

The site includes 27 interactive lessons. No packages or build step are required.

## Put it on GitHub

1. Extract this ZIP.
2. Upload the extracted files into the root of your repository.
3. Keep index.html, the JavaScript, CSS, and media files together.

Upload the extracted files, rather than the ZIP itself.

## Preview locally

In the extracted folder, run:

    python3 -m http.server 8000

Then open http://localhost:8000 in your browser.

## Hosting

This is a static website suitable for Vercel or GitHub Pages.
When deploying, serve the directory containing index.html.

The exported files preserve the app's appearance and functionality.
The original ChatGPT-hosted site's access restrictions are hosting settings
and are not part of these files. Access on another host depends on that host.

The app uses simulated practice data. Lesson adjustments reset when switching
lessons or refreshing; there is no database or persistent theme saving.

The optional browser modelContext API is feature-detected. The site works
without that API.

ChatGPT hosting metadata and repository credentials are deliberately omitted.
