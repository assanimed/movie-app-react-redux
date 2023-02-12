// import { useEffect } from "react";
import { AxiosInstance } from "../../api/AxiosInstance";
import { setUser } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";

const useAutoLogin = () => {
  const dispatch = useDispatch();
  const now = new Date();
  const lastLoginDate = document.cookie
    .split("; ")
    .find((item) => item.startsWith("last_login"))
    ?.split("=")[1];
  const getTokenCookie = () =>
    document.cookie
      .split("; ")
      .find((item) => item.startsWith("ma_at"))
      ?.split("=")[1];

  const Token = getTokenCookie();
  useLayoutEffect(() => {
    const verifyUser = async () => {
      const user = await AxiosInstance.get("/users/me", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      dispatch(setUser({ user, token: getTokenCookie() }));
    };
    verifyUser();
  }, []);
};

export default useAutoLogin;
