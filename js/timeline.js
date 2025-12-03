document.addEventListener("DOMContentLoaded", () => {

    /**
     * Timeline Story Nodes
     * Each node represents a narrative chapter and maps to one or more slide IDs.
     * A node becomes active when ANY of its associated slides are visible in the viewport.
     */
    const timelineNodes = [
        {
            title: "The Rise of Short-Form Video",
            slideIds: ["slide1"],
            description: "Platforms shift toward fast, visual storytelling."
        },
        {
            title: "A Global Explosion of Reach",
            slideIds: ["slide2"],
            description: "Short-form connects creators and audiences across borders instantly."
        },
        {
            title: "Content Gets Shorter — and Faster",
            slideIds: ["slide3"],
            description: "Viewers sample more, scroll more, and expect immediacy."
        },
        {
            title: "A New Playbook for Media & Brands",
            slideIds: ["slide3"],
            description: "Short clips drive awareness, tease longer stories, and build identity."
        },
        {
            title: "How Channels Compete in the Short-Form Era",
            slideIds: ["slide5"],
            description: "Creators balance Shorts and long-form to maximize views and engagement."
        },
        {
            title: "Momentum Over Time",
            slideIds: ["slide5-5"],
            description: "Monthly view patterns reveal spikes, drops, and the power of consistency."
        },
        {
            title: "Shorts Ignite Long-Form Performance",
            slideIds: ["slide5-6"],
            description: "A well-timed short clip primes the audience for the next big upload."
        },
        {
            title: "Why This Shift Matters",
            slideIds: ["slide6"],
            description: "Short-form reshapes how news spreads, who sees it, and what resonates."
        },
        {
            title: "Where People Now Get Their News",
            slideIds: ["slide7"],
            description: "YouTube, Instagram, and TikTok emerge as dominant gateways for information."
        },
        {
            title: "Campaigns in the Social Era",
            slideIds: ["slide8"],
            description: "Short-form video reshapes political communication and voter outreach."
        },
        {
            title: "A Case Study: Mamdani's Rise",
            slideIds: ["slide8-1", "slide8-3"],
            description: "A candidate leverages short-form to go from <1% to a citywide victory."
        },
        {
            title: "How Young Voters Shifted the Landscape",
            slideIds: ["slide8-2", "slide8-4", "slide8-5"],
            description: "Youth turnout surges — influenced by where they consume media."
        },
        {
            title: "TikTok Strategy & Short-Form Influence",
            slideIds: ["slide8-6", "slide8-6-5"],
            description: "Direct access to young voters becomes a decisive advantage."
        },
        {
            title: "The Big Takeaway",
            slideIds: ["slide8-7"],
            description: "Winning attention on short-form platforms now shapes real-world outcomes."
        },
        {
            title: "Conclusion",
            slideIds: ["slide9", "slide10"],
            description: "Short-form storytelling is the new baseline for influence."
        }
    ];

    const timelineList = document.querySelector(".timeline-list");
    
    if (!timelineList) {
        console.error("Timeline list not found");
        return;
    }

    // Clear any existing timeline items
    timelineList.innerHTML = "";

    // Build timeline nodes dynamically
    timelineNodes.forEach((node, index) => {
        const li = document.createElement("li");
        li.className = "timeline-item";
        
        // Store all slide IDs for this node as a data attribute (comma-separated)
        li.dataset.slides = node.slideIds.join(",");
        
        // Add data-target attribute with the first slide ID (for click navigation)
        li.dataset.target = node.slideIds[0];
        
        // Store node index for easy reference
        li.dataset.nodeIndex = index;
        
        // Set the text content
        li.textContent = node.title;
        
        // Add hover behavior (show description on hover via title attribute)
        li.title = node.description;
        
        timelineList.appendChild(li);
    });

    // Add click behavior: clicking a timeline node scrolls smoothly to the target slide
    document.querySelectorAll('.timeline-item').forEach(node => {
        node.addEventListener('click', () => {
            const id = node.getAttribute('data-target');
            const targetSlide = document.getElementById(id);
            if (targetSlide) {
                targetSlide.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                });
            }
        });
    });

    // Create a map of slide ID -> timeline nodes for efficient lookup
    const slideToNodesMap = new Map();
    timelineNodes.forEach((node, nodeIndex) => {
        node.slideIds.forEach(slideId => {
            if (!slideToNodesMap.has(slideId)) {
                slideToNodesMap.set(slideId, []);
            }
            slideToNodesMap.get(slideId).push(nodeIndex);
        });
    });

    // Intersection Observer to detect when slides enter/exit viewport
    const slides = document.querySelectorAll(".slide-section");
    const observerOptions = { 
        threshold: 0.4,  // Activate when 40% of slide is visible
        rootMargin: "0px"
    };

    // Track which slides are currently visible
    const visibleSlides = new Set();
    
    // Track the last active node to avoid unnecessary scrolling
    let lastActiveNodeIndex = -1;

    /**
     * Scroll active node into view within the timeline list
     * Always centers the active item in the middle of the scrollable area
     */
    function scrollActiveNodeIntoView(activeNodeIndex) {
        if (activeNodeIndex === -1 || activeNodeIndex === lastActiveNodeIndex) {
            return; // No change or no active node
        }
        
        const activeItem = timelineList.children[activeNodeIndex];
        if (!activeItem) return;
        
        // Get the item's position relative to the list
        const itemOffsetTop = activeItem.offsetTop;
        const itemHeight = activeItem.offsetHeight;
        const listHeight = timelineList.clientHeight;
        
        // Calculate scroll position to center the item
        // Center = item top position - half of list height + half of item height
        const scrollPosition = itemOffsetTop - (listHeight / 2) + (itemHeight / 2);
        
        // Ensure scroll position is within valid bounds
        const maxScroll = timelineList.scrollHeight - listHeight;
        const finalScrollPosition = Math.max(0, Math.min(scrollPosition, maxScroll));
        
        timelineList.scrollTo({
            top: finalScrollPosition,
            behavior: 'smooth'
        });
        
        lastActiveNodeIndex = activeNodeIndex;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const slideId = entry.target.id;
            
            if (entry.isIntersecting) {
                visibleSlides.add(slideId);
            } else {
                visibleSlides.delete(slideId);
            }
        });

        // Update active state for all timeline nodes
        const timelineItems = document.querySelectorAll(".timeline-item");
        let currentActiveIndex = -1;
        
        timelineItems.forEach((item, index) => {
            const nodeIndex = parseInt(item.dataset.nodeIndex);
            const node = timelineNodes[nodeIndex];
            
            // Check if ANY of this node's slides are currently visible
            const isActive = node.slideIds.some(slideId => visibleSlides.has(slideId));
            
            item.classList.toggle("active", isActive);
            
            // Track the first active node (prioritize earlier nodes if multiple are active)
            if (isActive && currentActiveIndex === -1) {
                currentActiveIndex = index;
            }
        });
        
        // Auto-scroll to active node if it changed
        if (currentActiveIndex !== -1) {
            scrollActiveNodeIntoView(currentActiveIndex);
        }
    }, observerOptions);

    // Observe all slides
    slides.forEach(slide => {
        if (slide.id) {
            observer.observe(slide);
        }
    });

});

