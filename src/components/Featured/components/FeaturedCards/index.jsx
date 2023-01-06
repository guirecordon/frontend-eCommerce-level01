import { CardContainer, NewPrice, OldPrice } from './styles';

export function FeaturedCard({ image, name, price }) {
  return (
    <CardContainer>
      <img src={image} alt="" />
      <p>{name}</p>
      <p>
        <OldPrice>{price * 1.25}</OldPrice>
        <NewPrice>{price}</NewPrice>
      </p>
    </CardContainer>
  );
}
