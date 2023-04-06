import { client } from "@/lib/gql";
import { AuthProvider } from "@/types";
import { gql } from "@apollo/client";
import { create } from "zustand";

const GET_AUTH_LINK = gql`
  query Request($provider: Provider!, $redirect: String!) {
    getAuthRedirectLink(provider: $provider, redirect: $redirect)
  }
`;

const useAuthStore = create((set) => ({
  token: "",
  user: null,
  handleLogin: async (provider: AuthProvider) => {
    if (provider === "Google") {
      // do something
    } else if (provider === "GitHub") {
      let data = await client.query({
        query: GET_AUTH_LINK,
        variables: { provider: "GitHub", redirect: "http://localhost:3000" },
      });
      
    }
  },
  handleLogout: () => {},
}));
