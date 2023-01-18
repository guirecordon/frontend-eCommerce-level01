import styled from 'styled-components';

export const HeaderContainer = styled.header`
  z-index: 1000;

  height: 64px;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.primary};

  position: fixed;
  width: 100%;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  a {
    display: flex;
    align-items: center;
    height: 2rem;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme.fadeText};
    }
  }
`;

export const LeftSideNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    &:hover {
      border: none;
    }
  }
`;

export const RightSideNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  input {
    position: absolute;
    width: 24px;
    opacity: 0;
    cursor: pointer;
    transition: 0.5s ease-in;

    &:focus {
      opacity: 1;
      border-radius: 12px;
      background: transparent;
      padding: 0.5rem;
      color: ${(props) => props.theme.searchBlue};
      width: 272px;
      transform: translateX(-240px);

      &::placeholder {
        color: ${(props) => props.theme.searchBlue};
        font-style: italic;
      }
    }
  }
`;
