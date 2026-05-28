/**
 * modules/slider.js
 * Initialises the destinations Swiper slider.
 */
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function initSlider() {
    const el = document.querySelector(".swiper");
    if (!el) return;

    new Swiper(".swiper", {
        modules: [Navigation, Pagination],
        loop: true,
        loopAddBlankSlides: false,
        speed: 500,
        spaceBetween: 24,
        centeredSlides: false,

        breakpoints: {
            0: { slidesPerView: 1 },
            560: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
    });
}
