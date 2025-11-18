import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://maple-ranch.co.za';

interface MetadataConfig {
  title: string;
  description: string;
  keywords: string[];
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  ogImageAlt?: string;
}

export function generatePageMetadata(config: MetadataConfig): Metadata {
  const {
    title,
    description,
    keywords,
    path = '/',
    ogTitle = title,
    ogDescription = description,
    twitterTitle = ogTitle,
    twitterDescription = ogDescription,
    ogImageAlt = title,
  } = config;

  const canonicalUrl = path === '/' ? baseUrl : `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: 'en_ZA',
      url: canonicalUrl,
      images: [
        {
          url: '/images/open-graph.webp',
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}
