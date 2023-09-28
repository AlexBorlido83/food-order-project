import classes from "./MealsSummary.module.css";

const AddMeal = () => {

    const submitFormHandler = event => {
        event.preventDefault();
    }

    return (
    <form className={classes.addMeal} onSubmit={submitFormHandler}>
        <h1>ADD A MEAL</h1>
        <div>
            <label htmlFor="title">What is your dish ?</label>
            <input />
        </div>
        <div>
            <label htmlFor="desc">What's inside the meal ?</label>
            <input />
        </div>
        <div>
            <label htmlFor="price">Price of the meal:</label>
            <input />
        </div>
        <button className={classes.button}>Add Meal</button>
    </form>)
}

export default AddMeal;