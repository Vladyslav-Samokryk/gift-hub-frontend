import { useEffect, useMemo } from "react";
import { useAppSelector } from "app/store";
import { useDispatch } from "react-redux";
import { setIsAuth } from "app/store/slices/user";
import { useCookies } from "react-cookie";
import { useRefreshMutation, useVerifyMutation } from "app/api/auth";

export const useAuth = (): { isAuth: boolean } => {
  const [refresh] = useRefreshMutation();
  const [verify] = useVerifyMutation();

  const isAuth = useAppSelector(({ user }) => user.isAuth);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["access", "refresh"]);

  const checkTokens = async (): Promise<void> => {
    if (!isAuth) {
      await verify({ access: cookies.access })
        .unwrap()
        .then(() => dispatch(setIsAuth({ isAuth: true })))
        .catch(() => localStorage.removeItem("user_id"));
    }

    if (!isAuth) {
      await refresh({ refresh: cookies.refresh })
        .unwrap()
        .then((data) => {
          dispatch(setIsAuth({ isAuth: true }));
          setCookie("access", data.access);
        })
        .catch(() => localStorage.removeItem("user_id"));
    }

    if (!isAuth) {
      localStorage.removeItem("user_id");
    }
  };

  useEffect(() => {
    if (cookies.access || cookies.refresh) {
      void checkTokens();
    }
  }, []);

  return useMemo(() => ({ isAuth }), [isAuth]);
};
