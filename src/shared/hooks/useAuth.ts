import { useMemo } from "react";

import { useAppSelector } from "app/store";

export const useAuth = (): { isAuth: boolean } => {
  const isAuth = useAppSelector(({ user }) => user.isAuth);

  return useMemo(() => ({ isAuth }), [isAuth]);
};
