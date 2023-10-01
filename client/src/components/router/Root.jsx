import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../Layout/Header';
import Cart from '../Cart/Cart';
import CartProvider from '../../store/CartProvider';

function RootLayout() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Outlet />
    </CartProvider>
  );
}

export default RootLayout;
