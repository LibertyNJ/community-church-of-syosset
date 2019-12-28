import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

PersonTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulPerson: PropTypes.object.isRequired,
  }).isRequired,
};

export default function PersonTemplate({ data, ...restProps }) {
  return (
    <>
      <SEO title={data.contentfulPerson.name} />
      <Layout {...restProps}>
        <h1>{data.contentfulPerson.name}</h1>
        <Image fluid={data.contentfulPerson.image.fluid} />
        <p>{data.contentfulPerson.role}</p>
        <p>{data.contentfulPerson.biography.biography}</p>
      </Layout>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    contentfulPerson(slug: { eq: $slug }) {
      biography {
        biography
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      name
      role
    }
  }
`;
