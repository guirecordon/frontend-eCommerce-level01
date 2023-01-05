import {
  CardCenter,
  CardContainer,
  CartImg,
  DeleteContainer,
  ImgContainer,
} from './styles';

import cardImg from '../../../../assets/Home/grid06.svg';
import { Trash } from 'phosphor-react';

export function ProductCard() {
  return (
    <CardContainer>
      <ImgContainer>
        <CartImg src={cardImg} />
      </ImgContainer>

      <CardCenter>
        <h4>Long Sleeve Graphic T-shirt</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          eligendi?
        </p>

        <div>
          <span>1</span>
          <span>x</span>
          <span>$ 19.99</span>
        </div>
      </CardCenter>

      <DeleteContainer>
        <Trash size={24} color="#E11D48" />
      </DeleteContainer>
    </CardContainer>
  );
}
