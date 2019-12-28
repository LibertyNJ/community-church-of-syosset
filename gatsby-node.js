const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allContentfulEvent {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulPerson {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulSermon {
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

  result.data.allContentfulPerson.edges.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/templates/person.jsx'),
      context: {
        slug: node.slug,
      },
      path: `people/${node.slug}`,
    });
  });

  result.data.allContentfulSermon.edges.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/templates/sermon.jsx'),
      context: {
        slug: node.slug,
      },
      path: `sermons/${node.slug}`,
    });
  });
};
