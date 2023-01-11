import { NavLink } from 'react-router-dom';
import { CardContainer, NewPrice, OldPrice } from './styles';

export function FeaturedCard({ id, image, name, price }) {
  return (
    <CardContainer>
      <NavLink to={`/product/${id}`}>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>
          <OldPrice>{price * 1.25}</OldPrice>
          <NewPrice>{price}</NewPrice>
        </p>
      </NavLink>
    </CardContainer>
  );
}
