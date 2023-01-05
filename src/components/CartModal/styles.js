import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 2000;
  position: absolute;
  top: 4rem;
  right: 0;
  height: 24rem;
  width: 32rem;
  background: ${(props) => props.theme.fadeText};
  padding: 1rem;

  display: flex;
  flex-direction: column;
`;
