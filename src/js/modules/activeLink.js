/**
 * modules/activeLink.js
 * Marks the current page's nav link as active.
 */

export function initActiveLink() {
    const currentPage = location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav__menu-link").forEach((link) => {
        const linkPage = link.getAttribute("href")?.split("/").pop() || "";
        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }
    });
}
