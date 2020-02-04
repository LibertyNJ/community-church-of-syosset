import styled from 'styled-components';

import { baseline, color } from '../style';

const Card = styled.div`
  border-radius: ${baseline};

  a {
    transition: background-color 500ms, filter 500ms;

    &:focus {
      filter: drop-shadow(0 0 5px ${color.primary});
    }

    &:hover {
      background-color: ${color.secondary};
    }

    &:active {
      color: inherit;
    }
  }
`;

export default Card;
