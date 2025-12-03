document.addEventListener("DOMContentLoaded", () => {

    // All transitions tied to slide IDs
    const transitionData = [
        { slide: "slide2", text: "The rise of short-form isn't just about convenience — it's about scale." },
        { slide: "slide3", text: "As global audiences embrace fast content, platforms shift toward shorter videos." },
        { slide: "slide4", text: "When attention patterns change, creators must rethink how they tell stories." },
        { slide: "slide5", text: "Which strategies actually win? Let's compare how top creators mix short vs long." },
        { slide: "slide5-5", text: "But success on YouTube is volatile — attention surges and collapses each month." },
        { slide: "slide5-6", text: "Shorts don't replace long-form — they fuel its biggest spikes." },
        { slide: "slide6", text: "Short-form is now transforming how people get information — even news." },
        { slide: "slide7", text: "Young audiences lead the shift, reshaping modern information flows." },
        { slide: "slide8", text: "Even campaigns adapt — politics now speaks the language of short video." },
        { slide: "slide8-5", text: "Mastery of short-form is now a core communication skill." },
        { slide: "slide9", text: "When attention moves, power moves with it. That's why this shift matters." },
        { slide: "slide10", text: "Short-form has changed storytelling, journalism, and civic life — permanently." }
    ];

    const timelineList = document.querySelector(".timeline-list");

    // Build nodes
    transitionData.forEach(item => {
        const li = document.createElement("li");
        li.className = "timeline-item";
        li.dataset.slide = item.slide;
        li.textContent = item.text;
        timelineList.appendChild(li);
    });

    // Scroll sync observer
    const slides = document.querySelectorAll(".slide-section");
    const options = { threshold: 0.4 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll(".timeline-item").forEach(node => {
                    node.classList.toggle("active", node.dataset.slide === entry.target.id);
                });
            }
        });
    }, options);

    slides.forEach(slide => observer.observe(slide));

});

