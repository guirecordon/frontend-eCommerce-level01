import { Slider } from '../../components/Slider';
import { Featured } from '../../components/Featured';
import { HomeContainer } from './styles';
import { GridPanel } from '../../components/GridPanel';
import { Footer } from '../../components/Footer';
import { gql, useQuery } from '@apollo/client';

const GET_COLLECTION_ID = gql`
  query MyQuery {
    collections {
      id
    }
  }
`;

export function Home() {
  const { loading, error, data } = useQuery(GET_COLLECTION_ID);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <HomeContainer>
      <Slider />
      <Featured collection={data.collections[0].id} />
      <GridPanel />
      <Featured collection={data.collections[1].id} />
      <Footer />
    </HomeContainer>
  );
}
