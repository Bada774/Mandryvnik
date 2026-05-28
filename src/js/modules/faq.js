/**
 * modules/faq.js
 * Accordion behaviour for the FAQ page.
 */

export function initFaq() {
    const items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach((item) => {
        const btn = item.querySelector(".faq-item__question");
        if (!btn) return;

        btn.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");
            items.forEach((i) => i.classList.remove("open"));
            if (!isOpen) item.classList.add("open");
        });
    });
}
