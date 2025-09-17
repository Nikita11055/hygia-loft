// Mobile Navigation & minimal Slider
document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(btn && nav){
    btn.addEventListener('click',()=>{
      const exp = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!exp));
      nav.style.display = exp ? 'none' : 'flex';
    });
  }
});