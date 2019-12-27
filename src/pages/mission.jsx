import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import ExternalLink from '../components/ExternalLink';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

MissionPage.propTypes = {
  data: PropTypes.shape({
    allContentfulMission: PropTypes.object.isRequired,
  }).isRequired,
};

export default function MissionPage({ data, ...restProps }) {
  return (
    <>
      <SEO title="Mission" />
      <Layout {...restProps}>
        <h1>Mission</h1>
        <p>
          Ten percent of the church’s income is pledged for mission outreach.
          Those funds are split between local missions and missions within the
          United Church of Christ. Special offerings are taken for emergent
          mission work that is brought to our attention each year.
        </p>
        <p>
          Click on the images below to learn more about the missions we support.
        </p>
        {data.allContentfulMission.edges.map(({ node }) => (
          <div key={node.id}>
            <ExternalLink href={node.url}>
              <Image fluid={node.image.fluid} />
              <p>{node.name}</p>
            </ExternalLink>
          </div>
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allContentfulMission {
      edges {
        node {
          id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          name
          url
        }
      }
    }
  }
`;
