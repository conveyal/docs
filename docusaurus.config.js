// @ts-check

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  image: 'img/android-chrome-512x512.png', // meta image for social media
  colorMode: {
    respectPrefersColorScheme: true
  },
  navbar: {
    title: 'conveyal',
    logo: {
      alt: 'Conveyal Logo',
      src: 'img/logo.svg'
    },
    items: [
      {
        to: '/',
        label: 'Docs',
        position: 'left'
      },
      {
        to: 'changelog', 
        label: 'Changelog', 
        position: 'left'
      },
      {
        href: 'https://conveyal.com/contact',
        label: 'Contact',
        position: 'right'
      },
      {
        href: 'https://analysis.conveyal.com',
        label: 'Log in',
        position: 'right'
      },
      {
        href: 'https://github.com/conveyal',
        className: 'header-github-link',
        'aria-label': 'GitHub Org',
        position: 'right'
      }
    ]
  },
  footer: {
    copyright: `Copyright © ${new Date().getFullYear()} Conveyal, LLC`
  }
}

if (process.env.ALGOLIA_API_KEY) {
  themeConfig.algolia = {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Conveyal User Manual',
  tagline: 'User manual for Conveyal',
  url: 'https://docs.conveyal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'conveyal', 
  projectName: 'docs', 
  themeConfig,
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/conveyal/docs/edit/master'
        },
        blog: {
          path: './changelog',
          routeBasePath: '/changelog',
          blogTitle: 'Changelog',
          blogDescription: 'Updates to Conveyal Analysis',
          blogSidebarTitle: 'Latest changes',
          blogSidebarCount: 1,
          postsPerPage: 3,
          showReadingTime: false
        },
        theme: {
          customCss: require.resolve('./custom.css'),
        },
        sitemap: { // for crawlers
          changefreq: 'weekly',
          priority: 0.5
        }
      }
    ]
  ],
  scripts: [{
    src: '/js/external/script.js', 
    async: true, 
    defer: true, 
    'data-api': '/api/external/event',
    'data-domain': 'docs.conveyal.com'
  }]
}

module.exports = config
