const header = document.querySelector('.site-header');
const progress = document.querySelector('.scroll-progress');
const hero = document.querySelector('.hero-image');
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function onScroll() {
  const scrollTop = window.scrollY || 0;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  header.classList.toggle('is-scrolled', scrollTop > 40);
  progress.style.width = `${maxScroll > 0 ? Math.min(100, (scrollTop / maxScroll) * 100) : 0}%`;
  if (!reducedMotion.matches && scrollTop < window.innerHeight * 1.25) {
    hero.style.setProperty('--hero-shift', `${Math.min(80, scrollTop * .085)}px`);
  }
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => { onScroll(); ticking = false; });
    ticking = true;
  }
}, { passive: true });
onScroll();

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1, rootMargin: '0px 0px -25px 0px' });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

function setMenu(open) {
  mobileMenu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  document.body.classList.toggle('menu-open', open);
}
menuButton.addEventListener('click', () => setMenu(mobileMenu.hidden));
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
