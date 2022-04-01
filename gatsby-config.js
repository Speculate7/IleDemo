/** @type {import('gatsby').GatsbyConfig} */
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `RemoKingdom`,
    siteUrl: `https://remokingdon.com`,
    description: `Web development services: CMS, Headless CMS, Websites, Static sites`,
    image:  `${__dirname}/src/assets/android-chrome-512x512.png`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": `${__dirname}/src/assets/android-chrome-512x512.png`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "assets",
        "path": `${__dirname}/src/assets/`
      },
      __key: "assets"
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        preview: false,
        disableLiveReload: false,
      },
    },
  ]
};