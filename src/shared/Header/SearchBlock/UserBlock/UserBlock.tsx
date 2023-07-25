import React from 'react';
import styles from './userblock.css';
import { Icon, EIcon } from '../../../Icons';
import { Link } from 'react-router-dom';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <Link
      to="https://www.reddit.com/api/v1/authorize?client_id=lBsl6P-coFqAwcuipk7_nQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <Icon name={EIcon.anon} />
        )}
      </div>
      {!!loading ? (
        <span className={styles.username}>Загрузка...</span>
      ) : (
        <span className={styles.username}>{username || 'Аноним'}</span>
      )}
    </Link>
  );
}
