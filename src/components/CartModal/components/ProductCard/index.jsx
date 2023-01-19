import {
  CardCenter,
  CardContainer,
  CartImg,
  DeleteContainer,
  ImgContainer,
} from './styles';

import cardImg from '../../../../assets/Home/grid06.svg';
import { Trash } from 'phosphor-react';
import { dollarFormatter } from '../../../../utils/formatter';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts/CartContext';

export function ProductCard({ id, name, price, description, images, itemQty }) {
  const { onRemoveProduct } = useContext(CartContext);

  return (
    <CardContainer>
      <ImgContainer>
        <CartImg src={images[0].url} />
      </ImgContainer>

      <CardCenter>
        <h4>{name}</h4>
        <p>{description}</p>

        <div>
          <span>{itemQty}</span>
          <span>x</span>
          <span>{dollarFormatter.format(price / 100)}</span>
        </div>
      </CardCenter>

      <DeleteContainer onClick={() => onRemoveProduct(id)}>
        <Trash size={24} color="#E11D48" />
      </DeleteContainer>
    </CardContainer>
  );
}
