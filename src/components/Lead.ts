import styled from 'styled-components';

import { typography } from '../style';

const Lead = styled.p`
  font-family: ${typography.font.heading};
  font-size: ${typography.fontSize.h4.xs};
  line-height: ${typography.lineHeight.h4.xs};
`;

export default Lead;
