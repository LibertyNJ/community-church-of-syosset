import styled from 'styled-components';

import { baseline, color, typography } from '../style';

const Button = styled.button`
  background-color: ${color.primary};
  border: none;
  border-radius: ${baseline};
  color: ${color.white};
  font-family: ${typography.font.heading};
  font-size: ${typography.fontSize.h4.xs};
  line-height: ${typography.lineHeight.h4.xs};
  padding: calc(3 * ${baseline});
  transition: background-color 500ms, color 500ms, filter 500ms;

  &:focus {
    filter: drop-shadow(0 0 5px ${color.primary});
  }

  &:hover {
    background-color: ${color.secondary};
    color: ${color.body};
    cursor: pointer;
  }
`;

export default Button;
