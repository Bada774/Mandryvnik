/**
 * modules/blog.js
 * Handles the blog page:
 *  - Category filter tab switching + card visibility
 *  - Pagination button states
 */

export function initBlog() {
    initFilters();
    initPagination();
}

// Filter tabs
function initFilters() {
    const btns = document.querySelectorAll('.blog-filters__btn');
    const cards = document.querySelectorAll('.blog-card');
    if (!btns.length) return;

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            // Update active button
            btns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Show / hide cards
            cards.forEach((card) => {
                const match = filter === 'all' || card.dataset.category === filter;
                card.style.display = match ? '' : 'none';
            });
        });
    });
}

// Pagination
function initPagination() {
    const pages = document.querySelectorAll('.blog-pagination__page');
    const prevBtn = document.querySelector('.blog-pagination__btn--prev');
    const nextBtn = document.querySelector('.blog-pagination__btn--next');
    if (!pages.length) return;

    let current = 0;

    function update() {
        pages.forEach((p, i) => p.classList.toggle('active', i === current));
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === pages.length - 1;
    }

    pages.forEach((page, i) => {
        page.addEventListener('click', () => {
            current = i;
            update();
        });
    });

    prevBtn.addEventListener('click', () => {
        if (current > 0) { current--; update(); }
    });
    nextBtn.addEventListener('click', () => {
        if (current < pages.length - 1) { current++; update(); }
    });

    update();
}
