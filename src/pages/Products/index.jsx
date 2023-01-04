import {
  AsideBar,
  Header,
  ImagesContainer,
  ProductsContainer,
  RightSide,
} from './styles';
import { FeaturedCard } from '../../components/Featured/components/FeaturedCards';

import cover from '../../assets/Products/cover.svg';

import featured01 from '../../assets/Home/featured01.svg';

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

export function Products() {
  return (
    <ProductsContainer>
      <AsideBar>
        <fieldset>
          <legend>Product Categories</legend>
          <div>
            <input type="checkbox" id="hat" name="hat" checked />
            <label htmlFor="hat">hat</label>
          </div>

          <div>
            <input type="checkbox" id="tshirt" name="tshirt" />
            <label htmlFor="tshirt">tshirt</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Filter by price</legend>
          <span>0</span>
          <input type="range" min={0} max={1000} />
          <span>1000+</span>
        </fieldset>

        <fieldset>
          <legend>Sort by</legend>
          <div>
            <input type="radio" id="lowest" name="lowest" checked />
            <label htmlFor="lowest">Price (lowest first)</label>
          </div>

          <div>
            <input type="radio" id="highest" name="highest" />
            <label htmlFor="highest">Price (highest first)</label>
          </div>
        </fieldset>
      </AsideBar>

      <RightSide>
        <Header>
          <img src={cover} alt="" />
        </Header>

        <ImagesContainer>
          {cards.map((card) => (
            <FeaturedCard key={card.id} img={card.img} />
          ))}
        </ImagesContainer>
      </RightSide>
    </ProductsContainer>
  );
}
