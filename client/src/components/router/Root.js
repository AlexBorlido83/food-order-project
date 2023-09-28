import {Outlet} from "react-router-dom";
import Header from "../Layout/Header";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import Notification from "../UI/Notification";
import { useSelector } from "react-redux";
import { useState } from "react";


const RootLayout = () => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const notification = useSelector(state => state.notif.notification)

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
                <Outlet/>
                {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
            </CartProvider>
        </>
    );
}

export default RootLayout;