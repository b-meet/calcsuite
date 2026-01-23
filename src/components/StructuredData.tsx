import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
    type: 'SoftwareApplication' | 'FAQPage' | 'Article' | 'BreadcrumbList';
    data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
    let jsonLd = {};

    if (type === 'SoftwareApplication') {
        jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
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
    }

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
    );
}
