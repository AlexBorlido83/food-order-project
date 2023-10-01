import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function Backdrop(props) {
  const { onClose } = props;
  return (
    <div
      className={classes.backdrop}
      onClick={onClose}
    />
  );
}

function ModalOverlay(props) {
  const { children } = props;
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
  const { children, onClose } = props;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;
