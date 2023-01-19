import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartArray, setCartArray] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [transactionId, setTransactionId] = useState(0);

  function fillCart(product) {
    setTransactionId(transactionId + 1);
    const idArray = cartArray.map((cartItem) => cartItem.id);

    if (idArray.includes(product.id)) {
      const newArr = cartArray.map((item) => {
        if (item.id === product.id) {
          return { ...item, itemQty: item.itemQty + product.itemQty };
        } else {
          return { ...item };
        }
      });
      setCartArray(newArr);
    } else {
      setCartArray([...cartArray, { ...product, transId: transactionId }]);
    }
  }

  function onRemoveProduct(transId) {
    const updatedAfterRemoval = cartArray.filter((product) => {
      return product.transId !== transId;
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
