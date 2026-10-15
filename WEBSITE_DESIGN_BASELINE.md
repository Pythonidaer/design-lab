# Website Design Baseline — Version 1.1

Apply this baseline when designing or modifying Johnny's websites. The goal is clear, usable, deliberately designed work that avoids the recognizable default appearance and phrasing of AI-generated websites.

Treat these as starting constraints, not a finished theme. Preserve explicit project requirements and existing branding. Identify intentional exceptions before implementing them.

## 1. Start with purpose

- Establish the audience, primary task, and information the visitor needs.
- Make the purpose understandable before adding personality.
- Separate decisions about content organization, layout, appearance, and behavior.
- Ask focused questions when missing information materially changes the design. Otherwise, state reasonable assumptions and proceed.

## 2. Avoid automatic visual defaults

Do not automatically use:

- Purple-to-blue gradients, blurred decorative glows, or gradient headlines.
- Floating pill badges, sparkle icons, or abstract blobs.
- Inter or Roboto as the default font.
- Purple/indigo palettes or beige-and-orange alternatives.
- Uniform three- or four-card feature grids.
- Rounded containers, borders, shadows, or glass effects around every content group.
- The stock hero → logos → feature cards → statistics → closing CTA sequence.

Do not replace these defaults with another mandatory recipe, such as serif fonts, green palettes, square buttons, or asymmetry.

## 3. Define project-specific design choices

- Define typography roles, color roles, spacing, content widths, and component treatments.
- Choose fonts for readability, subject, audience, and identity. A distinctive font alone does not create a brand.
- Use a coherent color system with readable contrast and clear interaction states.
- Use a consistent spacing scale, allowing documented exceptions when content requires them.
- Record important choices with: decision, reason, alternative, and how to check the result.
- Use references to understand useful principles. Do not blindly reproduce an unrelated website.

## 4. Let content determine layout

- Choose section structures after understanding their content.
- Use cards for genuinely parallel items, ordered steps for sequences, and tables for comparisons.
- Use whitespace and alignment before adding containers.
- Match visual emphasis to informational importance.
- Define margins, column gaps, alignment edges, and readable text widths.
- Specify mobile reading order and responsive changes.
- Use asymmetry when it serves hierarchy, not merely to appear different.
- Give every section a distinct purpose. Remove repeated pitches.

## 5. Write clear headings and labels

- Page headings identify the subject or task.
- Section headings describe what the section contains.
- Navigation labels identify recognizable destinations.
- Avoid automatic cinematic, editorial, metaphorical, or slogan-like wording.
- Avoid formulas such as “Less X. More Y,” “Where X meets Y,” and “This isn't X. It's Y.”
- Avoid em dashes as a default stylistic habit.
- Remove redundant eyebrow labels and subheadings.
- Use plain numbers without leading zeros for visible navigation, steps, sections, project labels, and counters: `1, 2, 3`, not `01, 02, 03`. Do not add zero-padding for decoration or alignment. Preserve leading zeros only where a meaningful format requires them, such as dates, times, or fixed-format identifiers; document intentional project-specific exceptions.

Examples: “Unlock your potential” → “Plan your website launch.” “A starting point. Room for identity” → “Baseline design rules.”

## 6. Make actions and consequences clear

- Button labels describe the action and, when needed, its object.
- Distinguish saving, sending, submitting, copying, and continuing.
- Explain requirements, consequences, and limitations when visitors need them.
- Describe actual capabilities. Do not promise features the interface does not provide.
- Feedback confirms what changed.
- Errors explain the problem and how to resolve it.
- Use consistent terminology for the same object.
- Choose visible text, an icon, or both deliberately. An action button does not automatically need an icon.
- Use icon-only menu open and close controls together as the current starting preference. Keep their treatment consistent. Do not remove “Menu” while leaving a visible “Close” label unless the difference has an intentional, documented purpose.
- Give icon-only controls programmatic names such as “Open navigation” and “Close navigation.” Use real buttons, visible keyboard focus, and usable touch targets. A tooltip alone is not the accessible name.
- Keep visible labels where an icon's meaning is unfamiliar, ambiguous, or important to completing the task. The menu preference does not justify removing labels from unrelated actions.

Examples: “Start your journey” → “Add a task.” “Success!” → “Task added: Check the footer links.”

## 7. Avoid generic promotional copy

- Avoid “unlock,” “elevate,” “seamless,” “supercharge,” “empower,” and “next level” as interchangeable promotional filler.
- Name the audience, supported action, and concrete result.
- Rewrite paragraphs that could describe several unrelated products.
- Do not invent testimonials, customers, logos, statistics, or performance claims.
- Use a relevant example or demonstration when verified evidence is unavailable.
- Clearly identify fictional sample content.
- Add personality deliberately after the meaning is clear.

## 8. Organize navigation before styling it

- Group related destinations.
- Distinguish example selection, navigation destinations, and contextual actions.
- Do not automatically turn a hamburger into a floating dropdown card.
- Do not allow mobile navigation to become several wrapping rows.
- Indicate the current destination.
- Keep labels consistent across desktop and mobile.
- When adding a destination to an existing numbered navigation, reuse its numbering, spacing, typography, responsive behavior, and interaction treatment. Do not append a visually unrelated link.

Preferred mobile starting point: a full-height vertical side drawer with grouped links, an icon-only close control with an accessible name, and a plain dark overlay behind it.

This is a preference, not a requirement to force a drawer onto every website. Code Quality uses a drawer entering from the right. Preserve that direction there; decide drawer direction deliberately for other projects.

## 9. Implement the mobile drawer as a complete component

- The drawer background must cover the full intended website height without a visible bottom gap.
- Keep the drawer surface opaque and its text sharp.
- Use a plain dark backdrop. Do not blur the page behind the menu.
- Allow navigation content to scroll independently when necessary.
- Support close-button, backdrop, and Escape dismissal.
- Keep keyboard focus inside the open drawer and return it to the trigger on close.
- Prevent background interaction and preserve the visitor's scroll position.
- Respect device safe areas without shortening the background surface.
- Check behavior when browser controls expand or collapse and when the device rotates.
- Moving focus into an animating panel must not request browser scrolling to an offscreen control. Use preventScroll where needed and check the actual result.
- Prevent offscreen drawer geometry from producing horizontal page or overlay scrolling. Preserve independent vertical scrolling for navigation content.

Implementation lesson from the original experiment: a document-positioned overlay avoided clipping encountered with fixed-position versions. Use it as a tested starting point for that site, not as a universal rule for all browsers.

## 10. Use blur, shadow, and motion intentionally

- Apply blur beneath a translucent sticky header when content scrolls underneath it.
- Do not apply blur to the menu backdrop.
- Use a restrained edge shadow when it helps distinguish an overlapping panel.
- Avoid decorative shadows on every section.
- For the current baseline, use a one-second drawer slide.
- Support reduced motion.
- Closing during opening must continue from the current position rather than snap to another position.
- Motion must not cause flicker, page jumps, stranded overlays, or lost interaction states.

## 11. Build and review in layers

- Establish purpose and content structure.
- Define layout and responsive behavior.
- Choose typography, color, spacing, and component treatments.
- Add real wording and supported interactions.
- Review mobile behavior and accessibility.
- Refine the result based on observed problems.

Use a focused implementation pass, followed by evidence-based revisions. Do not accumulate unrelated overrides.

## 12. Debug root causes

- Inspect existing rules and behavior before changing them.
- Replace conflicting implementations rather than stacking more overrides.
- Keep one clear owner for component sizing and state.
- Distinguish the website viewport, device safe areas, browser controls, and embedded-preview boundaries.
- Treat screenshots as evidence, but do not claim they reveal measurements or causes they cannot establish.
- If a fix repeatedly fails, reassess the diagnosis and rebuild the component when warranted.

## 13. Verify honestly

- Check mobile layout, text wrapping, overflow, contrast, focus, and button behavior.
- Check navigation opening, closing, interruption, scrolling, and viewport changes.
- Syntax checks and mocked behavior tests do not establish visual correctness.
- Do not report a visible issue as fixed without evidence that it is fixed.
- Clearly distinguish implementation completed, code checks passed, and visual behavior verified.
- Record confirmed improvements and user preferences in the baseline.

## 14. Preserve creative freedom

This baseline prevents automatic choices. It does not prescribe one permanent aesthetic.

Each project should develop its own typography, palette, imagery, composition, components, and voice. Keep useful conventions when they serve the visitor. Make departures intentional and document why.

## 15. Use an approved icon system

- Use the project's approved collection and action mappings. Do not silently introduce another library, substitute emoji or text characters, or invent a different symbol for an existing action.
- Johnny UI is the approved default for Design Lab and Code Quality. It is a starting family for these projects, not a permanent requirement for every future website.
- Prefer solid, sign-like arrows for this family. Reuse the saved SVG geometry rather than approximating it in CSS or drawing a replacement at each call site.
- Current saved profile: Soft Sign direction, 32-unit grid, stem thickness 7.5, general weight 4, arrowhead height 23, arrow length 27, corner softness 0. Preview size was 32 CSS pixels; this is not a requirement to render every UI icon at 32 pixels.
- Source of truth: icons/johnny-ui-profile.json and icons/johnny-ui-collection.json in Pythonidaer/design-lab. johnny-icons.js provides a shared renderer.
- Keep meaning assignments centralized: the same action uses the same approved symbol. If no symbol is approved, use clear text and identify the missing assignment for review.
- Preserve project-specific control of size, color, spacing, and optical alignment. Inherit local text color when appropriate. Do not rely on color alone to communicate a state.
- Separate arrow stem thickness from arrowhead dimensions and general icon weight. When editing a family's corner softness, carry that choice into companion shapes such as folders. The current approved family is frozen at the profile above until an intentional revision is saved.
- Do not add icons to every button. Code Quality's “Explore the examples” action is intentionally text-only.
- Hide decorative icons from assistive technology when a visible label already names the action. Name icon-only controls on the control itself.
- Inspect small-size legibility, alignment, touch targets, keyboard focus, and relevant interaction states. Consistent bounding boxes do not automatically establish equal perceived size or visual weight.
- Keep the custom workshop out of the current interface. Review future family edits before replacing the approved collection, and include the SVGs and profile in theme exports.

## Decision record — 2026-10-15

| Decision | Reason | Alternative | How to check |
| --- | --- | --- | --- |
| Icon-only menu trigger and close control | Johnny prefers a consistent visual pair without redundant visible words | Visible “Menu” and “Close” labels when needed for the audience | Check both controls, accessible names, focus, and touch interaction |
| Code Quality drawer enters from the right | Explicit user preference for this app | Left-side drawer for a project that calls for it | Open, close, interrupt, rotate, and vary Safari browser controls |
| Explore action has text only | Keep emphasis on the action without an unnecessary symbol | Text plus a purposeful icon | Compare hierarchy and spacing on mobile and desktop |
| Johnny UI is the approved default for these projects | Preserve the user's chosen symbols and geometry | Another intentionally reviewed project family | Compare actual SVGs and profile to the approved selection |
| Icon Library is item 31 in Design Lab | New destinations belong to the existing navigation system | A separate navigation system only with a clear purpose | Check numbering, styling, wrapping, focus, and mobile scrolling |
| Offscreen focus scrolling is suppressed | Address a likely source of the reported opening glitch | Move focus after a suitable state change, with keyboard behavior preserved | Code change deployed; Safari visual confirmation is still pending |

| Plain visible numbering: 1, 2, 3 | User-approved baseline preference across websites; avoid decorative zero-padding | Leading zeros only for meaningful formats or documented project-specific exceptions | Review visible labels and number formatting; preference confirmed, existing sites not audited by this rules-only change |

This record distinguishes user-approved design preferences from unverified visual fixes. Do not treat deployment or code checks as proof that the reported drawer glitch is resolved.
