import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
import Notification from '../UI/Notification';
import { notificationActions } from '../../store/notif-slice';

function Meals() {
  const notification = useSelector((state) => state.notif.notification);
  const [isNotification, setIsNotification] = useState(true);

  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      setIsNotification(false);
    }, 3000);
    return () => {
      clearTimeout(notificationTimer);
    };
  }, []);
  return (
    <>
      <MealsSummary />
      {notification && isNotification
        && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
        )}
      <AvailableMeals />
    </>
  );
}

export default Meals;
