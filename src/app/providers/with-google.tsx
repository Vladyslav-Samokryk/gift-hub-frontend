import { type ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "../api/config";


export const withGoogle = (component: () => ReactNode) => () => (
  <GoogleOAuthProvider clientId={CLIENT_ID!}>
    {component()}
  </GoogleOAuthProvider>
);