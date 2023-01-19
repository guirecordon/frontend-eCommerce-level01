import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2.5rem 2rem;
`;

export const TopFooter = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;

export const ListColumn = styled.div`
  line-height: 1.6rem;

  li {
    color: ${(props) => props.theme.fadeText};
  }
`;

export const DescriptionColumn = styled.div`
  p {
    padding: 0.5rem 0;
    color: ${(props) => props.theme.fadeText};
  }
`;

export const BottomFooter = styled.div`
  padding: 4rem 3rem 1rem;
  height: 4rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const BottomRight = styled.div`
  img {
    height: 1.5rem;
    padding-right: 1.5rem;
  }
`;
