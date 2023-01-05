import {
  HeaderContainer,
  LeftSideNav,
  LogoContainer,
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
import { CartModal } from '../CartModal';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
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

      <LogoContainer>
        <img src={mainLogo} alt="" />
      </LogoContainer>

      <RightSideNav>
        <SearchBar>
          <input type="text" placeholder="Search store items..." />
          <MagnifyingGlass size={24} />
        </SearchBar>
        <a href="#">
          <UserCircle size={24} />
        </a>
        <a href="#">
          <ShoppingCart size={24} onClick={() => setOpen(!open)} />
        </a>
      </RightSideNav>

      {open && <CartModal />}
    </HeaderContainer>
  );
}
