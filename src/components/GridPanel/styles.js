import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 1rem;

  padding: 1rem;

  height: 80vh;
  width: 100vw;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  background: ${(props) => props.theme.white};
  grid-column: span 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  position: relative;
`;

export const ImgContainerSpanVertical = styled(ImgContainer)`
  background: ${(props) => props.theme.white};
  grid-row: span 2;
`;

export const ImgContainerSpanHorizontal = styled(ImgContainer)`
  background: ${(props) => props.theme.white};
  grid-column: span 2;
`;

export const CategoryBtn = styled.button`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.primary};
  font-size: 1rem;
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.fadeText};
    color: ${(props) => props.theme.white};
  }

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
