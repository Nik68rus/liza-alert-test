import React from 'react';
import styles from './Notification.module.scss';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage } from '../../services/actions/app';

const notificationRoot = document.getElementById("react-notification");

const Notification = () => {
  const message = useSelector(store => store.app.message);
  const isActive = message.length > 0;
  const dispatch = useDispatch();

  const notificationHideHandler = () => {
    dispatch(setMessage(''));
  }

  return ReactDOM.createPortal(
    <section className={`${styles.notification} text text_type_main-default ${isActive ? styles.active : ''}`}>
      <div className={"container " + styles.container}>{message}</div>
      <button type='button' className={styles.closeBtn} onClick={notificationHideHandler}>
        ❌
      </button>
    </section>, 
    notificationRoot
  );
}

export default Notification;
