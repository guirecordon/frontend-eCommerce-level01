import {
  BottomFooter,
  BottomLeft,
  BottomRight,
  DescriptionColumn,
  FooterContainer,
  ListColumn,
  TopFooter,
} from './styles';

import logo from '../../assets/Home/header-logo.svg';
import stripeLogo from '../../assets/Footer/stripe-3.svg';
import visaLogo from '../../assets/Footer/visa.svg';
import paypalLogo from '../../assets/Footer/paypal-3.svg';
import mastercardLogo from '../../assets/Footer/mastercard-2.svg';
import americanLogo from '../../assets/Footer/american-express-1.svg';
import { gql, useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';

const GET_FOOTER_LISTS = gql`
  query MyQuery {
    categories {
      id
      name
    }
    collections {
      id
      name
    }
  }
`;

export function Footer() {
  const { loading, error, data } = useQuery(GET_FOOTER_LISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  console.log(data);

  return (
    <FooterContainer>
      <TopFooter>
        <ListColumn>
          <h4>Collections</h4>
          <ul>
            {data.collections.map((collection) => (
              <li key={collection.id}>
                <a href="#">{collection.name}</a>
              </li>
            ))}
          </ul>
        </ListColumn>

        <ListColumn>
          <h4>Categories</h4>
          <ul>
            <ul>
              {data.categories.map((category) => (
                <li key={category.id}>
                  <NavLink to={`/products/${category.id}`}>
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </ul>
        </ListColumn>

        <DescriptionColumn>
          <h4>About</h4>
          <p>
            Let your mind become a lens, thanks to the converging rays of
            attention; let your soul be all intent on whatever it is that is
            established in your mind as a dominant, wholly absorbing idea.
          </p>
        </DescriptionColumn>

        <DescriptionColumn>
          <h4>Contact</h4>
          <p>+1 800 555-5555</p>
        </DescriptionColumn>
      </TopFooter>

      <BottomFooter>
        <BottomLeft>
          <img src={logo} alt="" />
          <p>© Copyright 2023 All rights reserved</p>
        </BottomLeft>

        <BottomRight>
          <img src={stripeLogo} alt="" />
          <img src={paypalLogo} alt="" />
          <img src={visaLogo} alt="" />
          <img src={mastercardLogo} alt="" />
          <img src={americanLogo} alt="" />
        </BottomRight>
      </BottomFooter>
    </FooterContainer>
  );
}
