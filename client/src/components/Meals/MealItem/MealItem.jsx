import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
  const {
    price, name, id, description,
  } = props;
  const cartCtx = useContext(CartContext);
  const priceProps = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };
  return (
    <li>
      <div className={classes.description}>
        <h3>{name}</h3>
        <div>{description}</div>
        <div className={classes.price}>{priceProps}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
