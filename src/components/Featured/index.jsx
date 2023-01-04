import featured01 from '../../assets/Home/featured01.svg';
import { FeaturedCard } from './components/FeaturedCards';
import { CardsContainer, FeaturedContainer } from './styles';

const cards = [
  {
    id: 0,
    img: featured01,
  },
  {
    id: 1,
    img: featured01,
  },
  {
    id: 2,
    img: featured01,
  },
  {
    id: 3,
    img: featured01,
  },
];

export function Featured() {
  return (
    <FeaturedContainer>
      <h4>Featured Products</h4>
      <CardsContainer>
        {cards.map((card) => (
          <FeaturedCard key={card.id} img={card.img} />
        ))}
      </CardsContainer>
    </FeaturedContainer>
  );
}
