import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'CalcSuite';
const SITE_URL = 'https://calcsuite.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/pwa-512x512.png`;

type JsonLd = Record<string, unknown>;

interface BreadcrumbItem {
    name: string;
    path: string;
}

interface SEOProps {
    title: string;
    description: string;
    canonicalPath: string;
    jsonLd?: JsonLd | JsonLd[];
    noindex?: boolean;
}

export function toAbsoluteUrl(path: string) {
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${SITE_URL}${normalizedPath}`;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): JsonLd {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: toAbsoluteUrl(item.path),
        })),
    };
}

export default function SEO({ title, description, canonicalPath, jsonLd, noindex = false }: SEOProps) {
    const canonicalUrl = toAbsoluteUrl(canonicalPath);
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const jsonLdEntries = (Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []).filter(Boolean);

    return (
        <Helmet defer={false}>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {noindex && <meta name="robots" content="noindex,follow" />}

            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:image" content={DEFAULT_OG_IMAGE} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

            {jsonLdEntries.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
}
