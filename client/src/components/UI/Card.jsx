import React from 'react';
import classes from './Card.module.css';

function Card(props) {
  const { children } = props;
  return (<div className={classes.card}>{children}</div>);
}

export default Card;
