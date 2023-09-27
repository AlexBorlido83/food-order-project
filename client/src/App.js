import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Notification from "./components/UI/Notification";
import {useSelector} from "react-redux";

function App() {
  const notification = useSelector(state => state.notif.notification)
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
          {notification &&<Notification status={notification.status} title={notification.title} message={notification.message}/>}
        </main>
      </CartProvider>
    </>
  );
}

export default App;