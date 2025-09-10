import { DefaultSeoProps } from 'next-seo';

const domain = process.env.NODE_ENV === 'production' 
  ? 'https://geist.im'
  : 'http://localhost:3000';

export const defaultSEO: DefaultSeoProps = {
  title: 'Geist AI - Privacy-First AI for Everyone',
  titleTemplate: '%s | Geist AI',
  description: 'Your privacy-focused AI companion that keeps every conversation secure and your data in your hands. Built with privacy by design, open source, and hosted in Germany under GDPR protection.',
  canonical: domain,
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: domain,
    title: 'Geist AI - Privacy-First AI for Everyone',
    description: 'Your privacy-focused AI companion that keeps every conversation secure and your data in your hands. Built with privacy by design, open source, and hosted in Germany under GDPR protection.',
    siteName: 'Geist AI',
    images: [
      {
        url: `${domain}/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Geist AI - Privacy-First AI for Everyone',
        type: 'image/png',
      },
    ],
  },
  
  twitter: {
    handle: '@geist-ai', // Replace with actual Twitter handle if available
    site: '@geist-ai',
    cardType: 'summary_large_image',
  },
  
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'Geist AI',
    },
    {
      name: 'application-name',
      content: 'Geist AI',
    },
    {
      name: 'msapplication-TileColor',
      content: '#000000',
    },
    {
      name: 'keywords',
      content: 'AI, artificial intelligence, privacy, secure, encrypted, open source, GDPR, mobile AI, private AI assistant, local storage, Germany hosting, chat privacy, AI companion, mobile-first AI',
    },
    {
      name: 'author',
      content: 'Geist AI',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    {
      property: 'og:site_name',
      content: 'Geist AI',
    },
  ],
  
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
  ],
};

// Page-specific SEO configurations
export const manifestoSEO = {
  title: 'The Geist Manifesto - Privacy-First AI for Everyone',
  description: 'Learn why Geist AI was built with privacy by design. Discover our principles of local data storage, zero server retention, and GDPR compliance that make AI trustworthy.',
  canonical: `${domain}/manifesto`,
  openGraph: {
    title: 'The Geist Manifesto - Privacy-First AI for Everyone',
    description: 'Learn why Geist AI was built with privacy by design. Discover our principles of local data storage, zero server retention, and GDPR compliance that make AI trustworthy.',
    url: `${domain}/manifesto`,
    images: [
      {
        url: `${domain}/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'The Geist Manifesto - Privacy-First AI for Everyone',
        type: 'image/png',
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'AI manifesto, privacy-first AI, data ownership, AI ethics, GDPR AI, secure AI, local AI storage, open source AI, AI privacy principles, trustworthy AI',
    },
  ],
};

export const homeSEO = {
  title: 'Geist AI - Your Private AI Companion',
  description: 'A privacy-focused AI companion that keeps every conversation secure and your data in your hands. Coming soon to iOS and Android with local storage and GDPR protection.',
  canonical: domain,
  openGraph: {
    title: 'Geist AI - Your Private AI Companion',
    description: 'A privacy-focused AI companion that keeps every conversation secure and your data in your hands. Coming soon to iOS and Android with local storage and GDPR protection.',
    url: domain,
    images: [
      {
        url: `${domain}/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Geist AI - Your Private AI Companion',
        type: 'image/png',
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'private AI app, secure AI assistant, iOS AI app, Android AI app, encrypted AI chat, local AI storage, mobile AI privacy, GDPR AI companion, coming soon AI app',
    },
  ],
};