import React from 'react';
import axios from 'axios';
import { TypeToken } from '../store/token/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export interface ICommentsData {
  id: string;
  body: string;
  author: string;
  datePostUtc: number;
  replies?: ICommentsData[];
}

function filteredCommentsData(arr: any) {
  return arr.map((item: { data: any }) => ({
    id: item.data.id,
    body: item.data.body,
    author: item.data.author,
    datePostUtc: item.data.created_utc * 1000,
    replies: item.data.replies
      ? filteredCommentsData(item.data.replies.data.children)
      : null,
  }));
}
export function useCommentsData(id: string) {
  const token = useSelector<RootState, TypeToken>((state) => state.token);
  const [comments, setComments] = React.useState<Array<ICommentsData>>([]);

  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      axios
        .get(`https://oauth.reddit.com/comments/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((resp) => {
          const getComments = filteredCommentsData(resp.data[1].data.children);
          console.log(resp);
          setComments(getComments);
        })
        .catch(console.log);
    }
  }, [token]);

  return [comments];
}
