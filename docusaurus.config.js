/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'EE-214 (WEL)',
  tagline: 'Dinosaurs are cool',
  url: 'https://saurabh8r.github.io',
  baseUrl: '/my-website-test/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'saurabh8r', // Usually your GitHub org/user name.
  projectName: 'my-website-test', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'EE-214',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          
          position: 'left',
          label: 'Lab Hanadouts',
          type: 'doc',
          docId: 'lab-handouts/exp0w',
        },
        {
          position: 'left',
          label: 'Software Installation',
          items:[
            {
              type: 'doc',
              docId: 'Installation',
              label: 'Windows',
              to: 'docs/windows/installation',
            },
            {
              type: 'doc',
              docId: 'Installation',
              label: 'Linux',
              to: 'docs/linux/installation',
            },
          ]
        },
        {to: '/blog', label: 'Announcements', position: 'left'},
        {
          href: 'https://github.com/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with 🤯.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true, // force debug plugin usage
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
