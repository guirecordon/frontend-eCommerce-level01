import styled from 'styled-components';

export const HeroView = styled.section`
  height: calc(100vh - 64px);
  width: 100vw;
  overflow: hidden;

  position: relative;
`;

export const SliderContainer = styled.div`
  display: flex;
  height: 100%;
  width: 200vw;
  transition: 1s ease;

  img {
    width: 100vw;
    height: 100%;
    object-fit: cover;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 88px;
  width: 64px;
  border: 2px solid #fff;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const LeftArrow = styled(Arrow)`
  left: 1rem;
`;

export const RightArrow = styled(Arrow)`
  right: 1rem;
`;
