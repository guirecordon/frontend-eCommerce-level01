import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
import { GlobalStyle } from './styles/global';
import { CartContext } from './contexts/CartContext';
import { useState } from 'react';

export function App() {
  const [total, setTotal] = useState(5);

  function changeTotal(quantity) {
    setTotal(quantity);
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <CartContext.Provider value={{ total, changeTotal }}>
          <Router />
        </CartContext.Provider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
