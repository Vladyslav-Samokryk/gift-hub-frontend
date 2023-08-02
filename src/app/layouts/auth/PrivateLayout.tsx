import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "@shared";

export const PrivateLayout = (): JSX.Element => {
  const { isAuth } = useAuth();
  const location = useLocation();

  return isAuth
    ? (
      <Outlet />
    )
    : (
      <Navigate to="/" state={{ from: location }} />
    );
};
