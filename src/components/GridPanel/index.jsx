import {
  CategoryBtn,
  GridContainer,
  ImgContainer,
  ImgContainerSpanHorizontal,
  ImgContainerSpanVertical,
} from './styles';

import grid01 from '../../assets/Home/grid01.svg';
import grid02 from '../../assets/Home/grid02.svg';
import grid03 from '../../assets/Home/grid03.svg';
import grid04 from '../../assets/Home/grid04.svg';
import grid05 from '../../assets/Home/grid05.svg';
import grid06 from '../../assets/Home/grid06.svg';

export function GridPanel() {
  return (
    <GridContainer>
      <ImgContainer>
        <img src={grid01} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainer>
      <ImgContainerSpanVertical>
        <img src={grid02} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainerSpanVertical>
      <ImgContainer>
        <img src={grid03} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainer>
      <ImgContainer>
        <img src={grid04} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainer>
      <ImgContainer>
        <img src={grid05} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainer>
      <ImgContainerSpanHorizontal>
        <img src={grid06} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainerSpanHorizontal>
    </GridContainer>
  );
}
