import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';

import { baseline, breakpoint } from '../../style';

type BreakpointContainerProps = {
  display?: string;
};

const BreakpointContainer = styled.div<BreakpointContainerProps>`
  ${props => props.display && `display: ${props.display};`}
  margin: 0 auto;
  width: 100%;

  @media (min-width: ${breakpoint.sm}) {
    max-width: 540px;
  }

  @media (min-width: ${breakpoint.md}) {
    max-width: 720px;
  }

  @media (min-width: ${breakpoint.lg}) {
    max-width: 960px;
  }

  @media (min-width: ${breakpoint.xl}) {
    max-width: 1140px;
  }
`;

const Container = styled.main`
  display: flex;
  padding: 0 calc(3 * ${baseline});
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  display: flex;
  padding: 0 calc(3 * ${baseline});
`;

type Props = {
  backgroundImage?: IFluidObject | IFluidObject[] | (string | IFluidObject)[];
  children: React.ReactNode;
  className?: string;
  display?: string;
};

const Body: React.FC<Props> = ({
  backgroundImage,
  children,
  className,
  display,
}) =>
  backgroundImage ? (
    <StyledBackgroundImage
      className={className}
      fluid={backgroundImage}
      Tag="main"
    >
      <BreakpointContainer display={display}>{children}</BreakpointContainer>
    </StyledBackgroundImage>
  ) : (
    <Container className={className}>
      <BreakpointContainer display={display}>{children}</BreakpointContainer>
    </Container>
  );

export default Body;
