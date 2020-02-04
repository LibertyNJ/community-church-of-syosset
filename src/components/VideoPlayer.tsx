import React from 'react';
import styled from 'styled-components';

import EmbeddedContentFrame, {
  Props as EmbeddedContentFrameProps,
} from '../components/EmbeddedContentFrame';
import ExternalLink from '../components/ExternalLink';

const Video = styled.video`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export type Props = {
  className?: string;
  url: string;
} & EmbeddedContentFrameProps;

const VideoPlayer: React.FC<Props> = ({ aspectRatio, className, url }) => (
  <EmbeddedContentFrame aspectRatio={aspectRatio} className={className}>
    <Video controls preload="metadata" src={url}>
      <p>
        Your browser does not support the HTML <code>video</code> element.{' '}
        <ExternalLink download href={url}>
          Click here to download this video
        </ExternalLink>
        .
      </p>
    </Video>
  </EmbeddedContentFrame>
);

export default VideoPlayer;
