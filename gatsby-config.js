/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({path: "./config.env"});
module.exports = {
  siteMetadata:{
    title: `Recuerdos`,
    description: `Blogging for the sheer joy of expressing thoughts, connecting with like-minded souls, and maybe spreading a few smiles along the way. It's my digital playground of words!`,
    siteUrl: `https://krishnadk.vercel.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
