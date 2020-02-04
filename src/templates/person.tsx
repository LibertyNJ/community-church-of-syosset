import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import Image, { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import FixedImage from '../components/FixedImage';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { baseline, color } from '../style';

export const query = graphql`
  query PersonTemplate($id: String!) {
    contentfulPerson(id: { eq: $id }) {
      biography {
        json
      }
      image {
        description
        fixed(height: 272, width: 272) {
          ...GatsbyContentfulFixed
        }
      }
      name
      role
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

const ImageFrame = styled.div`
  display: flex;
  justify-content: space-around;
  margin: calc(6 * ${baseline}) 0;
`;

const StyledFixedImage = styled(FixedImage)`
  flex-shrink: 0;
  height: calc(68 * ${baseline});
  width: calc(68 * ${baseline});
`;

type Props = {
  data: {
    contentfulPerson: {
      biography?: {
        json: Document;
      };
      image?: {
        description?: string;
        fixed: FixedObject;
      };
      name: string;
      role: string;
    };
  };
};

const PersonTemplate: React.FC<Props> = ({ data }) => (
  <>
    <SEO title={data.contentfulPerson.name} />
    <Layout>
      <h1>{data.contentfulPerson.name}</h1>
      <Container>
        <ImageFrame>
          <StyledFixedImage
            image={data.contentfulPerson.image}
            placeholderIcon="user"
            placeholderIconSize={`calc(62 * ${baseline})`}
          />
        </ImageFrame>
        <p>{data.contentfulPerson.role}</p>
        <section>
          <h2>Biography</h2>
          {data.contentfulPerson.biography ? (
            documentToReactComponents(data.contentfulPerson.biography.json)
          ) : (
            <p>No biography!</p>
          )}
        </section>
      </Container>
    </Layout>
  </>
);

export default PersonTemplate;
