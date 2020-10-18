import { Link } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import FixedImage from './FixedImage';
import { baseline } from '../style';

const Details = styled.p`
  margin-bottom: 0;
`;

const StyledFixedImage = styled(FixedImage)`
  height: calc(68 * ${baseline});
  margin-bottom: calc(3 * ${baseline});
  width: calc(68 * ${baseline});
`;

const StyledLink = styled(Link)`
  color: inherit;
  display: block;
  padding: calc(3 * ${baseline});

  &:hover {
    text-decoration: none;
  }
`;

type Props = {
  className?: string;
  image?: {
    description?: string;
    fixed: FixedObject;
  };
  name: string;
  role: string;
  slug: string;
};

const TeamMemberCard: React.FC<Props> = ({
  className,
  image,
  name,
  role,
  slug,
}) => (
  <Card className={className}>
    <StyledLink to={`/people/${slug}`}>
      <StyledFixedImage
        image={image}
        imageWrapperStyle={{ display: 'block' }}
        placeholderIcon="user"
        placeholderIconSize={`calc(62 * ${baseline})`}
      />
      <Details>
        <b>{name}</b> <br />
        {role}
      </Details>
    </StyledLink>
  </Card>
);

export default TeamMemberCard;
