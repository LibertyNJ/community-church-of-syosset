import React from 'react';
import styled from 'styled-components';

import EmbeddedContentFrame from './EmbeddedContentFrame';
import { color } from '../style';

const IFrame = styled.iframe`
  border: none;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledEmbeddedContentFrame = styled(EmbeddedContentFrame)`
  background-color: ${color.lightGray};
`;

export type Props = {
  apiKey: string;
  aspectRatio: {
    x: number;
    y: number;
  };
  className?: string;
  mode: string;
  q?: string;
  title: string;
};

const EmbeddedGoogleMap: React.FC<Props> = ({
  apiKey,
  aspectRatio,
  className,
  mode,
  q,
  title,
}) => (
  <StyledEmbeddedContentFrame aspectRatio={aspectRatio} className={className}>
    <IFrame
      src={`https://www.google.com/maps/embed/v1/${mode}?key=${apiKey}${
        q ? `&q=${encodeURI(q)}` : ''
      }`}
      title={title}
    >
      <p>
        This embedded Google map cannot be shown because our browser does not
        support HTML <code>iframe</code> elements.
      </p>
    </IFrame>
  </StyledEmbeddedContentFrame>
);

export default EmbeddedGoogleMap;
