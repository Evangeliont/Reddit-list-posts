import { Reducer } from 'redux';
import {
  IPostData,
  POST_REQUEST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_ERROR,
} from './actions';

export interface IPostState {
  data: IPostData[];
  loading: boolean;
  after: string;
  avatar: string;
}

const initialState: IPostState = {
  data: [],
  loading: false,
  after: '',
  avatar: '',
};

export const postReducer: Reducer<IPostState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.data],
        after: action.after,
        avatar: action.avatar,
        loading: false,
      };
    default:
      return state;
  }
};
