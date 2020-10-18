import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Image, { FixedObject } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

import ImagePlaceholderIcon from './ImagePlaceholderIcon';
import { baseline } from '../style';

const StyledImage = styled(Image)`
  border-radius: ${baseline};
`;

type Props = {
  className?: string;
  image?: {
    description?: string;
    fixed: FixedObject;
  };
  imageWrapperStyle?: object;
  placeholderIcon: IconProp;
  placeholderIconSize: string;
};

const FixedImage: React.FC<Props> = ({
  className,
  image,
  imageWrapperStyle,
  placeholderIcon,
  placeholderIconSize,
}) =>
  image ? (
    <StyledImage
      alt={image.description}
      className={className}
      fixed={image.fixed}
      style={{ ...imageWrapperStyle }}
    />
  ) : (
    <ImagePlaceholderIcon
      className={className}
      icon={placeholderIcon}
      iconSize={placeholderIconSize}
    />
  );

export default FixedImage;
