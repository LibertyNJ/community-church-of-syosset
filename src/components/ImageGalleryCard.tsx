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
  slug: string;
  title: string;
};

const ImageGalleryCard: React.FC<Props> = ({
  className,
  image,
  slug,
  title,
}) => (
  <Card className={className}>
    <StyledLink to={`/images/${slug}`}>
      <StyledFixedImage
        image={image}
        placeholderIcon="images"
        placeholderIconSize={`calc(54 * ${baseline})`}
      />
      <Details>
        <b>{title}</b>
      </Details>
    </StyledLink>
  </Card>
);

export default ImageGalleryCard;
