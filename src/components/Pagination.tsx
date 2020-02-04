import { Link, navigate } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from './Button';
import FormControl from './FormControl';
import LinkButton from './LinkButton';
import { baseline, typography, color } from '../style';

const Container = styled.div`
  font-family: ${typography.font.heading};
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
`;

const EllipsisContainer = styled.div`
  display: inline-block;
  margin: 0 calc(0.5 * ${baseline});
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: flex-end;
`;

const GoIconContainer = styled.div`
  margin-left: 0.5em;
`;

const PageNumbersContainer = styled.div`
  margin: 0 auto calc(6 * ${baseline});
  width: max-content;
`;

const StyledButton = styled(Button)`
  display: flex;
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
  padding: 0 calc(1 * ${baseline});
`;

const StyledFormControl = styled(FormControl)`
  align-items: center;
  flex-direction: row;
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
  margin-right: 0.5em;

  input {
    padding: 0 calc(1 * ${baseline});
  }

  label {
    font-size: ${typography.fontSize.body.xs};
    line-height: ${typography.lineHeight.body.xs};
    margin: 0 0.5em 0 0;
  }
`;

const StyledLinkButton = styled(LinkButton)`
  display: inline-block;
  font-size: ${typography.fontSize.body.xs};
  line-height: ${typography.lineHeight.body.xs};
  margin: 0 calc(0.5 * ${baseline});
  min-width: 3ch;
  padding: 0 calc(1 * ${baseline});

  &.active {
    background-color: ${color.secondary};
    color: ${color.body};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

type Props = {
  className?: string;
  lastPageNumber: number;
  pageNumber: number;
  urlRoot: string;
};

const Pagination: React.FC<Props> = ({
  className,
  lastPageNumber,
  pageNumber,
  urlRoot,
}) => {
  const [selectedPageNumber, setSelectedPageNumber] = useState();

  return (
    <Container className={className}>
      <PageNumbersContainer>
        {pageNumber > 1 && (
          <>
            <StyledLinkButton to={`/${urlRoot}/page/${pageNumber - 1}`}>
              <FontAwesomeIcon icon="chevron-left" />
            </StyledLinkButton>
            <StyledLinkButton to={`/${urlRoot}/page/1`}>1</StyledLinkButton>
          </>
        )}
        {pageNumber - 3 > 1 && <EllipsisContainer>…</EllipsisContainer>}
        {pageNumber - 2 > 1 && (
          <StyledLinkButton to={`/${urlRoot}/page/${pageNumber - 2}`}>
            {pageNumber - 2}
          </StyledLinkButton>
        )}
        {pageNumber - 1 > 1 && (
          <StyledLinkButton to={`/${urlRoot}/page/${pageNumber - 1}`}>
            {pageNumber - 1}
          </StyledLinkButton>
        )}
        <StyledLinkButton
          className="active"
          to={`/${urlRoot}/page/${pageNumber}`}
        >
          {pageNumber}
        </StyledLinkButton>
        {pageNumber + 1 < lastPageNumber && (
          <StyledLinkButton to={`/${urlRoot}/page/${pageNumber + 1}`}>
            {pageNumber + 1}
          </StyledLinkButton>
        )}
        {pageNumber + 2 < lastPageNumber && (
          <StyledLinkButton to={`/${urlRoot}/page/${pageNumber + 2}`}>
            {pageNumber + 2}
          </StyledLinkButton>
        )}
        {pageNumber + 3 < lastPageNumber && (
          <EllipsisContainer>…</EllipsisContainer>
        )}
        {pageNumber < lastPageNumber && (
          <>
            <StyledLinkButton to={`/${urlRoot}/page/${lastPageNumber}`}>
              {lastPageNumber}
            </StyledLinkButton>
            <StyledLinkButton to={`/${urlRoot}/page/${pageNumber + 1}`}>
              <FontAwesomeIcon icon="chevron-right" />
            </StyledLinkButton>
          </>
        )}
      </PageNumbersContainer>
      {lastPageNumber > 4 && (
        <Form
          onSubmit={event => handleSubmit(event, urlRoot, selectedPageNumber)}
        >
          <StyledFormControl
            label="Go to page"
            max={lastPageNumber}
            min={1}
            name="go-to-page"
            onChange={event => {
              handleChange(event, setSelectedPageNumber);
            }}
            required
            type="number"
            value={selectedPageNumber}
          />
          <StyledButton>
            Go
            <GoIconContainer>
              <FontAwesomeIcon icon="chevron-right" />
              <FontAwesomeIcon icon="chevron-right" />
            </GoIconContainer>
          </StyledButton>
        </Form>
      )}
    </Container>
  );
};

export default Pagination;

function handleChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setState: React.Dispatch<React.SetStateAction<string>>
) {
  event.preventDefault();
  setState(event.target.value);
}

function handleSubmit(
  event: React.FormEvent<HTMLFormElement>,
  slug: string,
  pageNumber: number
) {
  event.preventDefault();
  navigate(`/${slug}/page/${pageNumber}`);
}
