/**
 * modules/modals.js
 * Modal open / close logic using event delegation.
 *
 * Trigger classes:
 *   .js-open-login   → opens #modalLogin
 *   .js-open-signup  → opens #modalSignup
 *   .modal__close    → closes any open modal
 */

function openModal(id) {
    const modal = document.getElementById(id);
    const overlay = document.getElementById("overlay");
    if (!modal || !overlay) return;

    document
        .querySelectorAll(".modal.visible")
        .forEach((m) => m.classList.remove("visible"));

    modal.classList.add("visible");
    overlay.classList.add("visible");
    document.body.style.overflowY = "hidden";

    const firstFocusable = modal.querySelector("input, button, a");
    if (firstFocusable) firstFocusable.focus();
}

function closeAllModals() {
    document
        .querySelectorAll(".modal.visible")
        .forEach((m) => m.classList.remove("visible"));
    const overlay = document.getElementById("overlay");
    if (overlay) overlay.classList.remove("visible");
    document.body.style.overflowY = "";
}

export function initModals() {
    document.addEventListener("click", (e) => {
        if (e.target.closest(".js-open-login")) {
            e.preventDefault();
            openModal("modalLogin");
            return;
        }
        if (e.target.closest(".js-open-signup")) {
            e.preventDefault();
            openModal("modalSignup");
            return;
        }
        if (e.target.closest(".modal__close")) {
            closeAllModals();
            return;
        }
    });

    const overlay = document.getElementById("overlay");
    if (overlay) overlay.addEventListener("click", closeAllModals);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAllModals();
    });
}
