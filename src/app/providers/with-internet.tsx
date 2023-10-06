import { type ReactNode } from "react";
import { useNetwork } from "@shared";

export const withInternet = (component: () => ReactNode) => () => {
  const { online } = useNetwork();

  return (
    <>
      {online ? (
        component()
      ) : (
        <p>You are offline. Please check your internet connection.</p>
      )}
    </>
  );
};
