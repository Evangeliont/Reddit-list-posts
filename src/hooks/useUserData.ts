import React from 'react';
import { useSelector } from 'react-redux';
import { TypeToken } from '../store/token/actions';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { IUserData, userRequestAsync } from '../store/user/actions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export function useUserData() {
  const data = useSelector<RootState, IUserData>((state) => state.user.data);
  const loading = useSelector<RootState, boolean>(
    (state) => state.user.loading
  );
  const token = useSelector<RootState, TypeToken>((state) => state.token);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      dispatch(userRequestAsync());
    }
  }, [token, dispatch]);

  return {
    loading,
    data,
  };
}
