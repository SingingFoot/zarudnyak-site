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

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
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
        {to: '/interview', label: 'Interview', position: 'left'},
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
