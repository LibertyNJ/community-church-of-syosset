import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import ExternalLink from './ExternalLink';
import FixedImage from './FixedImage';
import { baseline } from '../style';

const Name = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  display: block;
  padding: calc(3 * ${baseline});

  &:hover {
    text-decoration: none;
  }
`;

const StyledFixedImage = styled(FixedImage)`
  height: calc(68 * ${baseline});
  width: calc(68 * ${baseline});
`;

type Props = {
  className?: string;
  image?: {
    description?: string;
    fixed: FixedObject;
  };
  name: string;
  url: string;
};

const MissionCard: React.FC<Props> = ({ className, image, name, url }) => (
  <Card className={className}>
    <StyledExternalLink href={url}>
      <StyledFixedImage
        image={image}
        placeholderIcon="hands-helping"
        placeholderIconSize={`calc(50 * ${baseline})`}
      />
      <Name>{name}</Name>
    </StyledExternalLink>
  </Card>
);

export default MissionCard;
