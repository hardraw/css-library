// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            output: {
                assetFileNames: "assets/[name].[ext]",
                entryFileNames: "assets/[name].js",
                chunkFileNames: "assets/[name].js",
            },
        },
    },
})