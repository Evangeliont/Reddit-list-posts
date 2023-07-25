import React from 'react';
import styles from './menuitemslist.css';
import { GenericList } from '../../../../GenericList';
import { merge } from '../../../../../utils/js/merge';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { Icon, EIcon } from '../../../../Icons/icons';

const LIST = [
  {
    text: (
      <a className={styles.menuLink} href="#">
        <Icon name={EIcon.comments} />
        Комментарии
      </a>
    ),
  },
  {
    text: (
      <a className={styles.menuLink} href="#">
        <Icon name={EIcon.share} />
        Поделиться
      </a>
    ),
  },
  {
    text: (
      <a className={styles.menuLink} href="#">
        <Icon name={EIcon.block} />
        Скрыть
      </a>
    ),
  },
  {
    text: (
      <a className={styles.menuLink} href="#">
        <Icon name={EIcon.save} />
        Сохранить
      </a>
    ),
  },
  {
    text: (
      <a className={styles.menuLink} href="#">
        <Icon name={EIcon.warning} />
        Пожаловаться
      </a>
    ),
  },
].map(generateId);

export function MenuItemsList() {
  return (
    <ul className={styles.menuItemsList}>
      <GenericList
        list={LIST.map(
          merge({ onClick: console.log, className: styles.menuItem })
        )}
      />
    </ul>
  );
}
