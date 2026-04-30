import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REGISTRY_PATH = path.resolve(__dirname, 'src/calculators/registry.tsx');
const REFS_PATH = path.resolve(__dirname, 'src/constants/calculatorReferences.ts');
const BLOG_POSTS_PATH = path.resolve(__dirname, 'src/constants/blogPosts.ts');
const ALTERNATIVES_PATH = path.resolve(__dirname, 'src/content/alternatives/data.tsx');

const PUBLIC_SITEMAP_PATH = path.resolve(__dirname, 'public/sitemap.xml');
const PUBLIC_URLS_TXT_PATH = path.resolve(__dirname, 'public/urls.txt');
const PUBLIC_ROBOTS_PATH = path.resolve(__dirname, 'public/robots.txt');
const PUBLIC_REDIRECTS_PATH = path.resolve(__dirname, 'public/_redirects');

const DIST_SITEMAP_PATH = path.resolve(__dirname, 'dist/sitemap.xml');
const DIST_URLS_TXT_PATH = path.resolve(__dirname, 'dist/urls.txt');
const DIST_ROBOTS_PATH = path.resolve(__dirname, 'dist/robots.txt');
const DIST_REDIRECTS_PATH = path.resolve(__dirname, 'dist/_redirects');

const DOMAIN = 'https://calcsuite.in';
const LASTMOD = new Date().toISOString().slice(0, 10);

const STATIC_ROUTES = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/terms', priority: 0.3, changefreq: 'monthly' },
    { path: '/privacy', priority: 0.3, changefreq: 'monthly' },
    { path: '/about', priority: 0.5, changefreq: 'monthly' },
    { path: '/contact', priority: 0.5, changefreq: 'monthly' },
    { path: '/widget-generator', priority: 0.6, changefreq: 'monthly' },
    { path: '/directory', priority: 0.9, changefreq: 'weekly' },
    { path: '/resources', priority: 0.9, changefreq: 'weekly' },
    { path: '/brain-training', priority: 0.7, changefreq: 'weekly' },
    { path: '/brain-training/kenken', priority: 0.7, changefreq: 'weekly' },
];

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

function normalizePath(routePath) {
    if (!routePath || routePath === '/') {
        return '/';
    }

    const withLeadingSlash = routePath.startsWith('/') ? routePath : `/${routePath}`;
    const withoutTrailingSlashes = withLeadingSlash.replace(/\/+$/, '');
    return `${withoutTrailingSlashes}/`;
}

function toAbsoluteUrl(routePath) {
    return `${DOMAIN}${normalizePath(routePath)}`;
}

function addUrl(routeMap, { path: routePath, priority, changefreq }) {
    const normalizedPath = normalizePath(routePath);

    if (routeMap.has(normalizedPath)) {
        return;
    }

    routeMap.set(normalizedPath, {
        path: normalizedPath,
        loc: toAbsoluteUrl(normalizedPath),
        priority: priority.toFixed(1),
        changefreq,
        lastmod: LASTMOD,
    });
}

function extractRegistryData() {
    const content = readFile(REGISTRY_PATH);
    const lines = content.split(/\r?\n/);
    const categories = new Set();
    const calculatorIds = new Set();
    const scenarioRoutes = [];
    let currentCalculatorId = null;
    let inScenarios = false;

    for (const rawLine of lines) {
        const line = rawLine.trim();
        const categoryMatch = line.match(/^category:\s*'([^']+)'/);
        if (categoryMatch) {
            categories.add(categoryMatch[1]);
        }

        if (line.startsWith('scenarios: [')) {
            inScenarios = true;
            continue;
        }

        if (inScenarios && (line === '],' || line === ']')) {
            inScenarios = false;
            continue;
        }

        const idMatch = line.match(/^id:\s*'([^']+)'/);
        if (!idMatch) {
            continue;
        }

        if (inScenarios && currentCalculatorId) {
            scenarioRoutes.push({ calcId: currentCalculatorId, scenarioId: idMatch[1] });
            continue;
        }

        currentCalculatorId = idMatch[1];
        calculatorIds.add(currentCalculatorId);
    }

    return {
        categories: Array.from(categories),
        calculatorIds: Array.from(calculatorIds),
        scenarioRoutes,
    };
}

function extractToolRoutes() {
    const content = readFile(REFS_PATH);
    const lines = content.split(/\r?\n/);
    const toolRoutes = [];
    let currentCategory = null;

    for (const rawLine of lines) {
        const line = rawLine.trim();
        const categoryMatch = line.match(/^([A-Z_]+):\s*\{$/);
        if (categoryMatch) {
            currentCategory = categoryMatch[1].toLowerCase();
            continue;
        }

        if (currentCategory && (line === '},' || line === '}')) {
            currentCategory = null;
            continue;
        }

        if (!currentCategory) {
            continue;
        }

        const toolMatch = line.match(/^([A-Z_]+):\s*"https?:\/\//);
        if (toolMatch) {
            toolRoutes.push(`/tools/${currentCategory}/${toolMatch[1].toLowerCase()}`);
        }
    }

    return toolRoutes;
}

function extractIds(filePath) {
    const content = readFile(filePath);
    const matches = content.matchAll(/^\s*id:\s*'([^']+)'/gm);
    return Array.from(new Set(Array.from(matches, (match) => match[1])));
}

function buildSitemapXml(urls) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
        .map(
            (url) => `    <url>\n        <loc>${url.loc}</loc>\n        <lastmod>${url.lastmod}</lastmod>\n        <changefreq>${url.changefreq}</changefreq>\n        <priority>${url.priority}</priority>\n    </url>`
        )
        .join('\n')}\n</urlset>\n`;
}

function buildRedirects(paths) {
    const routeRules = [...paths]
        .filter((routePath) => routePath !== '/')
        .sort((a, b) => b.length - a.length || a.localeCompare(b))
        .flatMap((routePath) => {
            const target = `${routePath}index.html`.replace(/\/+/g, '/');
            const barePath = routePath.endsWith('/') ? routePath.slice(0, -1) : routePath;
            return [
                `${routePath} ${target} 200`,
                `${barePath} ${routePath} 301`
            ];
        });

    return [
        '/tools /directory 301',
        '/salary /calculator/salary 301',
        '/category/basic /category/math 301',
        '/calculator/health /category/health 301',
        '/calculator/basic /calculator/basic-math 301',
        '/calculator/emi /calculator/india-emi 301',
        '/calculator/financial /category/financial 301',
        '/calculator/health /category/health 301',
        '/calculator/math /category/math 301',
        '/calculator/other /category/other 301',
        '/calculator/india /category/india 301',
        '/calculator/converter /calculator/unit-converter 301',
        '/tools/investment /category/financial 301',
        '/tools/banking_loans /category/india 301',
        '/tools/taxation /category/india 301',
        '/tools/misc /category/other 301',
        '/tools/retirement_salary /category/financial 301',
        '/calculator/india-salary/:scenario /salary/:scenario 301',
        '/alternatives /resources 301',
        '/alternatives/ /resources 301',
        ...routeRules,
        '/404 /404.html 404',
        '/404/ /404.html 404',
        '/* /404.html 404',
        '',
    ].join('\n');
}

function writeFileSync(targetPath, content) {
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, content);
}

function syncToDistIfPresent(targetPath, content) {
    const distDir = path.resolve(__dirname, 'dist');
    if (!fs.existsSync(distDir)) {
        return;
    }

    writeFileSync(targetPath, content);
}

function generateSitemap() {
    console.log('Starting sitemap and route manifest generation...');

    const routeMap = new Map();
    for (const route of STATIC_ROUTES) {
        addUrl(routeMap, route);
    }

    const { categories, calculatorIds, scenarioRoutes } = extractRegistryData();
    for (const category of categories) {
        addUrl(routeMap, {
            path: `/category/${category}`,
            priority: 0.8,
            changefreq: 'weekly',
        });
    }

    for (const calculatorId of calculatorIds) {
        addUrl(routeMap, {
            path: `/calculator/${calculatorId}`,
            priority: ['india-gst', 'india-emi', 'sip', 'india-tax'].includes(calculatorId) ? 1.0 : 0.7,
            changefreq: 'weekly',
        });
    }

    for (const { calcId, scenarioId } of scenarioRoutes) {
        const scenarioPath = calcId === 'india-salary'
            ? `/salary/${scenarioId}`
            : `/calculator/${calcId}/${scenarioId}`;

        addUrl(routeMap, {
            path: scenarioPath,
            priority: calcId === 'india-salary' ? 0.95 : 0.75,
            changefreq: 'weekly',
        });
    }

    for (const toolRoute of extractToolRoutes()) {
        addUrl(routeMap, {
            path: toolRoute,
            priority: 0.8,
            changefreq: 'weekly',
        });
    }

    for (const resourceId of extractIds(BLOG_POSTS_PATH)) {
        addUrl(routeMap, {
            path: `/resources/${resourceId}`,
            priority: 0.9,
            changefreq: 'monthly',
        });
    }

    for (const alternativeId of extractIds(ALTERNATIVES_PATH)) {
        addUrl(routeMap, {
            path: `/alternatives/${alternativeId}`,
            priority: 0.8,
            changefreq: 'monthly',
        });
    }

    const urls = Array.from(routeMap.values()).sort((a, b) => a.path.localeCompare(b.path));
    const routePaths = urls.map((url) => url.path);

    const sitemapContent = buildSitemapXml(urls);
    const urlsContent = `${urls.map((url) => url.loc).join('\n')}\n`;
    const robotsContent = `User-agent: *\nAllow: /\nDisallow: /cdn-cgi/\n\nSitemap: ${DOMAIN}/sitemap.xml\n`;
    const redirectsContent = buildRedirects(routePaths);

    writeFileSync(PUBLIC_SITEMAP_PATH, sitemapContent);
    writeFileSync(PUBLIC_URLS_TXT_PATH, urlsContent);
    writeFileSync(PUBLIC_ROBOTS_PATH, robotsContent);
    writeFileSync(PUBLIC_REDIRECTS_PATH, redirectsContent);

    syncToDistIfPresent(DIST_SITEMAP_PATH, sitemapContent);
    syncToDistIfPresent(DIST_URLS_TXT_PATH, urlsContent);
    syncToDistIfPresent(DIST_ROBOTS_PATH, robotsContent);
    syncToDistIfPresent(DIST_REDIRECTS_PATH, redirectsContent);

    console.log(`Generated ${urls.length} indexable routes.`);
    console.log(`Sitemap: ${PUBLIC_SITEMAP_PATH}`);
    console.log(`Redirects: ${PUBLIC_REDIRECTS_PATH}`);
}

generateSitemap();
