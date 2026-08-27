/**
 * Publishes the embeddable widget runtime at the URL the embed snippet uses.
 *
 * `npm run build:widget` emits `dist-widget/widget.iife.js`, but Cloudflare
 * Pages only deploys `dist/`. Without this copy step the <script src=".../widget.js">
 * in every embed snippet 404s, so the widget never boots on the host page.
 */
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(root, 'dist-widget/widget.iife.js');
const target = resolve(root, 'dist/widget.js');

if (!existsSync(source)) {
    console.error(`[copy-widget] Missing ${source}. Run "npm run build:widget" first.`);
    process.exit(1);
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
console.log('[copy-widget] dist-widget/widget.iife.js -> dist/widget.js');
