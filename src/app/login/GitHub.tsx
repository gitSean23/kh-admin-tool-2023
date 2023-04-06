"use client";

import { GET_AUTH_LINK } from "@/lib/gql";
import { useLazyQuery } from "@apollo/client";

export function GitHub() {
  const [signInWithGithub] = useLazyQuery(GET_AUTH_LINK, {
    variables: {
      provider: "GITHUB",
      redirect: process.env.REACT_APP_OAUTH_AUTH_REDIRECT,
    },
  });

  return (
    <button
      onClick={() => signInWithGithub()}
      className="rounded-lg border border-[#444444] bg-[#444444] px-4 py-3 font-semibold text-white"
    >
      Continue with GitHub
    </button>
  );
}
