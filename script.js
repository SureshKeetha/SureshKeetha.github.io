// typing effect
function typeText(el, text, speed=40) {
  let i=0;
  el.textContent = '';
  const t = setInterval(()=> {
    el.textContent += text.charAt(i);
    i++;
    if(i>=text.length) clearInterval(t);
  }, speed);
}

document.addEventListener('DOMContentLoaded', ()=> {
  // hero typing
  const heroTyping = document.querySelector('.typing');
  if(heroTyping) {
    const txt = heroTyping.getAttribute('data-text') || 'Aspiring Data Analyst & Frontend Developer';
    typeText(heroTyping, txt, 40);
  }

  // progressive skill fills when in viewport
  const fills = document.querySelectorAll('.skill-fill');
  const observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const el = entry.target;
        const width = getComputedStyle(el).getPropertyValue('--fill') || el.style.width || '80%';
        const percent = parseFloat(width);
        // ensure percentage is valid
        if(!isNaN(percent)) el.style.transform = `scaleX(${percent/100})`;
        observer.unobserve(el);
      }
    });
  }, {threshold:0.25});

  fills.forEach(f => observer.observe(f));

  // menu toggle for mobile
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.querySelector('.nav');
  menuToggle && menuToggle.addEventListener('click', ()=> {
    if(nav.style.display === 'flex') {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'rgba(0,0,0,0.9)';
      nav.style.padding = '12px';
      nav.style.position = 'absolute';
      nav.style.right = '16px';
      nav.style.top = '64px';
      nav.style.borderRadius = '8px';
    }
  });
});
