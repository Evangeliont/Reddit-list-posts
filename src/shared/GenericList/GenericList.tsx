import React from 'react';
import styles from './genericlist.css';

interface IItem {
  id: string;
  text: React.ReactNode;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericsListProps {
  list: IItem[];
}

const noop = () => {};

export function GenericList({ list }: IGenericsListProps) {
  return (
    <>
      {list.map(({ As = 'li', text, onClick = noop, className, id, href }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}
