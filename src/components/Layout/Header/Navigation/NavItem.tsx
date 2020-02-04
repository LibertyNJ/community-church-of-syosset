import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { baseline, breakpoint, color } from '../../../../style';

const ListItem = styled.li`
  border-top: 1px solid ${color.body};

  @media (min-width: ${breakpoint.md}) {
    border-top: 0;
  }
`;

const StyledLink = styled(Link)`
  background-color: ${color.white};
  display: block;
  padding: calc(2 * ${baseline});

  &.active {
    background-color: ${color.primary};
    color: ${color.white};
  }

  @media (min-width: ${breakpoint.md}) {
    align-items: center;
    display: flex;
    height: 100%;
    padding: calc(3 * ${baseline});
  }
`;

type Props = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

const NavItem: React.FC<Props> = ({ children, className, to }) => (
  <ListItem className={className}>
    <StyledLink activeClassName="active" to={to}>
      {children}
    </StyledLink>
  </ListItem>
);

export default NavItem;
