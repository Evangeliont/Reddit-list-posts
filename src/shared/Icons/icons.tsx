import React from 'react';
import styles from './icons.css';
import { BlockIcon } from './BlockIcon';
import { WarningIcon } from './WarningIcon';
import { CommentsIcon } from './CommentsIcon';
import { ShareIcon } from './ShareIcon';
import { SaveIcon } from './SaveIcon';
import { IconAnon } from './IconAnon';

export const enum EIcon {
  block = 'BlockIcon',
  warning = 'WarningIcon',
  comments = 'CommentsIcon',
  share = 'share',
  save = 'save',
  anon = 'anon',
}

interface IIconProps {
  name: EIcon;
}

const icons = {
  [EIcon.block]: <BlockIcon />,
  [EIcon.warning]: <WarningIcon />,
  [EIcon.comments]: <CommentsIcon />,
  [EIcon.share]: <ShareIcon />,
  [EIcon.save]: <SaveIcon />,
  [EIcon.anon]: <IconAnon />,
};

export function Icon({ name }: IIconProps) {
  return <div className={styles.iconContainer}>{icons[name]}</div>;
}
