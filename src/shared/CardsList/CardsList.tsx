import React from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';
import { usePostsData } from '../../hooks/usePostsData';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/store';
import { postsRequestAsync } from '../../store/posts/actions';
import { Outlet } from 'react-router-dom';

export function CardsList() {
  const [showButton, setShowButton] = React.useState(false);
  const { loading, data, after } = usePostsData();
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const bottomOfList = React.useRef<HTMLDivElement>(null);

  let count: number = 0;

  function continueLoading() {
    count = 0;
    setShowButton(false);
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !showButton) {
          dispatch(postsRequestAsync(after));

          count++;
          if (count === 3) setShowButton(true);
        }
      },
      { rootMargin: '10px' }
    );

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [bottomOfList.current, after, showButton]);

  return (
    <div>
      <ul className={styles.cardsList}>
        {data.length === 0 && !loading && (
          <p className={styles.emptyMessage}>Хмм... здесь пока пусто</p>
        )}

        {data.map(
          ({ id, author, title, rating, avatar, previewImg, datePostUtc }) => (
            <Card
              key={id}
              id={id}
              author={author}
              title={title}
              rating={rating}
              avatar={avatar}
              previewImg={previewImg}
              datePostUtc={datePostUtc}
            />
          )
        )}

        <div ref={bottomOfList} />

        {showButton && (
          <div className={styles.btnContainer}>
            <button
              className={styles.button}
              type="button"
              onClick={continueLoading}
            >
              Показать еще
            </button>
          </div>
        )}

        {loading && (
          <div className={styles.loadingStyle}>Загрузка данных...</div>
        )}
      </ul>
      <Outlet />
    </div>
  );
}
