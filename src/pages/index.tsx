import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Lead from '../components/Lead';
import LinkButton from '../components/LinkButton';
import SEO from '../components/SEO';
import { baseline, color } from '../style';

const ButtonContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 33em;
`;

const StyledLayout = styled(Layout)`
  color: ${color.white};
`;

const StyledLinkButton = styled(LinkButton)`
  background-color: ${color.white};
  border: 1px solid ${color.white};
  color: ${color.primary};
  flex: 1;
  margin: 0 calc(3 * ${baseline}) calc(6 * ${baseline});
  padding: calc(3 * ${baseline} - 1px);
  transition: filter 500ms;

  &:focus {
    filter: drop-shadow(0 0 5px ${color.black});
  }

  &:hover {
    background-color: transparent;
    color: ${color.white};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

type Data = {
  contentfulAsset?: {
    fluid: FluidObject;
  };
};

const HomePage: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query HomePage {
      contentfulAsset(title: { eq: "Home Page Background Image" }) {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  `);

  const backgroundImageStack = data.contentfulAsset
    ? [
        'linear-gradient(rgba(0, 191, 255, 0.65), rgba(0, 191, 255, 0.65))',
        data.contentfulAsset.fluid,
      ]
    : 'linear-gradient(rgba(0, 191, 255, 1), rgba(0, 191, 255, 1))';

  return (
    <>
      <SEO title="Home" />
      <StyledLayout backgroundImage={backgroundImageStack} bodyDisplay="flex">
        <Container>
          <h1>Community Church of&nbsp;Syosset</h1>
          <Lead>
            No matter who you are, <br />
            or where you are on life’s journey, <br />
            you are welcome here!
          </Lead>
          <p>
            An open and affirming congregation of the United Church of Christ,
            where God is still speaking.
          </p>
          <ButtonContainer>
            <StyledLinkButton to="/visit">Visit us</StyledLinkButton>
            <StyledLinkButton to="/about">Who we are</StyledLinkButton>
          </ButtonContainer>
        </Container>
      </StyledLayout>
    </>
  );
};

export default HomePage;
