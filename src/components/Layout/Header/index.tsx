import React from 'react';
import styled from 'styled-components';

import Brand from './Brand';
import Navigation from './Navigation';
import CCSLogo from '../../CCSLogo';
import { baseline, breakpoint, color } from '../../../style';

const Container = styled.header`
  background-color: ${color.white};
  display: flex;
  justify-content: space-between;
  padding: calc(3 * ${baseline});

  @media (min-width: ${breakpoint.md}) {
    padding: 0;
  }
`;

const StyledBrand = styled(Brand)``;

const StyledCCSLogo = styled(CCSLogo)`
  display: block;
  height: calc(9 * ${baseline});
`;

type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => (
  <Container className={className}>
    <StyledBrand>
      <StyledCCSLogo />
    </StyledBrand>
    <Navigation />
  </Container>
);

export default Header;
