import React from 'react';
import styles from './notfound.css';

export function NotFound() {
  return (
    <div className={styles.notfound}>
      <h2 className={styles.error}>Ошибка 404!</h2>
      <p className={styles.errorMessage}>Не удалось найти нужную страницу...</p>
    </div>
  );
}
