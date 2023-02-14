// import { useEffect } from "react";
import { AxiosInstance } from "../../api/AxiosInstance";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

import { useLayoutEffect } from "react";
import getTokenCookie from "../helpers/getTokenCookie";

const useAutoLogin = () => {
  const dispatch = useDispatch();

  const Token = getTokenCookie();
  console.log("TOKEN --> ", Token);
  useLayoutEffect(() => {
    const verifyUser = async () => {
      const res = await AxiosInstance.get("/users/me", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      let user = res;
      if (res?.data) user = res?.data;
      console.log("AUTO LOGIN USER -> ", user);
      dispatch(setUser({ user }));
    };
    verifyUser();
  }, []);
};

export default useAutoLogin;
