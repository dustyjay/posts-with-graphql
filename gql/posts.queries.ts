import { gql } from '@apollo/client';

export const FETCH_POSTS = gql`
  query FetchPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
        user {
          username
        }
      }
      meta {
        totalCount
      }
    }
  }
`;
