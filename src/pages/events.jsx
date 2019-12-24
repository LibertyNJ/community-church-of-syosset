import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function EventsPage({ ...restProps }) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulEvent {
        edges {
          node {
            dateAndTime
            id
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Events" />
      <Layout {...restProps}>
        <h1>Events</h1>
        <p>
          We are more than just Sunday morning worship. Come and join us for one
          of our upcoming social gatherings or special services.
        </p>
        <ul>
          {data.allContentfulEvent.edges.map(({ node }) => (
            <li key={node.id}>
              {node.title}, {node.dateAndTime}
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
