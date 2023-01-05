import styled from 'styled-components';

export const CardContainer = styled.div`
  padding-top: 1rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const ImgContainer = styled.div`
  width: 140px;
  height: 100px;
`;

export const CartImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DeleteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid #e11d48;
  }
`;
