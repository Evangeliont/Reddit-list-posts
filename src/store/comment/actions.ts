import { ActionCreator, AnyAction } from 'redux';

export type TypeCommentState = string;

export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text,
});
