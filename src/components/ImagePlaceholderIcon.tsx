import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import { baseline, color } from '../style';

const Frame = styled.div`
  align-items: center;
  background-color: ${color.lightGray};
  border: 1px dashed ${color.body};
  border-radius: ${baseline};
  display: flex;
  justify-content: space-around;
`;

type IconProps = {
  fontSize: string;
};

const Icon = styled(FontAwesomeIcon)<IconProps>`
  font-size: ${props => props.fontSize};
`;

type Props = {
  className?: string;
  icon: IconProp;
  iconSize: string;
};

const ImagePlaceholderIcon: React.FC<Props> = ({
  className,
  icon,
  iconSize,
}) => (
  <Frame className={className}>
    <Icon fontSize={iconSize} icon={icon} />
  </Frame>
);

export default ImagePlaceholderIcon;
