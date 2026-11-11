# Anveshika Kamble: portfolio website

A polished, static portfolio for AI/ML engineering and research roles, with a muted pastel palette (warm ivory, sage, dusty lavender, and soft blue). Built with **plain HTML, CSS, and JavaScript**, so it works on GitHub Pages with no build process, paid services, API keys, or dependencies.

## What's inside

- Recruiter-first home page with links to résumé, projects, publications, GitHub, LinkedIn, and email.
- Interactive project filters and case-study dialogs, including projects without public repositories.
- A browser-based **Video-MME evidence-routing illustration** with editable input and sample queries. **It is a transparent rules-based demonstration of the routing idea, not the trained Python classifier.**
- Accessible, keyboard-friendly system visualization in the hero.
- Responsive layouts, reduced-motion support, keyboard-focus styles, metadata, and an SVG favicon.
- Pastel palette applied across the hero, navigation, cards, interactive graph, demo, dialogs and mobile layout. The color overrides live at the end of `styles.css`, under `PORCELAIN / SAGE / LAVENDER`.
- Local résumé at `resume/Anveshika_Kamble_Resume.pdf` (the résumé supplied with this request).

## Files

```
index.html               # page content, project highlights, experience
styles.css               # design and responsive styles
app.js                   # project data, filters, dialog, routing illustration
assets/favicon.svg
resume/Anveshika_Kamble_Resume.pdf
README.md
```

## Preview locally

Open `index.html` in a browser, or run from this directory:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy to GitHub Pages

1. Back up your existing website repository.
2. Copy `index.html`, `styles.css`, `app.js`, `assets/`, and `resume/` to the **root** of the `Anveshika_profile` repository (replace the old `index.html`).
3. Commit and push:

```bash
git add index.html styles.css app.js assets/ resume/ README.md
git commit -m "Refine AI portfolio with muted pastel design"
git push origin main
```

4. In GitHub **Settings → Pages**, select **Deploy from a branch**, `main`, `/ (root)` if not already enabled.
5. Check https://anveshika06.github.io/Anveshika_profile/ once Pages deployment completes.

## Important accuracy notes

- WinLeak paper and data details were grounded in the provided résumé and the published WinLeak project site.
- Video-MME intent-router metrics describe an **authored evaluation set**, not gold-labeled Video-MME performance.
- The interactive routing example uses hand-authored browser rules, not weights exported from the trained model, and its bars are **not calibrated model probabilities**.
- The accounting agent is described as a **local prototype** with optional connectors, not a live banking integration.
- AI Lead Qualifier and Document Assistant are shown as local case studies because no public repository links were provided.
- Live URLs and specific public GitHub repository links should be reviewed before publishing. Update project records in `app.js` when public links are available.

## Making updates

- Update **project text and links** in `projects` in `app.js`.
- Update **experience, publications, and tech stack** in `index.html`.
- Replace `resume/Anveshika_Kamble_Resume.pdf` when your résumé changes.
- Set public project repository links rather than linking to your general GitHub profile when they become available.

No analytics, tracking scripts, or external model calls are included. Only Google Fonts is requested externally; fallback fonts are provided.

## November 2026 update

- Added the Springer ICRAAI 2023 proceedings paper, **A Hybrid Approach for Summarizing Text and Image Data Using ResNet and BART** (published online in 2024). Its title links to the [Springer chapter](https://link.springer.com/chapter/10.1007/978-981-97-1111-6_6).
- Updated the publications count from five to six.
- Replaced the oversized homepage headline with "Building AI systems grounded in research." and refined the supporting copy.
- Reduced hero, section, project, timeline, publication and contact heading sizes across desktop and mobile.
- Replaced decorative long dashes in visible copy with plainer punctuation and labels.
