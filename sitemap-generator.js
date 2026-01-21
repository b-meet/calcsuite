
// This is a simple node script to generate sitemap.xml
// Run with: node sitemap-generator.js

import fs from 'fs';
import path from 'path';

// Manual registry since we can't easily import TS in Node without setup
// Ideally this would reuse the registry, but simple is better for a standalone script
const calculators = [
    'basic-math', 'scientific', 'triangle', 'fraction', 'percentage',
    'mortgage', 'loan', 'auto-loan', 'investment', 'retirement', 'salary',
    'bmi', 'calorie', 'body-fat', 'bmr', 'ideal-weight', 'pregnancy',
    'age', 'gpa', 'password', 'converter', 'random'
];

const categories = ['financial', 'health', 'math', 'other', 'basic'];

const baseUrl = 'https://calcsuite.com';
const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

// Category Pages
categories.forEach(cat => {
    sitemap += `
  <url>
    <loc>${baseUrl}/category/${cat}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

// Calculator Pages
calculators.forEach(id => {
    sitemap += `
  <url>
    <loc>${baseUrl}/calculator/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
});

sitemap += `
</urlset>`;

// Ensure public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml`);

console.log('✅ sitemap.xml and robots.txt generated successfully in /public');
