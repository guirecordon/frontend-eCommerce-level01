import {
  CartHolder,
  Counter,
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
import { useContext, useState } from 'react';
import { CartModal } from '../CartModal';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const [open, setOpen] = useState(false);
  const { total } = useContext(CartContext);

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
        <NavLink to={'/'}>
          <img src={mainLogo} alt="" />
        </NavLink>
      </LogoContainer>

      <RightSideNav>
        <SearchBar>
          <input type="text" placeholder="Search store items..." />
          <MagnifyingGlass size={24} />
        </SearchBar>
        <a href="#">
          <UserCircle size={24} />
        </a>
        <CartHolder>
          <ShoppingCart size={24} onClick={() => setOpen(!open)} />
          {total > 0 && <Counter>{total}</Counter>}
        </CartHolder>
      </RightSideNav>

      {open && <CartModal />}
    </HeaderContainer>
  );
}
