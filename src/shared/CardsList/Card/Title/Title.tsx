import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';

interface ITitle {
  id: string;
  title: string;
}

export function Title({ id, title }: ITitle) {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${id}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
