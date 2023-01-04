import {
  BottomFooter,
  DescriptionColumn,
  FooterContainer,
  ListColumn,
  TopFooter,
} from './styles';

import logo from '../../assets/Home/header-logo.svg';

export function Footer() {
  return (
    <FooterContainer>
      <TopFooter>
        <ListColumn>
          <h4>Links</h4>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </ListColumn>

        <ListColumn>
          <h4>Categories</h4>
          <ul>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </ListColumn>

        <DescriptionColumn>
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            quam inventore voluptas quidem cum possimus atque necessitatibus
            repellat porro nesciunt repudiandae voluptatum nostrum incidunt
            ipsam officia esse, et qui assumenda.
          </p>
        </DescriptionColumn>

        <DescriptionColumn>
          <h4>Contact</h4>
          <p>+1 800 555-5555</p>
        </DescriptionColumn>
      </TopFooter>

      <BottomFooter>
        <img src={logo} alt="" />
        <p>© Copyright 2023 All rights reserved</p>
      </BottomFooter>
    </FooterContainer>
  );
}
