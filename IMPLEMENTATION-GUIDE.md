# Implementation guide: Etherington Lab website

Tested against a full copy of your repository (Hugo 0.145, same as your build workflow).

## What changes, at a glance

```
marc-k-etherington.github.io/
│
├── .github/workflows/gh-pages.yml   REPLACE  adds daily rebuild + image cache
├── .gitignore                       NEW      stops build output being committed
├── config.yaml                      EDIT     replace with the one in the kit (yours + image setting)
│
├── archetypes/
│   ├── post.md                      NEW      template for news stories
│   └── vacancies.md                 NEW      template for job adverts
│
├── assets/
│   ├── css/custom.css               LEAVE    keep editing as before
│   ├── css/responsive.css           NEW      phone/tablet fixes + new components
│   └── js/site.js                   NEW      all page scripts, one cached file
│
├── data/                            NEW FOLDER: every regularly updated list
│   ├── publications.yaml            NEW      your 32 papers, converted automatically
│   ├── seminars.yaml                NEW      your 27 talks, converted automatically
│   ├── team.yaml                    NEW      the whole team
│   ├── teaching.yaml                NEW      modules and student projects
│   ├── gallery.yaml                 NEW      your 37 photos, converted automatically
│   ├── metrics.yaml                 NEW      citations and funding
│   └── social.yaml                  NEW      social links
│
├── content/
│   ├── images/ , post/images/       LEAVE    images stay where they are
│   ├── post/*.md                    LEAVE
│   ├── _index.md                    LEAVE
│   ├── gallery.md                   REPLACE  now short; photos in data/gallery.yaml
│   ├── publications.md, seminars.md REPLACE  now short; lists in data/
│   ├── group.md                     REPLACE  now short; team lives in data/team.yaml
│   ├── join-us.md                   REPLACE  your file + automatic vacancy lists
│   ├── marc-etherington.md          REPLACE  your file + roles/stats moved into it
│   ├── research.md                  REPLACE  your file, team cards now automatic
│   ├── teaching.md                  REPLACE  new teaching page content
│   └── vacancies/_index.md          NEW      the "Open positions" section
│
├── layouts/                         REPLACE ALL files (new ones added too)
│   ├── _default/baseof.html         NEW      shared frame for every page
│   ├── group/, teaching/, vacancies/ NEW
│   └── partials/, shortcodes/       several NEW; analytics, hero-banner REPLACE
│
├── static/
│   ├── css/paper.css                NEW      theme CSS minus its slow font loading
│   └── post/images/                 LEAVE
│
├── themes/papercss-hugo-theme/      LEAVE    never edit again (see rule 1 below)
└── public/                          DELETE   old build output from 2 years ago
```

## Step by step (about 20 minutes)

The safest route uses a branch and a pull request. Your workflow already test-builds pull
requests without publishing them, so GitHub checks everything compiles before the live
site changes.

**1. Open the web editor.** On your repository page press the full stop key (`.`).
This opens github.dev, a VS Code editor in the browser that can move whole folders.

**2. Create a branch.** Click `main` in the bottom-left corner, choose
"Create new branch", name it `site-refresh`.

**3. Copy the kit in.** Unzip the kit on your computer. Drag its folders
(`.github`, `archetypes`, `assets`, `content`, `data`, `layouts`, `static`) and the
`.gitignore` file onto the file explorer on the left of github.dev. Choose
"Replace" when asked about existing files.

**4. config.yaml** is replaced by the copy in the kit: your existing file with the
image setting added at the end. Nothing else in it changed.

**5. Delete the old build folder.** Right-click `public` and choose Delete.

**6. Commit.** Open the Source Control panel (third icon on the left), type a message
such as "Site refresh", click Commit & Push.

**7. Open a pull request.** Back on github.com you will see a "Compare & pull request"
banner. Click it, then "Create pull request". Wait for the check at the bottom:
- green tick: it builds. The first run takes 2 to 3 minutes (processing about 500 images once).
- red cross: click Details and send me the error.

**8. Merge.** Click "Merge pull request". The live site updates a few minutes later.

**9. Check the live site** on your phone and computer. If anything looks wrong, the
merged pull request page has a "Revert" button that puts the old site straight back.

**10. Tidy the team data.** Open `data/team.yaml` and fix the lines marked `# CHECK`
(Aidan's start date, PhD lengths, Oliver's dates and where he is now).

## Rules that keep future changes small

1. **Never edit inside `themes/`.** To change a theme file, copy it to the same path
   under your own `layouts/` and edit the copy. Yours always wins and the theme stays
   replaceable. (Your favicons still live in the theme folder; they are fine there.)
2. **Content goes in markdown or data files, never in layouts.** Layouts decide how
   things look; `content/` and `data/` decide what they say.
3. **Images go in the same folders as now.** Hugo optimises them automatically.

## Everyday tasks after the change

See **HOW-TO-UPDATE.md**: one page covering papers, talks, people, adverts, news,
photos and teaching, each with a block to copy.

## Measured results (your real site, images if a whole page is scrolled)

| Page | Phone before | Phone after | Desktop before | Desktop after |
|---|---|---|---|---|
| News (home) | 29.5 MB | 1.4 MB | 29.5 MB | 0.3 MB |
| Gallery | 17.8 MB | 4.2 MB | 17.8 MB | 2.5 MB |
| A recent news post (Nae joins) | 13.1 MB | 0.6 MB | | |

Images inside your existing 71 news posts are optimised automatically; no post needs editing.

The Group page previously loaded its photos from GitHub links (Ruth's photo alone is
9.3 MB, shown at 180 px). It now uses optimised local copies of about 0.2 MB in total.

## Optional tidy-ups (not required)

- `static/post/images/` holds 86 images (61 MB), 62 of which duplicate files in
  `content/post/images/`. Both publish to the same address. Deleting the static copies
  of the duplicates would shrink the repository; ask and I'll list them.
- `content/test.jpg`, `content/images/test/`, `static/test.md` and `static/post/test.md`
  look like leftovers.
