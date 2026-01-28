
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REGISTRY_PATH = path.resolve(__dirname, 'src/calculators/registry.tsx');
const SITEMAP_PATH = path.resolve(__dirname, 'public/sitemap.xml');
const DOMAIN = 'https://calcsuite.in';

const generateSitemap = () => {
    // Read registry.tsx as text to avoid compiling TS/JSX
    let registryContent;
    try {
        registryContent = fs.readFileSync(REGISTRY_PATH, 'utf-8');
    } catch (e) {
        console.error('Could not read registry.tsx:', e);
        return;
    }

    // Extract Calculator IDs using Regex
    // Looking for patterns like: id: 'bmi'
    const calculatorMatches = registryContent.matchAll(/id:\s*'([^']+)'/g);

    // Extract Popular IDs using simple text search or regex context
    // Since regex context is hard, let's just assume popular calculators for now or try a smarter regex
    // We can match the whole block for each calculator roughly

    const urls = [
        { loc: DOMAIN, priority: 1.0, changefreq: 'daily' },
        { loc: `${DOMAIN}/terms`, priority: 0.3, changefreq: 'monthly' },
        { loc: `${DOMAIN}/privacy`, priority: 0.3, changefreq: 'monthly' },
    ];

    // Add Category Pages
    const categories = ['health', 'financial', 'math', 'basic', 'other', 'india'];
    categories.forEach(category => {
        urls.push({
            loc: `${DOMAIN}/category/${category}`,
            priority: 0.8,
            changefreq: 'weekly'
        });
    });

    const calculators = [];
    const blockRegex = /{\s*id:\s*'([^']+)'[\s\S]*?}/g;
    let match;

    while ((match = blockRegex.exec(registryContent)) !== null) {
        const block = match[0];
        const id = match[1];
        const isPopular = block.includes('popular: true');
        calculators.push({ id, isPopular });
    }

    calculators.forEach(calc => {
        urls.push({
            loc: `${DOMAIN}/calculator/${calc.id}`,
            priority: calc.isPopular ? 0.9 : 0.7,
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
