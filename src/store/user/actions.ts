import axios from 'axios';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export const USER_REQUEST = 'USER_REQUEST';

export interface IUserRequestAction {
  type: typeof USER_REQUEST;
}
export const userRequest: ActionCreator<IUserRequestAction> = () => ({
  type: USER_REQUEST,
});

export interface IUserData {
  name: string;
  iconImg: string;
}

export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';

export interface IUserSuccesAction {
  type: typeof USER_REQUEST_SUCCESS;
  data: IUserData;
}
export const userRequestSuccess: ActionCreator<IUserSuccesAction> = (
  data: IUserData
) => ({
  type: USER_REQUEST_SUCCESS,
  data,
});

export const USER_REQUEST_ERROR = 'USER_REQUEST_ERROR';

export interface IUserErrorAction {
  type: typeof USER_REQUEST_ERROR;
  error: string;
}
export const userRequestError: ActionCreator<IUserErrorAction> = (
  error: string
) => ({
  type: USER_REQUEST_ERROR,
  error,
});

export const userRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(userRequest());
    axios
      .get('https://oauth.reddit.com/api/v1/me.json', {
        headers: { Authorization: `Bearer ${getState().token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        dispatch(
          userRequestSuccess({
            name: userData.name,
            iconImg: userData.icon_img.split('?')[0],
          })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(userRequestError(String(error)));
      });
  };
