/**
 * pages/blog.js
 * Entry point for the blog page.
 * NOTE: styles are loaded via <link> in the HTML head, not imported here.
 */

import { initNav } from "@/js/modules/nav.js";
import { initModals } from "@/js/modules/modals.js";
import { initActiveLink } from "@/js/modules/activeLink.js";
import { initBlog } from "@/js/modules/blog.js";

document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initModals();
    initActiveLink();
    initBlog();
});
