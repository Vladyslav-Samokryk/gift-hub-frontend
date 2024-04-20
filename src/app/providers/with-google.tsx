import { type ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "../api/config";

export const withGoogle = (component: () => ReactNode) => () => (
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  <GoogleOAuthProvider clientId={CLIENT_ID!}>{component()}</GoogleOAuthProvider>
);
