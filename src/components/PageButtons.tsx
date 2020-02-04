import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import LinkButton from './LinkButton';

const Container = styled.div`
  display: flex;
`;

const NextIconContainer = styled.div`
  margin-left: 0.5em;
`;

const NextLinkButton = styled(LinkButton)`
  display: flex;
  justify-content: center;
  margin-left: auto;
`;

const PrevIconContainer = styled.div`
  margin-right: 0.5em;
`;

const PrevLinkButton = styled(LinkButton)`
  display: flex;
  justify-content: center;
  margin-right: auto;
`;

type Props = {
  className?: string;
  nextSlug?: string;
  prevSlug?: string;
  rootSlug: string;
};

const PageButtons: React.FC<Props> = ({
  className,
  nextSlug,
  prevSlug,
  rootSlug,
}) => (
  <Container className={className}>
    {prevSlug && (
      <PrevLinkButton to={`/${rootSlug}/${prevSlug}`}>
        <PrevIconContainer>
          <FontAwesomeIcon icon="chevron-left" />
          <FontAwesomeIcon icon="chevron-left" />
        </PrevIconContainer>
        Prev
      </PrevLinkButton>
    )}
    {nextSlug && (
      <NextLinkButton to={`/${rootSlug}/${nextSlug}`}>
        Next
        <NextIconContainer>
          <FontAwesomeIcon icon="chevron-right" />
          <FontAwesomeIcon icon="chevron-right" />
        </NextIconContainer>
      </NextLinkButton>
    )}
  </Container>
);

export default PageButtons;
