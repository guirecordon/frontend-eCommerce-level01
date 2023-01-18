import { gql, useQuery } from '@apollo/client';
import { FeaturedCard } from './components/FeaturedCards';
import { CardsContainer, FeaturedContainer } from './styles';
import { LeftArrow, RightArrow } from '../Slider/styles';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { useState } from 'react';

export function Featured({ collection }) {
  const GET_PRODUCTS_QUERY = gql`
    query MyQuery {
      collection(where: { id: "${collection}" }) {
        id
        name
        products {
          id
          name
          price
          images {
            url
          }
        }
      }
    }
  `;

  const [slideMotion, setSlideMotion] = useState(0);

  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  const productsLenght = data.collection.products.length;

  function onRightClick() {
    if (
      slideMotion >= 0 &&
      slideMotion <= data.collection.products.length / 4
    ) {
      setSlideMotion(slideMotion + 1);
    }
  }

  function onLeftClick() {
    if (slideMotion > 0) {
      setSlideMotion(slideMotion - 1);
    }
  }

  return (
    <FeaturedContainer>
      <h4>{data.collection.name} Collection</h4>
      <CardsContainer
        style={{ transform: `translateX(-${slideMotion * 25}vw)` }}
      >
        {data.collection.products.map((product) => (
          <FeaturedCard
            key={product.id}
            id={product.id}
            image={product.images[0].url}
            price={product.price}
            name={product.name}
          />
        ))}
      </CardsContainer>

      {productsLenght > 4 && (
        <>
          <LeftArrow onClick={onLeftClick}>
            <CaretLeft size={32} color="white" />
          </LeftArrow>

          <RightArrow onClick={onRightClick}>
            <CaretRight size={32} color="white" />
          </RightArrow>
        </>
      )}
    </FeaturedContainer>
  );
}
