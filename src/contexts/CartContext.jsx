import { createContext, useState } from 'react';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [total, setTotal] = useState(0);

  function changeTotal(quantity) {
    setTotal(quantity);
  }

  return (
    <CartContext.Provider value={{ total, changeTotal }}>
      {children}
    </CartContext.Provider>
  );
}
