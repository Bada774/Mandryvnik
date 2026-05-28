/**
 * modules/nav.js
 * Hamburger menu toggle for mobile navigation.
 */

export function initNav() {
    const burger = document.getElementById("navBurger");
    const menu = document.getElementById("navMenu");
    if (!burger || !menu) return;

    burger.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        burger.classList.toggle("active", isOpen);
        burger.setAttribute("aria-expanded", String(isOpen));
    });

    // Close on nav-link click (smooth scroll / page navigation)
    menu.addEventListener("click", (e) => {
        if (e.target.closest(".nav__menu-link")) {
            menu.classList.remove("open");
            burger.classList.remove("active");
            burger.setAttribute("aria-expanded", "false");
        }
    });

    // Close on resize back to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            menu.classList.remove("open");
            burger.classList.remove("active");
            burger.setAttribute("aria-expanded", "false");
        }
    });
}
