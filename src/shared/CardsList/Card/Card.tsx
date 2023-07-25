import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface ICardProps {
  id: string;
  author: string;
  title: string;
  rating: number;
  avatar: string;
  previewImg: string;
  datePostUtc: number;
}

export function Card({
  id,
  author,
  title,
  rating,
  avatar,
  previewImg,
  datePostUtc,
}: ICardProps) {
  return (
    <li className={styles.card} id={id}>
      <TextContent
        id={id}
        author={author}
        title={title}
        avatar={avatar}
        datePostUtc={datePostUtc}
      />
      <Preview previewImg={previewImg} />
      <Menu />
      <Controls rating={rating} />
    </li>
  );
}
