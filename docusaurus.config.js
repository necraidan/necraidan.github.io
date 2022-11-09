// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "necraidan",
  description: "What if the Blue Eyes White Dragon was in typescript ?",
  tagline: "Senior Software Engineer.",
  url: "https://necraidan.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "necraidan",
  projectName: "nekureidan",
  i18n: {
    defaultLocale: "en",
    locales: ["en","fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogDescription:
            "What if the Blue Eyes White Dragon was in typescript ?",
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Benjamin Auzanneau (necraidan).`,
          },
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
      colorMode: {
        defaultMode: "dark",
      },
      metadata: [{ property: "og:type", content: "website" }],
      navbar: {
        title: "necraidan",
        logo: {
          alt: "nekureidan logo",
          src: "img/nekureidan.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "dropdown",
            label: "About",
            position: "left",
            items: [
              { to: "/ressources", label: "Ressources" },
              { to: "/uses", label: "Uses" },
            ],
          },
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
