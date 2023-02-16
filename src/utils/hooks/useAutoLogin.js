import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

import { useLayoutEffect, useEffect } from "react";
import getTokenCookie from "../helpers/getTokenCookie";

import { useConnectMutation } from "../../features/user/usersApiSlice";

const useAutoLogin = () => {
  const dispatch = useDispatch();
  const token = getTokenCookie();

  const [connect] = useConnectMutation();

  useLayoutEffect(() => {
    console.log("GET USER");
    const verifyUser = async () => {
      const { data: user } = await connect();

      if (user) dispatch(setUser({ user }));
    };
    if (token) verifyUser();
  }, []);
};

export default useAutoLogin;
