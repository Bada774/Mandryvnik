/**
 * pages/index.js
 * NOTE: styles are loaded via <link> in the HTML head, not imported here,
 * so they are render-blocking and appear before any JS executes.
 */

import { initNav } from "@/js/modules/nav.js";
import { initModals } from "@/js/modules/modals.js";
import { initActiveLink } from "@/js/modules/activeLink.js";
import { initSlider } from "@/js/modules/slider.js";
import { initStoriesReveal } from "@/js/modules/stories.js";

document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initModals();
    initActiveLink();
    initSlider();
    initStoriesReveal();
});
