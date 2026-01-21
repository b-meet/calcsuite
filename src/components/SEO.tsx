import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    type?: string;
    image?: string;
}

export default function SEO({ title, description, keywords, type = 'website', image }: SEOProps) {
    const location = useLocation();
    const canonicalUrl = `https://calcsuite.com${location.pathname}`; // Replace with actual domain
    const siteName = 'CalcSuite';

    const defaultKeywords = ['calculator', 'online calculator', 'free calculator', 'math', 'finance', 'health'];
    const allKeywords = keywords ? [...defaultKeywords, ...keywords] : defaultKeywords;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: title,
        description: description,
        url: canonicalUrl,
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
        }
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{`${title} | ${siteName}`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords.join(', ')} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteName} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
}
