import { Slider } from '../../components/Slider';
import { Featured } from '../../components/Featured';
import { HomeContainer } from './styles';
import { GridPanel } from '../../components/GridPanel';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <HomeContainer>
      <Slider />
      <Featured />
      <GridPanel />
      <Featured />
      <Footer />
    </HomeContainer>
  );
}
