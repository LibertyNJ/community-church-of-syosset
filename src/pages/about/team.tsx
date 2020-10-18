import { graphql, useStaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import CenteredTextColumn from '../../components/CenteredTextColumn';
import Layout from '../../components/Layout';
import Lead from '../../components/Lead';
import SEO from '../../components/SEO';
import TeamMemberCardList from '../../components/TeamMemberCardList';
import { baseline } from '../../style';

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
        <CenteredTextColumn>
          <Lead>
            Meet the members of our congregation that keep the church on the
            move.
          </Lead>
          <p>Click on a member of our team to learn about them.</p>
        </CenteredTextColumn>
        <StyledTeamMemberCardList teamMembers={teamMembers} />
      </Layout>
    </>
  );
};

export default TeamPage;
