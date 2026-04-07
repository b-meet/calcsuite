// Deprecated entrypoint kept for backward compatibility.
// Use `node generate-sitemap.js` directly.
console.warn('[DEPRECATED] sitemap-generator.js now proxies to generate-sitemap.js');
await import('./generate-sitemap.js');
