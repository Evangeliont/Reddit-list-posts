import React from 'react';
import styles from './textcontent.css';
import { UserLink } from '../UserLink';
import { Title } from '../Title';
import moment from 'moment';

interface ITextContentProps {
  id: string;
  title: string;
  author: string;
  avatar: string;
  datePostUtc: number;
}

export function TextContent({
  id,
  title,
  author,
  avatar,
  datePostUtc,
}: ITextContentProps) {
  const createdDate = moment(datePostUtc).fromNow();

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={author} avatar={avatar} />
        <span className={styles.createdAt}>{createdDate}</span>
      </div>
      <Title id={id} title={title} />
    </div>
  );
}
