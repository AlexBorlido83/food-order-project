import React, { useEffect, useState } from 'react';
import classes from './AddMeal.module.css';
import useHttp from '../../hooks/use-http';

function AddMeal() {
  const [mealName, setMealName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isTitle, setIsTitle] = useState(false);
  const [isErrorTitle, setIsErrorTitle] = useState(false);

  const [isDescFocused, setIsDescFocused] = useState(false);
  const [isDescription, setIsDescription] = useState(false);
  const [isErrorDesc, setIsErrorDesc] = useState(false);

  const [isPriceFocused, setIsPriceFocused] = useState(false);
  const [isNumber, setIsNumber] = useState(true);

  const [isSubmit, setIsSubmit] = useState(false);
  const maxCharacters = 50;
  const isMaxLengthReached = description.length === 50;
  const { sendRequest: postMeal } = useHttp();

  const descriptionChangeHandler = (event) => {
    const inputValue = event.target.value.slice(0, 50);
    setIsDescFocused(true);
    setIsDescription(true);
    setIsErrorDesc(false);
    if (inputValue.length <= maxCharacters) {
      setDescription(inputValue);
    }
    if (inputValue === '') {
      setIsDescription(false);
    }
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
    setIsPriceFocused(true);
  };

  const nameHandler = (event) => {
    setIsTitleFocused(true);
    setIsTitle(true);
    setIsErrorTitle(false);
    setMealName(event.target.value);
    if (mealName === '') {
      setIsTitle(false);
    }
  };

  useEffect(() => {
    if (isPriceFocused) {
      const sanitizedValue = price.toString().replace(/[^0-9]/g, '');
      setIsNumber(sanitizedValue === price);
      if (sanitizedValue === '') {
        setIsNumber(false);
      }
    }
    if (!isTitle && isTitleFocused) {
      setIsErrorTitle(true);
    }
    if (!isDescription && isDescFocused) {
      setIsErrorDesc(true);
    }
  }, [price, isPriceFocused, isTitle, isTitleFocused, isDescription, isErrorDesc]);

  const errorPrice = <p className={classes.errorMessage}>Error - Price not set correctly</p>;
  const errorTitle = <p className={classes.errorMessage}>Error - Title should not be empty</p>;
  const errorDescription = (
    <p className={classes.errorMessage}>
      Error - Description should not be empty
    </p>
  );

  const submitNewMealHandler = async (mealInfo) => {
    const response = await postMeal({
      url: 'http://localhost:3000/meals',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: mealInfo,
    });

    response !== null ? setIsSubmit(true) : setIsSubmit(false);
  };

  const didSubmitModalContent = (
    <>
      <p>Successfuly sent the order!</p>
      <div className={classes.actions}>
        <button type="button" className={classes.button}>Close</button>
      </div>
    </>
  );

  const submitFormHandler = (event) => {
    event.preventDefault();
    const mealInfo = {
      title: mealName,
      description,
      price,
    };
    if (mealInfo.title !== '' && mealInfo.description !== '' && mealInfo.price !== 0) {
      submitNewMealHandler(mealInfo);
      setMealName('');
      setDescription('');
      setPrice(0);
      didSubmitModalContent;
    } else {
      if (mealName === '') {
        setIsTitle(false);
        setIsErrorTitle(true);
      }
      if (price === 0) {
        setIsNumber(false);
      }
      if (description === '') {
        setIsDescription(false);
        setIsErrorDesc(true);
      }
    }
  };

  return (
    <form className={classes.addMeal} onSubmit={submitFormHandler}>
      <h1 className={classes.formTitle}>ADD A MEAL</h1>
      <div className={classes.formGroup}>
        <label htmlFor="title" className={classes.label}>
          Name of the Meal:
          <input
            type="text"
            id="title"
            onChange={nameHandler}
            className={classes.input}
            placeholder="E.g., Spaghetti Carbonara"
            value={mealName}
          />
          {isErrorTitle && errorTitle }
        </label>
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="description" className={classes.label}>
          Description:
          <div className={classes.textareaContainer}>
            <textarea
              maxLength={50}
              id="description"
              onChange={descriptionChangeHandler}
              className={classes.textarea}
              placeholder="Write a brief description of the meal... (30 characters max)"
              value={description}
            />
            {isMaxLengthReached
            && (
            <p className={classes.errorMessage}>
              Warning - The description only accepts 50 characters maximum
            </p>
            )}
            {isErrorDesc && errorDescription}
          </div>
        </label>
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="price" className={classes.label}>
          Price of the Meal:
          <input
            type="number"
            id="price"
            onChange={priceHandler}
            className={classes.input}
            placeholder="E.g., 12.99"
            step="1"
            min={1}
            value={price}
          />
          {!isNumber && errorPrice}
        </label>
      </div>
      <div style={{
        'margin-top': 20, display: 'flex', 'justify-content': 'center',
      }}
      >
        <button type="submit" className={classes.button}>Add Meal</button>
      </div>

    </form>

  );
}

export default AddMeal;
