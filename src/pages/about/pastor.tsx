import { Document } from '@contentful/rich-text-types';
import { graphql, useStaticQuery } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import LinkButton from '../../components/LinkButton';
import SEO from '../../components/SEO';
import VideoPlayer from '../../components/VideoPlayer';
import { baseline } from '../../style';

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

const PastorName = styled.h2`
  text-align: center;
`;

const StyledImage = styled(Image)`
  border-radius: ${baseline};
  margin: calc(6 * ${baseline}) 0;
`;

const StyledLinkButton = styled(LinkButton)`
  margin-bottom: calc(6 * ${baseline});
`;

const StyledVideoPlayer = styled(VideoPlayer)`
  border-radius: ${baseline};
  margin: calc(6 * ${baseline}) 0;
`;

type Data = {
  contentfulAsset?: {
    file: {
      url: string;
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
      contentfulAsset(title: { eq: "Pastor’s Video Message" }) {
        file {
          url
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
            <PastorName>{data.contentfulPerson.name}</PastorName>
            {data.contentfulAsset ? (
              <StyledVideoPlayer url={data.contentfulAsset.file.url} />
            ) : (
              data.contentfulPerson.image && (
                <StyledImage
                  alt={data.contentfulPerson.image.description}
                  fluid={data.contentfulPerson.image.fluid}
                />
              )
            )}
          </section>
          <StyledLinkButton to="/visit">Visit us</StyledLinkButton>
        </Container>
      </Layout>
    </>
  );
};

export default PastorPage;
