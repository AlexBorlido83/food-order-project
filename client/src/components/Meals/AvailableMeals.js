import classes from "./MealsSummary.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AvailableMeals = () => {
  const dispatch = useDispatch();
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const mealsList = (mealsObj) => {
      const loadedMeals = [];
      for (const mealKey in mealsObj) {
        loadedMeals.push({
          id: mealKey,
          name: mealsObj[mealKey].title,
          description: mealsObj[mealKey].description,
          price: mealsObj[mealKey].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals({ url: 'http://localhost:3000/meals' }, mealsList)
  }, [dispatch, fetchMeals]);

  // You can add a loading state while data is being fetched
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handle errors if they occur
  if (error) {
    return <p>{error}</p>;
  }
  
  const mealsList = meals.map((meal) => {
    return <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  });

  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
