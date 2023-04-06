import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("accessToken");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const link = createHttpLink({
//   uri: process.env.REACT_APP_API_ENDPOINT,
//   credentials: "include",
// });

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: authLink.concat(link),
// });
