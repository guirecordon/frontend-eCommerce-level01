import styled from 'styled-components';

export const ProductsContainer = styled.main`
  padding-top: 5rem;
  position: relative;
`;

export const AsideBar = styled.aside`
  position: absolute;
  padding-left: 1.5rem;

  width: 16rem;
  height: 100vh;

  legend {
    padding-bottom: 0.5rem;
    font-weight: bold;
  }

  label {
    padding-left: 0.5rem;
  }

  fieldset {
    padding-bottom: 1rem;
  }
`;

export const RightSide = styled.section`
  padding-left: 16rem;
`;

export const Header = styled.div`
  height: 15rem;
  padding-left: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;

  padding: 3rem 1rem;
`;
