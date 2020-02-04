import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import ExternalLink from './ExternalLink';
import { baseline, color } from '../style';

const UnorderedList = styled.ul`
  list-style: none;
  margin-bottom: calc(6 * ${baseline});
  padding-left: 0;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25em;
`;

type Props = {
  contentType: string;
};

const ShareSection: React.FC<Props> = ({ contentType }) => (
  <section>
    <h2>Share this {contentType}</h2>
    <UnorderedList>
      <li>
        <StyledFontAwesomeIcon
          color={color.facebook.blue}
          icon={['fab', 'facebook-square']}
        />
        <ExternalLink
          href={`http://www.facebook.com/sharer/sharer.php?u=${encodeURI(
            location.href
          )}&display=popup`}
        >
          Facebook
        </ExternalLink>
      </li>
      <li>
        <StyledFontAwesomeIcon
          color={color.twitter.blue}
          icon={['fab', 'twitter-square']}
        />
        <ExternalLink
          href={`https://twitter.com/intent/tweet?text=${encodeURI(
            document.title
          )}&url=${encodeURI(location.href)}`}
        >
          Twitter
        </ExternalLink>
      </li>
    </UnorderedList>
  </section>
);

export default ShareSection;
