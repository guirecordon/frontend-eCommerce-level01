import { gql, useQuery } from '@apollo/client';
import featured01 from '../../assets/Home/featured01.svg';
import { FeaturedCard } from './components/FeaturedCards';
import { CardsContainer, FeaturedContainer } from './styles';

const GET_PRODUCTS_QUERY = gql`
  query MyQuery {
    collection(where: { id: "ckdu452ug0gxm0158pysyubmr" }) {
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

export function Featured() {
  const { data } = useQuery(GET_PRODUCTS_QUERY);

  return (
    <FeaturedContainer>
      <h4>{data?.collection.name} Collection</h4>
      <CardsContainer>
        {data?.collection.products.map((product) => (
          <FeaturedCard
            key={product.id}
            image={product.images[0].url}
            price={product.price}
            name={product.name}
          />
        ))}
      </CardsContainer>
    </FeaturedContainer>
  );
}
