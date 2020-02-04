import { graphql, useStaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import TeamMemberCardList from '../../components/TeamMemberCardList';
import { baseline } from '../../style';

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

const StyledTeamMemberCardList = styled(TeamMemberCardList)`
  margin: 0 auto calc(6 * ${baseline});
`;

type Data = {
  contentfulContentList: {
    items: {
      id: string;
      image?: {
        description?: string;
        fixed: FixedObject;
      };
      name: string;
      role: string;
      slug: string;
    }[];
  };
};

const TeamPage: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query TeamPage {
      contentfulContentList(title: { eq: "Staff List" }) {
        items {
          id
          image {
            description
            fixed(height: 272, width: 272) {
              ...GatsbyContentfulFixed
            }
          }
          name
          role
          slug
        }
      }
    }
  `);

  const teamMembers = data.contentfulContentList.items.map(item => item);

  return (
    <>
      <SEO title="Team" />
      <Layout>
        <h1>Our team</h1>
        <Container>
          <p>Click on a team member to learn about them.</p>
        </Container>
        <StyledTeamMemberCardList teamMembers={teamMembers} />
      </Layout>
    </>
  );
};

export default TeamPage;
