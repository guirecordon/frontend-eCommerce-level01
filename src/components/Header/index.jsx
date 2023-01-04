import {
  HeaderContainer,
  LeftSideNav,
  RightSideNav,
  SearchBar,
} from './styles';
import mainLogo from '../../assets/Home/header-logo.svg';
import {
  CaretDown,
  MagnifyingGlass,
  ShoppingCart,
  UserCircle,
} from 'phosphor-react';
import { useState } from 'react';

export function Header() {
  // const [searchOpen, setSearchOpen] = useState(false);

  // function handleSearchBox(e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);

  //   setSearchOpen(true);
  // }

  return (
    <HeaderContainer>
      <img src={mainLogo} alt="" />

      <LeftSideNav>
        <a href="#">
          EN <CaretDown size={16} />
        </a>
        <a href="#">
          USD <CaretDown size={16} />
        </a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Accessories</a>
      </LeftSideNav>

      <RightSideNav>
        {/* <a href="#" onClick={handleSearchBox}>
          {searchOpen ? <input type="text" /> : <MagnifyingGlass size={24} />}
        </a> */}

        <SearchBar>
          <input type="text" placeholder="Search store items..." />
          <MagnifyingGlass size={24} />
        </SearchBar>
        <a href="#">
          <UserCircle size={24} />
        </a>
        <a href="#">
          <ShoppingCart size={24} />
        </a>
      </RightSideNav>
    </HeaderContainer>
  );
}
