// Application constants

import type { ContactInfo, SocialLink } from '../types';

// Helper function to get the correct asset path for GitHub Pages deployment
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export const COMPANY_INFO = {
  name: 'WattGlow Power Private Limited',
  shortName: 'WattGlow',
  tagline: 'Leading Solar EPC Company | Sustainable Energy Solutions',
  description:
    'WattGlow Power is a leading Solar EPC company providing high-quality solar energy solutions including floating solar, residential & commercial installations.',
} as const;

export const CONTACT_INFO: ContactInfo = {
  address:
    'Pancham Highstreet, 303, Old Padra Rd, Vidyutnagar Colony, IOC Nagar, Akota, Vadodara, Gujarat - 390020',
  phone: '+91 81608 07490',
  email: 'info@wattglow.com',
  hours: 'Mon to Sat 09:00 AM - 06:00 PM',
  mapUrl:
    'https://www.google.com/maps/place/WattGlow+Power+Pvt+Ltd/@22.2975816,73.1626638,17z/data=!3m1!4b1!4m6!3m5!1s0x395fc7cbc842bc0b:0x4108ae844b312b59!8m2!3d22.2975767!4d73.1652387!16s%2Fg%2F11lmm0h55n!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61564391866936',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    ariaLabel: 'Visit our Facebook page',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/company/wattglow',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    ariaLabel: 'Visit our LinkedIn company page',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/wattglowpower.re',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    ariaLabel: 'Visit our Instagram profile',
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/channel/UCsUS2NZlAnUs3qu-qhfFA2w',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
    ariaLabel: 'Visit our YouTube channel',
  },
];

export const WHATSAPP_NUMBER = '917383760478';
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`;

export const GOOGLE_ANALYTICS_ID = 'G-D37DX4WNX8';

export const SITE_URL = 'https://www.wattglow.com';

export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  description: COMPANY_INFO.description,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/WattGlow.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pancham Highstreet, 303, Old Padra Rd, Vidyutnagar Colony, IOC Nagar, Akota',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    postalCode: '390020',
    addressCountry: 'IN',
  },
  sameAs: SOCIAL_LINKS.map((link) => link.url),
};
