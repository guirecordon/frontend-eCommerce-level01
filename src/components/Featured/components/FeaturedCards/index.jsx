import { CardContainer, NewPrice, OldPrice } from './styles';

export function FeaturedCard({ img }) {
  return (
    <CardContainer>
      <img src={img} alt="" />
      <p>White Mocha Coat</p>
      <p>
        <OldPrice>old price</OldPrice>
        <NewPrice>new price</NewPrice>
      </p>
    </CardContainer>
  );
}
