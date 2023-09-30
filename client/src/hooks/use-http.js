import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { notificationActions } from '../store/notif-slice';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    dispatch(notificationActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending Card Data!',
    }));

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      if (requestConfig.method === 'DELETE' && response.status !== 204) {
        throw new Error('Deletion failed!');
      }

      const data = await response.json();
      applyData(data);
      dispatch(notificationActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent Card Data Successfully!',
      }));
    } catch (err) {
      setError(err.message || 'Something went wrong!');
      dispatch(notificationActions.showNotification({
        status: 'error',
        title: 'Error... Something went wrong :(',
        message: 'Error Card Data! Have you turned on the NestJS server ?',
      }));
    }
    setIsLoading(false);
  }, []);
  return { isLoading, error, sendRequest };
};

export default useHttp;
