import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  margin-bottom: 0;
  text-align: center;
`;

type Props = {
  currentYear: number;
  className?: string;
  holder: string;
  initialYear: number;
};

const CopyrightNotice: React.FC<Props> = ({
  className,
  currentYear,
  holder,
  initialYear,
}) => (
  <Paragraph className={className}>
    <small>
      © {holder} <time dateTime={initialYear.toString()}>{initialYear}</time>
      {currentYear > initialYear && (
        <>
          –<time dateTime={currentYear.toString()}>{currentYear}</time>
        </>
      )}
    </small>
  </Paragraph>
);

export default CopyrightNotice;
