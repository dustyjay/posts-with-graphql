import { ReactNode } from 'react';
import ApolloClientProvider from './apollo-provider';
import { InjectableProps } from './render-page';

type DataInjectorProps = {
  children: ReactNode | ((props?: InjectableProps) => ReactNode);
  props?: InjectableProps;
};

export const DataInjector = async ({ children, props }: DataInjectorProps) => {
  try {
    return (
      <ApolloClientProvider>
        {typeof children === 'function' ? children(props) : children}
      </ApolloClientProvider>
    );
  } catch (error) {
    // Log error or do something else with it
  }
};
