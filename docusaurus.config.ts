import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Serhiy Zarudnyak',
  tagline: 'Artist',
  favicon: 'img/favicon.ico',

  future: {v4: true},

  url: 'https://zarudnyak.art',
  baseUrl: '/',

  organizationName: 'zarudnyak',
  projectName: 'zarudnyak-site',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Site-wide <head> tags — cover both Ukrainian and Russian name/city variants
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: [
          // Ukrainian variants
          'Сергій Зарудняк',
          'Зарудняк художник',
          'Школа Танців Зарудняк',
          'Школа Танців Запоріжжя',
          'Запоріжжя художник',
          'мистецтво Запоріжжя',
          // Russian variants
          'Сергей Зарудняк',
          'Зарудняк художник',
          'Школа Танцев Зарудняк',
          'Школа Танцев Запорожье',
          'Запорожье художник',
          'искусство Запорожье',
          // English / transliterated
          'Serhiy Zarudnyak',
          'Sergiy Zarudnyak',
          'Sergei Zarudnyak',
          'Zarudnyak artist',
          'Zaporizhzhia artist',
          'Zaporizhia art',
          'dance school Zaporizhzhia',
          'graphics reliefs watercolors',
        ].join(', '),
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content:
          'Сергій Зарудняк (Сергей Зарудняк) — художник, Запоріжжя. Графіка, рельєфи, акварелі, фото, музика. Школа Танців. ' +
          'Serhiy Zarudnyak — artist from Zaporizhzhia, Ukraine. Graphics, reliefs, watercolors, photography, music.',
      },
    },
    // Open Graph
    {
      tagName: 'meta',
      attributes: {property: 'og:type', content: 'website'},
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:locale', content: 'uk_UA'},
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:locale:alternate', content: 'ru_RU'},
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:locale:alternate', content: 'en_US'},
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'Сергій Зарудняк | Сергей Зарудняк | Serhiy Zarudnyak — Artist',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content:
          'Сергій Зарудняк — художник із Запоріжжя. Графіка, рельєфи, акварелі, Школа Танців. ' +
          'Сергей Зарудняк — художник из Запорожья. Графика, рельефы, акварели, Школа Танцев.',
      },
    },
    {
      tagName: 'meta',
      attributes: {property: 'og:url', content: 'https://zarudnyak.art'},
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://zarudnyak.art/images/photos/3.jpg',
      },
    },
    // JSON-LD structured data — Person + LocalBusiness
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Serhiy Zarudnyak',
          alternateName: [
            'Сергій Зарудняк',
            'Сергей Зарудняк',
            'Sergiy Zarudnyak',
            'Sergei Zarudnyak',
          ],
          url: 'https://zarudnyak.art',
          image: 'https://zarudnyak.art/images/photos/3.jpg',
          jobTitle: 'Artist',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Запоріжжя',
            addressRegion: 'Zaporizhzhia Oblast',
            addressCountry: 'UA',
          },
          knowsAbout: [
            'Graphics',
            'Reliefs',
            'Watercolors',
            'Photography',
            'Music',
            'Dance',
          ],
          sameAs: ['https://zarudnyak.art'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Школа Танців Зарудняк',
          alternateName: ['Школа Танцев Зарудняк', 'Zarudnyak Dance School'],
          url: 'https://zarudnyak.art',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Запоріжжя',
            addressRegion: 'Zaporizhzhia Oblast',
            addressCountry: 'UA',
          },
          founder: {
            '@type': 'Person',
            name: 'Сергій Зарудняк',
          },
        },
      ]),
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'monthly',
        priority: 0.5,
        ignorePatterns: [],
        filename: 'sitemap.xml',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        sitemap: false, // handled by explicit plugin above
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Serhiy Zarudnyak',
      items: [
        {to: '/graphics', label: 'Graphics', position: 'left'},
        {to: '/photos', label: 'Photos', position: 'left'},
        {to: '/reliefs', label: 'Reliefs', position: 'left'},
        {to: '/watercolors', label: 'Watercolors', position: 'left'},
        {to: '/music', label: 'Music', position: 'left'},
        {to: '/writings', label: 'Writings', position: 'left'},
      ],
    },
    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} Serhiy Zarudnyak`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
