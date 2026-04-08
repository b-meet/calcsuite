import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
    type: 'SoftwareApplication' | 'WebApplication' | 'FAQPage' | 'Article' | 'BreadcrumbList' | 'HowTo' | 'Organization' | 'ImageObject' | 'VideoObject';
    data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
    let jsonLd = {};

    if (type === 'SoftwareApplication' || type === 'WebApplication') {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': type,
            name: data.name,
            description: data.description,
            applicationCategory: data.category, // e.g., 'FinanceApplication', 'HealthApplication'
            operatingSystem: 'Any',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
            },
            featureList: data.features, // Array of strings
            screenshot: data.screenshot,
        };
    } else if (type === 'FAQPage') {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.map((faq: { question: string; answer: string }) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        };
    } else if (type === 'BreadcrumbList') {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: data.map((item: { name: string; item: string }, index: number) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.name,
                item: item.item,
            })),
        };
    } else if (type === 'Article') {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: data.headline,
            description: data.description,
            image: data.image,
            author: {
                '@type': 'Person',
                name: data.author || 'CalcSuite Team',
                url: 'https://calcsuite.in'
            },
            publisher: {
                '@type': 'Organization',
                name: 'CalcSuite',
                logo: {
                    '@type': 'ImageObject',
                    url: 'https://calcsuite.in/logo.png'
                }
            },
            datePublished: data.datePublished,
            dateModified: data.dateModified || data.datePublished,
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': data.url
            }
        };
    } else if (type === 'ImageObject') {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            contentUrl: data.url,
            description: data.description,
            name: data.name,
            author: 'CalcSuite'
        };
    } else if (type === 'VideoObject') {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: data.name,
            description: data.description,
            thumbnailUrl: data.thumbnailUrl,
            uploadDate: data.uploadDate,
            contentUrl: data.contentUrl,
            embedUrl: data.embedUrl
        };
    } else if (type === 'HowTo') {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: data.name,
            description: data.description,
            step: data.steps.map((step: { name: string; text: string; image?: string; url?: string }) => ({
                '@type': 'HowToStep',
                name: step.name,
                text: step.text,
                image: step.image,
                url: step.url,
            })),
        };
    } else if (type === 'Organization') {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: data.name,
            url: data.url,
            logo: data.logo,
            sameAs: data.sameAs
        };
    }

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
    );
}
