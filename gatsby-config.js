module.exports = {
  siteMetadata: {
    title: 'Community Church of Syosset',
    description: '',
    author: 'Nathaniel J. Liberty',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#fff',
        display: 'minimal-ui',
        name: 'Community Church of Syosset',
        short_name: 'starter',
        start_url: '/',
        theme_color: '#fff',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
