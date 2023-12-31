import React, { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';
import useHttp from '../../hooks/use-http';

function Cart(props) {
  const { onClose } = props;
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const { isLoading, sendRequest: sendUserInfo } = useHttp();

  const totalAmount = typeof cartCtx.totalAmount === 'number' ? `$${cartCtx.totalAmount.toFixed(2)}` : 'Invalid Price';

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const submitOrderHandler = async (userData) => {
    const response = await sendUserInfo({
      url: 'http://localhost:3000/userInfo',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: userData,
    });

    response !== null ? setIsSubmit(true) : setIsSubmit(false);

    cartCtx.clearCart();
  };

  console.log('ff', cartCtx.items);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={() => cartItemRemoveHandler(item.id)}
            onAdd={() => cartItemAddHandler(item)}
          />
        </li>
      ))}
    </ul>
  );

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const orderCancelButtons = (
    <div className={classes.actions}>
      <button type="button" className={classes['button--alt']} onClick={onClose}>Close</button>
      {hasItems && <button type="button" className={classes.button} onClick={checkoutHandler}>Order</button> }
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} />}
      {!isCheckout && orderCancelButtons}
    </>
  );

  const didSubmitModalContent = (
    <>
      <p>Successfuly sent the order!</p>
      <div className={classes.actions}>
        <button type="button" className={classes.button} onClick={onClose}>Close</button>
      </div>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isLoading && !isSubmit && cartModalContent}
      {!isLoading && isSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
