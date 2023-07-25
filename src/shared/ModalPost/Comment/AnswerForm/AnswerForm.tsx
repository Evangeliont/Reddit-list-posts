import React from 'react';
import styles from '../../CommentForm/commentForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store/store';
import {
  TypeCommentState,
  updateComment,
} from '../../../../store/comment/actions';

export function AnswerForm() {
  const value = useSelector<RootState, TypeCommentState>((state) => state.text);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form className={styles.form} onClick={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Ответить
      </button>
    </form>
  );
}
