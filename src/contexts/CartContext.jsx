import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartArray, setCartArray] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
    const totalObj = cartArray.reduce(
      (acc, currVal) => {
        return {
          totalQty: (acc.totalQty += currVal.itemQty),
          totalPrice: (acc.totalPrice += currVal.price * currVal.itemQty),
        };
      },
      { totalQty: 0, totalPrice: 0 },
    );

    setTotal(totalObj.totalQty);
    setTotalPrice(totalObj.totalPrice);
  }, [cartArray]);

  return (
    <CartContext.Provider
      value={{ total, fillCart, cartArray, onRemoveProduct, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
