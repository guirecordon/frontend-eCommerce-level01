import { Slider } from '../../components/Slider';
import { Featured } from '../../components/Featured';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Slider />
      <Featured />
    </HomeContainer>
  );
}
