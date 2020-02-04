import React from 'react';

import ExternalLink from '../components/ExternalLink';

type Props = {
  className?: string;
  url: string;
};

const AudioPlayer: React.FC<Props> = ({ className, url }) => (
  <audio className={className} controls preload="metadata" src={url}>
    <p>
      Your browser does not support the HTML5
      <code>audio</code> element.{' '}
      <ExternalLink download href={url}>
        Click here to download this audio
      </ExternalLink>
      .
    </p>
  </audio>
);

export default AudioPlayer;
