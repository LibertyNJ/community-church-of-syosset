import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { graphql, useStaticQuery } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import LinkButton from '../../components/LinkButton';
import SEO from '../../components/SEO';
import { baseline } from '../../style';

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

const StyledImage = styled(Image)`
  border-radius: ${baseline};
  margin: calc(6 * ${baseline}) 0;
`;

const StyledLinkButton = styled(LinkButton)`
  margin-bottom: calc(6 * ${baseline});
`;

type Data = {
  contentfulMessage: {
    content: {
      json: Document;
    };
  };
  contentfulPerson: {
    image?: {
      description?: string;
      fluid: FluidObject;
    };
    name: string;
  };
};

const PastorPage: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query PastorPage {
      contentfulMessage(title: { eq: "Pastor’s Message" }) {
        content {
          json
        }
      }
      contentfulPerson(role: { eq: "Pastor" }) {
        image {
          description
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        name
      }
    }
  `);

  return (
    <>
      <SEO title="Pastor" />
      <Layout>
        <h1>Our pastor</h1>
        <Container>
          <section>
            <h2>{data.contentfulPerson.name}</h2>
            {data.contentfulPerson.image && (
              <StyledImage
                alt={data.contentfulPerson.image.description}
                fluid={data.contentfulPerson.image.fluid}
              />
            )}
            {documentToReactComponents(data.contentfulMessage.content.json)}
          </section>
          <StyledLinkButton to="/visit">Visit us</StyledLinkButton>
        </Container>
      </Layout>
    </>
  );
};

export default PastorPage;
