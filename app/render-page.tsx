import { Fragment, JSX } from 'react';
import { DataInjector } from './data-injector';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { redirect } from 'next/navigation';

export type RenderProps = {
  client: ApolloClient<NormalizedCacheObject>;
};

export type InjectableProps = {
  client: ApolloClient<NormalizedCacheObject>;
};

const renderPage = async (render: (prop?: RenderProps) => Promise<JSX.Element> | JSX.Element) => {
  try {
    return (
      <DataInjector>
        {async (props) => {
          const Component = await render(props);
          return <Fragment>{Component}</Fragment>;
        }}
      </DataInjector>
    );
  } catch (error) {
    // Handle error
    // PS: This route does not exist at the moment
    return redirect('/error');
  }
};

export default renderPage;
