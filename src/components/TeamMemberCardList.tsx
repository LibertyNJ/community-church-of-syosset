import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import TeamMemberCard from '../components/TeamMemberCard';
import { baseline, breakpoint, color } from '../style';

const StyledTeamMemberCard = styled(TeamMemberCard)`
  box-shadow: 0 0 5px ${color.black};
`;

const UnorderedList = styled.ul`
  display: grid;
  gap: calc(6 * ${baseline});
  grid-template-columns: calc(74 * ${baseline});
  list-style: none;
  max-width: min-content;
  padding-left: 0;

  @media (min-width: ${breakpoint.md}) {
    grid-template-columns: repeat(2, calc(74 * ${baseline}));
  }

  @media (min-width: ${breakpoint.lg}) {
    grid-template-columns: repeat(3, calc(74 * ${baseline}));
  }
`;

export type Props = {
  className?: string;
  teamMembers: {
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

const TeamMemberCardList: React.FC<Props> = ({ className, teamMembers }) => {
  const teamMemberCards = teamMembers.map(teamMember => (
    <li key={teamMember.id}>
      <StyledTeamMemberCard
        image={teamMember.image}
        name={teamMember.name}
        role={teamMember.role}
        slug={teamMember.slug}
      />
    </li>
  ));

  return <UnorderedList className={className}>{teamMemberCards}</UnorderedList>;
};

export default TeamMemberCardList;
