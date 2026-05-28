/**
 * modules/fontsLoaded.js
 * Waits for the custom fonts to be ready, then reveals the page.
 * The body starts with visibility:hidden in CSS; this adds .fonts-loaded
 * to flip it visible — preventing a flash of unstyled/wrong-font content.
 */

export function initFontsLoaded() {
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            document.body.classList.add("fonts-loaded");
        });
    } else {
        // Fallback for browsers without Font Loading API
        document.body.classList.add("fonts-loaded");
    }
}
