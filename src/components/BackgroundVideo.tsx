import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
  height: auto;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  z-index: -1;
`;

type Props = {
  className?: string;
  url: string;
};

const BackgroundVideo: React.FC<Props> = ({ className, url }) => (
  <Video
    autoPlay
    className={className}
    loop
    muted
    preload="metadata"
    src={url}
  />
);

export default BackgroundVideo;
