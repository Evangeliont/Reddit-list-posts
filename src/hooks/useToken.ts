import React from 'react';

import { useDispatch } from 'react-redux';
import { saveToken } from '../store/token/actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store/store';

export function useToken() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  React.useEffect(() => {
    dispatch(saveToken());
  }, []);
}
