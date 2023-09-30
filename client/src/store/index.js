import { configureStore } from '@reduxjs/toolkit';
import notificationSliceReducer from './notif-slice';

const store = configureStore({
  reducer: { notif: notificationSliceReducer },
});

export default store;
