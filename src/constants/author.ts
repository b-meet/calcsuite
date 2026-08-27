import { SITE_URL } from '../config/site';
import { EXTERNAL_LINKS } from './links';

/**
 * Who is accountable for what this site publishes.
 *
 * Named-person accountability is the E-E-A-T signal an anonymous "our team of
 * developers" line cannot provide, so this is the single source for the byline,
 * the editorial policy page, and the Person structured data. Change it here and
 * every surface follows.
 */
export const AUTHOR = {
    name: 'Meet Bhalodiya',
    role: 'Founder and maintainer, CalcSuite',
    /** Kept deliberately modest: it has to stay true. */
    bio:
        'Meet Bhalodiya builds and maintains CalcSuite. He is a software engineer who also builds Job Security Meter and other independent web tools, and he is responsible for the formulas, content and corrections across the calculators on this site.',
    profileUrl: `${SITE_URL}/editorial-policy/`,
    contactEmail: 'support@calcsuite.in',
    sameAs: [EXTERNAL_LINKS.TWITTER_X],
} as const;

export function buildPersonJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: AUTHOR.name,
        url: AUTHOR.profileUrl,
        jobTitle: AUTHOR.role,
        description: AUTHOR.bio,
        email: `mailto:${AUTHOR.contactEmail}`,
        sameAs: [...AUTHOR.sameAs],
        worksFor: {
            '@type': 'Organization',
            name: 'CalcSuite',
            url: SITE_URL,
        },
    };
}
