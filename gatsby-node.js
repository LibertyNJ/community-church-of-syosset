const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    query {
      allContentfulEvent {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  result.data.allContentfulEvent.edges.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/templates/event.jsx'),
      context: {
        slug: node.slug,
      },
      path: `events/${node.slug}`,
    });
  });
};
