require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#fff',
        display: 'minimal-ui',
        name: 'Community Church of Syosset',
        short_name: 'CCoS',
        start_url: '/',
        theme_color: '#007ea9',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    'gatsby-transformer-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
  siteMetadata: {
    author: 'Nathaniel J. Liberty',
  },
};
