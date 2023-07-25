import { Reducer } from 'redux';
import { TypeToken, SET_TOKEN } from './actions';

const initialState: TypeToken = '';

export const tokenReducer: Reducer<TypeToken> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
};
