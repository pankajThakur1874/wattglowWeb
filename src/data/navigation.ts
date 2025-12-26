import type { NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    path: '/about',
    dropdown: [
      {
        label: 'Why Choose Us',
        path: '/about',
      },
      {
        label: 'QHSSE',
        path: '/qhsse',
      },
    ],
  },
  {
    label: 'Offering',
    path: '#',
    dropdown: [
      {
        label: 'Ground Mounted Solar',
        path: '/offering/ground',
      },
      {
        label: 'Residential',
        path: '/offering/residential',
      },
      {
        label: 'Commercial & Industrial',
        path: '/offering/commercial',
      },
      {
        label: 'Floating Solar',
        path: '/offering/floating',
      },
      {
        label: 'Operation & Maintenance',
        path: '/offering/operations',
      },
      {
        label: 'Transmission Line & Substations',
        path: '/offering/transmission',
      },
    ],
  },
  {
    label: 'Service',
    path: '/service',
  },
  {
    label: 'Sustainability',
    path: '/sustainability',
  },
  {
    label: 'Careers',
    path: '/careers',
  },
  {
    label: 'Blogs & Media',
    path: '/news',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const footerLinks: NavigationItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Sustainability',
    path: '/sustainability',
  },
  {
    label: 'Careers',
    path: '/careers',
  },
  {
    label: 'Blogs & Media',
    path: '/news',
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
];
