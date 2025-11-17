// navigation.js
(function(){
  const sections = Array.from(document.querySelectorAll('section.slide-section'));
  const dots = Array.from(document.querySelectorAll('.navigation_dots li'));
  const progress = document.querySelector('.scroll-progress');

  // Map dots to sections by order
  dots.forEach((dot, i)=>{
    dot.tabIndex = 0;
    dot.addEventListener('click', ()=>{
      sections[i].scrollIntoView({ behavior:'smooth', block:'start' });
    });
    dot.addEventListener('keydown', (e)=>{
      if (e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        sections[i].scrollIntoView({ behavior:'smooth', block:'start' });
      }
    });
  });

  // Active dot via IntersectionObserver
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting){
        const idx = sections.indexOf(entry.target);
        dots.forEach(d=>d.classList.remove('selected'));
        if (dots[idx]) dots[idx].classList.add('selected');
      }
    });
  }, { root:null, threshold:0.6 });

  sections.forEach(s=>io.observe(s));

  // Scroll progress (of main container)
  const main = document.querySelector('main');
  function updateProgress(){
    const max = main.scrollHeight - main.clientHeight;
    const scrolled = Math.max(0, Math.min(1, main.scrollTop / max));
    if (progress) progress.style.width = `${scrolled * 100}%`;
  }
  main.addEventListener('scroll', updateProgress, { passive:true });
  updateProgress();
})();
