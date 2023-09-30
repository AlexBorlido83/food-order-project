import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Meals from './components/Meals/Meals';
import AddMeal from './components/Meals/AddMeal';
import RootLayout from './components/router/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Meals /> },
        { path: '/add-meal', element: <AddMeal /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
