import styled from 'styled-components';

type Props = {
  aspectRatio: {
    x: number;
    y: number;
  };
};

const EmbeddedContentFrame = styled.div<Props>`
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: ${props => (props.aspectRatio.y / props.aspectRatio.x) * 100}%;
  }
`;

export default EmbeddedContentFrame;
