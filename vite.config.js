import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

const base = "/Mandryvnik/";

export default defineConfig({
    base,
    root: "src",
    publicDir: "../public",

    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, "src/partials"),
            context: { base },
        }),
    ],

    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
                faq: resolve(__dirname, "src/pages/faq.html"),
                blog: resolve(__dirname, "src/pages/blog.html"),
            },
        },
    },

    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
});
