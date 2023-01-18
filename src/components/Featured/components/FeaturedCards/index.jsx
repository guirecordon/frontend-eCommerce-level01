import { NavLink } from 'react-router-dom';
import { dollarFormatter } from '../../../../utils/formatter';
import { CardContainer, NewPrice, OldPrice } from './styles';

export function FeaturedCard({ id, image, name, price }) {
  const oldPrice = (price / 100) * 1.25;

  return (
    <CardContainer>
      <NavLink to={`/product/${id}`}>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>
          <OldPrice>{dollarFormatter.format(oldPrice)}</OldPrice>
          <NewPrice>{dollarFormatter.format(price / 100)}</NewPrice>
        </p>
      </NavLink>
    </CardContainer>
  );
}
