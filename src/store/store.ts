import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { commentReducer } from './comment/commentReducer';
import { tokenReducer } from './token/tokenReducer';
import thunk from 'redux-thunk';
import { userReducer } from './user/userReducer';
import { postReducer } from './posts/postsReducer';

const rootReducer = combineReducers({
  text: commentReducer,
  token: tokenReducer,
  user: userReducer,
  posts: postReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
