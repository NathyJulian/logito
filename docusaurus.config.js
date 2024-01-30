// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'my site',
  tagline: 'logito',
  favicon: 'https://www.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Ffree-png-ilnkl&psig=AOvVaw1oPVpkCiVc1eRJz7tGqpmZ&ust=1706676451731000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDkx7CnhIQDFQAAAAAdAAAAABAJ',

  // Set the production url of your site here  
  url: 'https://NathyJulian.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/logito/',

  // GitHub pages deployment config.
  organizationName: 'NathyJulian',
  projectName: 'Logito',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        // blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
    'plugin-image-zoom',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/azul_buho.png',
      navbar: {
        title: 'my site',
        logo: {
          alt: 'Documentación de Chat Buho',
          src: 'img/azul_buho.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
      imageZoom: {
        selector: '.markdown img',
      },
    }),
    scripts: [
      {
        src: 'https://static.buho.la/fastura/documentacion.js',
        async: true,
      },
    ],
};

module.exports = config;
