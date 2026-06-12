# sepamir1992.github.io

Personal academic & research portfolio of **Amir Sepahi** — Ph.D. Candidate in Electrical and Computer Engineering, University of Victoria.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) + [Decap CMS](https://decapcms.org), deployed to **GitHub Pages**. All content lives as Markdown/JSON files in this repository — no database, no server.

**Live site:** https://sepamir1992.github.io

---

## Quick start (run locally)

Requires Node.js 20+.

```bash
npm install
npm run dev          # site at http://localhost:4321
```

To use the admin panel locally (no login required):

```bash
# Terminal 1
npm run cms          # starts the local Decap backend proxy

# Terminal 2
npm run dev

# Then open http://localhost:4321/admin/
```

Edits made in the local admin panel are written straight to the files in `src/content/` and `src/data/` — commit and push them like any other change.

## Folder structure

```
├── .github/workflows/deploy.yml   GitHub Actions → GitHub Pages deployment
├── public/
│   ├── admin/                     Decap CMS (admin panel) — index.html + config.yml
│   ├── uploads/
│   │   ├── images/                Photos & images uploaded via the CMS
│   │   ├── papers/                Publication PDFs
│   │   └── cv/                    Your CV PDF
│   ├── favicon.svg, og-default.svg, robots.txt
├── src/
│   ├── components/                Hero, Navbar, ProjectCard, PublicationCard, ...
│   ├── content/                   ← ALL editable content lives here
│   │   ├── projects/              One .md file per project
│   │   ├── publications/          One .md file per publication
│   │   ├── research/              One .md file per research area
│   │   ├── photos/                One .md file per photo
│   │   └── news/                  One .md file per news item
│   ├── data/
│   │   ├── profile.json           Name, title, bio, headshot, CV, badges
│   │   └── contact.json           Email + social links
│   ├── layouts/BaseLayout.astro   Shared layout + SEO/OG metadata + theme
│   ├── pages/                     Routes: /, /about, /research, /projects, ...
│   └── content.config.ts          Content schemas (validated at build time)
└── astro.config.mjs
```

## How to edit content

Two ways — both end with a git commit, which triggers redeployment:

1. **Through `/admin`** (friendly UI): add/edit projects, publications, photos, news, profile, and contact links. Image uploads go to `public/uploads/images/`, PDFs to `public/uploads/papers/` (publications) or `public/uploads/cv/` (CV).
2. **Directly in the files**: edit the Markdown/JSON files listed above in any editor and push.

### Add a new publication
`/admin` → **Publications** → *New Publication* — or create `src/content/publications/my-paper.md`:

```markdown
---
title: "Paper Title"
authors: "A. Sepahi, B. Coauthor"
venue: "IEEE Conference on X"
year: 2026
status: published        # published | accepted | under-review | preprint | in-preparation
doi: "10.1109/XXX"
arxiv: "https://arxiv.org/abs/XXXX.XXXXX"
pdf: "/uploads/papers/my-paper.pdf"
tags: [Multipath, RL]
abstract: "One-paragraph abstract."
featured: true           # show on the homepage
---
```

### Add a new project
`/admin` → **Projects** → *New Project* — or create `src/content/projects/my-project.md` with `title`, `summary`, `technologies`, `links`, `coverImage`, `featured`, etc. (see existing files for the full template). The Markdown body becomes the project detail page at `/projects/<filename>/`.

### Add a new photo
`/admin` → **Photography** → *New Photo*: upload the image, fill in title/alt/location/category, toggle **featured** to show it on the homepage.

## CMS authentication (one-time setup for the live `/admin`)

Decap's GitHub login needs a tiny OAuth token-exchange service (GitHub Pages can't run one). Two free options:

### Option 1 — Cloudflare Worker (recommended, free)
1. Create a free Cloudflare account and deploy an OAuth proxy worker, e.g. [sterlingwes/decap-proxy](https://github.com/sterlingwes/decap-proxy) (or any "decap cms github oauth" worker template).
2. Create a **GitHub OAuth App** (GitHub → Settings → Developer settings → OAuth Apps → New):
   - Homepage URL: `https://sepamir1992.github.io`
   - Authorization callback URL: `https://<your-worker>.workers.dev/callback`
3. Put the OAuth app's Client ID/Secret in the worker's environment variables.
4. In [public/admin/config.yml](public/admin/config.yml), uncomment and set:
   ```yaml
   base_url: https://<your-worker>.workers.dev
   ```

### Option 2 — Netlify OAuth gateway (also free)
1. Create a free Netlify site linked to this repo (you won't use it for hosting).
2. Netlify dashboard → Site configuration → Access & security → OAuth → Install provider → GitHub, using a GitHub OAuth App with callback URL `https://api.netlify.com/auth/done`.
3. No `base_url` needed in `config.yml` (Decap defaults to Netlify's gateway).

> Until you set this up, use the **local admin** workflow (`npm run cms` + `npm run dev`) — it needs no authentication.

## Deploying on GitHub Pages (one-time setup)

1. Push this repository to `master` on GitHub.
2. On GitHub: **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.
3. Every push to `master` now builds and deploys automatically via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Personalize first (checklist)

Edit these files (or use `/admin`) before sharing the site:

- [ ] `src/data/profile.json` — final bio text, tagline, and badges
- [ ] **Headshot** — upload a real photo, replace `/uploads/images/headshot-placeholder.svg`
- [ ] **CV PDF** — upload to `public/uploads/cv/` and set `cv` in `profile.json`
- [ ] `src/data/contact.json` — LinkedIn and Google Scholar URLs
- [ ] `src/content/publications/*.md` — real venues, author lists, years, DOIs, PDFs, BibTeX (all marked `TODO`)
- [ ] `src/content/projects/*.md` — confirm details, add results/impact, GitHub links, cover images
- [ ] `src/content/photos/*.md` — replace the three placeholder graphics with real photos
- [ ] `src/content/news/*.md` — replace placeholder news items
- [ ] `src/pages/about.astro` — extend the full bio (education, supervisor, experience)
