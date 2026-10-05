# Sandra Márquez — Personal site

Built with [Astro](https://astro.build). A small, from-scratch site inspired by the structure of academic/data-science
portfolio sites like alfontal.dev — not a fork or clone of anyone else's code, just the same shape (About/CV/Projects/
Publications/Blog + a light/dark toggle), built for you from your own content.

## Editing your content

Almost everything lives in **`src/data/profile.js`** — open that file and edit the plain text/values:
name, tagline, bio, contact links (email, GitHub, LinkedIn, ORCID), experience, education, skills, interests,
projects and publications. You don't need to touch any other file to update your info.

Anything still in `[brackets]` is a placeholder you haven't filled in yet (email, GitHub username, ORCID, exact
years of study, publication titles, extra projects).

### Adding your photo

1. Put your photo in the `public/` folder, e.g. `public/photo.jpg`.
2. In `src/data/profile.js`, change `photo: null` to `photo: '/photo.jpg'`.

### Adding your CV as a PDF

Put the file at `public/cv.pdf` — the "Download as PDF" link on the CV page already points there.

## Running it locally

You need [Node.js](https://nodejs.org) installed (LTS version). Then, in this folder:

```bash
npm install   # first time only
npm run dev   # starts a local preview at http://localhost:4321
```

Every time you save a file, the preview updates automatically. To stop it, press `Ctrl+C` in the terminal.

## Publishing it for real

This project has no server-side code — `npm run build` produces a `dist/` folder of plain HTML/CSS/JS that any
static host can serve. Two easy, free options:

### Option A — GitHub Pages
1. Create a **new, empty** repository on your own GitHub account (do not fork anything — this is your own project).
2. Push this folder to it (see "First push" below).
3. In the repo's Settings → Pages, set the source to GitHub Actions, and add a simple Astro deploy workflow
   (Astro's own docs have a ready-made one: https://docs.astro.build/en/guides/deploy/github/).
4. In Settings → Pages, add your custom domain `smarquez.dev`, and at your domain registrar point its DNS to
   GitHub Pages (Astro/GitHub's docs above list the exact records).

### Option B — Netlify or Vercel
1. Push this folder to your own GitHub repo (see below).
2. Create a free account on Netlify or Vercel, "import" that repo — it detects Astro automatically
   (build command `npm run build`, output folder `dist`).
3. In the project's domain settings, add `smarquez.dev` and follow their DNS instructions.

### First push to your own repo
```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```
(This repo was initialized locally already — you're only adding *your own* empty GitHub repo as the remote,
not forking anyone else's.)
