import { Reducer } from 'redux';
import { TypeCommentState, UPDATE_COMMENT } from './actions';

export const initialState: TypeCommentState = '';

export const commentReducer: Reducer<TypeCommentState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return action.text;
    default:
      return state;
  }
};
