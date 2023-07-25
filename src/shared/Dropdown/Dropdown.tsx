import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export function Dropdown({ button, children }: IDropdownProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (typeof window === 'undefined' || !window?.document?.createElement) {
    return null;
  }

  const node = document?.querySelector('#dropdown_root');
  if (!node) return null;

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={ref}>
        {button}
      </div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div
            className={styles.listContainer}
            style={{
              top:
                (ref.current?.getBoundingClientRect().y || 0) +
                window.scrollY +
                30,
              left:
                (ref.current?.getBoundingClientRect().x || 0) +
                window.scrollX +
                30,
            }}
          >
            <div className={styles.list}>{children}</div>
          </div>,
          node
        )}
    </div>
  );
}
