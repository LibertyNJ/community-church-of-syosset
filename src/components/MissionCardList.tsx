import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import MissionCard from '../components/MissionCard';
import { baseline, breakpoint, color } from '../style';

const StyledMissionCard = styled(MissionCard)`
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

type Props = {
  className?: string;
  missions: {
    image?: {
      description?: string;
      fixed: FixedObject;
    };
    id: string;
    name: string;
    url?: string;
  }[];
};

const MissionCardList: React.FC<Props> = ({ className, missions }) => {
  const missionCards = missions.map(mission => (
    <li key={mission.id}>
      <StyledMissionCard
        image={mission.image}
        name={mission.name}
        url={mission.url}
      />
    </li>
  ));

  return <UnorderedList className={className}>{missionCards}</UnorderedList>;
};

export default MissionCardList;
