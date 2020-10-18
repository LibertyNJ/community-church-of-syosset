import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import EmbeddedContentFrame from '../components/EmbeddedContentFrame';
import ExternalLink from '../components/ExternalLink';
import { color } from '../style';

const FallbackParagraph = styled.p`
  left: 0;
  position: absolute;
  top: 0;
`;

const Iframe = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledEmbeddedContentFrame = styled(EmbeddedContentFrame)`
  background-color: ${color.lightGray};
`;

const Video = styled.video`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

type Props = {
  className?: string;
  url: string;
};

type AspectRatio = {
  x: number;
  y: number;
};

const VideoPlayer: React.FC<Props> = ({ className, url }) => {
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>({ x: 1, y: 1 });

  useEffect(() => listenForLoadedmetadata(setAspectRatio), []);

  return url.includes('www.youtube.com/embed') ? (
    <StyledEmbeddedContentFrame
      aspectRatio={{ x: 16, y: 9 }}
      className={className}
    >
      <Iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={url}
      >
        <FallbackParagraph>
          Your browser does not support the HTML <code>&lt;iframe&gt;</code>{' '}
          element.{' '}
          <ExternalLink href={url}>
            Click here to watch this video on YouTube
          </ExternalLink>
          .
        </FallbackParagraph>
      </Iframe>
    </StyledEmbeddedContentFrame>
  ) : (
    <StyledEmbeddedContentFrame aspectRatio={aspectRatio} className={className}>
      <Video controls preload="metadata" src={url}>
        <FallbackParagraph>
          Your browser does not support the HTML <code>&lt;video&gt;</code>{' '}
          element.{' '}
          <ExternalLink download href={url}>
            Click here to download this video
          </ExternalLink>
          .
        </FallbackParagraph>
      </Video>
    </StyledEmbeddedContentFrame>
  );
};

export default VideoPlayer;

function listenForLoadedmetadata(
  setAspectRatio: React.Dispatch<React.SetStateAction<AspectRatio>>
) {
  const videoElement = document.querySelector('video');

  if (videoElement) {
    const handleLoadedmetadata = () => {
      setAspectRatio({
        x: videoElement.videoWidth,
        y: videoElement.videoHeight,
      });

      videoElement.removeEventListener('loadedmetadata', handleLoadedmetadata);
    };

    videoElement.addEventListener('loadedmetadata', handleLoadedmetadata);
  }
}
