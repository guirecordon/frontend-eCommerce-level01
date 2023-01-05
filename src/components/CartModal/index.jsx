import { ProductCard } from './components/ProductCard';
import { ModalContainer } from './styles';

export function CartModal() {
  return (
    <ModalContainer>
      <h3>Products in your cart</h3>

      <ProductCard />
    </ModalContainer>
  );
}
