import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modalPost.css';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useCommentsData } from '../../hooks/useCommentsData';
import { CommentList } from './CommentList';
import { CommentForm } from './CommentForm';
import { useParams } from 'react-router-dom';
import { usePostsData } from '../../hooks/usePostsData';

export function ModalPost() {
  const { avatar } = usePostsData();

  const params = useParams<{ id: string }>();
  const postId = params.id !== undefined ? params.id : '';

  const [ref] = useOutsideClick();
  const [comments] = useCommentsData(postId);
  console.log(comments);
  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>
        Следует отметить, что новая модель организационной деятельности поможет
      </h2>
      <div className={styles.content}>
        <p>
          Есть над чем задуматься: тщательные исследования конкурентов
          представляют собой не что иное, как квинтэссенцию победы маркетинга
          над разумом и должны быть ассоциативно распределены по отраслям.
          Прежде всего, начало повседневной работы по формированию позиции
          однозначно фиксирует необходимость кластеризации усилий. Но сторонники
          тоталитаризма в науке и по сей день остаются уделом либералов, которые
          жаждут быть превращены в посмешище, хотя само их существование
          приносит несомненную пользу обществу.
        </p>
        <p>
          Безусловно, глубокий уровень погружения создаёт необходимость
          включения в производственный план целого ряда внеочередных мероприятий
          с учётом комплекса системы массового участия. Внезапно, сделанные на
          базе интернет-аналитики выводы освещают чрезвычайно интересные
          особенности картины в целом, однако конкретные выводы, разумеется,
          описаны максимально подробно.
        </p>
        <p>
          Разнообразный и богатый опыт говорит нам, что выбранный нами
          инновационный путь обеспечивает широкому кругу (специалистов) участие
          в формировании новых принципов формирования материально-технической и
          кадровой базы. Также как существующая теория в значительной степени
          обусловливает важность благоприятных перспектив. Для современного мира
          консультация с широким активом однозначно определяет каждого участника
          как способного принимать собственные решения касаемо приоритизации
          разума над эмоциями!
        </p>
      </div>
      <CommentForm />
      {!!comments?.length && (
        <CommentList avatar={avatar} comments={comments} />
      )}
    </div>,
    node
  );
}
