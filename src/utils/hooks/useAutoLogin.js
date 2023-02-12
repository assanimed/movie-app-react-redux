// import { useEffect } from "react";
import { AxiosInstance } from "../../api/AxiosInstance";
import { setUser } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import getTokenCookie from "../helpers/getTokenCookie";

const useAutoLogin = () => {
  const dispatch = useDispatch();

  const Token = getTokenCookie();
  useLayoutEffect(() => {
    const verifyUser = async () => {
      const res = await AxiosInstance.get("/users/me", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      let user = res;
      if (res?.data) user = res?.data;
      dispatch(setUser({ user }));
    };
    verifyUser();
  }, []);
};

export default useAutoLogin;
