import React, { Fragment } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  const { onShowCart } = props;
  const navigation = useNavigate();

  const addMealHandler = () => {
    navigation('/add-meal');
  };
  return (
    <>
      <header className={classes.header}>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><h1>ReactMeals</h1></Link>
        <button type="button" className={classes.button} onClick={addMealHandler}>Add Meal</button>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

export default Header;
