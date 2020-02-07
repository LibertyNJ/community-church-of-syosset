import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import Lead from '../../components/Lead';
import LinkButton from '../../components/LinkButton';
import SEO from '../../components/SEO';
import { baseline } from '../../style';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 33em;
`;

const StyledLinkButton = styled(LinkButton)`
  margin-bottom: calc(6 * ${baseline});
`;

type Data = {
  contentfulAsset?: {
    fluid: FluidObject;
  };
};

const ContactSuccessPage: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query ContactSuccessPage {
      contentfulAsset(title: { eq: "Contact Success Page Background Image" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  `);

  const backgroundImageStack = data.contentfulAsset
    ? [
        'linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75))',
        data.contentfulAsset.fluid,
      ]
    : undefined;

  return (
    <>
      <SEO title="Thank you" />
      <Layout backgroundImage={backgroundImageStack} bodyDisplay="flex">
        <Container>
          <h1>Thank you</h1>
          <Lead>Thank you for reaching out to us.</Lead>
          <p> We will be in touch soon!</p>
          <StyledLinkButton to="/">Return home</StyledLinkButton>
        </Container>
      </Layout>
    </>
  );
};

export default ContactSuccessPage;
