# How to update the website

Everything you update regularly lives in **one of two places**. Every count on the site
(publications, citations, talks, invited talks, countries, PhD students, collaborations,
open positions) is calculated automatically when the site rebuilds.

```
data/                         ← lists: edit these files, add a new entry at the TOP
├── publications.yaml         papers (tag each with its themes)
├── seminars.yaml             talks and posters, yours and the group's
├── grants.yaml               grants and funding
├── projects.yaml             projects (who works on them, which grant pays)
├── themes.yaml               the research themes (rarely changes)
├── collaborators.yaml        collaborators, one entry per person
├── visits.yaml               group members' visits to other labs
├── equipment.yaml            facilities: instruments, what paid for them, photos
├── team.yaml                 people (current and alumni)
├── teaching.yaml             modules, student projects, resources
├── gallery.yaml              photos
├── career.yaml               roles, education, recognition, service, outreach (Career page + CV)
├── metrics.yaml              citations (funding is now calculated from grants.yaml)
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
    themes: [tadf, ct]
```
Theme ids: `tadf`, `ct` (charge transfer), `gap` (singlet-triplet gaps), `bio` (bioimaging).
Leave `themes: []` for papers outside the themes.
Your name and group members' names are bolded for you, and the paper appears on each
co-author's Group page card. Put `*` after your name and it counts as corresponding author.
A journal starting "Nature" counts as Nature family. Add `review: true` for reviews and
`featured: "one-line description"` to show it on the Research page.

**Updates:** Publications list, all its counts and filters, publication count on the Marc
and Research pages, Research featured papers, group members' paper lists and counts, the
theme's paper count and "Latest Paper" on the Research page.

## New talk → `data/seminars.yaml`

```yaml
  - title: "Talk title"
    year: 2026
    type: invited
    venue: "University of Somewhere"
    country: Japan
```
Add `event: "Conference name"` for conferences and `online: true` for webinars.

**A student's talk or poster:** the same block plus `speaker: Surname`, `type: poster` for
posters, and `award: "Poster prize"` if they win something. It appears on their Group card,
under the Seminars "Group Members" filter, and (with an award) in Join Us "Student Success"
and Research "Recent Achievements". Your own totals at the top of Seminars are unaffected.

**Updates:** Seminars list, total / invited / countries counts, International filter,
Research "Recent Seminars" (latest three invited talks).

## New grant → `data/grants.yaml`

```yaml
  - id: short-name
    title: "Grant title"
    funder: "Funder"
    start: 2026
    end: 2028
    role: PI
    amount_gbp: 50000          # optional; leave out to keep it private
    themes: [bio]
    description: "One sentence."
```
**Your grants:** leave out `holder`, and set `role:` to PI or Co-I. They move from Current
Funding to Funding History after their end year, and count towards your funding total.

**Funding held by a group member** (travel grant, fellowship, award): add `holder: Surname`
and leave out `role`. It's listed under "Funding Won by Group Members", appears on their
Group card and in Join Us "Student Success", and is kept out of your total.

## New project → `data/projects.yaml`

```yaml
  - id: short-name
    title: "Project title"
    people: [Surname]
    start: 2026
    funding: grant-id          # or plain text such as "PhD project"
    themes: [ct]
    description: "One or two sentences."
```
It links to each person's Group card (and back), shows under its grant, and counts towards
its themes. It becomes "Past" after its `end` year, or once its people move to alumni.

## New collaborator → `data/collaborators.yaml`

```yaml
  - id: surname
    name: "Prof. First Last"
    author_name: "First M. Last"     # exactly as in your author lists
    institution: "Their University"
    country: Germany
    description: "One sentence on the collaboration."
```
Joint papers are found automatically. Link a grant with `collaborators: [surname]` in
`grants.yaml`. **When they move:** change `institution` and `country`, and add the old one
to `previously: ["Old University"]`; everything stays linked to them.

## A visitor coming to us → `data/team.yaml`

```yaml
  - name: First Last
    author_name: Last
    role: visitor
    type: Visiting PhD student       # or Visiting researcher, Visiting professor...
    home: Their University
    country: Japan
    host: takeda                     # collaborator id (optional)
    visit_start: 2027-04-01
    visit_end: 2027-06-30
    funding: aspire                  # grant id (optional)
```
They appear in Current team (labelled "Visiting from...") during the visit and move to
Visitors afterwards by themselves. Their visit also shows on the collaborator's card, the
grant, and the Join Us Visitors tab. Check visitors are happy to be listed with a photo.

## A group member visiting another lab → `data/visits.yaml`

```yaml
  - person: Matthews                 # or Etherington for your own visits
    host: takeda
    start: 2027-01-10
    end: 2027-03-31
    funding: aspire                  # optional
    purpose: "One line."
```
Shows on their Group card, the collaborator's card and the grant.

## New instrument or upgrade → `data/equipment.yaml`

```yaml
  - id: short-name
    name: "Make Model"
    category: Spectroscopy
    capabilities: [What it measures, Another measurement]
    year: 2027
    funding: grant-id                # or plain text, e.g. "Start-up funds"
    themes: [tadf]
    photo: /post/images/My_Photo.jpg # optional; landscape works best
    posts: [2027-My-News-Post]       # optional: news post file names
```
An upgrade to an existing instrument: add under it
`upgrades: [ { name: "Module", year: 2027, funding: grant-id } ]`.
Kit you use in a collaborator's lab: add `access_via: collaborator-id`.
It appears on the Research Overview, on the grant that paid for it, on its themes' cards,
and in the Join Us facilities line.

## New team member → `data/team.yaml`

Copy an existing person's block, including `author_name` (their surname): their papers,
talks, prizes, grants and projects are then found automatically. Add `funding:` for how
their PhD or post is funded: a grant id (e.g. `aspire`) links to that grant, or plain text
(e.g. `"ReNU CDT studentship"`). It shows on their card and isn't counted in any total. When someone leaves, change `status: current` to
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

## Several funding sources

Any `funding:` line (visits, visitors, team members, projects, equipment and upgrades) can
list more than one source in square brackets, mixing grant ids and plain text:

```yaml
    funding: [aspire-takeda-1, "JSPS Invitational Fellowship"]
```
Grant ids link to the grant (and the grant lists the visit, person, project or equipment);
plain text is shown as written.

## Keeping ids consistent

Links between files work by matching text exactly:
- people: their `author_name` in `team.yaml` (e.g. "Ruth M. Pollard") is used in `people:`,
  `speaker:`, `holder:` and `person:`
- grants: their `id` (e.g. `aspire-takeda-1`) is used in `funding:`
- collaborators: their `id` (e.g. `Takeda`) is used in `host:` and `collaborators:`

If you rename an id, search the `data` folder for the old one and update it everywhere.

## Career changes → `data/career.yaml`

**A promotion or new post:** add an `end:` date to the old role and a new role above it:

```yaml
  - type: position                 # position | fellowship | visiting | service
    title: "Associate Professor"
    organisation: "Northumbria University"
    unit: "School of Engineering, Physics and Mathematics"
    start: 2027-09-01
```
Roles without a past end date show as current (on your profile and the Career page);
everything appears in Career History and on the printable CV.

**Also in career.yaml:** education, qualifications, recognition (prizes), memberships,
reviewing (journals and funders), events organised, outreach, knowledge exchange, and
supervision outside the group. Each is a simple list; copy an existing line.

## Printable CV

Open `/cv/` on the site and press **Print / Save as PDF** (choose "Save as PDF" as the
printer). It is rebuilt from your data every time the site updates, in the four sections
of UKRI's Résumé for Research and Innovation. Teaching scores and contact details beyond
your work email are deliberately left out.

## Funding totals

Your total as PI and as Co-I are calculated from `amount_gbp` in `grants.yaml` (funding
held by group members is counted separately). Add `amount_gbp` to the Wolfson and British
Council grants to include them.
