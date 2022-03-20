// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React native slick bottom tabs',
  tagline: 'Fast and Easy to use',
  url: 'https://orjiace.github.io/',
  baseUrl: '/rn-slick-bottom-tabs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'orjiAce', // Usually your GitHub org/user name.
  projectName: 'rn-slick-bottom-tabs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/orjiace/rn-slick-bottom-tabs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/orjiace',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Slick Bottom Tabs',

        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: 'https://orji.dev', label: 'Author', position: 'left'},
          {
            href: 'https://github.com/orjiace/rn-slick-bottom-tabs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {

          },
          {
            title: 'Community',
            items: [


              {
                label: 'Twitter',
                href: 'https://twitter.com/orjiace',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://orji.dev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/orjiAce/rn-slick-bottom-tabs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} React Native slick bottom tab navigation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;