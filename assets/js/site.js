/* One script for the whole site: downloaded once, then cached for every page. */

/* Back to top */
document.querySelectorAll('[data-back-to-top]').forEach(btn =>
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
);

/* Generic tabs (Research, Teaching, anything new).
   Markup: <div data-tabs> ... <button data-tab="x" onclick="switchTab(this)"> ... <div data-tab-panel="x"> */
function switchTab(btn) {
  const root = btn.closest('[data-tabs]');
  if (!root) return;
  const name = btn.dataset.tab;
  root.querySelectorAll('[data-tab]').forEach(b => {
    const on = b === btn;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on);
  });
  root.querySelectorAll('[data-tab-panel]').forEach(p =>
    p.classList.toggle('active', p.dataset.tabPanel === name)
  );
}

/* Generic show/hide toggle.
   Markup: <button data-target="id" data-show-label="Show X" data-hide-label="Hide X" onclick="toggleSection(this)"> */
function toggleSection(btn) {
  const target = document.getElementById(btn.dataset.target);
  if (!target) return;
  const open = target.classList.toggle('active');
  btn.classList.toggle('active', open);
  btn.setAttribute('aria-expanded', open);
  btn.textContent = open ? btn.dataset.hideLabel : btn.dataset.showLabel;
}

/* Hide year headings (h3) that have nothing visible beneath them after filtering */
function tidyYearHeadings(isItem) {
  document.querySelectorAll('main h3').forEach(year => {
    if (!year.querySelector('.badge')) return;   // only year headings, not "Seminar Key" etc.
    let next = year.nextElementSibling, anyVisible = false;
    while (next && next.tagName !== 'H3') {
      if (isItem(next) && next.style.display !== 'none') { anyVisible = true; break; }
      next = next.nextElementSibling;
    }
    year.style.display = anyVisible ? '' : 'none';
  });
}

function setActiveButton(button, selector) {
  document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
  button.classList.add('active');
}

/* Publications (unchanged API: filterPubs('nature', this)) */
function filterPubs(category, button) {
  if (button) {
    setActiveButton(button, '.filter-btn');
    const sel = document.getElementById('collab-filter'); if (sel) sel.value = '';
  } else {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  }
  document.querySelectorAll('.alert-primary').forEach(pub => {
    pub.style.display = (category === 'all' || pub.classList.contains(category)) ? '' : 'none';
  });
  tidyYearHeadings(el => el.classList && el.classList.contains('alert-primary'));
}

/* Seminars (unchanged API: filterSeminars('invited', this)) */
/* Seminars: first choose whose talks (scope), then, for Marc's talks, which kind (sub) */
const seminarState = { scope: 'mine', sub: 'any' };
function applySeminarFilters() {
  const { scope, sub } = seminarState;
  document.querySelectorAll('.seminar-list .alert-danger, .seminar-list .alert-secondary').forEach(s => {
    const group = s.classList.contains('group-talk');
    let show = scope === 'all' || (scope === 'group' && group) || (scope === 'mine' && !group);
    if (show && scope === 'mine' && sub !== 'any') {
      show = (sub === 'invited' && s.classList.contains('alert-danger')) ||
             (sub === 'contributed' && s.classList.contains('alert-secondary')) ||
             (sub === 'international' && s.classList.contains('international'));
    }
    s.style.display = show ? '' : 'none';
  });
  tidyYearHeadings(el => el.classList && (el.classList.contains('alert-danger') || el.classList.contains('alert-secondary')));
  const subRow = document.querySelector('.seminar-subfilters');
  if (subRow) subRow.style.display = scope === 'mine' ? '' : 'none';
  const note = document.querySelector('.group-talks-note');
  if (note) note.style.display = scope === 'mine' ? '' : 'none';
}
function setSeminarScope(scope, button) {
  seminarState.scope = scope; seminarState.sub = 'any';
  if (button) setActiveButton(button, '.seminar-filters .filter-btn');
  document.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.semSub === 'any'));
  applySeminarFilters();
}
function setSeminarSub(sub, button) {
  seminarState.sub = sub;
  if (button) setActiveButton(button, '.sub-filter-btn');
  applySeminarFilters();
}
/* Old name kept so any existing links still work */
function filterSeminars(category, button) {
  if (['mine', 'group', 'all'].includes(category)) setSeminarScope(category, document.querySelector('[data-sem-scope="' + category + '"]'));
  else { setSeminarScope('mine', document.querySelector('[data-sem-scope="mine"]')); setSeminarSub(category, document.querySelector('[data-sem-sub="' + category + '"]')); }
}
/* Seminars page opens on Marc's own talks */
if (document.querySelector('.seminar-list[data-default-filter]')) applySeminarFilters();

/* Gallery (now called as filterGallery('lab', this)) */
function filterGallery(category, button) {
  setActiveButton(button, '.gallery-filter-btn');
  document.querySelectorAll('.polaroid').forEach(p => {
    const cats = (p.dataset.category || '').split(',').map(c => c.trim());
    p.style.display = (category === 'all' || cats.includes(category)) ? '' : 'none';
  });
  document.querySelectorAll('.decorative-item').forEach(d => {
    d.style.display = category === 'all' ? '' : 'none';
  });
  const banner = document.getElementById('travel-instagram-banner');
  if (banner) banner.style.display = category === 'travel' ? 'block' : 'none';
}

/* Join Us audience tabs (unchanged API: showTab('postdoc')) */
function showTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.audience-card').forEach(c => c.classList.remove('active'));
  const tab = document.getElementById('tab-' + tabName);
  if (tab) tab.classList.add('active');
  const card = document.querySelector('.audience-card.' + tabName);
  if (card) card.classList.add('active');
}

/* Deep links like /join-us/#phd-tadf open the right tab, then scroll to it */
if (location.hash && document.querySelector('.tab-content')) {
  const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  const parent = target && target.closest('.tab-content');
  if (parent) {
    showTab(parent.id.replace('tab-', ''));
    setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100);
  }
}

/* Group page: Everyone / Current team / Alumni */
function filterTeam(which, button) {
  setActiveButton(button, '.filter-btn');
  document.querySelectorAll('[data-team-section]').forEach(s => {
    s.style.display = (which === 'all' || s.dataset.teamSection === which) ? '' : 'none';
  });
}

/* Deep links into tabs, e.g. /research/#projects opens the Projects tab */
if (location.hash) {
  const tabBtn = document.querySelector('[data-tab="' + CSS.escape(location.hash.slice(1)) + '"]');
  if (tabBtn) {
    switchTab(tabBtn);
    setTimeout(() => tabBtn.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
}

/* Deep links to a filter, e.g. /publications/#theme-tadf or #with-monkman */
if (location.hash.startsWith('#with-')) {
  const sel = document.getElementById('collab-filter');
  if (sel && [...sel.options].some(o => o.value === location.hash.slice(1))) {
    sel.value = location.hash.slice(1); filterPubs(sel.value, null);
    setTimeout(() => sel.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  }
}
if (location.hash) {
  const f = document.querySelector('[data-filter="' + CSS.escape(location.hash.slice(1)) + '"]');
  if (f) { f.click(); setTimeout(() => f.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100); }
}

/* Small buttons inside a tab (Active / Past, Current / Past / Won by group members).
   Markup: <div data-pills> ... <button data-pill="x" onclick="switchPill(this)"> ... <div data-pill-panel="x"> */
function switchPill(btn) {
  const root = btn.closest('[data-pills]');
  if (!root) return;
  root.querySelectorAll('[data-pill]').forEach(b => b.classList.toggle('active', b === btn));
  root.querySelectorAll('[data-pill-panel]').forEach(p => p.classList.toggle('active', p.dataset.pillPanel === btn.dataset.pill));
}

/* Links to anything inside a tab (e.g. /research/#grant-aspire, or #equip-fluorolog from
   another tab) open that tab, and the right small button within it, then scroll to it */
function revealInTab(id) {
  const el = id && document.getElementById(id);
  const pillPanel = el && el.closest('[data-pill-panel]');
  if (pillPanel && !pillPanel.classList.contains('active')) {
    const b = pillPanel.closest('[data-pills]').querySelector('[data-pill="' + pillPanel.dataset.pillPanel + '"]');
    if (b) switchPill(b);
  }
  const panel = el && el.closest('[data-tab-panel]');
  if (!panel) return false;
  /* Cards: open their "See more" and highlight briefly (e.g. after clicking a map location) */
  if (el.classList.contains('compact-card')) {
    const more = el.querySelector('details.card-more'); if (more) more.open = true;
    el.classList.remove('card-highlight'); void el.offsetWidth; el.classList.add('card-highlight');
  }
  const root = panel.closest('[data-tabs]');
  const btn = root && root.querySelector('[data-tab="' + panel.dataset.tabPanel + '"]');
  if (btn && !panel.classList.contains('active')) switchTab(btn);
  setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  return true;
}
document.addEventListener('click', e => {
  if (e.defaultPrevented) return;
  const a = e.target.closest('a[href^="#"]');
  if (a && revealInTab(decodeURIComponent(a.getAttribute('href').slice(1)))) {
    e.preventDefault(); history.replaceState(null, '', a.getAttribute('href'));
  }
});
if (location.hash) revealInTab(decodeURIComponent(location.hash.slice(1)));

/* Same-page jumps (e.g. typing #funding or using Back/Forward) behave like fresh links */
window.addEventListener('hashchange', () => {
  const id = decodeURIComponent(location.hash.slice(1));
  const tabBtn = document.querySelector('[data-tab="' + CSS.escape(id) + '"]');
  if (tabBtn) { switchTab(tabBtn); tabBtn.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  else revealInTab(id);
});

/* Collaborator maps: bring the hovered location to the front so its label is never hidden.
   On touch screens, the first tap shows the name and line, the second opens the card. */
document.querySelectorAll('.collab-map').forEach(map => {
  const svg = map.querySelector('svg');
  const front = site => { if (site.nextElementSibling) svg.appendChild(site); };
  map.querySelectorAll('.map-site').forEach(site => {
    site.addEventListener('mouseenter', () => front(site));
    site.addEventListener('focus', () => front(site));
    site.addEventListener('click', e => {
      if (!window.matchMedia('(hover: none)').matches || site.classList.contains('map-active')) return;
      e.preventDefault();
      map.querySelectorAll('.map-site.map-active').forEach(s => s.classList.remove('map-active'));
      site.classList.add('map-active'); front(site);
    });
  });
});
