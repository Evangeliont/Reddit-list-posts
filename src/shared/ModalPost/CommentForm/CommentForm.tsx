import React from 'react';
import styles from './commentForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  TypeCommentState,
  updateComment,
} from '../../../store/comment/actions';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValue = {
  commentText: string;
};

export function CommentForm() {
  const value = useSelector<RootState, TypeCommentState>((state) => state.text);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValue> = () => {
    alert('Комментарий отправлен!');
    reset();
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(event.target.value));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className={styles.input}
        value={value}
        {...register('commentText', {
          required: 'Вы не можете отправить пустое сообщение!',
          minLength: {
            value: 2,
            message: 'Введите больше 2-х символов!',
          },
          maxLength: {
            value: 150,
            message: 'Введите меньше 150 символов!',
          },
        })}
        onChange={handleChange}
      />
      {errors?.commentText &&
        (errors?.commentText?.message || (
          <p className={styles.errors}>{errors}</p>
        ))}
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
