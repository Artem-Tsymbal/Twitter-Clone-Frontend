import React from 'react';
import { useDispatch } from 'react-redux';
import { AuthApi } from '../services/api/authApi';
import { setLoadingStatus } from '../store/ducks/user/actionCreators';
import { LoadingStatus } from '../store/ducks/types';

export const ActivatePage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setLoadingStatus(LoadingStatus.NEVER));
    const hash = window.location.pathname.split('/').pop();
    if (hash) {
      AuthApi.verify(hash)
        .then(({ data }) => {
          window.localStorage.setItem('token', data.token);
          window.location.href = '/home';
        })
        .catch(() => {
          dispatch(setLoadingStatus(LoadingStatus.LOADED));
        });
    }
  }, []);

  return null;
};
