import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 23rem;
  width: 15rem;

  a {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const OldPrice = styled.span`
  color: ${(props) => props.theme.fadeText};
  text-decoration: line-through;
  padding-right: 1rem;
`;

export const NewPrice = styled.span`
  color: ${(props) => props.theme.primary};
  font-weight: bold;
`;
