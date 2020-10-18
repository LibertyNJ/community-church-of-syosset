import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import { baseline, breakpoint, color, typography } from '../../style';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  html {
    font-size: 100%;
  }

  body {
    color: ${color.body};
    font-family: ${typography.font.body};
  }

  p {
    font-size: ${typography.fontSize.body.xs};
    line-height: ${typography.lineHeight.body.xs};
    margin-bottom: calc(6 * ${baseline});
  }

  ol, 
  ul {
    font-size: ${typography.fontSize.body.xs};
    line-height: ${typography.lineHeight.body.xs};
    padding-left: 1em;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${typography.font.heading};
  }

  h1 {
    font-size: ${typography.fontSize.h1.xs};
    line-height: ${typography.lineHeight.h1.xs};
    margin: calc(6 * ${baseline}) 0;
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    font-size: ${typography.fontSize.h2.xs};
    font-weight: normal;
    line-height: ${typography.lineHeight.h2.xs};
  }

  h3 {
    font-size: ${typography.fontSize.h3.xs};
    font-weight: normal;
    line-height: ${typography.lineHeight.h3.xs};
  }

  h4 {
    font-size: ${typography.fontSize.h4.xs};
    font-weight: normal;
    line-height: ${typography.lineHeight.h4.xs};
  }

  h5 {
    font-size: ${typography.fontSize.h5.xs};
    font-weight: normal;
    line-height: ${typography.lineHeight.h5.xs};
  }

  h6 {
    font-size: ${typography.fontSize.h6.xs};
    font-weight: normal;
    line-height: ${typography.lineHeight.h6.xs};
  }

  small {
    font-size: ${typography.fontSize.small.xs};
  }

  a {
    color: ${color.primary};
    text-decoration: none;
    transition: filter 500ms;

    &:link {

    }

    &:visited {

    }

    &:focus {
      filter: drop-shadow(0 0 5px ${color.darkGray});
    }

    &:hover {
      text-decoration: underline;
    }

    &:active {
      color: ${color.secondary};
    }
  }

  address {
    font-style: normal;
  }

  .hide-overflow {
    overflow: hidden;
  }

  @media (min-width: ${breakpoint.md}) {
    h1 {
      font-size: ${typography.fontSize.h1.md};
      line-height: ${typography.lineHeight.h1.md};
    }

    h2 {
      font-size: ${typography.fontSize.h2.md};
      line-height: ${typography.lineHeight.h2.md};
    }

    h3 {
      font-size: ${typography.fontSize.h3.md};
      line-height: ${typography.lineHeight.h3.md};
    }

    h4 {
      font-size: ${typography.fontSize.h4.md};
      line-height: ${typography.lineHeight.h4.md};
    }

    h5 {
      font-size: ${typography.fontSize.h5.md};
      line-height: ${typography.lineHeight.h5.md};
    }

    h6 {
      font-size: ${typography.fontSize.h6.md};
      line-height: ${typography.lineHeight.h6.md};
    }

    small {
      font-size: ${typography.fontSize.small.md};
    }
  }

  @media (min-width: ${breakpoint.lg}) {
    h1 {
      font-size: ${typography.fontSize.h1.lg};
      line-height: ${typography.lineHeight.h1.lg};
    }

    h2 {
      font-size: ${typography.fontSize.h2.lg};
      line-height: ${typography.lineHeight.h2.lg};
    }

    h3 {
      font-size: ${typography.fontSize.h3.lg};
      line-height: ${typography.lineHeight.h3.lg};
    }

    h4 {
      font-size: ${typography.fontSize.h4.lg};
      line-height: ${typography.lineHeight.h4.lg};
    }

    h5 {
      font-size: ${typography.fontSize.h5.lg};
      line-height: ${typography.lineHeight.h5.lg};
    }

    h6 {
      font-size: ${typography.fontSize.h6.lg};
      line-height: ${typography.lineHeight.h6.lg};
    }

    small {
      font-size: ${typography.fontSize.small.lg};
    }
  }
`;

export default GlobalStyle;
