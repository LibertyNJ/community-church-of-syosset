import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

SermonsPage.propTypes = {
  data: PropTypes.shape({
    allContentfulSermon: PropTypes.object.isRequired,
  }).isRequired,
};

export default function SermonsPage({ data, ...restProps }) {
  return (
    <>
      <SEO title="Sermons" />
      <Layout {...restProps}>
        <h1>Sermons</h1>
        <p>
          Did you miss a Sunday, or want to hear what our pastor and guest
          preachers have to say?
        </p>
        <p>Explore their messages by clicking on the sermons below.</p>
        {data.allContentfulSermon.edges.map(({ node }) => (
          <Link key={node.id} to={`/sermons/${node.slug}`}>
            <div>
              <p>{node.title}</p>
              <p>{node.date}</p>
              <p>{node.preacher.name}</p>
              <p>Scripture readings:</p>
              <ul>
                {node.scriptureReadings.map(scriptureReading => (
                  <li>{scriptureReading}</li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  {
    allContentfulSermon {
      edges {
        node {
          date
          id
          preacher {
            name
          }
          scriptureReadings
          slug
          title
        }
      }
    }
  }
`;
