// ---------- Hamburger menu ----------
const menuBtn = document.querySelector('.menu-btn');
const overlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.menu-close');
function closeMenu(){ overlay && overlay.classList.remove('open'); }
menuBtn && menuBtn.addEventListener('click', () => overlay.classList.add('open'));
closeBtn && closeBtn.addEventListener('click', closeMenu);
overlay && overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// ---------- Videos: loop + play when scrolled into view, pause when out ----------
const videos = document.querySelectorAll('video[data-scrollplay]');
const vObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const v = entry.target;
    if (entry.isIntersecting) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  });
}, { threshold: 0.25 });
videos.forEach(v => {
  v.muted = true;          // required for autoplay
  v.loop = true;           // endless loop
  v.playsInline = true;
  vObserver.observe(v);
});

// ---------- Scroll reveal ----------
const rObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => rObserver.observe(el));
