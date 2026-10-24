# How to update the website

Everything you update regularly lives in **one of two places**. Every count on the site
(publications, citations, talks, invited talks, countries, PhD students, collaborations,
open positions) is calculated automatically when the site rebuilds.

```
data/                         ← lists: edit these files, add a new entry at the TOP
├── publications.yaml         papers
├── seminars.yaml             talks
├── team.yaml                 people (current and alumni)
├── teaching.yaml             modules, student projects, resources
├── gallery.yaml              photos
├── metrics.yaml              citations and funding (the only typed-in figures)
└── social.yaml               social media links

content/
├── post/                     news: one file per story
└── vacancies/                job adverts: one file per advert

content/images/gallery/       ← photos go here (as now)
content/images/group/
content/post/images/
```

Each data file starts with a ready-made block to copy. The rule is always the same:
**copy the example block, paste it at the top of the list, change the words.**
Keep the two-space indents exactly as in the example.

---

## New paper → `data/publications.yaml`

```yaml
  - title: "Paper title"
    year: 2026
    authors: "First Author, Student Name, Marc K. Etherington* & Other Author*"
    journal: "Journal Name, 12, 345-356"
    url: https://doi.org/10.xxxx/xxxxx
    doi: 10.xxxx/xxxxx
    image: /post/images/My_TOC.jpg
```
Your name and group members' names are bolded for you, and the paper appears on each
co-author's Group page card. Put `*` after your name and it counts as corresponding author.
A journal starting "Nature" counts as Nature family. Add `review: true` for reviews and
`featured: "one-line description"` to show it on the Research page.

**Updates:** Publications list, all its counts and filters, publication count on the Marc
and Research pages, Research featured papers, group members' paper lists and counts.

## New talk → `data/seminars.yaml`

```yaml
  - title: "Talk title"
    year: 2026
    type: invited
    venue: "University of Somewhere"
    country: Japan
```
Add `event: "Conference name"` for conferences and `online: true` for webinars.

**Updates:** Seminars list, total / invited / countries counts, International filter,
Research "Recent Seminars" (latest three invited talks).

## New team member → `data/team.yaml`

Copy an existing person's block, including `author_name` (their surname) so their papers
are found automatically. When someone leaves, change `status: current` to
`status: alumni` and add `period:` and `where_now:`.

**Updates:** Group page, Research team cards, PhD student counts, PhD progress bars.

## New job advert → new file in `content/vacancies/`

Copy `archetypes/vacancies.md` into `content/vacancies/` with a name such as
`phd-tadf-2027.md`, fill it in, set `draft: false`.

**Updates:** Join Us badge and tabs, Research, Marc page, Teaching (student projects),
News feed. It disappears everywhere the day after `closing_date`.

## News story → new file in `content/post/`

Copy `archetypes/post.md` into `content/post/` (e.g. `2026-Poster-Prize.md`), upload the
photo to `content/post/images/`, write the story.

**Updates:** News page. Photos are resized automatically.

## New photo → `data/gallery.yaml`

Upload to `content/images/gallery/`, then add at the top of the list:
```yaml
  - image: /images/gallery/My_Photo.jpg
    caption: "Month Year - What's happening"
    categories: [conferences, travel]
```
Photos always show in full, whatever their shape. If you'd rather crop one to the classic
4:3 frame, add `crop: true` (and optionally `focus: top` to keep the top in view).

## Teaching → `data/teaching.yaml`
Modules, past student projects and resources. Open student projects come from job
adverts with `position_type: undergraduate` or `masters`.

## Citations or funding changed → `data/metrics.yaml`
Change the figure once; it updates on every page that shows it.

---

## If something goes wrong

Commit, then open the **Actions** tab on GitHub. A green tick means the site rebuilt.
A red cross is nearly always an indent or a missing quote mark in a data file: click
it, read the line number in the error, and compare that entry with the example block.
