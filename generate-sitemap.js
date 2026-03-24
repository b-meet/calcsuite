import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REGISTRY_PATH = path.resolve(__dirname, 'src/calculators/registry.tsx');
const REFS_PATH = path.resolve(__dirname, 'src/constants/calculatorReferences.ts');
const RESOURCES_PATH = path.resolve(__dirname, 'src/pages/Resources.tsx');
const SITEMAP_PATH = path.resolve(__dirname, 'public/sitemap.xml');
const URLS_TXT_PATH = path.resolve(__dirname, 'public/urls.txt');
const DOMAIN = 'https://calcsuite.in';

const generateSitemap = () => {
    console.log('Starting Sitemap and URLs generator...');
    
    // 1. Static Core Pages
    const urls = [
        { loc: DOMAIN + '/', priority: 1.0, changefreq: 'daily' },
        { loc: `${DOMAIN}/terms`, priority: 0.3, changefreq: 'monthly' },
        { loc: `${DOMAIN}/privacy`, priority: 0.3, changefreq: 'monthly' },
        { loc: `${DOMAIN}/about`, priority: 0.5, changefreq: 'monthly' },
        { loc: `${DOMAIN}/contact`, priority: 0.5, changefreq: 'monthly' },
        { loc: `${DOMAIN}/widget-generator`, priority: 0.6, changefreq: 'monthly' },
        { loc: `${DOMAIN}/directory`, priority: 0.9, changefreq: 'weekly' },
        { loc: `${DOMAIN}/resources`, priority: 0.9, changefreq: 'weekly' },
    ];

    // 2. Category Pages
    const categories = ['health', 'financial', 'math', 'basic', 'other', 'india'];
    categories.forEach(category => {
        urls.push({
            loc: `${DOMAIN}/category/${category}`,
            priority: 0.8,
            changefreq: 'weekly'
        });
    });

    // 3. Brand Heist / Alternatives
    const alternatives = [
        'calculator-net', 'cleartax-calculators', 'groww', 'omni-calculator', 
        'calculator-1', 'calculatorsoup', 'gigacalculator', 'quicko', 'taxbuddy', 'paisabazaar'
    ];
    alternatives.forEach(alt => {
        urls.push({
            loc: `${DOMAIN}/alternatives/${alt}`,
            priority: 0.8,
            changefreq: 'monthly'
        });
    });

    // 4. Calculators (from registry.tsx)
    try {
        const registryContent = fs.readFileSync(REGISTRY_PATH, 'utf-8');
        const lines = registryContent.split('\n');
        const calcIds = new Set();
        
        lines.forEach(line => {
            if (line.startsWith("        id: '")) {
                const parts = line.split("id: '");
                if (parts.length > 1) {
                    const id = parts[1].split("'")[0];
                    if (id && !categories.includes(id) && id !== 'basic-math' && !['initialState', 'scenarios', 'component', 'content'].includes(id)) {
                        calcIds.add(id);
                    }
                    if (id === 'basic-math') calcIds.add(id);
                }
            }
        });

        Array.from(calcIds).forEach(calcId => {
            urls.push({
                loc: `${DOMAIN}/calculator/${calcId}`,
                priority: ['india-gst', 'india-emi', 'sip', 'india-tax'].includes(calcId) ? 1.0 : 0.7,
                changefreq: 'weekly'
            });
        });
        console.log(`Parsed ${calcIds.size} calculators.`);
    } catch (e) {
        console.error('Could not parse calculators:', e.message);
    }

    // 5. SEO Hubs (from calculatorReferences.ts)
    try {
        const refsContent = fs.readFileSync(REFS_PATH, 'utf-8');
        const lines = refsContent.split('\n');
        let currentCat = '';
        
        lines.forEach(line => {
            if (line.includes(':{') || line.includes(': {')) {
                const parts = line.split(':');
                currentCat = parts[0].trim().toLowerCase();
            } else if (currentCat && line.includes(': "') && line.includes('http')) {
                const slugPart = line.trim().split(':')[0];
                const slug = slugPart.trim().toLowerCase();
                if (slug && !slug.includes('{') && !slug.includes('}')) {
                    urls.push({
                        loc: `${DOMAIN}/tools/${currentCat}/${slug}`,
                        priority: 0.8,
                        changefreq: 'weekly'
                    });
                }
            }
        });
        console.log(`Parsed SEO Hub tools.`);
    } catch (e) {
        console.error('Could not parse references:', e.message);
    }

    // 6. Resources / Guides (from Resources.tsx)
    try {
        const resContent = fs.readFileSync(RESOURCES_PATH, 'utf-8');
        const lines = resContent.split('\n');
        
        lines.forEach(line => {
            if (line.includes("id: '")) {
                const parts = line.split("id: '");
                if (parts.length > 1) {
                    const id = parts[1].split("'")[0];
                    urls.push({
                        loc: `${DOMAIN}/resources/${id}`,
                        priority: 0.9,
                        changefreq: 'monthly'
                    });
                }
            }
        });
        console.log(`Parsed Resource guides.`);
    } catch (e) {
        console.error('Could not parse resources:', e.message);
    }

    // --- WRITE SITEMAP.XML ---
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `    <url>
        <loc>${url.loc}</loc>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log(`✅ XML Sitemap generated at ${SITEMAP_PATH} with ${urls.length} URLs`);

    // --- WRITE URLS.TXT ---
    // A clean line-by-line dump of just the raw URLs
    const txtContent = urls.map(u => u.loc).join('\n');
    fs.writeFileSync(URLS_TXT_PATH, txtContent);
    console.log(`✅ ${URLS_TXT_PATH} generated with ${urls.length} URLs`);
};

generateSitemap();
