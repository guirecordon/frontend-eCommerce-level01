import { CardContainer, NewPrice, OldPrice } from './styles';

export function FeaturedCard({ image, name, price }) {
  return (
    <CardContainer>
      <img src={image} alt="" />
      <p>{name}</p>
      <p>
        <OldPrice>old price</OldPrice>
        <NewPrice>{price}</NewPrice>
      </p>
    </CardContainer>
  );
}
