# ClearGuard website

Static website for the ClearGuard Android app (`com.veriattend.clearguard`) by UtilEdge: product page, privacy policy, terms of use, permissions, data deletion, Google Play compliance summary and contact.

Plain HTML + one CSS file + one small JS file. No build step, no trackers, no analytics, no external requests. The Montserrat font (SIL Open Font License) is self-hosted from `assets/fonts/`, copied from the app.

## Files

| File | Purpose |
|---|---|
| `index.html` | Landing page: what it does, how it works, privacy promises, screenshots, FAQ |
| `privacy-policy.html` | Full privacy policy (Play Console "Privacy policy" URL) |
| `terms-of-use.html` | Terms of use / EULA |
| `permissions.html` | Every permission and capability, plus the in-app Accessibility disclosure |
| `data-deletion.html` | Data deletion instructions (Play Console "Delete data" URL) |
| `play-store-compliance.html` | Data safety answers and policy summary |
| `contact.html` | Contact details |
| `404.html` | Not-found page (used automatically by GitHub Pages and Netlify) |
| `assets/css/style.css` | Shared styles (night-sky theme, mobile layout, light print style) |
| `assets/js/site.js` | Mobile menu toggle and print-all-FAQ; the site works without it |
| `assets/img/logo.svg` | Logo and favicon |
| `assets/img/screens/*.jpg` | Real app screenshots (Pixel 6a, dark mode) used in the hero and the screenshots section |
| `assets/fonts/montserrat.ttf` | Self-hosted font |
| `netlify.toml` | Netlify config with security headers |
| `.nojekyll` | Tells GitHub Pages to serve files as is |

The header and footer are repeated in every HTML page (no templating). If you change a nav link or the footer, change it in all eight pages.

## Preview locally

From this folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Opening `index.html` directly in a browser also works.

## Deploy to GitHub Pages

1. Create a public repository (for example `clearguard-website`) and push the contents of this folder to its root on the `main` branch.
2. In the repository: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
3. After a minute the site is at `https://<github-username>.github.io/<repo-name>/`.
4. Optional custom domain: add it under Settings → Pages → Custom domain and create the DNS record GitHub shows. Tick **Enforce HTTPS**.

GitHub Pages ignores `netlify.toml`; the security headers apply only on Netlify.

## Deploy to Netlify

- **Drag and drop:** go to https://app.netlify.com/drop and drop this folder.
- **From Git:** New site → Import from Git → pick the repository. Build command: empty. Publish directory: `.` (already set in `netlify.toml`).

The site is then at `https://<site-name>.netlify.app/`. Rename the site under Site configuration → Change site name, or add a custom domain under Domain management.

## URLs to paste into Play Console

Use the full `.html` URL so it works on every host. Replace the base with your real one.

| Play Console field | GitHub Pages | Netlify |
|---|---|---|
| App content → **Privacy policy** | `https://<github-username>.github.io/<repo-name>/privacy-policy.html` | `https://<site-name>.netlify.app/privacy-policy.html` |
| Data safety → **Delete data URL** (account deletion / data deletion) | `https://<github-username>.github.io/<repo-name>/data-deletion.html` | `https://<site-name>.netlify.app/data-deletion.html` |
| Store listing → **Website** (optional) | `https://<github-username>.github.io/<repo-name>/` | `https://<site-name>.netlify.app/` |

Notes:
- ClearGuard has no accounts, so Play's account-deletion URL requirement should not apply; if the form asks for a deletion URL anyway, use the data deletion page.
- Play requires the privacy policy on a public, non-geofenced HTML page labelled as a privacy policy. Check that the URL opens in a private browser window before submitting.
- The in-app privacy policy (Settings → Privacy policy) is generated from `PopUpAdsDetector/docs/release/PRIVACY_POLICY.md`. Keep that file and `privacy-policy.html` saying the same thing, and consider adding the public URL to it.

## TODO before publishing

Placeholders in page text are shown as a small dashed "To fill in:" note (class `todo`). Placeholders that would spoil the look (the Play button, the footer company name) are HTML comments starting `OWNER TODO`. Search for `class="todo"` and `OWNER TODO` to find them all; none should remain when you publish.

1. **Support email**: done — `bushramanzoor502@gmail.com` on every page. Use the same address as the developer contact email in Play Console.
2. **Legal name** of the developer or company (privacy policy, terms, contact; footer copyright has an `OWNER TODO` comment).
3. **Postal address** (privacy policy, terms, contact).
4. **Governing law and courts** (terms of use section 13, contact).
5. **Target audience** selected in Play Console (privacy policy section 13, compliance section 6).
6. **Google Play listing link**: confirm `https://play.google.com/store/apps/details?id=com.veriattend.clearguard` once live (index, contact).
7. **Google Play badge**: the hero shows a "Coming soon to Google Play" pill. When the listing is live, replace it (see the `OWNER TODO` comment in `index.html`) with Google's official badge from https://play.google.com/intl/en_us/badges/, linked to the listing, following its usage guidelines.
8. Confirm the Play listing description and the Accessibility declaration are submitted with the wording in `permissions.html` section 3.

## Keeping the site in step with the app

`permissions.html` quotes the in-app Accessibility disclosure word for word (`disclosure_p1`..`p5` in `app/src/main/res/values/strings.xml`, currently disclosure version 3). Whenever that text or `DISCLOSURE_VERSION` changes, update the quote. Likewise keep `privacy-policy.html` in line with `docs/release/PRIVACY_POLICY.md`, and `data-deletion.html` in line with how History deletion works in the app.
