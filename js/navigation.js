// =====================================================
// NAVIGATION SYSTEM (Based on MBTI-Music)
// =====================================================

const navigationDots = document.querySelectorAll('.navigation_dots li');
const sections = document.querySelectorAll('.section1, .section2, .section3, .section4');
const totalHeight = document.documentElement.scrollHeight;

// Reset the navigation dots on each scroll
function resetNavigationDots() {
    navigationDots.forEach(dot => {
        dot.classList.remove('selected');
    });
}

window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    resetNavigationDots();

    // Check each section
    sections.forEach((section, index) => {
        const nextSectionTop = (index < sections.length - 1)
            ? sections[index + 1].offsetTop - windowHeight / 2
            : totalHeight;

        if (scrollTop >= section.offsetTop - windowHeight / 2 && scrollTop < nextSectionTop) {
            navigationDots[index].classList.add('selected');
        }
    });
});

// Click navigation
navigationDots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        const buffer = 50;
        const targetTop = Math.max(0, sections[index].offsetTop - buffer);

        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    });
});