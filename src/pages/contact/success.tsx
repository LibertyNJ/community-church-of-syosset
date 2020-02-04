import { graphql, useStaticQuery } from 'gatsby';
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

const ContactSuccessPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ContactSuccessPage {
      contentfulAsset(title: { eq: "Contact Success Page Background Image" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  `);

  return (
    <>
      <SEO title="Thank you" />
      <Layout
        backgroundImage={[
          'linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75))',
          data.contentfulAsset.fluid,
        ]}
        bodyDisplay="flex"
      >
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
