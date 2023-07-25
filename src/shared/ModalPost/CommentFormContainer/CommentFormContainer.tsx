import React from 'react';
import { CommentForm } from '../CommentForm/CommentForm';
import { useSelector, useDispatch } from 'react-redux';
import {
  TypeCommentState,
  updateComment,
} from '../../../store/comment/actions';
import { RootState } from '../../../store/store';

export function CommentFormContainer() {
  const value = useSelector<RootState, TypeCommentState>((state) => state.text);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <CommentForm
    // value={value}
    // onChange={handleChange}
    // onSubmit={handleSubmit}
    />
  );
}
