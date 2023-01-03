import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 2.5rem 2rem;
`;

export const TopFooter = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
`;

export const BottomFooter = styled.div`
  height: 4rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const ListColumn = styled.div`
  line-height: 1.6rem;

  li {
    color: ${(props) => props.theme.fadeText};
  }
`;

export const DescriptionColumn = styled.div`
  p {
    color: ${(props) => props.theme.fadeText};
  }
`;
