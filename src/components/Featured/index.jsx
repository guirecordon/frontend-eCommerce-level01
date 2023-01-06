import { gql, useQuery } from '@apollo/client';
import featured01 from '../../assets/Home/featured01.svg';
import { FeaturedCard } from './components/FeaturedCards';
import { CardsContainer, FeaturedContainer } from './styles';

const GET_PRODUCTS_QUERY = gql`
  query MyQuery {
    products {
      collections {
        id
        name
      }
      description
      id
      images {
        url
      }
      name
      price
      slug
    }
  }
`;

export function Featured() {
  const { data } = useQuery(GET_PRODUCTS_QUERY);

  return (
    <FeaturedContainer>
      <h4>Featured Products</h4>
      <CardsContainer>
        {/* {data?.products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })} */}

        {data?.products.map((product) => (
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
