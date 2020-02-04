import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { baseline, breakpoint, color } from '../../../style';

const Div = styled.div`
  align-items: center;
  display: flex;
  margin-right: calc(6 * ${baseline});

  @media (min-width: ${breakpoint.md}) {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  transition: filter 500ms;
  width: 100%;

  &:focus {
    filter: drop-shadow(0 0 5px ${color.primary});
  }

  @media (min-width: ${breakpoint.md}) {
    padding: calc(3 * ${baseline});
  }
`;

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Brand: React.FC<Props> = ({ children, className }) => (
  <Div className={className}>
    <StyledLink to="/">{children}</StyledLink>
  </Div>
);

export default Brand;
