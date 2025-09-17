// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Lightbox
const lightbox = document.querySelector('#lightbox');
if (lightbox) {
  const img = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.close');
  document.querySelectorAll('.gl').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      img.src = a.getAttribute('href');
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    img.removeAttribute('src');
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeBtn.click();
  });
}

// Small slider auto-rotate (testimonials)
const slider = document.querySelector('.slider');
if (slider) {
  let i = 0;
  const quotes = [...slider.querySelectorAll('blockquote')];
  quotes.forEach((q, idx) => q.style.display = idx === 0 ? 'block' : 'none');
  setInterval(() => {
    quotes[i].style.display = 'none';
    i = (i + 1) % quotes.length;
    quotes[i].style.display = 'block';
  }, 4000);
}
