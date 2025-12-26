import { Helmet } from 'react-helmet-async';
import { getAssetPath } from '../../../utils/constants';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export function MetaTags({
  title,
  description,
  keywords = 'Solar EPC, Solar Energy, Renewable Energy, Floating Solar, Solar Panel Installation',
  canonical,
  ogImage = getAssetPath('/assets/images/WattGlow.png'),
  ogType = 'website',
}: MetaTagsProps) {
  const fullTitle = `${title} | WattGlow Power`;
  const canonicalUrl = canonical || window.location.href;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
