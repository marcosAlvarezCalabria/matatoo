const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = matchMedia('(hover:hover)').matches;

/* ---------- Apariciones al hacer scroll ---------- */
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target as HTMLElement; reveal(el); io.unobserve(el);
}), { threshold: .12, rootMargin: '0px 0px -6% 0px' });

let galPending: HTMLElement[] = [];
const reveal = (el: HTMLElement, wait = 2600) => {
  el.style.opacity = ''; el.style.transform = '';
  setTimeout(() => (el.style.transition = ''), wait);
};

function initReveal() {
  document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-fx])').forEach((el) => {
    if (el.hidden) return;
    el.setAttribute('data-fx', '');
    if (reduce) return;
    const r = el.getBoundingClientRect();
    const parent = el.parentElement!;
    if (!parent.hasAttribute('data-gal') && r.top < innerHeight * .9 && r.bottom > 0) return;
    if (parent.hasAttribute('data-gal')) {
      // Galería: cada fila entra desde un lateral, alternando
      const kids = [...parent.children].filter((k) => !(k as HTMLElement).hidden) as HTMLElement[];
      const tops = [...new Set(kids.map((k) => k.offsetTop))].sort((a, b) => a - b);
      const row = tops.indexOf(el.offsetTop);
      const rowKids = kids.filter((k) => k.offsetTop === el.offsetTop);
      const col = rowKids.indexOf(el), left = row % 2 === 0;
      const d = (left ? rowKids.length - 1 - col : col) * 110;
      el.style.setProperty('--d', '0ms');
      el.style.opacity = '0';
      el.style.translate = `${left ? '-' : ''}${Math.round(innerWidth * .45)}px 0`;
      el.dataset.d = String(d);
      galPending.push(el);
      return;
    }
    const sib = [...parent.children].indexOf(el) % 4;
    el.style.opacity = '0';
    el.style.transform = el.dataset.from === 'left' ? 'translateX(-60px)' : 'translateY(48px)';
    el.style.transition = `opacity 1.6s cubic-bezier(.25,.1,.25,1) ${sib * 160}ms, transform 1.9s cubic-bezier(.16,1,.3,1) ${sib * 160}ms`;
    io.observe(el);
  });
  requestAnimationFrame(checkGal);
}
function checkGal() {
  galPending = galPending.filter((el) => {
    if (!el.isConnected) return false;
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * .62 && r.bottom > 0) {
      el.style.setProperty('--d', (el.dataset.d || 0) + 'ms');
      el.style.opacity = ''; el.style.translate = '';
      setTimeout(() => el.style.removeProperty('--d'), 2800);
      return false;
    }
    return true;
  });
}

/* ---------- Parallax, laterales y barra de progreso ---------- */
function tick() {
  checkGal();
  const h = innerHeight;
  document.querySelectorAll<HTMLElement>('[data-x]').forEach((el) => {
    const r = el.parentElement!.getBoundingClientRect();
    el.style.transform = `translate3d(${-(r.top + r.height / 2 - h / 2) * parseFloat(el.dataset.x!)}px,0,0)`;
  });
  document.querySelectorAll<HTMLElement>('[data-par]').forEach((el) => {
    const r = el.parentElement!.getBoundingClientRect();
    if (r.bottom < 0 || r.top > h) return;
    el.style.transform = `translate3d(0,${(r.top + r.height / 2 - h / 2) * parseFloat(el.dataset.par!)}px,0)`;
  });
  const p = document.querySelector<HTMLElement>('[data-progress]');
  if (p) { const m = document.documentElement.scrollHeight - h; p.style.transform = `scaleX(${m > 0 ? scrollY / m : 0})`; }
}

/* ---------- Galería: la pieza viaja al centro y crece ---------- */
let hov: HTMLElement | null = null, paused = false, px = 0, py = 0;
function release() {
  if (!hov) return;
  const l = hov.querySelector<HTMLElement>('[data-lift]'); if (l) l.style.transform = '';
  hov.classList.remove('lifted'); hov.parentElement?.classList.remove('has-lift'); hov = null;
}
function lift() {
  const el = hov?.querySelector<HTMLElement>('[data-lift]'); if (!hov || !el) return;
  hov.classList.add('lifted'); hov.parentElement!.classList.add('has-lift');
  const r = hov.getBoundingClientRect();
  const s = Math.max(1, Math.min(innerHeight * .82 / r.height, innerWidth * .6 / r.width));
  el.style.transform = `translate3d(${innerWidth / 2 - (r.left + r.width / 2)}px,${innerHeight / 2 - (r.top + r.height / 2)}px,0) scale(${s})`;
}
function onOver(e: Event) {
  const b = (e.target as Element).closest?.('[data-gal]>*') as HTMLElement | null;
  if (b === hov) return; release(); if (b) { hov = b; lift(); }
}
if (canHover) {
  document.addEventListener('mouseover', (e) => { if (!paused) onOver(e); });
  document.addEventListener('mousemove', (e) => {
    if (!paused) { px = e.clientX; py = e.clientY; return; }
    if (Math.abs(e.clientX - px) + Math.abs(e.clientY - py) < 6) return;
    paused = false; onOver(e);
  });
  // Al hacer scroll la pieza vuelve a su sitio
  addEventListener('scroll', () => { release(); paused = true; }, { passive: true });
}

/* ---------- Vídeo del hero ---------- */
const v = document.querySelector<HTMLVideoElement>('[data-hero-video]');
if (v) {
  const from = +(v.dataset.hideFrom || 0), to = +(v.dataset.hideTo || 0), hd = v.closest('header')!;
  v.addEventListener('timeupdate', () => hd.toggleAttribute('data-hide-title', v.currentTime >= from && v.currentTime < to));
  v.muted = true;
  v.play().catch(() => document.addEventListener('pointerdown', () => v.play(), { once: true }));
}

/* ---------- Arranque ---------- */
initReveal();
addEventListener('lm:relayout', () => { release(); initReveal(); });
if (!reduce) {
  let raf = 0;
  const onScroll = () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; tick(); }); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  tick();
}
