import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from '../KarmaCounter';
import { CommentsButton } from '../CommentsButton';
import { Actions } from '../Actions';

interface IControls {
  rating: number;
}

export function Controls({ rating }: IControls) {
  return (
    <div className={styles.controls}>
      <KarmaCounter rating={rating} />
      <CommentsButton />
      <Actions />
    </div>
  );
}
