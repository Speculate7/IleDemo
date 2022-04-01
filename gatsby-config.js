/** @type {import('gatsby').GatsbyConfig} */
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
        "icon": "src/assets/android-chrome-512x512.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "assets",
        "path": "./src/assets/"
      },
      __key: "assets"
    }
  ]
};