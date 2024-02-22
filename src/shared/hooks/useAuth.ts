import { useMemo } from "react";

import { useAppSelector } from "app/store";
import { useDispatch } from "react-redux";
import { setIsAuth } from "app/store/slices/user";

export const useAuth = (): { isAuth: boolean } => {
  const isAuth = useAppSelector(({ user }) => user.isAuth);
  const dispatch = useDispatch();

  if (!isAuth && localStorage.getItem("user_id")) {
    dispatch(setIsAuth({ isAuth: true }));
  }

  return useMemo(() => ({ isAuth }), [isAuth]);
};
