import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { onClick } = props;
  const { items } = cartCtx;
  console.log('items', items);
  const nbOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);
  console.log('nbOfCartItems', nbOfCartItems);

  const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

  useEffect(() => {
    console.log('ITEMS', items);
    if (items.length === 0) {
      return () => {};
    }
    setBtnIsHighLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nbOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
