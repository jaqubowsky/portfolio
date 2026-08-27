import { getRelativeLocaleUrl } from "astro:i18n";
import { getAlternateLocales, getLocale, stripLocaleFromPath, t } from "@i18n";
import {
  LOCALE_HTML_LANG,
  LOCALE_OG,
  LOCALES,
  type Locale,
} from "@i18n/config";

export const AUTHOR = {
  name: "Jakub Nalewajk",
  givenName: "Jakub",
  familyName: "Nalewajk",
  image: "/og-image.png",
  telephone: "+48-797-634-248",
  employer: "autoMEE",
  university: "WSB Merito University",
  techSkills: [
    "TypeScript",
    "JavaScript",
    "SQL",
    "Node.js",
    "NestJS",
    "Express",
    "REST API",
    "OpenAPI",
    "Strapi",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Prisma",
    "Drizzle ORM",
    "Supabase",
    "React",
    "Next.js",
    "Astro",
    "TanStack Query",
    "Zustand",
    "React Hook Form",
    "Zod",
    "TailwindCSS",
    "Sass",
    "Radix",
    "Ark UI",
    "Shadcn UI",
    "Storybook",
    "Vitest",
    "Testing Library",
    "Playwright",
    "Nx",
    "Turborepo",
    "Docker",
    "GitHub Actions",
    "AWS",
    "Azure DevOps",
    "Vercel AI SDK",
    "Accessibility",
  ],
  socials: [
    "https://github.com/jaqubowsky",
    "https://www.linkedin.com/in/jakub-nalewajk/",
    "https://share.google/AucDHNnwoLu5qzpS8",
  ],
  address: {
    locality: "Warszawa",
    region: "mazowieckie",
    country: "PL",
  },
} as const;

export const SERVICE_AREA = {
  locality: "Pułtusk",
  region: "mazowieckie",
  country: "PL",
  geo: {
    latitude: 52.4057,
    longitude: 21.0983,
  },
} as const;

type SeoInput = {
  url: URL;
  site: URL | undefined;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  publishedDate?: Date;
  modifiedDate?: Date;
  alternateHref?: string;
  localService?: boolean;
};

export function getSeoData(input: SeoInput) {
  const {
    url,
    site,
    title,
    description,
    image = "/og-image.png",
    type = "website",
    publishedDate,
    modifiedDate,
    alternateHref,
    localService = false,
  } = input;

  const locale = getLocale(url);
  const strings = t(locale);
  const alternateLocales = getAlternateLocales(locale);
  const siteUrl = site?.toString() ?? "";

  const canonicalURL = new URL(url.pathname, site).toString();
  const imageURL = new URL(image, site).toString();

  const hreflangUrls = getHreflangUrls({
    currentPath: url.pathname,
    locale,
    alternateHref,
    siteUrl,
  });

  const jsonLd = getJsonLd({
    type,
    siteUrl,
    locale,
    title,
    description,
    imageUrl: imageURL,
    canonicalUrl: canonicalURL,
    publishedDate,
    modifiedDate,
    localService,
  });

  return {
    locale,
    strings,
    alternateLocales,
    canonicalURL,
    imageURL,
    hreflangUrls,
    jsonLd,
    lang: LOCALE_HTML_LANG[locale],
    ogLocale: LOCALE_OG[locale],
    ogLocaleAlternates: alternateLocales.map((l) => LOCALE_OG[l]),
  };
}

type JsonLdOptions = {
  type: "website" | "article";
  siteUrl: string;
  locale: Locale;
  title: string;
  description: string;
  imageUrl: string;
  canonicalUrl: string;
  publishedDate?: Date;
  modifiedDate?: Date;
  localService: boolean;
};

function getJsonLd(options: JsonLdOptions) {
  const {
    type,
    siteUrl,
    locale,
    title,
    description,
    imageUrl,
    canonicalUrl,
    publishedDate,
    modifiedDate,
    localService,
  } = options;
  const lang = LOCALE_HTML_LANG[locale];
  const strings = t(locale);
  const { seo } = strings;

  if (type === "website") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${siteUrl}#website`,
          name: AUTHOR.name,
          url: siteUrl,
          description,
          inLanguage: lang,
        },
        {
          "@type": "Person",
          "@id": `${siteUrl}#person`,
          name: AUTHOR.name,
          givenName: AUTHOR.givenName,
          familyName: AUTHOR.familyName,
          url: siteUrl,
          image: new URL(AUTHOR.image, siteUrl).toString(),
          jobTitle: seo.jobTitle,
          worksFor: { "@type": "Organization", name: AUTHOR.employer },
          alumniOf: {
            "@type": "EducationalOrganization",
            name: AUTHOR.university,
          },
          knowsAbout: [...AUTHOR.techSkills, ...seo.knowsAbout],
          sameAs: [...AUTHOR.socials],
          address: {
            "@type": "PostalAddress",
            addressLocality: AUTHOR.address.locality,
            addressRegion: AUTHOR.address.region,
            addressCountry: AUTHOR.address.country,
          },
          nationality: { "@type": "Country", name: "Poland" },
        },
        ...(localService
          ? [
              {
                "@type": "ProfessionalService",
                "@id": `${siteUrl}#service`,
                name: seo.serviceName,
                alternateName: "Strona na Miarę – Jakub Nalewajk",
                url: siteUrl,
                image: new URL(AUTHOR.image, siteUrl).toString(),
                telephone: AUTHOR.telephone,
                priceRange: "$$",
                provider: { "@id": `${siteUrl}#person` },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: SERVICE_AREA.locality,
                  addressRegion: SERVICE_AREA.region,
                  addressCountry: SERVICE_AREA.country,
                },
                areaServed: [
                  { "@type": "City", name: SERVICE_AREA.locality },
                  { "@type": "City", name: "Warszawa" },
                  { "@type": "City", name: "Ciechanów" },
                  { "@type": "AdministrativeArea", name: SERVICE_AREA.region },
                  { "@type": "Country", name: seo.countryName },
                ],
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: SERVICE_AREA.geo.latitude,
                  longitude: SERVICE_AREA.geo.longitude,
                },
                serviceType: seo.serviceType,
                description: seo.serviceDescription,
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: seo.offerCatalogName,
                  itemListElement: seo.offers.map((offer) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: offer.name,
                      description: offer.description,
                    },
                  })),
                },
              },
            ]
          : []),
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: imageUrl,
    url: canonicalUrl,
    inLanguage: lang,
    ...(publishedDate && {
      datePublished: publishedDate.toISOString(),
      dateModified: (modifiedDate ?? publishedDate).toISOString(),
    }),
    author: {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: AUTHOR.name,
      url: siteUrl,
    },
  };
}

type HreflangOptions = {
  currentPath: string;
  locale: Locale;
  alternateHref?: string;
  siteUrl: string;
};

function getHreflangUrls(options: HreflangOptions): Record<Locale, string> {
  const { currentPath, locale, alternateHref, siteUrl } = options;
  const basePath = stripLocaleFromPath(currentPath);
  const alternateLocales = getAlternateLocales(locale);

  const urls = {} as Record<Locale, string>;

  if (alternateHref && alternateLocales.length === 1) {
    urls[locale] = new URL(currentPath, siteUrl).toString();
    urls[alternateLocales[0]] = new URL(alternateHref, siteUrl).toString();
  } else {
    for (const l of LOCALES) {
      urls[l] = new URL(getRelativeLocaleUrl(l, basePath), siteUrl).toString();
    }
  }

  return urls;
}

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export type FaqItem = {
  readonly question: string;
  readonly answer: string;
  readonly link?: { readonly href: string; readonly text: string };
};

export function getFaqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
