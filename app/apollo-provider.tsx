'use client';

import './globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';

export default function ApolloClientProvider({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
