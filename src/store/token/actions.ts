import { Action, ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export type TypeToken = string;

export const SET_TOKEN = 'SET_TOKEN';

export const setToken: ActionCreator<AnyAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
  };
