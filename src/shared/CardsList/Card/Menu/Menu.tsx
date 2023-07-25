import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList />
          <button className={styles.closeButton}>Закрыть</button>
        </div>
      </Dropdown>
    </div>
  );
}
