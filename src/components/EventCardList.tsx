import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import EventCard from '../components/EventCard';
import { baseline, breakpoint, color } from '../style';

const ListItem = styled.li`
  margin-bottom: calc(6 * ${baseline});

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 0;
  }
`;

const StyledEventCard = styled(EventCard)`
  box-shadow: 0 0 5px ${color.black};
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export type Props = {
  className?: string;
  events: {
    date: string;
    id: string;
    image?: {
      description?: string;
      fixed: FixedObject;
    };
    slug: string;
    title: string;
  }[];
};

const EventCardList: React.FC<Props> = ({ className, events }) => {
  const eventCards = events.map(event => (
    <ListItem key={event.id}>
      <StyledEventCard
        date={event.date}
        image={event.image}
        slug={event.slug}
        title={event.title}
      />
    </ListItem>
  ));

  return <UnorderedList className={className}>{eventCards}</UnorderedList>;
};

export default EventCardList;
