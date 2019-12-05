module.exports = {
  siteMetadata: {
    author: 'Nathaniel J. Liberty',
    description:
      'An open and affirming congregation of the United Church of Christ in Syosset, New York. No matter who you are, or where you are on life’s journey, you are welcome here!',
    title: 'Community Church of Syosset',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#fff',
        display: 'minimal-ui',
        name: 'Community Church of Syosset',
        short_name: 'CCoS',
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
