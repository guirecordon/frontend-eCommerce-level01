import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { dollarFormatter } from '../../utils/formatter';
import { ProductCard } from './components/ProductCard';
import {
  CheckoutBtn,
  ModalContainer,
  ResetCart,
  SubtotalContainer,
} from './styles';

export function CartModal() {
  const { cartArray, totalPrice } = useContext(CartContext);

  return (
    <ModalContainer>
      <h3>Products in your cart</h3>

      {cartArray.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}

      <SubtotalContainer>
        <h3>Subtotal</h3>
        <span>{dollarFormatter.format(totalPrice / 100)}</span>
      </SubtotalContainer>

      <CheckoutBtn>Proceed to checkout</CheckoutBtn>

      <ResetCart>Reset Cart</ResetCart>
    </ModalContainer>
  );
}
