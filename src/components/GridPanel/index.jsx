import { gql, useQuery } from '@apollo/client';
import {
  CategoryBtn,
  GridContainer,
  ImgContainer,
  ImgContainerSpanHorizontal,
  ImgContainerSpanVertical,
} from './styles';

// import grid01 from '../../assets/Home/grid01.svg';
// import grid02 from '../../assets/Home/grid02.svg';
// import grid03 from '../../assets/Home/grid03.svg';
// import grid04 from '../../assets/Home/grid04.svg';
// import grid05 from '../../assets/Home/grid05.svg';
// import grid06 from '../../assets/Home/grid06.svg';

const GET_PANEL_QUERY = gql`
  query MyQuery {
    categories {
      name
      panel {
        url
      }
    }
  }
`;

export function GridPanel() {
  const { data } = useQuery(GET_PANEL_QUERY);

  // const panelArr = data?.categories.map((category) => {
  //   return {
  //     name: category.name,
  //     image: category.panel.url,
  //   };
  // });

  return (
    <GridContainer>
      <ImgContainer>
        <img src={data?.categories[0].panel.url} alt="" />
        <CategoryBtn>{data?.categories[0].name}</CategoryBtn>
      </ImgContainer>
      <ImgContainerSpanVertical>
        <img src={data?.categories[1].panel.url} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainerSpanVertical>
      <ImgContainer>
        <img src={data?.categories[2].panel.url} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainer>
      <ImgContainer>
        <img src={data?.categories[3].panel.url} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainer>
      <ImgContainer>
        <img src={data?.categories[4].panel.url} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainer>
      <ImgContainerSpanHorizontal>
        <img src={data?.categories[5].panel.url} alt="" />
        <CategoryBtn>Sales</CategoryBtn>
      </ImgContainerSpanHorizontal>
    </GridContainer>
  );
}
