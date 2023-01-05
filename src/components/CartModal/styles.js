import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 2000;
  position: absolute;
  top: 4rem;
  right: 0;
  height: 20rem;
  width: 32rem;
  background: ${(props) => props.theme.white};
  padding: 1rem;

  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.75rem;
    font-weight: 200;
    color: ${(props) => props.theme.gray700};
  }
`;

export const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0;
`;

export const CheckoutBtn = styled.button`
  padding: 0.65rem 0.5rem;
  background: ${(props) => props.theme.searchBlue};
  text-transform: uppercase;
  width: 200px;
  font-size: 0.75rem;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.blue700};
  }
`;

export const ResetCart = styled.button`
  background: none;
  padding: 1rem 0;
  font-size: 0.75rem;
  color: ${(props) => props.theme.red600};

  align-self: flex-start;

  cursor: pointer;
`;
