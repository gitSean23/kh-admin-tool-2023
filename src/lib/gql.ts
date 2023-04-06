import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const GET_AUTH_LINK = gql`
  query Request($provider: Provider!, $redirect: String!) {
    getAuthRedirectLink(provider: $provider, redirect: $redirect)
  }
`;

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("accessToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const link = createHttpLink({
  uri: process.env.API_ENDPOINT,
  credentials: "include",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});
