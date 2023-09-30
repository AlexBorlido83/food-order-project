import React, { useRef } from 'react';
import classes from './Checkout.module.css';

function Checkout(props) {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const { onConfirm, onCancel } = props;
  const confirmHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const userInfo = {
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    };

    onConfirm(userInfo);
    //                                      //
    // No validation of the data for now    //
    //                                      //
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">
          Your Name
          <input type="text" id="name" ref={nameInputRef} />
        </label>
      </div>
      <div className={classes.control}>
        <label htmlFor="street">
          Street
          <input type="text" id="street" ref={streetInputRef} />
        </label>
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">
          Postal Code
          <input type="text" id="postal" ref={postalInputRef} />
        </label>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">
          City
          <input type="text" id="city" ref={cityInputRef} />
        </label>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
