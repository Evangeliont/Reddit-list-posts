import React from 'react';
import { useNavigate } from 'react-router-dom';

export function useOutsideClick() {
  const ref = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        navigate('/');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return [ref];
}
