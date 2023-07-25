import { Reducer } from 'redux';
import {
  IUserData,
  USER_REQUEST,
  USER_REQUEST_ERROR,
  USER_REQUEST_SUCCESS,
} from './actions';

export interface IStateUser {
  data: IUserData;
  loading: boolean;
}

const initialState: IStateUser = {
  data: {
    name: '',
    iconImg: '',
  },
  loading: false,
};

export const userReducer: Reducer<IStateUser> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case USER_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    default:
      return state;
  }
};
