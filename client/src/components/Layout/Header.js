import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = (props) => {
  const navigation = useNavigate();

  const addMealHandler = () => {
    navigation("/add-meal");
  }
    return (
      <Fragment>
        <header className={classes.header}>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/"><h1>ReactMeals</h1></Link>
          <button className={classes.button} onClick={addMealHandler}>Add Meal</button>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
      </Fragment>
    );
  };
  
  export default Header;