import { Layout, Search, Smartphone, ShieldCheck, MessageSquareHeart, Coffee, Code, BookOpen, Mail, Zap } from 'lucide-react';

export interface ShowcaseFeature {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  link: string;
  icon: any;
  color: string;
}

export const SHOWCASE_FEATURES: ShowcaseFeature[] = [
  {
    id: 'widget',
    title: 'Bring CalcSuite to Your Website',
    subtitle: 'Free, customizable calculator widgets with zero ads and instant loading.',
    ctaText: 'Get Widget Code',
    link: '/widget-generator',
    icon: Layout,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'directory',
    title: 'Discover 100+ Free Tools',
    subtitle: 'From Indian Tax Slabs to Health & Fitness, explore our massive library of calculators.',
    ctaText: 'View Directory',
    link: '/directory',
    icon: Search,
    color: 'from-purple-500 to-indigo-400',
  },
  {
    id: 'pwa',
    title: 'CalcSuite Works Offline',
    subtitle: 'Install our PWA on your phone for lightning-fast calculations without internet.',
    ctaText: 'Install Now',
    link: '#',
    icon: Smartphone,
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'tax-guide',
    title: '2025-26 Tax Saving Guide',
    subtitle: 'Maximize your savings with our latest comprehensive guide on Indian tax deductions.',
    ctaText: 'Read Guide',
    link: '/resources/india-tax-saving-guide-2026',
    icon: ShieldCheck,
    color: 'from-orange-500 to-amber-400',
  }
];

export const PROMOTIONS: ShowcaseFeature[] = [
  {
    id: 'feedback',
    title: 'Share Your Feedback',
    subtitle: 'Missing a calculator? Want a feature? Tell us how we can improve CalcSuite.',
    ctaText: 'Give Feedback',
    link: 'https://insigh.to/b/calcsuite',
    icon: MessageSquareHeart,
    color: 'from-blue-600/90 to-blue-800/90',
  },
  {
    id: 'support',
    title: 'Love CalcSuite?',
    subtitle: 'Support our mission of building free, accessible tools by buying us a coffee!',
    ctaText: 'Support Us',
    link: 'https://ko-fi.com/bmeet',
    icon: Coffee,
    color: 'from-rose-600/90 to-rose-800/90',
  },
  {
    id: 'request',
    title: 'Custom Tool Request',
    subtitle: 'Need a specific tool for your business or daily workflow? Let us build it.',
    ctaText: 'Contact Us',
    link: '/contact',
    icon: Code,
    color: 'from-emerald-600/90 to-teal-800/90',
  }
];

export const ARTICLE_PROMOTIONS: ShowcaseFeature[] = [
  {
    id: 'knowledge-base',
    title: 'Master Your Finances',
    subtitle: 'Deep dive into our comprehensive library of financial guides and step-by-step tutorials.',
    ctaText: 'Browse Guides',
    link: '/resources',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-700',
  }
];
