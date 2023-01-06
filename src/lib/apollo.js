import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clcjhsx8j0e9r01um8d5x3kwx/master',
  cache: new InMemoryCache(),
});
