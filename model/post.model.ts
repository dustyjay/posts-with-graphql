export type PostsResponse = {
  data: Post[];
  meta: {
    totalCount: number;
  };
};

export type Post = {
  id: string;
  title: string;
  body: string;
  user: User;
  comments: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: string;
};
