/* ============================================================
   STRUCTURED DATA / JSON-LD for SEO
   ============================================================ */

import { siteConfig, services, testimonials } from './content';

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://handymanproorlando.com',
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: 'https://handymanproorlando.com',
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Orlando',
      addressRegion: 'FL',
      postalCode: '32801',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.5383',
      longitude: '-81.3792',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '247',
      bestRating: '5',
    },
    priceRange: '$$',
    image: 'https://handymanproorlando.com/og-image.jpg',
    sameAs: [
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.google,
      siteConfig.socialLinks.yelp,
    ],
    areaServed: [
      { '@type': 'City', name: 'Orlando' },
      { '@type': 'City', name: 'Winter Park' },
      { '@type': 'City', name: 'Lake Nona' },
      { '@type': 'City', name: 'Kissimmee' },
      { '@type': 'City', name: 'Windermere' },
      { '@type': 'City', name: 'Dr. Phillips' },
      { '@type': 'City', name: 'Altamonte Springs' },
    ],
  };
}

export function getServiceJsonLd() {
  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Orlando',
    },
  }));
}

export function getReviewJsonLd() {
  return testimonials.map((t) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: t.name,
    },
    reviewBody: t.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: t.rating.toString(),
      bestRating: '5',
    },
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
    },
  }));
}

export function getFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
