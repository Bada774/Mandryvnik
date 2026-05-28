/**
 * modules/stories.js
 * Scroll-triggered reveal animation for story items.
 * Items start with .hidden; IntersectionObserver removes it.
 */

export function initStoriesReveal() {
    const items = document.querySelectorAll(".section-stories__item.hidden");
    if (!items.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("hidden");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 },
    );

    items.forEach((item) => observer.observe(item));
}
