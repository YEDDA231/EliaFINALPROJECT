# Static Portfolio + Flowise API

This project now includes static pages that can be deployed directly to GitHub Pages:

- `index.html` (portfolio)
- `resume.html` (resume page)
- `wwwroot/css/site.css`
- `wwwroot/js/site.js`

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

## Flowise API usage

### Browser/static version

The file `wwwroot/js/site.js` includes:

- `API_URL`
- `query(payload)` using `fetch`
- `runExampleQuery()` with your sample payload

Note: browser calls can fail if the API blocks CORS.

### Python `requests` version

Use `flowise_api_test.py`:

```bash
pip install requests
python flowise_api_test.py
```

This is the same structure you requested (`import requests` + `query(payload)`).
