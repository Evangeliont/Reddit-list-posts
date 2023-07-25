import axios from 'axios';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export const POST_REQUEST = 'POST_REQUEST';

export interface IPostRequestAction {
  type: typeof POST_REQUEST;
}

export const postRequest: ActionCreator<IPostRequestAction> = () => ({
  type: POST_REQUEST,
});

export interface IPostData {
  id: string;
  author: string;
  title: string;
  rating: number;
  avatar: string;
  previewImg: string;
  datePostUtc: number;
}

export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';

export interface IPostSuccessAction {
  type: typeof POST_REQUEST_SUCCESS;
  data: IPostData;
}

export const postRequestSuccess: ActionCreator<IPostSuccessAction> = (
  data: IPostData
) => ({
  type: POST_REQUEST_SUCCESS,
  data,
});

export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';

export interface IPostErrorAction {
  type: typeof POST_REQUEST_ERROR;
  error: string;
}

export const postRequestError: ActionCreator<IPostErrorAction> = (
  error: string
) => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postsRequestAsync =
  (after: string): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(postRequest());
    axios
      .get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: { Authorization: `Bearer ${getState().token}` },
        params: {
          limit: 5,
          after: after,
        },
      })
      .then((resp) => {
        dispatch(
          postRequestSuccess(
            resp.data.data.children.map((item: { data: any }) => ({
              after: resp.data.after,
              id: item.data.id,
              author: item.data.author,
              title: item.data.title,
              rating: item.data.ups,
              avatar: item.data.sr_detail.icon_img
                ? item.data.sr_detail.icon_img
                : 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
              previewImg: item.data.preview
                ? item.data.preview.images?.[0].source.url.replace(
                    /(\&amp\;)/g,
                    '&'
                  )
                : 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
              datePostUtc: item.data.created_utc * 1000,
            }))
          )
        );
      })
      .catch((error) => {
        dispatch(postRequestError(String(error)));
      });
  };
