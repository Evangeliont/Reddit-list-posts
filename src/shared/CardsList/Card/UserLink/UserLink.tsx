import React from 'react';
import styles from './userlink.css';
import athorAvatar from '../../../../assets/images/author-avatar.png';

interface IUserLinkProps {
  author?: string;
  avatar?: string;
}

export function UserLink({ author, avatar }: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src={avatar || athorAvatar} alt="Avatar" />
      <a className={styles.username} href="#">
        {author}
      </a>
    </div>
  );
}
