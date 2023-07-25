import React from 'react';
import { useSelector } from 'react-redux';
import { TypeToken } from '../store/token/actions';
import { RootState } from '../store/store';
import { useDispatch } from 'react-redux';
import { IPostData, postsRequestAsync } from '../store/posts/actions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export function usePostsData() {
  const data = useSelector<RootState, IPostData[]>((state) => state.posts.data);
  const after = useSelector<RootState, string>((state) => state.posts.after);
  const avatar = useSelector<RootState, string>((state) => state.posts.avatar);
  const loading = useSelector<RootState, boolean>(
    (state) => state.posts.loading
  );
  const token = useSelector<RootState, TypeToken>((state) => state.token);
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      dispatch(postsRequestAsync(after));
    }
  }, [token, dispatch]);

  return {
    loading,
    data,
    after,
    avatar,
  };
}
