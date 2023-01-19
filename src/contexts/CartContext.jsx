import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartArray, setCartArray] = useState([]);
  const [total, setTotal] = useState(0);

  function fillCart(product) {
    setCartArray([...cartArray, { ...product }]);
  }

  function onRemoveProduct(id) {
    const updatedAfterRemoval = cartArray.filter((product) => {
      return product.id !== id;
    });

    setCartArray(updatedAfterRemoval);
  }

  useEffect(() => {
    const totalQty = cartArray.reduce((acc, currVal) => {
      return (acc += currVal.itemQty);
    }, 0);

    setTotal(totalQty);
  }, [cartArray]);

  return (
    <CartContext.Provider
      value={{ total, fillCart, cartArray, onRemoveProduct }}
    >
      {children}
    </CartContext.Provider>
  );
}
