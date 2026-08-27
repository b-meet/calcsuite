import { SITE_URL, WIDGET_SCRIPT_URL } from '../../config/site';
import { EMBED_FAQ, EMBED_STEPS } from './docs';

const PAGE_URL = `${SITE_URL}/widget-generator/`;

/**
 * Structured data for the widget generator, built from the same arrays that
 * render the visible copy so the two cannot drift apart.
 */
export function buildWidgetJsonLd() {
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'CalcSuite Calculator Widget',
            applicationCategory: 'WebApplication',
            operatingSystem: 'Any web browser',
            url: PAGE_URL,
            installUrl: WIDGET_SCRIPT_URL,
            description:
                'A free embeddable calculator widget for any website. One HTML snippet and one async script tag render a calculator that is isolated in a Shadow DOM and resizes to fit the column it is placed in.',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
            },
            featureList: [
                'Shadow DOM isolation so host and widget styles never collide',
                'Responsive from a 320px sidebar to a full-width article',
                'Light and dark themes',
                'Configurable text size, padding and corner radius',
                'No account, API key or build step required',
            ],
            publisher: {
                '@type': 'Organization',
                name: 'CalcSuite',
                url: SITE_URL,
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to embed a free calculator widget on your website',
            description:
                'Add a calculator to any web page by copying one HTML block from the CalcSuite widget generator.',
            totalTime: 'PT2M',
            estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
            tool: [{ '@type': 'HowToTool', name: 'Any website you can paste HTML into' }],
            step: EMBED_STEPS.map((step, index) => ({
                '@type': 'HowToStep',
                position: index + 1,
                name: step.name,
                text: step.text,
                url: `${PAGE_URL}#step-${index + 1}`,
            })),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: EMBED_FAQ.map(item => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
        },
    ];
}
