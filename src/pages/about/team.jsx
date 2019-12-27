import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

TeamPage.propTypes = {
  data: PropTypes.shape({
    contentfulContentList: PropTypes.object.isRequired,
  }).isRequired,
};

export default function TeamPage({ data, ...restProps }) {
  return (
    <>
      <SEO title="Team" />
      <Layout {...restProps}>
        <h1>Our team</h1>
        {data.contentfulContentList.items.map(item => (
          <div key={item.id}>
            {item.image && <Image fluid={item.image.fluid} />}
            <p>{item.name}</p>
            <p>{item.role}</p>
          </div>
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    contentfulContentList(title: { eq: "Staff List" }) {
      items {
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        name
        role
      }
    }
  }
`;
