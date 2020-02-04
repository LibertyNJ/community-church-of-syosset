import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledButton = styled(Button)`
  display: block;
  text-align: center;

  &:hover {
    text-decoration: none;
  }
`;

type Props = {
  activeClassName?: string;
  children: React.ReactNode;
  className?: string;
  to: string;
};

const LinkButton: React.FC<Props> = ({
  activeClassName,
  children,
  className,
  to,
}) => (
  <StyledButton
    activeClassName={activeClassName}
    as={Link}
    className={className}
    to={to}
  >
    {children}
  </StyledButton>
);

export default LinkButton;
