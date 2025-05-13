import "server-only";

import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",

  urls: {
    afterSignUp: "/dashboard",
    afterSignIn: "/dashboard",
    oauthCallback: "/",
    magicLinkCallback: "/dashboard",
    emailVerification: "/Auth/verify",
    signIn: "/Auth",
  },
});
