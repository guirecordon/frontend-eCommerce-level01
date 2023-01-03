import { Slider } from '../../components/Slider';
import { Featured } from '../../components/Featured';
import { HomeContainer } from './styles';
import { GridPanel } from '../../components/GridPanel';

export function Home() {
  return (
    <HomeContainer>
      <Slider />
      <Featured />
      <GridPanel />
    </HomeContainer>
  );
}
