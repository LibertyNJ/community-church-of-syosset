import { graphql, useStaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Lead from '../components/Lead';
import MissionCardList from '../components/MissionCardList';
import SEO from '../components/SEO';
import { baseline, breakpoint } from '../style';

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

const StyledMissionCardList = styled(MissionCardList)`
  margin: 0 auto calc(6 * ${baseline});
`;

type Data = {
  allContentfulMission: {
    edges: {
      node: {
        id: string;
        image?: {
          description?: string;
          fixed: FixedObject;
        };
        name: string;
        url: string;
      };
    }[];
  };
};

const MissionPage: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query MissionPage {
      allContentfulMission {
        edges {
          node {
            id
            image {
              description
              fixed(height: 272, width: 272) {
                ...GatsbyContentfulFixed
              }
            }
            name
            url
          }
        }
      }
    }
  `);

  const missions = data.allContentfulMission.edges.map(({ node }) => node);

  return (
    <>
      <SEO title="Mission" />
      <Layout>
        <h1>Mission</h1>
        <Container>
          <Lead>
            We are called to care for our local community and the world.
          </Lead>
          <p>
            Ten percent of the church’s income is pledged for mission outreach.
            Those funds are split between local missions and missions within the
            United Church of Christ. Special offerings are taken for emergent
            mission work that is brought to our attention each year.
          </p>
          <p>Click on a mission to learn more about it.</p>
        </Container>
        <StyledMissionCardList missions={missions} />
      </Layout>
    </>
  );
};

export default MissionPage;
