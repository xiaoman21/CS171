// animations.js
(function(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      const el = entry.target;
      if (entry.isIntersecting){
        // Mark visible + stagger paragraphs
        el.classList.add('is-visible');
        // Stagger paragraphs in this section
        const body = el.closest('.slide-container')?.querySelector('.slide-body');
        if (body){
          const paras = Array.from(body.querySelectorAll('p'));
          paras.forEach((p, i)=>{
            // add reveal class if not present
            p.classList.add('reveal');
            p.style.setProperty('--stagger', `${120 + i*120}ms`);
            // trigger visibility if the title is visible
            requestAnimationFrame(()=> p.classList.add('is-visible'));
          });
        }
      }
    });
  }, { root:null, rootMargin:"0px", threshold:0.5 });

  // Titles and first bodies get reveal baseline
  document.querySelectorAll('.slide-title').forEach((h)=>{
    h.classList.add('reveal');
    io.observe(h);
  });
  // Ensure body paragraphs are prepared for stagger (visibility toggled when title reveals)
  document.querySelectorAll('.slide-body p').forEach((p)=>{
    p.classList.add('reveal');
  });
})();
