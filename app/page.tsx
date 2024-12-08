import Posts from './_posts.client';
import ApolloClientProvider from './apollo-provider';

export default function Home() {
  return (
    <div className='max-w-[868px] mx-auto'>
      <h1 className='text-2xl mb-10'>Posts</h1>
      <ApolloClientProvider>
        <Posts />
      </ApolloClientProvider>
    </div>
  );
}
