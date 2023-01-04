import styled from 'styled-components';

export const ProductContainer = styled.main`
  padding: 4.5rem 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const LeftSidePage = styled.div`
  display: grid;
  grid-template-columns: 104px 1fr;
  gap: 0.75rem;
`;

export const ImgContainerSmall = styled.div`
  img {
    width: 100%;
    height: 112px;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const ImgContainerMain = styled.div`
  img {
    width: 100%;
    height: 32rem;
    object-fit: cover;
  }
`;

export const RightSidePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RightSideTop = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: bold;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-bottom: solid 2px ${(props) => props.theme.gray200};
  padding-bottom: 0.5rem;
`;

export const PriceTag = styled.span`
  color: ${(props) => props.theme.searchBlue};
  font-size: 2rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.fadeText};
`;

export const SignButtons = styled.div`
  height: 2rem;
  width: 2rem;
  background: ${(props) => props.theme.gray200};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.fadeText};
  }
`;

export const QtyCounter = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
`;

export const AddToCartBtn = styled.button`
  text-transform: uppercase;
  background: ${(props) => props.theme.searchBlue};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: bold;
  width: 12rem;
  padding: 0.5rem 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.blue700};
  }
`;

export const InvitesContainer = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
`;

export const ProductInvites = styled.div`
  color: ${(props) => props.theme.searchBlue};
  text-transform: uppercase;
  font-size: 0.75rem;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.gray100};
  }
`;

export const ProductSpecs = styled.div`
  padding-top: 1rem;

  p {
    line-height: 1.6rem;
    color: ${(props) => props.theme.fadeText};
    font-size: 0.75rem;
  }
`;

export const RightSideBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h6 {
    color: ${(props) => props.theme.fadeText};
    text-transform: uppercase;
    cursor: pointer;
    border-bottom: 2px solid ${(props) => props.theme.gray200};
    width: 200px;
    padding-bottom: 0.5rem;
  }
`;
