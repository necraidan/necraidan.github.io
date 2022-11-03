// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "necraidan",
  tagline: "Senior Software Engineer.",
  url: "https://necraidan.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "necraidan", // Usually your GitHub org/user name.
  projectName: "necraidan", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "necraidan",
        logo: {
          alt: "My Site Logo",
          src: "img/nekureidan.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          // {
          //   to: "/front-end-chronicles",
          //   label: "Front-End Chronicles",
          //   position: "left",
          // },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "dev.to",
                href: "https://dev.to/necraidan",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/necraidan",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/bauzanneau",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/necraidan",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} necraidan. Built with Docusaurus 2 and propulsed by Vercel ✨❤️.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
