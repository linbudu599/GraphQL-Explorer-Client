import {
  InMemoryCache,
  ApolloClient,
  gql,
  createHttpLink,
} from "@apollo/client";

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
    uri: "http://localhost:4000/graphql",
  });

  const client = new ApolloClient({
    cache,
    link,
    headers: {
      // authorization: localStorage.getItem("token") || "",
      "client-name": "GraphQL-Explorer [Client]",
      "client-version": "0.1.0",
    },
  });

  cache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
      // TODO: check is token valid by request
      // isLoggedIn: !!localStorage.getItem('token'),
      isLoggedIn: true,
    },
  });

  return client;
}
