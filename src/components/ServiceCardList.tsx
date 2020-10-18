import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import ServiceCard from './ServiceCard';
import { baseline, color } from '../style';

const ListItem = styled.li`
  margin-bottom: calc(6 * ${baseline});
`;

const StyledServiceCard = styled(ServiceCard)`
  box-shadow: 0 0 5px ${color.black};
`;

const UnorderedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

type Props = {
  className?: string;
  services: {
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

const ServiceCardList: React.FC<Props> = ({ className, services }) => {
  const serviceCards = services.map(service => (
    <ListItem key={service.id}>
      <StyledServiceCard
        date={service.date}
        image={service.image}
        preacher={service.preacher}
        slug={service.slug}
        title={service.title}
      />
    </ListItem>
  ));

  return <UnorderedList className={className}>{serviceCards}</UnorderedList>;
};

export default ServiceCardList;
