'use client';

import { FETCH_POSTS } from '@/gql/posts.queries';
import { PostsResponse } from '@/model/post.model';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

export default function Posts() {
  const [variables, setVariables] = useState({
    paginate: {
      limit: 10,
      page: 1
    }
  });
  const { loading, error, data, refetch } = useQuery<{ posts: PostsResponse }>(FETCH_POSTS, {
    variables
  });

  useEffect(() => {
    refetch(variables);
  }, [variables]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul className='flex flex-col gap-6'>
      {data?.posts.data.map((post) => (
        <li key={post.id} className='shadow-lg p-4 rounded-lg flex flex-col'>
          <h3 className='text-lg mb-4'>{post.title}</h3>
          <p>{post.body}</p>
          <p className='text-gray-400 text-xs text-right mt-6'>Posted by {post.user.username}</p>
        </li>
      ))}
    </ul>
  );
}
