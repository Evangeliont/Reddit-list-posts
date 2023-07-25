import React from 'react';
import { UserLink } from '../../CardsList/Card/UserLink';
import styles from './comment.css';
import { ICommentsData } from '../../../hooks/useCommentsData';
import { GenericList } from '../../GenericList';
import { merge } from '../../../utils/js/merge';
import { generateId } from '../../../utils/react/generateRandomIndex';
import { CommentList } from '../CommentList';
import moment from 'moment';
import { EIcon, Icon } from '../../Icons';
import { AnswerForm } from './AnswerForm';

export interface IComment {
  id: string;
  author: string;
  avatar: string;
  datePostUtc: number;
  body: string;
  replies?: ICommentsData[];
}

export function Comment({
  id,
  author,
  avatar,
  datePostUtc,
  body,
  replies,
}: IComment) {
  const [isAnswerOpen, setIsAnswerOpen] = React.useState(false);
  const createdDate = moment(datePostUtc).fromNow();

  const handleClick = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    setIsAnswerOpen(!isAnswerOpen);
  };

  const LIST = [
    {
      text: (
        <div id={id}>
          <div className={styles.authorBlock}>
            <UserLink author={author} avatar={avatar} />
            <span>{createdDate}</span>
          </div>
          <p>{body}</p>
          <button
            className={styles.answerBtn}
            onClick={(event) => handleClick(event)}
          >
            <Icon name={EIcon.comments} />
            Ответить
          </button>
          {isAnswerOpen && <AnswerForm />}
          <div className={styles.commentBlock}>
            {replies?.length && (
              <CommentList comments={replies} avatar={avatar} />
            )}
          </div>
        </div>
      ),
    },
  ].map(generateId);

  return (
    <ul>
      <GenericList list={LIST.map(merge({}))} />
    </ul>
  );
}
