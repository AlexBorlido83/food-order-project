import React from 'react';
import classes from './CartItem.module.css';

function CartItem(props) {
  const {
    priceProps, name, amount, onRemove, onAdd,
  } = props;
  // const price = `$${priceProps.toFixed(2)}`;
  const price = typeof priceProps === 'number' ? `$${priceProps.toFixed(2)}` : 'Invalid Price';
  // const price = `$${priceProps}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>
            x
            {amount}
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onRemove}>−</button>
        <button type="button" onClick={onAdd}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
