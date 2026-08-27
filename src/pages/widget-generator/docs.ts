/**
 * Reference content for the widget generator page.
 *
 * These arrays are the single source for both the visible copy and the
 * JSON-LD in schema.ts. Search engines penalise structured data that does not
 * match the page, and an assistant quoting the page should get the same
 * answer a reader does — so the two must never be written twice.
 *
 * Every claim here is checked against the implementation: the attribute
 * defaults mirror DEFAULT_APPEARANCE and the clamps in src/widget/appearance.ts,
 * and the width figures come from measuring every calculator at 320/375/480px.
 */

export interface EmbedAttribute {
    name: string;
    values: string;
    fallback: string;
    description: string;
}

export const EMBED_ATTRIBUTES: EmbedAttribute[] = [
    { name: 'data-type', values: 'calculator id', fallback: 'bmi', description: 'Which calculator to render, e.g. "bmi".' },
    { name: 'data-theme', values: 'light | dark', fallback: 'light', description: 'Colour scheme of the widget.' },
    { name: 'data-font-size', values: '11–22', fallback: '15', description: 'Base text size in pixels.' },
    { name: 'data-padding', values: '0–48', fallback: '20', description: 'Inner spacing in pixels.' },
    { name: 'data-radius', values: '0–32', fallback: '14', description: 'Corner radius in pixels.' },
    { name: 'data-border', values: 'true | false', fallback: 'true', description: 'Draw a 1px outer border.' },
    { name: 'data-shadow', values: 'true | false', fallback: 'false', description: 'Draw a drop shadow.' },
    { name: 'data-max-width', values: 'pixels', fallback: 'none', description: 'Cap the widget width inside a wider column.' },
    { name: 'data-branding', values: 'true | false', fallback: 'true', description: 'Show the footer inside the widget. The credit link below the widget is required either way.' },
];

export interface EmbedStep {
    name: string;
    text: string;
}

export const EMBED_STEPS: EmbedStep[] = [
    { name: 'Pick a calculator and placement', text: 'Choose the calculator you want and the part of the page it will sit in. The preview shows it at the width that slot really gives it.' },
    { name: 'Adjust the appearance', text: 'Set the theme, text size, padding and corner radius until the widget matches your site.' },
    { name: 'Copy the embed code', text: 'Copy the generated block. It contains the widget container, the credit link, and one async script tag.' },
    { name: 'Paste it into your page', text: 'Paste the block into your page HTML where the calculator should appear. No account, API key or build step is needed.' },
];

export interface EmbedFaq {
    question: string;
    answer: string;
}

export const EMBED_FAQ: EmbedFaq[] = [
    {
        question: 'Is the CalcSuite calculator widget free?',
        answer: 'Yes. The widget is free to embed on any website, with no account, no API key, no usage limits and no paid tier. The only condition is that the credit link stays visible on the page.',
    },
    {
        question: 'Can I remove the "powered by CalcSuite" link?',
        answer: 'No. The credit link is a required part of the licence. If it is deleted, hidden with CSS or repointed at another domain, widget.js restores a working one automatically. If it is prevented from rendering at all, the calculator is replaced with a short notice instead of loading.',
    },
    {
        question: 'Is the credit link dofollow? Will it affect my site\u2019s SEO?',
        answer: 'No. Both credit links ship with rel="nofollow", so they pass no ranking signal in either direction and cannot affect how your pages rank. Google treats widget links distributed at volume as a link scheme rather than an editorial endorsement, so we mark them nofollow by default. The link is there for attribution and referral traffic.',
    },
    {
        question: 'Will the widget interfere with my site styles?',
        answer: 'No. The calculator renders inside a Shadow DOM, so your stylesheet cannot reach into the widget and the widget’s styles cannot leak onto your page. Nothing in your existing CSS needs to change.',
    },
    {
        question: 'Does the widget slow down my page?',
        answer: 'The script tag is marked async, so it never blocks your page from rendering. The runtime is under 80 KB gzipped and loads after your own content, which means it does not affect First Contentful Paint.',
    },
    {
        question: 'What is the narrowest column a calculator widget fits in?',
        answer: 'Most calculators render cleanly from 320px wide, which covers a typical blog sidebar. A few need more room: Compound Interest, Simple Interest, SIP, PPF, Income Tax India and In-Hand Salary India need 375px, and the Tip and BMR calculators need 480px. The generator hides any placement narrower than the calculator requires, so you cannot copy an embed that would overflow.',
    },
    {
        question: 'Does the widget work on WordPress, Webflow, Ghost or Squarespace?',
        answer: 'Yes. The embed is plain HTML and one script tag, so it works in any custom HTML or code block. There is no plugin to install.',
    },
    {
        question: 'Can I put more than one calculator on the same page?',
        answer: 'Yes. Add one container div per calculator and include the script tag once. Every container on the page is initialised independently, with its own theme and appearance settings.',
    },
    {
        question: 'Does the widget collect data about my visitors?',
        answer: 'No. Calculations run entirely in the visitor’s browser. The widget does not post form values to CalcSuite and does not set cookies on your domain.',
    },
];
