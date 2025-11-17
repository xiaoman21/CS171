// =====================================================
// Navbar and Scroll Progress
// =====================================================

(function() {
  'use strict';

  // Scroll Progress Bar
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.insertBefore(progressBar, document.body.firstChild);

  function updateProgress() {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / height) * 100;
    progressBar.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateProgress);
  updateProgress();

  // Navbar Active Link Highlighting
  const navLinks = document.querySelectorAll('.navbar-links a');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 64; // navbar height
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
})();

