import { InMemoryCache, ApolloClient, gql, createHttpLink } from '@apollo/client';

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const IS_LOGGED_IN_MUTATION = gql`
  mutation IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export default function createApolloClient() {
  // TODO: explore cache control
  const cache = new InMemoryCache({
    addTypename: true,
    resultCaching: true,
  });

  const link = createHttpLink({
    uri: 'http://47.97.183.158:4399/graphql',
  });

  const client = new ApolloClient({
    cache,
    link,
    headers: {
      // authorization: localStorage.getItem("token") || "",
      'client-name': 'GraphQL-Explorer [Client]',
      'client-version': '0.1.0',
    },
  });

  cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
      // isLoggedIn: !!localStorage.getItem('token'),
      isLoggedIn: true,
    },
  });

  return client;
}
