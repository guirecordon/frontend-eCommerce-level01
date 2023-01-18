import { HeroView, LeftArrow, RightArrow, SliderContainer } from './styles';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { useState } from 'react';

import Slider01 from '../../assets/Home/slider01.svg';
import Slider02 from '../../assets/Home/slider02.svg';

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePreviousSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function handleNextSlide() {
    if (currentSlide === 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <HeroView>
      <SliderContainer
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={Slider01} alt="" />
        <img src={Slider02} alt="" />
      </SliderContainer>

      <LeftArrow onClick={handlePreviousSlide}>
        <CaretLeft size={32} color="white" />
      </LeftArrow>

      <RightArrow onClick={handleNextSlide}>
        <CaretRight size={32} color="white" />
      </RightArrow>
    </HeroView>
  );
}
