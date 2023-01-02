import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 64px;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.primary};

  position: fixed;
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const LeftSideNav = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
`;

export const RightSideNav = styled.div`
  display: flex;
  justify-content: space-around;
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
