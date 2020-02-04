import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import SermonCard from '../components/SermonCard';
import { baseline, color } from '../style';

const ListItem = styled.li`
  margin-bottom: calc(6 * ${baseline});
`;

const StyledSermonCard = styled(SermonCard)`
  box-shadow: 0 0 5px ${color.black};
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

type Props = {
  className?: string;
  sermons: {
    date: string;
    id: string;
    image?: {
      description?: string;
      fixed: FixedObject;
    };
    preacher: {
      name: string;
    };
    slug: string;
    title: string;
  }[];
};

const SermonCardList: React.FC<Props> = ({ className, sermons }) => {
  const sermonCards = sermons.map(sermon => (
    <ListItem key={sermon.id}>
      <StyledSermonCard
        date={sermon.date}
        image={sermon.image}
        preacher={sermon.preacher}
        slug={sermon.slug}
        title={sermon.title}
      />
    </ListItem>
  ));

  return <UnorderedList className={className}>{sermonCards}</UnorderedList>;
};

export default SermonCardList;
