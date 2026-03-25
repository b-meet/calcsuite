import { Layout, Search, Smartphone, ShieldCheck } from 'lucide-react';

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
