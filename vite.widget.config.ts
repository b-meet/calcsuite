
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist-widget',
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/widget/index.tsx'),
            name: 'CalcSuiteWidget',
            fileName: 'widget',
            formats: ['iife'], // Compile to a single Immediately Invoked Function Expression for easy script inclusion
        },
        rollupOptions: {
            // Externalize react to avoid bundling it if user already has it? 
            // No, for a standalone widget, we should bundle React unless we expect the host to provide it.
            // Usually widgets should be self-contained to avoid version conflicts.
            // However, bundling React increases size. 
            // Let's bundle it for simplicity and reliability first.
            output: {
                extend: true,
                globals: {
                    // If we were externalizing...
                }
            }
        },
        cssCodeSplit: false, // Force CSS into the JS file if possible or single CSS file.
        // But we want to inject styles into Shadow DOM, so we might not need this if we use ?inline imports.
    },
    define: {
        'process.env.NODE_ENV': '"production"'
    }
});
