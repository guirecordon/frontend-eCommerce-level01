import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
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
      id
      name
      panel {
        url
      }
    }
  }
`;

export function GridPanel() {
  const { data } = useQuery(GET_PANEL_QUERY);

  return (
    <GridContainer>
      <ImgContainer>
        <img src={data?.categories[0].panel.url} alt="" />
        <Link to={`/products/${data?.categories[0].id}`}>
          <CategoryBtn>{data?.categories[0].name}</CategoryBtn>
        </Link>
      </ImgContainer>
      <ImgContainerSpanVertical>
        <img src={data?.categories[1].panel.url} alt="" />
        <Link to={`/products/${data?.categories[1].id}`}>
          <CategoryBtn>{data?.categories[1].name}</CategoryBtn>
        </Link>
      </ImgContainerSpanVertical>
      <ImgContainer>
        <img src={data?.categories[2].panel.url} alt="" />
        <Link to={`/products/${data?.categories[2].id}`}>
          <CategoryBtn>{data?.categories[2].name}</CategoryBtn>
        </Link>
      </ImgContainer>
      <ImgContainer>
        <img src={data?.categories[3].panel.url} alt="" />
        <Link to={`/products/${data?.categories[3].id}`}>
          <CategoryBtn>{data?.categories[3].name}</CategoryBtn>
        </Link>
      </ImgContainer>
      <ImgContainer>
        <img src={data?.categories[4].panel.url} alt="" />
        <Link to={`/products/${data?.categories[4].id}`}>
          <CategoryBtn>{data?.categories[4].name}</CategoryBtn>
        </Link>
      </ImgContainer>
      <ImgContainerSpanHorizontal>
        <img src={data?.categories[5].panel.url} alt="" />
        <Link to={`/products/${data?.categories[5].id}`}>
          <CategoryBtn>{data?.categories[5].name}</CategoryBtn>
        </Link>
      </ImgContainerSpanHorizontal>
    </GridContainer>
  );
}
