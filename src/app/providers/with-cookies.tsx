import { type ReactNode } from "react";
import { CookiesProvider } from "react-cookie";

export const withCookies = (component: () => ReactNode) => () => (
  <CookiesProvider defaultSetOptions={{ path: "/" }}>
    {component()}
  </CookiesProvider>
);
