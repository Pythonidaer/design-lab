# Design Lab

The website is published at https://pythonidaer.github.io/design-lab/

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
GitHub Pages already serves this repository from `main` at
https://pythonidaer.github.io/design-lab/
When deploying elsewhere, serve the directory containing index.html.

The exported files preserve the app's appearance and functionality.
The original ChatGPT-hosted site's access restrictions are hosting settings
and are not part of these files. Access on another host depends on that host.

The app uses simulated practice data. Lesson adjustments reset when switching
lessons or refreshing; there is no database or persistent theme saving.

The optional browser modelContext API is feature-detected. The site works
without that API.

ChatGPT hosting metadata and repository credentials are deliberately omitted.


## Theme workshop and component export

Open **Theme workshop** at the end of the navigation.

1. Choose one of 20 original style presets.
2. Adjust brand color, heading font, type scale, spacing, corners, hero arrangement, and image overlap.
3. Select navigation, hero, cards, form, and/or image-text overlap.
4. Use Mobile (390px), Tablet (768px), Desktop (1440px), or a custom width.
5. Click **Export component ZIP** and unzip the download into your Cursor workspace.

The ZIP contains:

- `index.html`: assembled selected components
- `components/*.html`: individual semantic HTML fragments
- `theme.css`: shared CSS variables, component rules, and responsive styles
- `theme.json`: editable settings and composition metadata
- `coast.jpg`: the local sample asset
- `CURSOR_HANDOFF.md`: implementation instructions

The preview and export share the same component renderer and stylesheet. Files are framework-neutral HTML/CSS; Cursor can adapt them to React, Next.js, or another stack. There is no built-in React code generator or backend. Forms and sample calls to action need real application behavior. When exporting only some components, update links to sections you did not include. Repeated fragments need unique element IDs.

The presets are interpretations for experimentation, not official implementations of design movements or certification of accessibility. Local font fallbacks can look different across operating systems.

### Viewport previews

Every lesson renders inside a same-origin sandboxed iframe. Media queries use that frame's width. **Fit** scales the displayed preview to the available workspace without changing its CSS viewport. Uncheck Fit for a full-size, scrollable preview. Custom widths are limited to 280–1920 CSS pixels.

The responsive workshop uses a single-column mobile layout below 600px, a two-column card layout from 600–999px, and a three-column desktop card layout from 1000px. On mobile, overlap becomes a stacked composition. These are example design decisions, not universal device breakpoints.

Viewport previews do not simulate device hardware, touch input, browser differences, or accessibility tools. Check real devices before shipping.

### Saving

**Save on this device** stores the workshop settings in this browser's local storage. **Load saved theme** restores them. Exported ZIP files are the portable handoff; device-local storage is not a cloud backup.

### Sources for learning

- StyleShift: https://styleshift.design/
- Art Direction for the Web: https://www.smashingmagazine.com/printed-books/art-direction-for-the-web/
- Inspired Design Decisions: https://www.smashingmagazine.com/author/andy-clarke/
- Viewport concepts: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts

### Full-screen Theme Workshop
Opening Theme Workshop replaces the lesson chrome with an editor filling the browser viewport. Device icon buttons change the actual iframe viewport; Fit scales and centers its display. Transitions respect reduced-motion preferences. Hide the inspector for a larger canvas, or return using Design Lab.

The inspector has Theme, Element, and Export panels. Click preview elements to edit local font, size, leading (line-height in pixels), tracking (letter-spacing), font-kerning, weight, colors, padding, corners, or image fit/focal point. Select parent section edits the containing section. Reset this element removes local overrides; Reset clears workshop overrides and restores default shared settings. These edits apply at all widths. Shared theme settings continue to style elements without local overrides.

Save/load and ZIP exports preserve local overrides. `theme.json` schemaVersion 8 includes `elementOverrides` and `sectionSettings`; `theme.css` scopes them to stable `data-dl-element` attributes. Preserve those attributes when converting exported markup to framework components. Preview selection outlines are editor-only and are excluded from exports. Theme-only saves from schema 1 remain compatible.

### Palettes and component library
The Theme panel now exposes primary brand, secondary accent, page background, surface, text, and border colors. Generate palette uses the selected Analogous, Complementary, or Monochromatic harmony, a chosen source role, and the selected Light/Dark/Auto tone. The displayed contrast checks cover representative pairs; they are not a complete accessibility audit.

The library contains 16 component types: navigation, hero, cards, form, image/text overlap, announcement bar, feature grid, gallery, testimonials, pricing, statistics, FAQ, call to action, footer, slideshow, and lightbox gallery. Export checkboxes choose which types appear in the preview and ZIP. This version provides one instance of each type; arbitrary reordering, duplication, and content uploads are future work. Gallery photography, quotes, prices, and statistics are sample content.

The Layout panel chooses a component and its variation, full width or contained layout, content maximum width, and side gutters. Heroes, calls to action, and overlap sections support content-sized, custom minimum, or screen minimum heights. Minimum heights allow text to grow without clipping. Split heroes offer balanced, image-wide, and text-wide proportions. Grid components offer independent desktop/tablet/mobile column counts, column and row gaps, alignment, and automatic fitting by minimum card width. Fixed column controls apply only in fixed mode. Numeric layout changes update immediately as valid values are typed, retaining focus. Blank or out-of-range intermediate values leave the last valid preview intact. Select changes update when a choice is made.

Full-bleed background heroes put the image at the viewport edges while constraining text using the content maximum and gutters. Other full-width components retain gutters for readable content. FAQ variations use native details/summary in both preview and exported HTML. Changing a variation resets that component's local element overrides because its markup can change.

`theme.json` schemaVersion 8 includes palette tokens and `sectionSettings` alongside `elementOverrides`. Exports include the same wrappers, variations, assets, and media-query rules as the preview. Existing saved themes migrate missing palette and section settings to defaults. Preserve `data-dl-component` and `data-dl-element` attributes in framework conversions, and keep exported styles scoped under `.dl-site`.

### Navigation, media, and shared button styles
The Library tab lists all 16 component types; enable a type there to preview/export it. Layout lists enabled components only. Navigation supports split, centered, hamburger dropdown, hamburger drawer, and a mobile-only hamburger that becomes regular links on larger screens. Three lines animate into an X; Escape and the backdrop close the menu. Reduced-motion preferences disable the line transitions.

Use Test interactions in the toolbar to operate menus, slideshows, and lightboxes; return to editing to select and style elements. Slideshow variations are manual, with previous/next controls, arrow-key navigation, and announced slide status. Lightbox galleries open native dialogs, support Escape, and restore focus to the triggering thumbnail. They reuse sample photography, with different crops, until you replace the assets.

After editing a theme button, Apply these styles to all buttons copies its explicit edits into shared button rules and clears conflicting overrides on theme buttons, including disabled component types. Added components inherit those shared rules. This applies to `.dl-button` controls (CTAs, form buttons, slideshow actions, and the lightbox close button), not specialized menu toggles or photo thumbnails. Reset shared button styles removes those rules. New local edits may override them.

Export schemaVersion 8 includes sharedButtonOverrides. Exports include workshop-runtime.js; load it once with the theme stylesheet, preserving its data attributes. Component fragments need the runtime too. Use unique menu IDs if manually duplicating the navigation. For framework conversion, adapt the behavior into component lifecycle handlers and clean up listeners instead of repeatedly mounting the runtime.

### Palette harmonies and local overlap
Shared Theme has Generate from, Palette tone, and Palette harmony selectors. Any of the six color roles can be the source. Its exact color is preserved; lock additional roles to preserve those too. Locks apply to palette generation. Selecting an art direction still loads that preset. Changing harmony generates immediately; after changing the source or tone, press Generate palette.

Auto resolves the tone from the current page background, including manual edits, rather than the art direction. Light and Dark provide explicit alternatives. Chromatic sources supply the hue; neutral sources use the first chromatic primary brand or secondary accent as a hue reference, while keeping the neutral source unchanged. Analogous offsets related hues by 30°, Complementary by 180°, and Monochromatic retains a shared hue. Generation uses HSL and adjusts unlocked lightness to improve contrast across the actual roles.

The panel checks text and links against page/surface backgrounds, button labels against primary/secondary colors, text against secondary surfaces, and borders against page/surface backgrounds. Fixed colors are never silently replaced when they conflict: failing pairs remain visible. These checks do not cover local element overrides or text over photography. Black or white button labels are derived from their background colors. Every role remains manually editable.

Saved themes and schemaVersion 8 exports preserve source selection, tone, harmony, user locks, pending edits, and the last generation record, including its resolved tone and hue reference. Older saves load with Primary brand and Auto defaults while preserving their colors.

Image overlap is now under Layout → Image + text overlap, stored as sectionSettings.overlap.overlapAmount. It is disabled for side-by-side layouts and stays stacked without overlap on mobile. Older saves migrate state.overlap into the section setting without changing its value. Export schemaVersion 8 includes palette harmony/source and local overlap settings.

Tablet image-height rules apply only to inline split/stack heroes. Background-image heroes retain full-size cover images at every breakpoint; decorative rotation/shadows apply only to inline images.


### Footer order and Motion panel
The footer always renders last in assembled previews and exports, including older saved selections. The Library lists it last too.

Motion separates global duration/easing and button hover/focus effects from section-specific entrance effects (none, fade, fade-up, scale) and delays. Use Replay visible entrances to inspect effects while editing, or Test interactions to see one-time viewport entrances. Slides and lightboxes share timing; menu line transitions use the same variables. Enable motion provides an explicit off switch. OS/browser reduced-motion preferences disable transitions and cancel active effects. Content remains visible without JavaScript. Entrances animate wrapper elements so local child transforms stay intact. Local button transforms can intentionally override the shared hover rule.

SchemaVersion 8 stores validated motion settings. Device saves include motionSettings; old saves default to 250ms ease-in-out with no hover or section entrance effect. Exported HTML carries section effect/delay attributes, and workshop-runtime.js mounts the same behavior as the preview. Component fragments require a .dl-site theme wrapper and the shared stylesheet/runtime.

### Component playground and saved collection
Build a theme → Component playground follows Theme Workshop. It is a separate workspace for reusable variations, rather than the workshop's enabled page sections. Initial categories: Buttons (independent Filled/Outline/Text appearances and None/Lift/Fade/Fill effects), Hamburger menus (Cross, Collapse, Rotate), and Parallax (Gentle, Deep, Layered collage, Pinned title). Change accent, radius, duration, easing, and viewport width; test keyboard activation, Escape, and reduced motion. Parallax scrolls inside its labeled, focusable scene.

Name a component and save it to the collection. We expand the curated variations by recreating examples found on websites and CodePen; there is no URL input or import flow. Existing saved components remain loadable, with legacy source metadata omitted. Save to collection stores up to 50 components locally; Load, Export, and Remove operate on saved entries. Device storage can be cleared, so use exported ZIPs for portable copies. ZIPs include standalone index.html, component.html, component.css, component-runtime.js, component.json, README.md, and a local image when needed. Styles consume --dl-brand, --dl-on-brand, --dl-radius, --dl-duration, and --dl-easing so a containing theme can supply shared decisions. The example token rule can be removed/replaced on integration. Theme Workshop composition and automatic insertion of saved variations remain the next integration step. Arbitrary HTML/CSS/JS imports are not included in this starter collection.

Motion implementation references:
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition-timing-function
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


### Live edits and text treatment
Button easing/duration changes and variation selections automatically replay the button effect, with the chosen timing applied in both directions. Replay effect repeats it without pointer hover. Reduced-motion preferences and zero duration suppress replay. Hover and keyboard focus still use the CSS behavior; exports retain the selected timing and native interactions.

Element styles now include italic/oblique, letter case (as written/uppercase/lowercase/capitalize), text alignment, underline/overline/strikethrough, decoration style/color/thickness, underline offset and word spacing. Letter case changes CSS presentation without replacing the original content. Underline is text decoration, independently of letter case. These settings update locally, can be promoted through Apply these styles to all buttons, and persist through device saves and ZIP exports.


### Independent button appearance and motion
Buttons now separate appearance (Filled, Outline, Text) from hover/focus effect (None, Lift, Fade, Fill). Effect, easing and duration belong to the motion controls; a filled or outlined button can fade or lift. Fill toggles background/text colors; on an already filled button it reverses the fill. Appearance/effect changes and easing/duration changes replay the chosen effect. None and zero duration stay still. Component schema 2 preserves both settings. Schema 1 saves migrate Lift → Filled + Lift, Fade → Filled + Fade, and Outline fill → Outline + Fill.

### Portfolio-inspired parallax examples
The About section of https://www.jordangilroy.com/ was inspected in a browser while scrolling. Its large heading remains pinned as photographs pass over it. Component playground adds original Pinned title and Layered collage examples of this relationship using Design Lab's coast image and independent photo depth factors. These are illustrative recreations, not copies of the site's code or assets. Scroll inside the focusable preview scene to compare speeds. Reduced motion removes the depth transforms and makes the heading static. Saved components and standalone exports include these variations and their behavior.

### Video-background heroes
Layout → Hero → Video background uses the existing local motion.mp4 sample: a silent six-second 640×360 H.264 abstract loop, with motion-poster.jpg fallback. It is not footage of the lighthouse. The video covers the hero at every width; full-width and contained layouts retain their existing text constraints and gutters. A live Video dark overlay (%) control adjusts text backing. The video is paused by default and starts with Play background in Test interactions or standalone exports. Pause restores the still poster, and playback failures keep it visible. Reduced motion and Motion disabled prevent playback. Returning to element editing pauses the video.

Schema 8 stores hero videoOverlay, with a default for older saves. Video heroes include the video and poster in the component ZIP only when the hero is selected and uses this variation. Replace those local files with real project footage and keep the decorative muted video, controls and still fallback. A custom video upload flow is not part of this change.

### Preview refinements and scroll studies

Component playground uses the full-screen editor shell and an uncapped canvas. Device controls set the real iframe viewport; Fit scales it only for display, with the scale shown in the toolbar. Disable Fit for 1:1 display. Choosing dotted, dashed, double or wavy decoration on an undecorated element enables an underline; choosing None still removes it.

Theme Workshop Motion controls immediately preview the selected section entrance or button hover effect, using shared duration/easing and local entrance delay. Numeric timing updates retain input focus. Motion off, zero duration and reduced-motion preferences disable previews.

Parallax variations include Directional image (eight directions), Layered shapes (original CSS scenery with separate depth factors), and Blurred backdrop reveal (an expanding sharp crop over the same blurred photograph). These are original studies inspired by directional-image parallax, layered storytelling and image-reveal patterns, rather than copies of referenced websites. Scroll the focusable scene with a pointer or keyboard. All three support collection saves and standalone component ZIPs with the same runtime. Reduced motion keeps imagery static and reveals the full sharp image.

### Learning management system

Build a theme → Learning management system opens a separate full-screen course builder with Structure, Content, Settings and Export panels. Add any number of sections or nested subsections and slide decks, videos and multiple-choice quizzes. Items can be renamed, moved between parents, reordered and removed. Slide decks support multiple slides; quizzes support multiple questions, choices, correct answers and feedback. The final quiz is a separate editable assessment.

The learner preview includes an expandable course outline, progress indicator, slide navigation, native video controls, captions/transcripts, quiz feedback, completion gates, retake settings, reports and learner settings. Course settings control pass score, sequential lessons and final-quiz requirements. Device previews use real iframe widths. The mobile course outline collapses behind a button. Keyboard controls, labeled progress, fieldsets, focus indicators, live feedback and reduced-motion handling are included. Content accessibility still depends on the material you author. Videos never autoplay; transcripts/text alternatives are required for export.

Course drafts and learner progress save in localStorage under separate keys. The initial sample draft is saved immediately so course IDs remain stable across reloads. Lesson content fingerprints invalidate that lesson's progress after an edit. Course IDs separate courses. Progress can be reset in learner settings; the author Reset button restores a sample course after confirmation. Reports show completion, active learning time, attempt counts and best scores, with downloadable CSV. Active time pauses when the page is hidden or idle for 60 seconds. Reports are specific to the learner/browser, not a centralized instructor dashboard.

Use a direct HTTP(S) media URL or upload MP4/WebM (up to 50 MB each) and WebVTT captions (up to 2 MB). Uploaded bytes stay in the current authoring session, preview via object URLs, and package in the ZIP. After refreshing the builder, re-upload any local media before exporting. Remote media stays remote. The silent sample video is included when used. JSON import/export preserves the course model; the full ZIP also includes media, index.html, lms.css, lms-runtime.js and CURSOR_HANDOFF.md. Source code and course JSON are portable to Cursor. Run python3 -m http.server 8000 in the exported folder or deploy it to a static host.

The LMS is a working static learning prototype, without accounts, cloud reporting, SCORM/xAPI, or server-verified assessments. Quiz answers and progress are client-side. The handoff describes the authenticated API, enrollments, completions and attempt records needed for a multi-user production system. The preview and standalone exports use the same learner runtime and isolated LMS styles.
