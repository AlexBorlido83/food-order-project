import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './AddMeal.module.css';
import useHttp from '../../hooks/use-http';
import Modal from '../UI/Modal';

function AddMeal() {
  const navigation = useNavigate();
  const { sendRequest: postMeal } = useHttp();
  const [title, setTitle] = useState('');
  const [isErrorTitle, setIsErrorTitle] = useState(false);
  const [isTitleFocus, setIsTitleFocus] = useState(false);

  const [description, setDescription] = useState('');
  const [isDescErr, setIsDescErr] = useState(false);
  const [isDescFocus, setIsDescFocus] = useState(false);
  const maxCharacters = 50;
  const isMaxLengthReached = description.length === 50;

  const [price, setPrice] = useState(0);
  const [isPriceErr, setIsPriceErr] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);

  const nameHandler = (event) => {
    setTitle(event.target.value);
    setIsTitleFocus(true);
  };

  const descriptionChangeHandler = (event) => {
    const inputValue = event.target.value.slice(0, 50);
    if (inputValue.length <= maxCharacters) {
      setDescription(inputValue);
    }
    setIsDescFocus(true);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  useEffect(() => {
    setIsErrorTitle(title === '' && isTitleFocus);
  }, [title]);

  useEffect(() => {
    setIsDescErr(description === '' && isDescFocus);
  }, [description]);

  useEffect(() => {
    // Ensure that price is a string before applying replace
    if (typeof price === 'string') {
      const sanitizedValue = price.replace(/[^0-9.]/g, '');
      const hasMultipleDots = sanitizedValue.split('.').length > 2;
      hasMultipleDots ? setIsPriceErr(true) : setIsPriceErr(false);
    }
  }, [price]);

  const errorTitle = <p className={classes.errorMessage}>Error - Title should not be empty</p>;
  const errorDesc = <p className={classes.errorMessage}>Error - Description should not be empty</p>;
  const warnDesc = (
    <p className={classes.errorMessage}>
      Warning - The description only accepts 50 characters maximum
    </p>
  );
  const errorPrice = <p className={classes.errorMessage}>Error - Price should not be empty</p>;

  const submitNewMealHandler = async (mealInfo) => {
    const response = await postMeal({
      url: 'http://localhost:3000/meals',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: mealInfo,
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const mealInfo = {
      title,
      description,
      price: parseFloat(price),
    };
    if (mealInfo.title !== '' && mealInfo.description !== '' && mealInfo.price !== 0) {
      submitNewMealHandler(mealInfo);
      setTitle('');
      setDescription('');
      setPrice(0);
      setIsTitleFocus(false);
      setIsTitleFocus(false);
      setIsSubmit(true);
    } else {
      if (title === '') {
        setIsErrorTitle(true);
      }
      if (description === '') {
        setIsDescErr(true);
      }
      if (price === '' || price === 0) {
        setIsPriceErr(true);
      }
    }
  };

  const onCloseHandler = () => {
    setIsSubmit(false);
    navigation('/');
    console.log('CLICK');
  };

  const didSubmitModalContent = (
    <>
      <p>Successfuly added a new Meal!</p>
      <div className={classes.actions}>
        <button type="button" className={classes.button} onClick={onCloseHandler}>Close</button>
      </div>
    </>
  );

  return (
    <>
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
              value={title}
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
              {isMaxLengthReached && warnDesc}
              {isDescErr && errorDesc}
            </div>
          </label>
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="price" className={classes.label}>
            Price of the Meal:
            <input
              type="text"
              id="price"
              onChange={priceHandler}
              className={classes.input}
              placeholder="E.g., 12.99"
              onKeyPress={(e) => {
                if (!/[\d.]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              min={1}
              value={price}
            />
            {isPriceErr && errorPrice}
          </label>
        </div>
        <div className={classes.submitButton}>
          <button type="submit" className={classes.button}>Add Meal</button>
        </div>
      </form>
      {isSubmit && (
      <Modal onClose={onCloseHandler}>
        {didSubmitModalContent}
      </Modal>
      )}
    </>
  );
}

export default AddMeal;
