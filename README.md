# Static Portfolio

This project now includes static pages that can be deployed directly to GitHub Pages:

- `index.html` (portfolio)
- `resume.html` (resume page)
- `wwwroot/css/site.css`

## Run locally (static)

You can open `index.html` directly in a browser, or use a local static server.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. In GitHub, go to **Settings > Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your branch), `/ (root)`
4. Save, then wait for Pages deployment.
5. Your site URL will be shown in the Pages settings.

## Export resume to PDF

1. Open `resume.html` in your browser.
2. Click `Print / Save as PDF`.
3. In print settings, choose:
   - Destination: `Save as PDF`
   - Paper size: `A4` or `Letter`
   - Margins: `Default`
4. Save the file.

The print style is configured to keep all resume sections visible and avoid broken cards across pages.
