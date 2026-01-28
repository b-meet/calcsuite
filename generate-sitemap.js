
import fs from 'fs';
import path from 'path';
import { calculatorRegistry } from './src/calculators/registry';

const SITEMAP_PATH = path.resolve(__dirname, 'public/sitemap.xml');
const DOMAIN = 'https://calcsuite.in';

const generateSitemap = () => {
    const urls = [
        { loc: DOMAIN, priority: 1.0, changefreq: 'daily' },
        { loc: `${DOMAIN}/terms`, priority: 0.3, changefreq: 'monthly' },
        { loc: `${DOMAIN}/privacy`, priority: 0.3, changefreq: 'monthly' },
    ];

    // Add Category Pages
    const categories = Array.from(new Set(calculatorRegistry.map(c => c.category)));
    categories.forEach(category => {
        urls.push({
            loc: `${DOMAIN}/category/${category}`,
            priority: 0.8,
            changefreq: 'weekly'
        });
    });

    // Add Calculator Pages
    calculatorRegistry.forEach(calc => {
        urls.push({
            loc: `${DOMAIN}/calculator/${calc.id}`,
            priority: calc.popular ? 0.9 : 0.7, // Higher priority for popular calculators
            changefreq: 'weekly'
        });
    });

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `    <url>
        <loc>${url.loc}</loc>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log(`✅ Sitemap generated at ${SITEMAP_PATH} with ${urls.length} URLs`);
};

generateSitemap();
