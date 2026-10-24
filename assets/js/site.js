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
function filterSeminars(category, button) {
  if (button) setActiveButton(button, '.filter-btn');
  document.querySelectorAll('.alert-danger, .alert-secondary').forEach(s => {
    const group = s.classList.contains('group-talk');
    const show =
      category === 'all' ||
      (category === 'mine' && !group) ||
      (category === 'invited' && s.classList.contains('alert-danger') && !group) ||
      (category === 'contributed' && s.classList.contains('alert-secondary') && !group) ||
      (category === 'international' && s.classList.contains('international') && !group) ||
      (category === 'group' && group);
    s.style.display = show ? '' : 'none';
  });
  tidyYearHeadings(el => el.classList && (el.classList.contains('alert-danger') || el.classList.contains('alert-secondary')));
  const note = document.querySelector('.group-talks-note');
  if (note) note.style.display = (category === 'mine') ? '' : 'none';
}
/* Seminars page opens on Marc's own talks */
if (document.querySelector('.seminar-list[data-default-filter]')) {
  filterSeminars('mine', document.querySelector('[data-filter-sem="mine"]'));
}

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

/* Links to anything inside a tab (e.g. /research/#grant-aspire, or #equip-fluorolog from
   another tab) open that tab first, then scroll to it */
function revealInTab(id) {
  const el = id && document.getElementById(id);
  const panel = el && el.closest('[data-tab-panel]');
  if (!panel) return false;
  const root = panel.closest('[data-tabs]');
  const btn = root && root.querySelector('[data-tab="' + panel.dataset.tabPanel + '"]');
  if (btn && !panel.classList.contains('active')) switchTab(btn);
  setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  return true;
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (a && revealInTab(decodeURIComponent(a.getAttribute('href').slice(1)))) {
    e.preventDefault(); history.replaceState(null, '', a.getAttribute('href'));
  }
});
if (location.hash) revealInTab(decodeURIComponent(location.hash.slice(1)));
