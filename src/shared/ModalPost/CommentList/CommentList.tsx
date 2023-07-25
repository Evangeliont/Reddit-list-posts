import React from 'react';
import { Comment } from '../Comment/Comment';
import { ICommentsData } from '../../../hooks/useCommentsData';
interface ICommentList {
  comments: ICommentsData[];
  avatar: string;
}

export function CommentList({ comments, avatar }: ICommentList) {
  return (
    <div>
      {comments.map((item) => (
        <Comment
          key={item.id}
          id={item.id}
          body={item.body}
          author={item.author}
          avatar={avatar}
          datePostUtc={item.datePostUtc}
          replies={item.replies}
        />
      ))}
    </div>
  );
}
