import { gql, useQuery } from '@apollo/client';
import featured01 from '../../assets/Home/featured01.svg';
import { FeaturedCard } from './components/FeaturedCards';
import { CardsContainer, FeaturedContainer } from './styles';

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

  const { data } = useQuery(GET_PRODUCTS_QUERY);

  return (
    <FeaturedContainer>
      <h4>{data?.collection.name} Collection</h4>
      <CardsContainer>
        {data?.collection.products.map((product) => (
          <FeaturedCard
            key={product.id}
            id={product.id}
            image={product.images[0].url}
            price={product.price}
            name={product.name}
          />
        ))}
      </CardsContainer>
    </FeaturedContainer>
  );
}
