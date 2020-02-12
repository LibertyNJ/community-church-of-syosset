import { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import ImageGalleryCard from './ImageGalleryCard';
import { baseline, breakpoint, color } from '../style';

const StyledImageGalleryCard = styled(ImageGalleryCard)`
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
  imageGalleries: {
    id: string;
    images: {
      description?: string;
      fixed: FixedObject;
    }[];
    slug: string;
    title: string;
  }[];
};

const ImageGalleryCardList: React.FC<Props> = ({
  className,
  imageGalleries,
}) => {
  const imageGalleryCards = imageGalleries.map(imageGallery => (
    <li key={imageGallery.id}>
      <StyledImageGalleryCard
        image={imageGallery.images[0]}
        slug={imageGallery.slug}
        title={imageGallery.title}
      />
    </li>
  ));

  return (
    <UnorderedList className={className}>{imageGalleryCards}</UnorderedList>
  );
};

export default ImageGalleryCardList;
