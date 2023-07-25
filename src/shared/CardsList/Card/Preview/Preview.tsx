import React from 'react';
import styles from './preview.css';
import preview from '../../../../assets/images/preview.png';

interface IPreview {
  previewImg: string;
}

export function Preview({ previewImg }: IPreview) {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src={previewImg} alt="img" />
    </div>
  );
}
