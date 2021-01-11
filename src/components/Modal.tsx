import React, { useEffect } from 'react';
import styled from 'styled-components';

import { baseline, color } from '../style';
import Button from './Button';

const Shroud = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
`;

const Window = styled.div`
  background-color: ${color.white};
  border-radius: ${baseline};
  color: ${color.body};
  margin: auto;
  padding: calc(3 * ${baseline});
`;

const Content = styled.div`
  background-color: ${color.white};
  color: ${color.body};
  max-width: 33rem;
`;

type Props = {
  children: React.ReactNode;
  isShown: boolean;
  onDismiss: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Modal: React.FC<Props> = ({ children, isShown, onDismiss }) => {
  useEffect(() => suppressScroll(isShown), [isShown]);

  return isShown ? (
    <Shroud>
      <Window>
        <Content>{children}</Content>
        <StyledButton onClick={onDismiss}>Dismiss</StyledButton>
      </Window>
    </Shroud>
  ) : null;
};

function suppressScroll(modalIsShown: boolean) {
  const body = document.querySelector('body');

  if (modalIsShown && body !== null) {
    body.classList.add('hide-overflow');
    return () => body.classList.remove('hide-overflow');
  }
}

export default Modal;
